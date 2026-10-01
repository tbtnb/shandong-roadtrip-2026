// The cloud sandbox does not expose network-interface enumeration. Vite only
// uses it to print a network URL; binding still uses the explicit --host value.
import os from 'node:os';
const original=os.networkInterfaces;
os.networkInterfaces=()=>{try{return original()}catch{return {}}};
