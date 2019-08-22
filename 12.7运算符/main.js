// + 
// 1 + 1 = 2;
// '1' + '1' = '11';

// - * /

// % 求余
10 % 3  // 1
11 % 3  // 2
12 % 3 // 0

// ++ 自增
var loginCount = 0;
loginCount ++;
console.log('loginCount:',loginCount);
// -- 自减
loginCount = 1;
loginCount --;
console.log('loginCount:',loginCount);

// > < >= <=
console.log(1 > 2);
console.log(1 < 2);
console.log(1 >= 1);
console.log(1 <= 1);

// 赋值 =
var a = 1;

// ==
console.log(1 == 1)
console.log(1 == '1')

// === 严格相等
console.log(1 === '1')

// !=
console.log(1 != 2);

// += -= *= /=
loginCount += 2;
console.log(loginCount);

// && ||
console.log(true && false); // false
console.log(true && true); // true
console.log(true || false); //true
console.log(true || true); //true

var 他是制单人 = true,
    他是审核人 = false;

if(他是制单人 && 他是审核人) {
    console.log('转账成功');
}else {
    console.log('转账失败');
}
