const threadController = require('./workerController');
const comupteController = require('./computeController');

exports.computeTasks = async(req, res)=>{
    try{
        const multiThreading = req.body.multiThreading || false;
        let response;
        const tick= performance.now();

        if(multiThreading){
            console.log('multi threading endabled');
            response = await threadController.threadHandling(10)
        } else {
            console.log('normal flow');
            response = await comupteController.comupte(10)
        }
        const tock= performance.now()
        console.log(`${!multiThreading ? 'Main Thread' : 'Worker Thread'}time took ${((tock-tick)/1000).toFixed(2)}s`)
        // console.log(`response: ${response}`)
        return res.status(200).send({message:'success'})

    }catch(err){
        console.log(`error`, err)
        return res.status(500).send({message:'Internal Server Error'})
    }
}


