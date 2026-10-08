/*
Given the script file callbacks.js,
 write a script that does the following:

Create a method resolvedPromise 
that is similar to delayedSuccess
and resolves a message after a timeout of 500ms.

Create a method rejectedPromise that is similar 
to delayedException and rejects an error message
 after a timeout of 500ms.

Call both promises separately and handle the
 resolved and reject results and then output to 
 the console*/

 let resolvedPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({message:"success"});
    },500);

});
    let rejectedPromise=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject({error:"timeout after 500ms"});
        },500);
    });

async function main(){
    try{
        let result=await resolvedPromise;
        console.log(result);
    }catch(error){
        console.log(error);
    }
    try{
        let result=await rejectedPromise;
        console.log(result);
    }catch (error){
        console.log(error);

    }
}
main();
