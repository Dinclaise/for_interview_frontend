Array.prototype.some = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] && callback(this[i], i, this)) {
            return true;
        }
    }

    return false;
}
