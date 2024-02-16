module.exports =  my_date;

function my_date(){
  var today = new Date();
var options = { 
    day : "numeric",
    weekday : "long",
    month : "short",
  };

var mydate = today.toLocaleDateString("en-Us", options)

return mydate
}
