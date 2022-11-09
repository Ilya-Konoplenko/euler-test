let sum = 0;
function main (number ,nNumber) {
    let accum = nNumber;
    nNumber = nNumber + number;
    if(nNumber< 4000000){
    nNumber = main(accum, nNumber);
    if (accum % 2 ) { 
    sum += accum ; 
    } 
    } 
    return sum
}  

console.log(main(0,1))