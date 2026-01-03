// console.log(typeof function(){});
// console.log(typeof [1,2,3,4]);

// console.log(Array.isArray([1,2,3,4]));
// console.log([1,2,3,4] instanceof Array);


// console.log([1,2,3,4].constructor);
// console.log("Bill".constructor);

// var sample = "abcdefghijklmn";
// var parr = /jk/;
// console.log(parr.exec(sample));

// console.log(sample.search(/efg/i));

var txt=""; 
function message() { 
    try { 
        adddlert("Welcome guest!"); 
    } catch(err) { 
        txt="本页有一个错误。\n"; 
        txt+="错误描述：" + err.message + "\n"; 
        txt+="点击确定继续。\n"; 
        console.log(txt); 
    } 
}
message();