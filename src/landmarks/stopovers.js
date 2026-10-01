/** Eight paper dioramas; local origin is the ground and metadata bounds are measured. */
export function createStopoverLandmarks(THREE) {
  const palette = {cream:0xf2e7d3,sand:0xe8cb93,coral:0xd87967,red:0xa65d50,
    teal:0x5dada9,water:0x8dc9c2,sage:0x94ad82,leaf:0x6f9477,roof:0x52646a,
    stone:0xb0b5ad,dark:0x475953,wood:0xb88d66,gold:0xe5ba72};
  const materials = Object.fromEntries(Object.entries(palette).map(([key,color]) =>
    [key,new THREE.MeshStandardMaterial({color,roughness:1,metalness:0,flatShading:true})]));
  const boxGeometry = new THREE.BoxGeometry(1,1,1);
  const foliageGeometry = new THREE.IcosahedronGeometry(1,0);
  const assets = [];
  function mesh(group,geometry,material,x=0,y=0,z=0) {
    const m = new THREE.Mesh(geometry,materials[material]);m.position.set(x,y,z);
    m.castShadow=true;m.receiveShadow=true;group.add(m);return m;
  }
  function box(g,w,h,d,x,y,z,color='cream') {
    const m=mesh(g,boxGeometry,color,x,y,z);m.scale.set(w,h,d);return m;
  }
  function rod(g,a,b,r=.012,color='wood',segments=5) {
    const va=new THREE.Vector3(...a),vb=new THREE.Vector3(...b),delta=vb.clone().sub(va);
    const m=mesh(g,new THREE.CylinderGeometry(r,r,delta.length(),segments),color);
    m.position.copy(va.clone().add(vb).multiplyScalar(.5));
    m.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),delta.normalize());return m;
  }
  function poly(g,r,x,y,z,color='sage',scale=[1,1,1]) {
    const m=mesh(g,foliageGeometry,color,x,y,z);m.scale.set(r*scale[0],r*scale[1],r*scale[2]);
    m.rotation.set(.2,x*3,z*2);return m;
  }
  function tree(g,x,z,h=.29) {
    rod(g,[x,.045,z],[x,h*.75,z],.018,'wood');
    poly(g,h*.31,x,h*.82,z,'sage',[1,1.1,1]);
    poly(g,h*.23,x-.035,h*.67,z+.025,'leaf');
    poly(g,h*.22,x+.045,h*.72,z-.025,'sage');
  }
  function base(g,w=.9,d=.65,color='cream') {
    const s=new THREE.Shape(),c=.055;
    s.moveTo(-w/2+c,-d/2);s.lineTo(w/2-c,-d/2);s.lineTo(w/2,-d/2+c);
    s.lineTo(w/2,d/2-c);s.lineTo(w/2-c,d/2);s.lineTo(-w/2+c,d/2);
    s.lineTo(-w/2,d/2-c);s.lineTo(-w/2,-d/2+c);s.closePath();
    const geo=new THREE.ExtrudeGeometry(s,{depth:.045,bevelEnabled:false,steps:1});geo.rotateX(-Math.PI/2);
    mesh(g,geo,color);
  }
  function paving(g,w,d,x=0,z=0) {
    box(g,w,.012,d,x,.051,z,'stone');
    for(let i=0;i<4;i++)for(let j=0;j<3;j++)
      box(g,w/4-.01,.008,d/3-.012,x-w/2+(i+.5)*w/4,.061,z-d/2+(j+.5)*d/3,'cream');
  }
  function roof(g,w,d,x,y,z,color='roof',rise=.10) {
    // Closed concave cross-section: the underside and curled eaves are real faces.
    const s=new THREE.Shape();const t=.016;
    const points=[[-d/2,rise*.23],[-d*.40,0],[0,rise],[d*.40,0],[d/2,rise*.23],
      [d/2,rise*.23-t],[d*.40,-t],[0,rise-t],[-d*.40,-t],[-d/2,rise*.23-t]];
    points.forEach(([u,v],i)=>i?s.lineTo(u,v):s.moveTo(u,v));s.closePath();
    const geo=new THREE.ExtrudeGeometry(s,{depth:w,bevelEnabled:false,steps:1});
    geo.rotateY(Math.PI/2);geo.translate(-w/2,0,0);mesh(g,geo,color,x,y,z);
    rod(g,[x-w/2,y+rise+.009,z],[x+w/2,y+rise+.009,z],.013,color);
    // Sparse raised folds catch light without a texture map.
    for(let i=1;i<6;i++)for(const side of [-1,1]){
      const xx=x-w/2+i*w/6;
      rod(g,[xx,y+rise+.006,z],[xx,y+.004,z+side*d*.39],.0055,color,4);
    }
  }
  function house(g,x,z,w=.23,d=.23,h=.24,awning=null) {
    box(g,w,h,d,x,.063+h/2,z,'stone');
    box(g,w+.015,.027,d+.015,x,.073,z,'cream');
    roof(g,w+.047,d+.045,x,h+.077,z,'roof',.071);
    const front=z+d/2+.006;
    box(g,.069,h*.6,.012,x,.075+h*.30,front,'wood');
    for(const side of [-1,1]){
      box(g,.054,.075,.012,x+side*w*.30,h*.66+.069,front,'gold');
      box(g,.006,.077,.006,x+side*w*.30,h*.66+.069,front+.007,'wood');
    }
    if(awning){
      const canopy=box(g,w-.03,.018,.080,x,h*.5+.072,front+.030,awning);canopy.rotation.x=.15;
      box(g,w-.025,.043,.013,x,h*.5+.05,front+.073,awning);
    }
  }
  function lantern(g,x,y,z,color='coral') {
    const l=mesh(g,new THREE.SphereGeometry(.024,6,4),color,x,y,z);l.scale.y=1.18;
    box(g,.017,.009,.017,x,y+.030,z,'gold');rod(g,[x,y-.031,z],[x,y-.051,z],.004,'gold',4);
  }
  function lanternString(g,x1,x2,y,z,count=7) {
    rod(g,[x1,y,z],[x2,y,z],.005,'wood',4);
    for(let i=0;i<count;i++)lantern(g,x1+(x2-x1)*(i+.5)/count,y-.035,z,i%3===0?'gold':'coral');
  }
  function rail(g,x1,x2,y,z,color='cream') {
    rod(g,[x1,y+.07,z],[x2,y+.07,z],.010,color,4);
    const n=Math.ceil((x2-x1)/.10);
    for(let i=0;i<=n;i++)box(g,.021,.092,.024,x1+(x2-x1)*i/n,y+.039,z,color);
  }
  function water(g,w,d,x=0,z=.19) {
    box(g,w,.026,d,x,.053,z,'teal');
    // Each triangle is explicitly upward-facing and offset from the solid water slab.
    const verts=[],colors=[];const nx=8,nz=3;
    for(let i=0;i<nx;i++)for(let j=0;j<nz;j++){
      const xa=x-w/2+i*w/nx,xb=xa+w/nx,za=z-d/2+j*d/nz,zb=za+d/nz;
      for(const tri of [[[xa,za],[xa,zb],[xb,za]],[[xb,za],[xa,zb],[xb,zb]]]){
        const c=new THREE.Color((i+j)%3===0?palette.water:palette.teal);
        for(const [xx,zz]of tri){verts.push(xx,.068,zz);colors.push(c.r,c.g,c.b);}
      }
    }
    const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(verts,3));
    geo.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));geo.computeVertexNormals();
    const m=new THREE.Mesh(geo,new THREE.MeshStandardMaterial({vertexColors:true,roughness:1,flatShading:true}));
    m.receiveShadow=true;g.add(m);
  }
  function gateway(g,{width=.75,y=.40,color='red',depth=.15,lanterns=false}) {
    const xs=[-width*.46,-width*.23,width*.23,width*.46];
    for(const x of xs){box(g,.072,.071,.109,x,.10,0,'stone');box(g,.044,y-.09,.055,x,(y+.09)/2,0,color);}
    box(g,width*.49,.055,.06,0,y-.034,0,color);roof(g,width*.61,depth+.11,0,y,0,'roof',.075);
    for(const side of [-1,1]){
      const xx=side*width*.345;box(g,width*.255,.045,.055,xx,y-.115,0,color);
      roof(g,width*.32,depth,xx,y-.09,0,'roof',.056);
    }
    box(g,width*.34,.049,.010,0,y-.032,.037,'dark');
    box(g,width*.27,.007,.006,0,y-.033,.044,'gold');
    if(lanterns)for(const x of [-width*.17,width*.17])lantern(g,x,y-.11,.035);
  }
  function create(id,city,build) {
    const g=new THREE.Group();g.name=id;build(g);g.updateMatrixWorld(true);
    const bounds=new THREE.Box3().setFromObject(g),center=bounds.getCenter(new THREE.Vector3());
    // Ground contact and horizontal centering are part of the exported contract.
    for(const child of g.children){child.position.x-=center.x;child.position.z-=center.z;child.position.y-=bounds.min.y;}
    g.updateMatrixWorld(true);
    // Bake local transforms and merge by material. All facets stay as real triangles,
    // while the scene receives about a dozen draw calls per miniature.
    const batches=new Map();
    g.traverse(o=>{
      if(!o.isMesh)return;
      const geo=o.geometry.index?o.geometry.toNonIndexed():o.geometry.clone();
      geo.applyMatrix4(o.matrixWorld);
      let batch=batches.get(o.material);
      if(!batch){batch={positions:[],normals:[],colors:[],count:0};batches.set(o.material,batch);}
      batch.positions.push(geo.attributes.position.array);batch.normals.push(geo.attributes.normal.array);
      if(geo.attributes.color)batch.colors.push(geo.attributes.color.array);
      batch.count+=geo.attributes.position.count;geo.dispose();
    });
    g.clear();
    for(const [material,batch]of batches){
      const geo=new THREE.BufferGeometry();
      for(const [attribute,chunks]of [['position',batch.positions],['normal',batch.normals],['color',batch.colors]]){
        if(!chunks.length)continue;const array=new Float32Array(batch.count*3);let offset=0;
        for(const chunk of chunks){array.set(chunk,offset);offset+=chunk.length;}
        geo.setAttribute(attribute,new THREE.BufferAttribute(array,3));
      }
      geo.computeBoundingBox();geo.computeBoundingSphere();
      const m=new THREE.Mesh(geo,material);m.castShadow=true;m.receiveShadow=true;g.add(m);
    }
    g.updateMatrixWorld(true);
    const bakedBounds=new THREE.Box3().setFromObject(g),bakedCenter=bakedBounds.getCenter(new THREE.Vector3());
    for(const m of g.children)m.position.set(-bakedCenter.x,-bakedBounds.min.y,-bakedCenter.z);
    g.updateMatrixWorld(true);const size=new THREE.Box3().setFromObject(g).getSize(new THREE.Vector3());
    const displayNames = {
      lyg_democracy_road:'民主路老街', lyg_yanhe_lane:'盐河巷',
      rz_wanpingkou:'万平口', rz_dongyi_town:'东夷小镇',
      ha_li_canal:'里运河文化长廊', ha_yumatou:'御码头',
      ha_hexia_town:'河下古镇', wuhu_riverside:'江滨码头',
    };
    const asset={id,name:displayNames[id],city,group:g,footprint:[size.x,size.z],height:size.y};
    g.userData.landmarkId=id;g.userData.city=city;assets.push(asset);
  }

  create('lyg_democracy_road','lianyungang',g=>{
    base(g,.9,.59);paving(g,.75,.39,0,.035);
    // Hollow framed iron columns and a polygonal arch reproduce the distinctive gate silhouette.
    for(const x of [-.31,.31]){
      box(g,.091,.065,.104,x,.104,0,'wood');
      for(const dx of [-.031,.031])for(const z of [-.031,.031])rod(g,[x+dx,.13,z],[x+dx,.50,z],.008,'dark');
      for(const y of [.15,.26,.38,.49])box(g,.079,.011,.079,x,y,0,'gold');
      for(const z of [-.036,.036]){
        rod(g,[x-.030,.26,z],[x+.030,.38,z],.005,'dark');
        rod(g,[x+.030,.26,z],[x-.030,.38,z],.005,'dark');
      }
    }
    box(g,.70,.075,.035,0,.409,0,'dark');box(g,.58,.009,.007,0,.407,.022,'gold');
    const n=12,r=.29;
    for(let i=0;i<n;i++){
      const a=Math.PI*i/n,b=Math.PI*(i+1)/n;
      rod(g,[Math.cos(a)*r,.449+Math.sin(a)*.20,0],[Math.cos(b)*r,.449+Math.sin(b)*.20,0],.009,'gold');
      if(i>0)rod(g,[Math.cos(a)*r,.447+Math.sin(a)*.20,0],[Math.cos(a)*r*.9,.448,0],.005,'dark');
    }
    poly(g,.033,0,.675,0,'gold',[.8,1.2,.8]);
    tree(g,-.38,.17,.22);tree(g,.38,.16,.19);
  });

  create('lyg_yanhe_lane','lianyungang',g=>{
    base(g,.99,.68);paving(g,.87,.53);
    house(g,-.28,-.16,.25,.22,.29,'coral');house(g,0,-.16,.23,.22,.26,'teal');house(g,.27,-.16,.25,.22,.30,'sand');
    for(const x of [-.41,.41])rod(g,[x,.065,.06],[x,.47,.06],.012,'wood');
    lanternString(g,-.41,.41,.46,.06,9);lanternString(g,-.35,.35,.385,.20,8);
    for(const x of [-.23,.23]){
      box(g,.115,.018,.09,x,.137,.20,'wood');rod(g,[x,.064,.20],[x,.129,.20],.012,'wood');
      for(const dx of [-.077,.077])box(g,.044,.061,.052,x+dx,.096,.20,'coral');
    }
    tree(g,-.41,-.17,.28);tree(g,.41,-.18,.23);
  });

  create('rz_wanpingkou','rizhao',g=>{
    base(g,1.02,.73,'sand');water(g,.94,.27,0,.20);
    // A pale broken shoreline, open beach and sunshades; no unverified monument.
    for(let i=0;i<9;i++){
      const m=poly(g,.069,-.43+i*.106,.070,.055+(i%3)*.009,'cream',[1.1,.18,.6]);m.rotation.y=i*.7;
    }
    box(g,.77,.033,.113,0,.09,-.22,'wood');
    for(let i=0;i<10;i++)box(g,.005,.006,.105,-.35+i*.077,.110,-.22,'sand');
    for(const x of [-.30,.30])rod(g,[x,.11,-.22],[x,.37,-.22],.013,'wood');
    for(let i=0;i<6;i++)box(g,.105,.018,.18,-.265+i*.106,.375,-.22,i%2?'cream':'teal');
    for(const x of [-.15,.12]){
      box(g,.13,.021,.059,x,.14,-.22,'cream');
      const b=box(g,.057,.072,.059,x-.066,.17,-.22,'cream');b.rotation.z=-.25;
      for(const dx of [-.043,.043])box(g,.012,.039,.035,x+dx,.122,-.22,'wood');
    }
    tree(g,.43,-.20,.23);poly(g,.060,-.44,.084,-.07,'stone',[1,.75,.9]);
  });

  create('rz_dongyi_town','rizhao',g=>{
    base(g,.97,.62);paving(g,.84,.47,0,.02);gateway(g,{width:.79,y:.45,color:'red',depth:.15});
    tree(g,-.40,-.12,.27);tree(g,.40,-.13,.24);
    for(const x of [-.24,.24]){box(g,.11,.025,.028,x,.092,.22,'wood');box(g,.015,.033,.021,x-.04,.065,.22,'wood');box(g,.015,.033,.021,x+.04,.065,.22,'wood');}
  });

  create('ha_li_canal','huaian',g=>{
    base(g,.85,.70);water(g,.77,.21,0,.225);
    box(g,.79,.12,.077,0,.113,.086,'stone');rail(g,-.36,.36,.176,.087);
    // Nine stories and a long finial distinguish Guoshi Tower from the existing five-story Zhongjiang Tower.
    const z=-.105;
    for(let i=0;i<9;i++){
      const r=.122-i*.006,y=.09+i*.078;
      mesh(g,new THREE.CylinderGeometry(r*.87,r,.058,8),i%2?'sand':'cream',0,y+.030,z);
      mesh(g,new THREE.CylinderGeometry(r*.84,r*1.22,.022,8),'roof',0,y+.065,z);
      mesh(g,new THREE.CylinderGeometry(r*1.22,r*1.20,.013,8),'wood',0,y+.051,z);
      for(let k=0;k<8;k++){
        const a=(k+.5)*Math.PI/4;
        const win=box(g,.021,.032,.009,Math.sin(a)*r*.95,y+.027,z+Math.cos(a)*r*.95,'gold');win.rotation.y=a;
      }
    }
    mesh(g,new THREE.ConeGeometry(.092,.103,8),'roof',0,.821,z);
    rod(g,[0,.87,z],[0,.979,z],.012,'gold',6);poly(g,.024,0,.936,z,'gold');
    tree(g,-.27,-.16,.29);tree(g,.28,-.13,.23);
  });

  create('ha_yumatou','huaian',g=>{
    base(g,1.02,.68);paving(g,.90,.52,0,.016);gateway(g,{width:.86,y:.43,color:'red',depth:.17,lanterns:true});
    for(const side of [-1,1]){
      house(g,side*.36,-.22,.22,.13,.20,side===1?'teal':'sand');
      tree(g,side*.44,.16,.20);
    }
    lanternString(g,-.28,.28,.31,-.20,6);
  });

  create('ha_hexia_town','huaian',g=>{
    base(g,.85,.70);paving(g,.20,.59,0,.01);
    for(const side of [-1,1]){
      const row=new THREE.Group();g.add(row);
      for(let i=0;i<2;i++)house(row,side*.26,-.16+i*.29,.22,.26,.22,i%2?'sand':'coral');
      rod(g,[side*.125,.062,.20],[side*.125,.40,.20],.014,'wood');
    }
    rod(g,[-.145,.365,.20],[0,.415,.20],.012,'wood');rod(g,[0,.415,.20],[.145,.365,.20],.012,'wood');
    for(let i=0;i<13;i++){
      const a=i*Math.PI/12,x=.151*Math.cos(a),y=.27+.145*Math.sin(a);
      poly(g,.048,x,y,.205,'leaf',[1,1,.75]);
      if(i%2===0)poly(g,.022,x+.006,y+.015,.247,'coral');
    }
    for(const side of [-1,1])for(let i=0;i<3;i++){
      poly(g,.040,side*.142,.125+i*.075,.215,'sage');if(i%2)poly(g,.018,side*.159,.17+i*.066,.242,'coral');
    }
  });

  create('wuhu_riverside','wuhu',g=>{
    base(g,1.00,.74);water(g,.92,.34,0,.16);
    box(g,.91,.065,.22,0,.111,-.14,'stone');
    for(let i=0;i<4;i++)box(g,.44,.023,.039,-.19,.080+i*.023,-.007-i*.033,'cream');
    rail(g,-.43,-.045,.152,-.04,'wood');rail(g,.20,.44,.152,-.04,'wood');
    // Pier is a compact interpretive riverfront landmark, not a surveyed historical building.
    box(g,.19,.025,.32,.105,.166,.076,'wood');
    for(let i=0;i<7;i++)box(g,.175,.007,.007,.105,.183,-.054+i*.048,'sand');
    for(const x of [.033,.177])for(const z of [-.01,.18])rod(g,[x,.070,z],[x,.171,z],.013,'wood');
    for(const x of [.21,.38])for(const z of [-.26,-.12])rod(g,[x,.148,z],[x,.368,z],.013,'wood');
    roof(g,.26,.23,.295,.378,-.19,'roof',.073);
    box(g,.235,.026,.20,.295,.16,-.19,'cream');
    // A six-sided shallow hull, raised cabin and open bow echo the river barge visible in the source photo.
    const hull=new THREE.CylinderGeometry(.09,.065,.044,6);hull.rotateY(Math.PI/6);
    const boat=mesh(g,hull,'coral',-.235,.099,.196);boat.scale.set(2.35,1,.67);
    box(g,.255,.051,.078,-.245,.134,.196,'cream');box(g,.28,.015,.090,-.245,.168,.196,'sand');
    for(let i=0;i<3;i++)box(g,.055,.029,.008,-.324+i*.075,.136,.241,'dark');
    tree(g,-.38,-.19,.28);
  });
  return assets;
}
