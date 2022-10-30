function range(start, end) {
    if(typeof(start) === 'number' && typeof(end) === 'number') {
        var result = [];
        
        for(let i = start; i <= end; i ++) {
            result.push(i);
        }
        return result;
    } else {
        return function(endNum) {
            var result = [];
            for(let i = start; i <= endNum; i ++) {
                result.push(i);
            }
    
            return result;
        }
    }

}

var rangeArray = range(3, 3); // [3]
console.log(rangeArray);

var rangeArray = range(3, 8); // [3, 4, 5, 6, 7, 8]
console.log(rangeArray);

var rangeArray = range(3, 0); // []
console.log(rangeArray);

var start3 = range(3);
var rangeArray = start3(3); // [3]
console.log(rangeArray);

var rangeArray = start3(8); // [3, 4, 5, 6, 7, 8]
console.log(rangeArray);

var rangeArray = start3(0); // []
console.log(rangeArray);

var start4 = range(4);
var rangeArray = start4(6); // [4, 5, 6]
console.log(rangeArray);