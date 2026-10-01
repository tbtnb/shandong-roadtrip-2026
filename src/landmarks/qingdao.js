/** Qingdao paper miniatures. Reference mapping: design/model-reference/qingdao/README.md. */
export function createQingdaoLandmarks(THREE) {
  const colors = { cream:'#fff1d3', paper:'#e6d3ad', white:'#fff9e9', roof:'#bd6344', coral:'#ee7950', water:'#439ba7', shallow:'#91c7bf', navy:'#274b59', glass:'#a5cad0', leaf:'#78986c', lightLeaf:'#a8b776', pine:'#47796d', trunk:'#7e7055', rock:'#b7b39b', lightRock:'#ddd1b3', sand:'#e9d9ad', gold:'#b49155' };
  const M = Object.fromEntries(Object.entries(colors).map(([key,color]) => [key,new THREE.MeshStandardMaterial({color,roughness:.95,flatShading:true})]));
  const assets = [];
  const mesh = (g,geo,m,x=0,y=0,z=0) => { const o=new THREE.Mesh(geo,M[m]); o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;g.add(o);return o; };
  const box = (g,w,h,d,m,x=0,y=h/2,z=0) => mesh(g,new THREE.BoxGeometry(w,h,d),m,x,y,z);
  const cyl = (g,rt,rb,h,m,x=0,y=h/2,z=0,n=8) => mesh(g,new THREE.CylinderGeometry(rt,rb,h,n),m,x,y,z);
  const rock = (g,x,y,z,w,h,d,m='rock') => {const o=mesh(g,new THREE.IcosahedronGeometry(1,0),m,x,y,z);o.scale.set(w,h,d);return o;};
  function solidProfile(g, points, depth, m, x=0,y=0,z=0) {
    const s=new THREE.Shape();points.forEach(([a,b],i)=>i?s.lineTo(a,b):s.moveTo(a,b));s.closePath();
    const geo=new THREE.ExtrudeGeometry(s,{depth,bevelEnabled:false,curveSegments:1});geo.translate(0,0,-depth/2);return mesh(g,geo,m,x,y,z);
  }
  function roof(g,w,h,d,x,y,z,m='roof') {return solidProfile(g,[[-w/2,0],[w/2,0],[0,h]],d,m,x,y,z);}
  function tree(g,x,z,size=.1,ground=.045,pine=false) {
    cyl(g,.011,.016,size*.78,'trunk',x,ground+size*.39,z,5);
    if(pine){cyl(g,0,size*.62,size*.85,'pine',x,ground+size*.88,z,6);cyl(g,0,size*.45,size*.7,'leaf',x,ground+size*1.18,z,6);}
    else {rock(g,x,ground+size,z,size*.63,size*.61,size*.55,'leaf');rock(g,x+size*.3,ground+size*.92,z+size*.1,size*.38,size*.4,size*.4,'lightLeaf');}
  }
  function base(g,w=.88,d=.62,m='paper') {const o=cyl(g,1,1,.04,m,0,.02,0,12);o.scale.set(w/2,1,d/2);return o;}
  function windows(g,x,y,z,w,h,cols=3,rows=2) {
    for(let r=0;r<rows;r++)for(let c=0;c<cols;c++) {
      const px=x+(c-(cols-1)/2)*w/cols, py=y+(r-(rows-1)/2)*h/rows;
      box(g,w/cols*.5,h/rows*.56,.009,'navy',px,py,z);
      box(g,.007,h/rows*.57,.012,'cream',px,py,z+.003);
    }
  }
  function house(g,x,z,w=.2,d=.19,h=.25,y=.04,trim='roof') {
    box(g,w,h,d,'cream',x,y+h/2,z);roof(g,w+.028,.083,d+.025,x,y+h,z,trim);
    windows(g,x,y+h*.55,z+d/2+.005,w*.83,h*.68,2,2);
    box(g,w+.008,.015,d+.008,'paper',x,y+.045,z);
  }
  function stair(g,x,z,y,w,steps=4,run=.027,rise=.025) {
    for(let i=0;i<steps;i++)box(g,w,rise*(i+1),run,'paper',x,y+rise*(i+1)/2,z-i*run);
  }
  function finish(id,name,g) {
    g.updateMatrixWorld(true);let b=new THREE.Box3().setFromObject(g);const s=new THREE.Vector3();b.getSize(s);
    const scale=Math.min(.96/Math.max(s.x,s.z),.94/s.y);
    for(const child of g.children){child.position.multiplyScalar(scale);child.scale.multiplyScalar(scale);}
    g.updateMatrixWorld(true);b=new THREE.Box3().setFromObject(g);
    const center=new THREE.Vector3();b.getCenter(center);
    for(const child of g.children)child.position.sub(new THREE.Vector3(center.x,b.min.y,center.z));
    g.updateMatrixWorld(true);
    b=new THREE.Box3().setFromObject(g);b.getSize(s);g.name=id;
    g.userData={landmarkId:id,city:'qingdao',referenceBoard:'design/model-reference/qingdao/qingdao-low-poly-board.png'};
    assets.push({id,name,city:'qingdao',group:g,footprint:[s.x,s.z],height:s.y});
  }

  // Zhongshan Road: compact historic commercial block, stepped façades and pitched roofs.
  {
    const g=new THREE.Group();base(g,.84,.63);
    house(g,-.21,-.075,.22,.24,.36);house(g,.02,-.075,.2,.24,.32);house(g,.225,-.075,.2,.24,.39);
    for(const [x,y] of [[-.21,.24],[.02,.22],[.225,.25]]){
      const aw=box(g,.18,.025,.095,x===.02?'pine':'coral',x,.135,.10);aw.rotation.x=.18;
      box(g,.052,.09,.015,'navy',x,.086,.063);
      cyl(g,.012,.013,.08,'trunk',x-.075,.08,.17,5);cyl(g,.035,.035,.012,'paper',x-.075,.126,.17,8);
      box(g,.025,.046,.028,'paper',x+.032,y+.245,-.05);
    }
    tree(g,-.32,.2,.13);tree(g,.32,.19,.11);
    for(const x of [-.30,.29]){cyl(g,.006,.008,.2,'navy',x,.14,.255,5);rock(g,x,.245,.255,.017,.025,.017,'gold');}
    finish('qd_zhongshan_road','中山路',g);
  }

  // Badaguan uses the Huashi Tower silhouette visible in the real-photo record.
  {
    const g=new THREE.Group();base(g,.78,.63);house(g,.08,0,.32,.27,.37);
    cyl(g,.11,.125,.51,'lightRock',-.145,.295,.015,10);
    cyl(g,.127,.127,.037,'paper',-.145,.56,.015,10);
    for(let i=0;i<10;i++){const a=i*Math.PI/5;cyl(g,.017,.019,.065,'lightRock',-.145+Math.cos(a)*.112,.607,.015+Math.sin(a)*.112,4);}
    for(const y of [.2,.35,.49])for(let i=0;i<5;i++){const a=Math.PI*.08+i*Math.PI/4;const o=box(g,.036,.074,.012,'navy',-.145+Math.cos(a)*.117,y,.015+Math.sin(a)*.117);o.rotation.y=Math.PI/2-a;}
    cyl(g,0,.075,.16,'pine',.15,.535,-.03,8);
    cyl(g,.006,.006,.09,'trunk',.15,.66,-.03,5);
    stair(g,.01,.215,.04,.145,4,.032,.026);
    for(const [x,z] of [[-.29,-.1],[.3,.1],[-.27,.22],[.27,-.2]])tree(g,x,z,.11);
    finish('qd_badaguan','八大关',g);
  }

  // Beach, stone seawall and cove; umbrellas/hut are thematic map-scale accessories.
  {
    const g=new THREE.Group();base(g,.91,.68,'sand');
    const sea=cyl(g,1,1,.018,'water',-.085,.052,.12,14);sea.scale.set(.32,1,.20);
    const shoal=cyl(g,1,1,.018,'shallow',-.08,.063,.125,14);shoal.scale.set(.27,1,.168);
    for(let i=0;i<7;i++)rock(g,-.36+i*.09,.089,-.01+Math.sin(i*.6)*.03,.064,.05,.055,i%2?'lightRock':'rock');
    box(g,.31,.065,.065,'lightRock',-.19,.077,-.15);
    house(g,.27,-.13,.11,.095,.19,.11);for(const x of [.23,.31])box(g,.012,.09,.012,'trunk',x,.088,-.13);
    for(const [x,z] of [[-.27,-.24],[-.06,-.23],[.14,.16]]){
      cyl(g,.005,.005,.13,'trunk',x,.12,z,5);cyl(g,0,.07,.035,'cream',x,.204,z,8);box(g,.045,.016,.083,'paper',x,.064,z+.02);
    }
    cyl(g,.004,.004,.14,'trunk',.28,.365,-.11,5);solidProfile(g,[[0,0],[.062,-.018],[0,-.035]],.009,'coral',.28,.425,-.11);
    finish('qd_second_beach','第二海水浴场',g);
  }

  // Three faceted white wave-roof bays translate the actual Olympic Sailing venue.
  {
    const g=new THREE.Group();base(g,.94,.69,'water');
    box(g,.8,.06,.18,'paper',0,.074,-.10);
    box(g,.63,.11,.135,'glass',.03,.154,-.105);
    for(let k=0;k<3;k++){
      const pts=[];for(let i=0;i<=6;i++){const x=-.115+i*.0383;pts.push([x,.033+Math.sin(i/6*Math.PI)*.15]);}
      for(let i=6;i>=0;i--){const x=-.115+i*.0383;pts.push([x,.020+Math.sin(i/6*Math.PI)*.15]);}
      solidProfile(g,pts,.158,'white',-.21+k*.235,.215,-.105);
    }
    for(let i=0;i<8;i++)box(g,.008,.12,.012,'navy',-.28+i*.088,.169,-.032);
    box(g,.44,.026,.065,'trunk',-.12,.082,.135);box(g,.035,.023,.18,'trunk',-.29,.08,.21);
    const boat=new THREE.Group();g.add(boat);boat.position.set(.17,.062,.215);
    const hull=cyl(boat,.09,.065,.07,'white',0,.055,0,6);hull.scale.set(1.55,1,.42);
    box(boat,.19,.018,.045,'paper',0,.095,0);cyl(boat,.005,.006,.42,'trunk',0,.297,0,5);
    solidProfile(boat,[[.013,0],[.013,.36],[.135,.025]],.008,'white',0,.117,0);
    solidProfile(boat,[[-.014,0],[-.014,.29],[-.12,.012]],.008,'cream',0,.117,0);
    for(const x of [-.39,.39]){cyl(g,.004,.004,.26,'trunk',x,.247,-.16,5);solidProfile(g,[[0,0],[.04,-.01],[0,-.028]],.008,'coral',x,.373,-.16);}
    finish('qd_olympic_sailing','奥帆中心',g);
  }

  // Fushan Bay skyline: compressed city blocks and a visibly curved shoreline.
  {
    const g=new THREE.Group();base(g,.97,.73,'water');
    const bank=cyl(g,1,1,.018,'sand',0,.052,-.145,14);bank.scale.set(.43,1,.15);
    const skyline=[[-.34,.25,.073],[-.245,.36,.078],[-.14,.43,.09],[-.03,.62,.087],[.075,.56,.085],[.18,.34,.08],[.28,.41,.075],[.36,.26,.06]];
    for(const [x,h,w]of skyline){box(g,w,h,.075,x===-.03?'glass':'cream',x,.062+h/2,-.17);roof(g,w,.026,.077,x,.062+h,-.17,'coral');
      for(let r=0;r<Math.floor(h/.057);r++)for(const dx of [-.019,.019])box(g,.01,.025,.006,'glass',x+dx,.099+r*.052,-.129);
    }
    for(let i=0;i<9;i++)tree(g,-.38+i*.094,-.045,.048,.055);
    for(let i=0;i<10;i++){const a=.25+i*.26;const x=Math.cos(a)*.38,z=.10+Math.sin(a)*.10;box(g,.039,.023,.027,'paper',x,.071,z);}
    const tiny=cyl(g,.035,.026,.035,'white',-.10,.092,.23,6);tiny.scale.set(1.5,1,.5);
    solidProfile(g,[[0,0],[0,.13],[.07,0]],.006,'white',-.10,.113,.23);
    finish('qd_fushan_bay','浮山湾',g);
  }

  // Red spherical observation room, glazed equatorial strip and radial white fins.
  {
    const g=new THREE.Group();base(g,.71,.63);
    for(const [x,z,w,h]of [[-.19,.12,.16,.12],[.22,.13,.14,.11],[-.2,-.18,.12,.12],[.19,-.19,.12,.16]])rock(g,x,h*.67,z,w,h,.13,'lightRock');
    cyl(g,.106,.133,.34,'lightRock',0,.27,0,12);cyl(g,.145,.145,.027,'cream',0,.451,0,12);
    for(let i=0;i<12;i++){const a=i*Math.PI/6;const fin=box(g,.018,.087,.046,'cream',Math.cos(a)*.134,.495,Math.sin(a)*.134);fin.rotation.y=-a+Math.PI/2;}
    const globe=mesh(g,new THREE.IcosahedronGeometry(.157,1),'coral',0,.657,0);globe.scale.y=.94;
    cyl(g,.151,.151,.047,'navy',0,.652,0,12);
    for(let i=0;i<12;i++){const a=i*Math.PI/6;const r=box(g,.007,.051,.013,'cream',Math.cos(a)*.151,.652,Math.sin(a)*.151);r.rotation.y=-a+Math.PI/2;}
    cyl(g,.004,.004,.075,'trunk',0,.838,0,5);
    for(const [x,z]of [[-.24,-.06],[.23,-.06],[-.28,.16],[.28,.16]])tree(g,x,z,.10,.06,true);
    stair(g,0,.28,.038,.15,6,.028,.026);
    windows(g,0,.275,.126,.12,.14,2,1);
    finish('qd_signal_hill','信号山',g);
  }

  // Open-column pavilion on faceted hill; the curved roof is a solid ring mesh.
  {
    const g=new THREE.Group();base(g,.75,.65);
    rock(g,0,.16,0,.26,.19,.22,'lightRock');rock(g,-.20,.12,.12,.13,.11,.12);rock(g,.22,.12,-.02,.13,.12,.13);
    cyl(g,.17,.19,.045,'paper',0,.335,0,8);
    for(let i=0;i<6;i++){const a=i*Math.PI/3;cyl(g,.011,.013,.20,'roof',Math.cos(a)*.115,.455,Math.sin(a)*.115,6);}
    cyl(g,.155,.155,.026,'cream',0,.563,0,6);
    // Closed polygonal roof with raised tips, a shallow lower tier and tall upper cone.
    cyl(g,.088,.205,.10,'pine',0,.625,0,6);cyl(g,.018,.087,.12,'pine',0,.735,0,6);
    for(let i=0;i<6;i++){const a=i*Math.PI/3;const tip=solidProfile(g,[[0,0],[.069,.033],[.061,.018],[0,-.012]],.016,'pine',Math.cos(a)*.174,.591,Math.sin(a)*.174);tip.rotation.y=-a;}
    cyl(g,.018,.024,.038,'gold',0,.814,0,6);
    stair(g,.01,.285,.04,.125,7,.024,.036);
    for(const [x,z]of [[-.29,-.09],[.26,-.11],[-.27,.17],[.28,.19]])tree(g,x,z,.11,.07,true);
    finish('qd_xiaoyu_hill','小鱼山',g);
  }

  // Granite peaks, forest and red-roof coastal settlement from the Laoshan photo.
  {
    const g=new THREE.Group();base(g,.88,.71,'water');
    rock(g,-.13,.23,-.085,.23,.26,.23,'lightRock');rock(g,.11,.29,-.12,.21,.34,.19);rock(g,-.29,.18,-.12,.12,.20,.14,'lightRock');rock(g,.28,.18,-.11,.13,.22,.13);
    const peak=rock(g,.06,.60,-.14,.10,.24,.095,'lightRock');peak.rotation.z=.12;
    rock(g,-.14,.45,-.11,.11,.18,.09,'lightRock');
    for(const [x,z,h]of [[-.26,-.22,.21],[-.2,.03,.2],[.25,-.21,.18],[.27,.09,.12],[0,-.28,.25],[-.32,-.05,.12]])tree(g,x,z,.075,h,true);
    for(const [x,z,y]of [[-.27,.045,.28],[-.15,.03,.43],[.12,.025,.39],[.285,.02,.27],[.32,.15,.10]])tree(g,x,z,.065,y,true);
    house(g,-.06,.08,.105,.09,.087,.20);house(g,.09,.085,.095,.085,.075,.13);house(g,.21,.085,.082,.072,.07,.09);
    for(const [x,z]of [[-.28,.20],[-.17,.24],[.28,.23]])rock(g,x,.07,z,.055,.06,.045,'lightRock');
    const cove=cyl(g,1,1,.012,'shallow',.03,.054,.235,10);cove.scale.set(.17,1,.065);
    finish('qd_laoshan','崂山',g);
  }

  // A sea tunnel and a ray motif: experience representation, not claimed façade accuracy.
  {
    const g=new THREE.Group();base(g,.78,.60);
    const arch=[];for(let i=0;i<=10;i++){const a=i/10*Math.PI;arch.push([Math.cos(a)*.28,Math.sin(a)*.27]);}
    arch.push([-.28,-.03],[.28,-.03]);
    solidProfile(g,arch,.26,'water',0,.085,0);
    const dark=[];for(let i=0;i<=10;i++){const a=i/10*Math.PI;dark.push([Math.cos(a)*.20,Math.sin(a)*.20]);}dark.push([-.20,0],[.20,0]);
    solidProfile(g,dark,.018,'navy',0,.087,.139);
    for(let i=0;i<9;i++){const a=i/8*Math.PI;const rib=box(g,.022,.063,.023,'cream',Math.cos(a)*.235,.085+Math.sin(a)*.232,.16);rib.rotation.z=a-Math.PI/2;}
    box(g,.08,.105,.02,'glass',0,.137,.16);stair(g,0,.275,.04,.30,3,.032,.014);
    for(const x of [-.23,.23])cyl(g,.010,.012,.29,'cream',x,.497,-.035,6);
    // Closed extruded wings preserve actual volume and outward faces.
    const ray=solidProfile(g,[[-.23,.04],[-.085,.018],[0,.08],[.085,.018],[.23,.04],[.14,-.035],[.05,-.025],[0,-.065],[-.05,-.025],[-.14,-.035]],.029,'water',0,.60,-.02);ray.rotation.z=-.10;
    rock(g,0,.576,.009,.058,.026,.052,'white');
    const tail=box(g,.012,.15,.012,'navy',-.025,.491,-.02);tail.rotation.z=-.28;
    tree(g,-.32,.12,.085);tree(g,.32,.10,.085);
    finish('qd_underwater','青岛海底世界',g);
  }

  // Fushan Alley / Minjiang Road: photographic tiled entrance, without invented paifang.
  {
    const g=new THREE.Group();base(g,.83,.65);
    for(const x of [-.265,.265]){box(g,.20,.30,.28,'cream',x,.195,-.015);roof(g,.22,.085,.30,x,.345,-.015);windows(g,x,.265,.13,.16,.085,2,1);}
    box(g,.66,.097,.15,'roof',0,.295,.025);roof(g,.73,.08,.21,0,.348,.025);
    box(g,.255,.047,.018,'navy',0,.30,.108);box(g,.68,.023,.028,'water',0,.239,.10);
    for(const x of [-.17,.17])box(g,.025,.17,.028,'coral',x,.143,.09);
    box(g,.245,.026,.38,'sand',0,.053,0);
    for(let i=0;i<5;i++){const z=.11-i*.067;cyl(g,.007,.007,.07,'trunk',-.09,.1,z,5);rock(g,-.09,.15,z,.021,.028,.021,'coral');}
    for(const x of [-.27,.27]){const aw=box(g,.19,.027,.09,'pine',x,.166,.163);aw.rotation.x=.14;box(g,.06,.10,.017,'navy',x,.10,.135);}
    tree(g,-.345,.22,.09);tree(g,.345,.22,.09);
    finish('qd_minjiang_road','闽江路餐饮街区',g);
  }

  // Yunxiao Road: a thematic seafood dining block; only meal imagery is sourced.
  {
    const g=new THREE.Group();base(g,.86,.64);house(g,0,-.085,.56,.25,.31);
    windows(g,0,.274,.044,.47,.087,4,1);
    for(const x of [-.18,0,.18]){const aw=box(g,.17,.023,.115,'coral',x,.174,.095);aw.rotation.x=.14;for(let i=0;i<3;i++){const stripe=box(g,.02,.025,.116,'cream',x-.055+i*.055,.176,.095);stripe.rotation.x=.14;}box(g,.093,.09,.016,'navy',x,.10,.045);}
    for(const x of [-.17,.17]){cyl(g,.034,.034,.012,'paper',x,.122,.21,8);cyl(g,.008,.010,.074,'trunk',x,.079,.21,5);for(const dx of [-.055,.055])box(g,.035,.06,.035,'trunk',x+dx,.075,.205);
      cyl(g,.025,.025,.006,'white',x,.132,.21,8);for(const dx of [-.01,.012])rock(g,x+dx,.139,.21,.008,.005,.007,'sand');
    }
    for(const x of [-.29,.29]){cyl(g,.005,.005,.095,'trunk',x,.176,.08,5);rock(g,x,.204,.08,.026,.034,.026,'coral');}
    // Raised shell-and-crab medallion translates the photographed seafood meal.
    rock(g,-.044,.381,.060,.035,.028,.012,'sand');rock(g,.045,.38,.06,.025,.018,.014,'coral');
    for(const x of [.013,.078]){const claw=box(g,.022,.01,.013,'coral',x,.395,.06);claw.rotation.z=x<.05?-.5:.5;}
    tree(g,-.34,-.20,.09);tree(g,.34,-.20,.09);
    finish('qd_yunxiao_road','云霄路餐饮街区',g);
  }
  return assets;
}
