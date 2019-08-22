// function jia(a,b) {
//     var r = a + b;
//     return r;
// }

// function jian(a,b) {
//     return a - b;
// }

// function cheng(a,b) {
//     return a * b;
// }

// function chu(a,b) {
//     return a / b;
// }

// var x = jia(1,1);
// console.log(x);

// var user = {
//     name: '王花花',
//     age: 20,
//     sex: '女'
// }

// console.log(user);
// user.age = 21;
// console.log(user);

function user(name) {
    var age,sex;
    return {
        getName:function() {
            return name;
        },
        setName:function(newName) {
            name = newName;
        },
        getAge:function() {
            return age;
        },
        setAge:function(newAge) {
            age = newAge;
        },
        getSex:function() {
            return sex;
        },
        setSex:function(newSex) {
            sex = newSex;
        }
    }
}

var whh = user('王花花');
whh.setAge(22);
whh.setSex('女');
var name = whh.getName();
var age = whh.getAge();
var sex = whh.getSex();
console.log(name,age,sex);