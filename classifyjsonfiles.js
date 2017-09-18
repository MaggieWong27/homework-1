var fs=require('fs');
var jsonfile = require('jsonfile');

// npm install module-name是本地安装模式，这种模式模块只会被安装在当前目录的node_modules文件夹中，非全局使用，所以会报错模块不存在！更换到目标文件夹但不隐藏到需扫描的文件夹下一层文件夹才可正常使用。

var path = require('path');
var directoryString = path.join(fs.realpathSync(__dirname), '../../../words-from-the-heart');
var writePathString = path.join(__dirname, 'json_path.txt');
var errorPathString = path.join(__dirname,'error_data.txt');


fs.readdir(directoryString, function(err, files) {
    if (err) {
        console.log('读取文件失败');
        return;
    } else {
        var jsonFiles = [];
        for (var i = 0; i < files.length; i++) {
        if (files[i].includes('.js')) {
            jsonFiles.push(files[i]);
            }
        }
    }

    var jsonList = [];
    var errorFiles = [];
    for (var i = 0; i < jsonFiles.length; i++) {
      try {
          var content = jsonfile.readFileSync(path.join(directoryString, 'jsonFiles[i]'));
          jsonList.push(jsonFiles[i]);
      } catch (err) {
          errorFiles.push(jsonFiles[i]);
      }
    }
    jsonfile.writeFileSync(writePathString, jsonList);
    jsonfile.writeFileSync(errorPathString, errorFiles);
});




// if (files.length > 0) {
//   console.log(files);
//} else {
// console.log('没有找到任何文件');
//}
//读取文件失败提示  TypeError: Cannot read property 'length' of undefined
//if else 语句错误导致files undefined，原因待查


