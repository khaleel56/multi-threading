const {parentPort} = require('worker_threads');
const comupteController = require('./computeController')

parentPort.on('message', async (data)=>{

    // in case of function having database calls. worker threads don't share main thread context so have to create new connection
    // mongoose.connect(workerData.dbUri, {
    //
    //   });
    const result = await comupteController.comupte(data)
    // console.log(result)
    parentPort.postMessage(result)
})