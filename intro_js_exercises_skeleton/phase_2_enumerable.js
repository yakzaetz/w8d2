Array.prototype.myEach = function (callback) {
    for(let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
    return undefined
}

let cb = function(){
    console.log("hello");
}
