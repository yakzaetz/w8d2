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

    // let arr = this;
    // for(let i = 0; i < arr.length; i++) {
    //     for(let j = i + 1; j < arr.length; j++) {
    //         if (arr[i] + arr[j] === 0) {
    //             result.push([i, j]);
    //         }
    //     }
    // }
    return result;
}

// let arr2 = [1,-1, 2, 3, -3];
// console.log(arr2.twoSum());

Array.prototype.transpose = function() {
    const width = this.length; //2 
    const height = this[0].length; //3
    const grid = [...Array(height)].map(function(innerArray) { 
        return Array(width).fill(0);
    }); 
    // const grid = new Array(height)
    debugger
    console.log(grid);
    // const arr = this; 
    // arr.forEach (function(outerEl, outerIdx) {
    //     arr.forEach (function(innerEl, innerIdx) {
    //         grid[outerIdx][innerIdx] = [arr[innerIdx][outerIdx], arr[][]];
    // //     })
    // })
}

// let arr = [[1,2,3], [4,5,6]];
// arr.transpose();
// [[], [], []]
// el = []
//     inner_array = arr[0][j]


//     grid[0][0]
//     grid[0][1]
//     grid[0][2]
//     grid[1][0]
//     grid[1][1]
//     grid[1][2]

//     grid[0] = [array[0][0], array[1][0]]
//     grid[0][1]
//     grid[1][0]
//     grid[1][1]
//     grid[2][0]
//     grid[2][1]

//     grid[
//         empty,
//         empty,
//         empty
//     ]

    
//     for(let i = 0; i < 3; i++) { // outer
//         for(let j = 0; j < 2; j++) {
//             if (arr[i] + arr[j] === 0) {
//                 result.push([i, j]);
//             }
//         }
//     }