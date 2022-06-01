const os = require("os");

// All os information
// console.log(os);

// Detailed Information about the current user
// console.log(os.userInfo());

// get the hostname of the current user
// console.log(os.hostname());

// System uptime in seconds
// console.log(os.uptime());

// Customized info from the pc in an object
const currentOS = {
  name: os.type(),
  release: os.release(),
  totMem: os.totalmem(),
  freeMem: os.freemem(),
  hostname: os.hostname(),
  uptime: os.uptime(),
  userInfo: os.userInfo(),
};

console.log(currentOS);
