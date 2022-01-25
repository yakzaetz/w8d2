// make method
// invoke method
Array.prototype.uniq = function() {
    const result = [];

    this.forEach (function(el) {
        if (result.includes(el)) {
            return;
        } else {
            result.push(el);
        }
    })
    return result;
}

// let arr = [1,2,2,3,3,3];
// console.log(arr.uniq());

Array.prototype.twoSum = function() {
    const result = [];
    const arr = this; // locks in scope to arr
    arr.forEach (function(el1, idx1) {
        // function(el1, idx1) is a CB and scope becomes global
        // fat arrow also locks in scope
        arr.forEach (function(el2, idx2) {
            
            if (idx2 > idx1 && el1 + el2 === 0) {
                result.push([idx1, idx2]);
            }
        })
    })

    return result;
}


Array.prototype.transpose = function() {
    const width = this.length; //2 
    const height = this[0].length; //3
    const grid = [...Array(height)].map(function(innerArray)  { 
        return Array(width).fill(0);
    }); 
    // const grid = new Array(height)
    let that = this;
    for (let i = 0; i < height; i++){
        for (let j = 0; j < width; j++) {
            grid[i][j] = that[j][i];
        }
    } 
    return grid;   
}

