const fs= require("fs");
const path=require("path");

const currentdir=path.join(process.cwd(),"logs");

if(fs.existsSync(currentdir)){
    let files=fs.readdirSync(currentdir);

files.forEach(file =>{
    console.log("The following files has been deleted"+file);
    fs.unlinkSync(path.join(currentdir,file));
});
fs.rmdirSync(currentdir);
}
