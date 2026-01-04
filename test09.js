// String -> JSON
// var text1 = '{ "sites" : [' +
    // '{ "name": "Youtube" , "url":"www.youtube.com" },' +
    // '{ "name": "Google"  , "url":"www.google.com"  },' +
    // '{ "name": "Amazon"  , "url":"www.amazon.com"  } ]}';

// obj1 = JSON.parse(text1);
// console.log(obj);
// console.log(obj.sites[0]);

// JSON -> String
// var obj2 = {"name":"apple", "id":"1"};
// var text2 = JSON.stringify(obj2);
// console.log(obj2);

// var arr = [ "Google", "Runoob", "Taobao", "Facebook" ];
// var myJSON = JSON.stringify(arr);
// console.log(arr);

function getValue(){
   var a,b,c;
   a = void ( b = 5, c = 7 );
   console.log('a = ' + a + ' b = ' + b +' c = ' + c );
}
getValue();