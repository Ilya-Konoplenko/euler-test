let i = 0;
let accum = 0
while (i <= 1000 ) { 
  if ((i % 3 === 0 ) || (i % 5 === 0) ) { 
    accum += i;
  } 
  i++
}
console.log(accum)
