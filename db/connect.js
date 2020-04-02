//连接数据库的文件
const mongoose = require('mongoose');
// 定义一个url地址
const url = 'mongodb://localhost:27017/express-1904-chat';
//连接
mongoose.connect(url,{
  useNewUrlParser:true,
  useUnifiedTopology:true  
})
.then(()=>{
    console.log('数据库连接成功');
})
.catch(error =>{
    console.log('数据库连接失败');
    console.log(error);
});
module.exports = mongoose;
