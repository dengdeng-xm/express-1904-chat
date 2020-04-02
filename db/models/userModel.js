// 引入连接了MongoDB 的 mongoose
const mongoose = require ('../connect');

const bcryptjs = require('bcryptjs');
// 定义 schema
const userSchema = new mongoose.Schema({
    username:{type:String, required:true},
    password:{type:String,required:true},
    avatar:{
        type:String,
        default:'http://localhost:3000/assets/img/avatar.png'
    }
});
// 给用户密码加密
userSchema.pre('save',function(next){
    this.password = bcryptjs.hashSync(this.password,10);
    next()
});
// 给usermodel提供一个原型方法 
//原型上的这个方法，可以给每一个usermodel 的实例去使用
userSchema.methods.comparePassword = function(password){
return bcryptjs.compareSync(password,this.password)
}
// 生成 model
const UserModel = mongoose.model('user',userSchema);
// 暴露出去
module.exports = UserModel;