var fs=require('fs');
var jsonfile = require('jsonfile');

// npm install module-name是本地安装模式，这种模式模块只会被安装在当前目录的node_modules文件夹中，非全局使用，所以会报错模块不存在！更换到目标文件夹但不隐藏到需扫描的文件夹下一层文件夹才可正常使用。

var path = require('path');
var directoryString = path.join(fs.realpathSync(__dirname), '../words-from-the-heart');  //相对路径这里一直没有弄对，作业这个文件将会提交到getting-started-with-JavaScript/homework/lesson6下，但是待扫描文件放在和这个根目录平行的另一个项目words-from-the-heart下，读取方式和本地存放代码在同一个文件夹下还是很不一样的。
var writePathString = path.join(__dirname, 'json_file.txt');
var errorPathString = path.join(__dirname,'error_data.txt');


fs.readdir(directoryString, function(err, files) {
    if (err) {
        console.log('读取文件失败');
        return;
    } 
    
//把含有"json"字符的文件名过滤出来,把所有文件保存在jsonFiles数组中
    var jsonFiles = [];
    for (var i = 0; i < files.length; i++) {
      if (files[i].includes('.json')) {
        jsonFiles.push(files[i]);
       }
    }
 
//循环读取json文件的内容，并都存在jsonList数组内。读取出错的文件名存在errorFiles数组内。

    var jsonList = [];
    var errorFiles = [];
    for (var i = 0; i < jsonFiles.length; i++) {
      try {
          // 读取json文件
          jsonList.push(jsonFiles[i]);
      } catch (err) {
          errorFiles.push(jsonFiles[i]);
      }
    }
    jsonfile.writeFileSync(writePathString, jsonList);
    jsonfile.writeFileSync(errorPathString, errorFiles);
});
//最初的设想是实现把命名正确的json文件名存入json_file.txt，命名不对的存入error_data.txt的功能，便于提醒文件命名不对的同学更正。读取和写入命名正确的文件的代码一直不能实现这个目标，所以先完成最基本的功能——把正确的json文件名写入文档。作业纠结犯错很多，做到最后再回看就是思路没有条理是混乱的，需要实现的那些功能需要用什么方法实现没有想清楚，并且基础知识不牢靠。==坑都是自己挖的再往下跳…






