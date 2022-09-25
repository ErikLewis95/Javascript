const tryThrow = () =>{
    try{
        let isFalse = true;
        if(isFalse){
            throw"there is an Error";
        }
        console.log("success");
    } catch (err){
        console.log(err)
    }
}
tryThrow()