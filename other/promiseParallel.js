function parallel(tasks, cb) {
    const promises = tasks.map((task) => {
        return new Promise((resolve) => {
            if (task.length === 1) {
                task(resolve)
            } else {
                resolve(task())
            }
        })
    })

    Promise.all(promises)
        .then(results => {
            cb(results)
        })
}


parallel([
    function (resolve) {
        setTimeout(function () {
            resolve(10);
        }, 50);
    },
    function () {
        return 5;
    },
    function (resolve) {
        setTimeout(function () {
            resolve(0);
        }, 10)
    }
], function (results) {
    console.log(results); // [10, 5, 0]
});
