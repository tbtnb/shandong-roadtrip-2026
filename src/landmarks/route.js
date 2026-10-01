// Shared centerline for the rendered road, car animation and clearance checks.
export const ROAD_POINTS=[[-2.29,.633,6.31],[-1.5,.633,5.97],[-.57,.633,5.2],[-.26,.633,4.58],[-.04,.633,3.83],[.23,.633,3.2],[.07,.633,2.57],[-.08,.633,1.84],[-.31,.633,1.19],[-.28,.633,.63],[.04,.633,-.03],[.21,.633,-.72],[.06,.633,-1.45],[.06,.633,-2.1],[.43,.66,-2.8],[.56,.87,-3.35],[.61,1.23,-3.99],[.98,1.235,-4.46],[1.43,1.235,-4.68]];
export const ROAD_HALF_WIDTH=.195;
export const CAR_HALF_WIDTH=.122;
export function createRouteCurve(THREE){return new THREE.CatmullRomCurve3(ROAD_POINTS.map(p=>new THREE.Vector3(...p)),false,'catmullrom',.38)}
