const fs = require('fs');

const path = '/media/matheus/OS/Users/mathe/Downloads/Video de Abertura 2019/Audios'
fs.readdir(path, (err, files) => {
    files.forEach(file => {
        let filePath = path + "/" + file;
        let newFilePath = filePath + ".mp3";

        console.log("Rename ", filePath, " to ", newFilePath);
        fs.renameSync(filePath, newFilePath)
    })
})
