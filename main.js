let food=prompt("Enter the food")

let promise=(ms)=>{
    return new Promise(function(resolve,reject){
        let order=true
    if(order){
        setTimeout(resolve,ms)
    }
    else{
        reject(` sorry Your order is not available`)
    }
})
}

async function order(food){
    try{
        await promise(1000)
        document.write("Your order "+food+" is placed "+"<br>")
        
       await promise(3000)
       document.write(`Your order is prepared and it is delivered within few minutes`)

        await promise(5000)
        alert(`Your order is delivered successfully`)
    }
    catch(err){
        document.write(err)
    }
}
order(food)
