var body = $response.body;
var obj = JSON.parse(body);

console.log(obj);
obj['saleRemindVO']['onSaleStatus'] = 0;
body = JSON.stringify(obj);

console.log(body);

$done(body);
