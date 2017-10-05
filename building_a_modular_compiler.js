

function cross(_r){



}

function bar(_r){

	return 5;
}

function foo(_r){

	var ba = _r('import bar');

	console.log(ba);

}

var _req = function(_request){
//write your code within this block

var regex = /import\s([a-z]+)/g;
var str = _request;
var m = regex.exec(str);
var m1 = eval(m[1]);
console.log(m)
 
return m1(_req);
//==================================

}

foo(_req);
