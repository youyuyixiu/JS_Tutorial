var a = 1;
console.log(a);

function fun() {
    var b = 2;
    console.log(b);
    console.log(a);
}
fun();

(function() {
    var a = 1;
    console.log(a);
})();