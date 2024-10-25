const {Worker, isMainThread} = require('node:worker_threads');
const os = require('os');
const numCores = os.cpus().length;

exports.threadHandling = (input) =>{
    return new Promise((resolve, reject) => {
        console.log(numCores)
        const worker = new Worker('./controllers/workerFile.js');
        //  to pass uri to worker thread so connection can be made
        // const worker = new Worker('./controllers/workerFile.js', { workerData: { dbUri }}); 

        worker.postMessage(input);

        worker.on('message', (result) => {
            resolve(result);
            worker.terminate();
        });

        worker.on('error', (error) => {
            reject(error);
        });
        worker.on('exit', (code) => {
            console.log(`Worker thread exited with code ${code}`);
          });
          
    });
}