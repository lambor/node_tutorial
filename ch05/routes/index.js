
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express', body: 'Hello Express' });
};

exports.hello = function(req, res){
  res.send("The time is "+new Date().toString());
}