
/*
 * GET Home Page
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.home = function(req, res){
  res.render('index', { title: 'Express - Home Link' });
};

/*
* GET About Page
*/

exports.about = function(req, res){
	res.render('about', {title: 'About Express', description: 'Express with Jade templating and Bootstrap 3 styling'});
};

/*
* GET Contact Page
*/
exports.contact = function(req, res){
	res.render('contact', {title: 'Contact Page'});
}