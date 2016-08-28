var exampleArray = [-2, 2, -5, 10, 5, 4, -10, 0];

var process = function (exampleArray) {
    var exampleArrayResult = [];
    for (var indexOuter = 0, exampleArrayLength = exampleArray.length; indexOuter < exampleArrayLength; ++indexOuter) {
        for (var indexInner = indexOuter; indexInner < exampleArrayLength; ++indexInner) {
            if (exampleArray[indexOuter] + exampleArray[indexInner] === 0) {
                exampleArrayResult.push(indexOuter + ',' + indexInner);
            }
        }
    }
    return exampleArrayResult;
}
console.log('NOT REDUCE: ', process(exampleArray));

process = exampleArray.reduce(function(resultTotal, itemOuter, indexOuter) {
    return exampleArray.slice(indexOuter).reduce(function(resultTotal, itemInner, indexInner) {
        return itemOuter + itemInner === 0
        ? resultTotal.concat(indexOuter + ',' + (indexOuter + indexInner))
        : resultTotal;
    }, resultTotal);
}, []);
console.log('USE REDUCE: ', process);

console.log('USE REDUCE: ', exampleArray.reduce(function(resultTotal, itemOuter, indexOuter) {
    return exampleArray.slice(indexOuter).reduce(function(resultTotal, itemInner, indexInner) {
        return itemOuter + itemInner === 0
        ? resultTotal.concat(indexOuter + ',' + (indexOuter + indexInner))
        : resultTotal;
    }, resultTotal);
}, []));