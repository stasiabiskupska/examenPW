let arr = [1,2,3,4,5];

//for
for (let i = 0; i < arr.length; i++) {
    console.log('from FOR loop ', arr[i]);    
}

//while
let w = 0;
while(w < arr.length) {
    console.log('from WHILE loop ', arr[w]);
    w++;
}

//do while
let dw = 0;
do {
    console.log('from DO WHILE loop ', arr[dw]);
    dw++;
} while (dw < arr.length);

//for of
for (const ff of arr) {
    console.log('from FOR OF loop ', ff);
}

//forEach
arr.forEach(number => {
    console.log('from FOREACH loop ', number);
});

//map
arr.map(nmb => console.log('from MAP ', nmb));