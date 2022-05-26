let badArr = [{
    x: 1,
    y: 2
}, {
    x: 3,
    y: 4
}, {
    x: null,
    y: 4
}, {
    x: 3,
    y: undefined
}];

let checkedArr = [];
badArr.forEach(arrElement => {
    if(arrElement.x !== null && arrElement.x !== undefined  && arrElement.y !== null && arrElement.y !== undefined) {
        checkedArr.push(arrElement);
    }
});

console.log('массив должен содержать в себе объекты с правильными координатами', checkedArr);