/*1.
-Remove Log files
-remove all the files from the Logs directory, if exists
-output the file names to delete
-remove the Logs directory
2.
-Create Log files
-create a Logs directory, if it does not exist
-change the current process to the new Logs directory
-create 10 log files and write some text into the file
-output the files names to console
Hint: use the fs module and path module, 
and the process current working directory
 to build directory path. It is acceptable,
  to have a remove.js script and separate
   add.js script. */

   

const fs=require("fs")
const path=require("path");

const currentdir=path.join(process.cwd(),"Logs");

fs.mkdirSync(currentdir);

process.chdir(currentdir);

for (let i=0;i<10;i++){
    let fileName="log"+i+".txt";
    fs.writeFileSync(fileName,"Files here"+i);
    console.log(fileName);
}

/*
fs.unlink("question-3/first.txt",function(err){
    if(err){
        console.error(err)
;
        }else{
            console.log("deleted");
            }
})
            */