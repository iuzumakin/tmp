var body = $response.body;
var obj = JSON.parse(body);


obj['data']['saleRemindVO']['onSaleStatus'] = 0;
obj['data']['saleRemindVO']['needCountDown'] = false;
body = JSON.stringify(obj);

console.log(body);

$done(body);
