const STDOUT='STDOUT'
const STDERR='STDERR'
const APPLICATION_EXIT='APPLICATION_EXIT'


exports.PromisifySpawn  = function (spawn, ws) {
    return new Promise((resolve, reject) => {
        let output='';

        spawn.stdout.on('data', (data) => {
            output += `${STDOUT} ${data}`;
            ws.send(STDOUT)
            ws.send(`${data}`)
        })

        spawn.stderr.on('data', (err) => {
            output+=`${STDERR} ${err}`
            ws.send(STDERR)
            ws.send(`${err}`)
        })

        spawn.on('close', code => {
            output+=`${APPLICATION_EXIT} ${code}`
            ws.send(`${APPLICATION_EXIT} ${code}`)
            resolve(output)
        })
    })
}