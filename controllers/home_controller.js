module.exports.home = function(req,res){
    if(res.locals.user){
        console.log(res.locals.user);
    }
    return res.render('index');
}