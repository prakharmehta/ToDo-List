var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var data = [{item: 'Breakfast'}, {item: 'Lunch'}, {item: 'Dinner'}];
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){

app.get('/todo', function(req, res){
    res.render('todo', {todos: data});
});

app.post('/todo', urlencodedParser, function(req, res){
    data.push(req.body);
    res.json({todos: data});//to send the data back to front-end
});

app.delete('/todo/:item',function(req, res){
    data = data.filter(function(todo){
        return todo.item.replace(/ /g,'-') !== req.params.item;
    });
    res.json({todos: data});
});

};