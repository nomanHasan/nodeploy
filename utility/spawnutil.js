exports.PromisifySpawn  = function (spawn) {
    return new Promise((resolve, reject) => {
        let output;

        spawn.stdout.on('data', (data) => {
            output += data;
        })

        spawn.stderr.on('data', (err) => {
            reject(err)
        })

        spawn.on('close', code => {
            resolve(output)
        })
    })
}