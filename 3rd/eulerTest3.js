var number = 600851475143;

for (var index = 2; index < number ** 0.5; index++) {
    if( number % index === 0) { number /= index}
}
console.log(number);
