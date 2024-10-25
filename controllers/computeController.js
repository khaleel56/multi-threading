exports.comupte = async (data)=>{
    const array = Array.from({length:data}, ()=> 1e9)

    let totalcount=0;
    for(let item of array){
        let count=0;
        for(let i=0;i<item;i++){
            count++
        }
        totalcount=count
    }

    return totalcount;
}