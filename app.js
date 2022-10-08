require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
// const port = Process.env.PORT || 3000
const mongoose = require('mongoose');
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const { allowedNodeEnvironmentFlags } = require('process');

// Rotas da API
const indexRouter = require('./routes/index');
app.use('/', indexRouter);
const usersRouter = require('./routes/users');
app.use('/users', usersRouter);
const booksRouter = require('./routes/books');
app.use('/books', booksRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });
//
// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.bf6kvlp.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        console.log("Conectamos ao MongoDB");
        app.set('port', process.env.PORT || 3000);
        // app.listen(port,()=>{  // do not add localhost here if you are deploying it
        //     console.log("server listening to port "+port);
        // });
        // app.listen(3000)
        // console.log(`Servidor escurando em http://localhost:3000`)
    })
    .catch((err) => console.log(err))

// app.on('open', () => {
//   app.listen(port, () => {
//     console.log(`Servidor escurando em http://localhost:${port}`)
//   })
// })
//
// module.exports = app;
