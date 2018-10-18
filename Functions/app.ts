let isEnougnToBeatMF = function(parsecs: number) : boolean{
    return parsecs < 12
}

let distance: number = 11

console.log(`Is ${distance} persecs enough to beat Millennium falcon? ${isEnougnToBeatMF(distance) ? 'YES':'NO'}`)


let call = (name: string) => console.log(`Do you copy, ${name}?`)
call('R2')

function inc (speed: number, inc: number = 1) : number {
    return speed + inc;
};

console.log(`inc (5,1) = ${inc(5,1)}`);
console.log(`inc (5) = ${inc(5)}`)