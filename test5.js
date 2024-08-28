var body = $response.body;
var obj = body;
let regex = /position:relative;width:100%;height:100%/g;
let newStr = obj.replace(regex, "position:relative;width:100%");


body = newStr;

$done(body);
