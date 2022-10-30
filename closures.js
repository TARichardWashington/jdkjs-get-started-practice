function range(start, end) {
    if(typeof(start) === 'number' && typeof(end) === 'number') {
        var result = [];
        for(let i = start; i <= end; i ++) {
            result.push(i);
        }
        return result;
    }

}

var rangeArray = range(3, 3); // [3]
console.log(rangeArray);

var rangeArray = range(3, 8); // [3, 4, 5, 6, 7, 8]
console.log(rangeArray);