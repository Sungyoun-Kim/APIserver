require('dotenv').config()

var createError=require('http-errors');
var express=require('express');
var path=require('path');
var cookieParser=require('cookie-parser');
var logger=require('morgan');

var indexRouter=require('./routes/index');
var usersRouter=require('./routes/member');
var categoryRouter=require('./routes/category');
var sequelize=require('./models').sequelize;
/*const SequelizeAuto=require('sequelize-auto');
const auto=new SequelizeAuto('mydb','hoseo123','hoseo123',{
  host:'125.138.57.171',
  dialect:'mysql'
});
auto.run((err)=>{
  if(err) throw err;
})*/

const app = express();
sequelize.sync();

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/member', usersRouter)
app.use('/category',categoryRouter)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// error handler
app.use((err, req, res, next) => {
  res.locals.message = err.message
  res.locals.error = process.env.NODE_ENV === 'development' ? err : {}
return res.status(err.status || 500)
  .json(res.locals.error)
})

// bin/www 를 그대로 사용하기 위해서 예외적으로 commonJs 문법을 적용
module.exports = app