const userInfo = require('./information');
const  introducing = (`Hi, I'm ${userInfo.name} from ${userInfo.place} !`);
const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hi, I'm ${userInfo.name} from ${userInfo.place} !`,
    e : "oO",
    T : "U "
}));