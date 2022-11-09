import { variable1 as v1 } from "./file1.js";


console.log(v1);



// import a default variable

import variable2 from "./file1.js";

console.log(variable2);



// import all variables as a name

import * as f2 from "./file2.js";


console.log(f2.variable3);
console.log(f2.variable4);