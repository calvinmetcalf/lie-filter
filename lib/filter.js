var some = require('lie-some');
var qMap = require('lie-quickmap');
var cast = require('lie-cast');
function filter(array,func){
    return some(qMap(array,function(value){
        return cast(value).then(function(v2){
            return func(v2);
        }).then(function(v3){
            if(v3){
                return value;
            }else{
                throw 'false';
            }
        });
    })).then(null,function(){
        return [];
    });
}
module.exports = filter;