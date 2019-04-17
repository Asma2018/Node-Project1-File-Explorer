const {execSync} = require('child_process');

try{
    const result = execSync(`du -v "C:\Users\Helloworld\Node-Project1-File-Explorer"`).toString();
    console.log(result);
}catch(err){
    console.log(`Error: ${err}`);
}
