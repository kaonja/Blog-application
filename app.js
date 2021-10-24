// 1.Require dependencies 
const express = require('express');
const http    = require('http');
const path    = require('path'); 
const app     = express();

// 2.Configure settings
app.set('port' , process.env.PORT || 3000);
app.set('views', path.join(__dirname , 'views'));
app.set('view engine', 'pug');

// 3.Connect to database(optional)
// 4.Define middleware
// 5.Define routes

app.all('*' , (req , res) => {
    res.render(
        'layout',
        {msg : 'Welcome to our new blog...'}
    )
})
// 6.Start server on particular port
const server = http.createServer(app);
const boot   = () => {
    server.listen(app.get('port'), () => {
        console.info(`Express server is listening on port ${app.get('port')}`)
    })
}

const shutdown = () => {
    server.close()
}

if(require.main === module){
    boot()
}else {
    console.info('Running app as a module')
    exports.boot     = boot
    exports.shutdown = shutdown
    exports.port     = app.get('port')
}




// 7.Start workers with clusters to scale (optional)








