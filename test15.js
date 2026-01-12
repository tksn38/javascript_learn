var text = '{ "site": [' +
    '{"name": "Runoob", "url":"www.runoob.com" },' +
    '{"name": "Google", "url":"www.google.com" },' +
    '{"name": "Taobao", "url":"www.taobao.com" }]}'

var obj = JSON.parse(text);
console.log(obj.site[1]);