const arrayToSearchThrough = [];
for (let i = 1; i <= 1000; i++) {
    arrayToSearchThrough.push(i);
}

exports.linearSearch = function(valueToFind, arrayToSearchThrough) {
    // your code here
    let indexOfArr ;
    for(let i = 0; i < arrayToSearchThrough.length; i++){
        if(arrayToSearchThrough[i] === valueToFind){
            indexOfArr = i;
        }
    }
    console.log(indexOfArr)
    return indexOfArr;
};

exports.linearSearchGlobal = function(valueToFind, arrayToSearchThrough) {
    // your code here
    let indexOfArr = []
    for(let i = 0; i < arrayToSearchThrough.length; i++){
        if(arrayToSearchThrough[i] === valueToFind){
            indexOfArr.push(i);
        }
    }
    console.log(indexOfArr)
    return indexOfArr
};