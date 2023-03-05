// 1st Step :=> npm init -y => It will be initialised with npm project...
const fs = require('fs');
const path = require('path');
const replaceit = "harsh"
const replacewith = "mukku"
const preview  = false
const folder = __dirname
// __dirname => provides us the current Directory.....
try {
  const data = fs.readdir(folder,(err, data)=>{
    //console.log(data);
    for (let index = 0;index < data.length;index++) {
        const item = data[index];
        let oldFile = path.join(folder,item)
        let newFile = path.join(folder,item.replaceAll(replaceit,replacewith))
        if(!preview) {
            fs.rename(oldFile , newFile, ()=>{
                console.log("Rename Success")
            })
        }else{
            if("data/" + item !== newFile) console.log("data/" + item+" will be renamed to "+newFile)
        }
    }
  })
} catch (err) {
  console.error(err);
}