var isEnougnToBeatMF = function (parsecs) {
    return parsecs < 12;
};
var distance = 11;
console.log("Is " + distance + " persecs enough to beat Millennium falcon? " + (isEnougnToBeatMF(distance) ? 'YES' : 'NO'));
var call = function (name) { return console.log("Do you copy, " + name + "?"); };
call('R2');
function inc(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
;
console.log("inc (5,1) = " + inc(5, 1));
console.log("inc (5) = " + inc(5));