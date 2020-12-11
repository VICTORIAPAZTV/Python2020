/** 1* */
function a() {
    return 35;
}
console.log(a())
    // RESPUESTA: console.log(35)//35

/** 2 **/
function a() {
    return 4;
}
console.log(a() + a());
// RESPUESTA: console.log(4 + 4); //8

/** 3 **/
function a(b) {
    return b;
}
console.log(a(2) + a(4));
// RESPUESTA: console.log(2 + 4); //6

/** 4 **/
function a(b) {
    console.log(b);
    return b * 3;
}
console.log(a(3));
// RESPUESTA:
// console.log(3); //3  
// console.log(3 * 3); //9

/** 5 **/
function a(b) {
    return b * 4;
    console.log(b);
}
console.log(a(10));
// RESPUESTA:
// console.log(10 *4); //40

/** 6* */
function a(b) {
    if (b < 10) {
        return 2;
    } else {
        return 4;
    }
    console.log(b);
}
console.log(a(15)); //4
// RESPUESTA:
// console.log(4); //4

/** 7* */
function a(b, c) {
    return b * c;
}
console.log(10, 3); // 10,3
console.log(a(3, 10)); //30

/** 8* */
function a(b) {
    for (var i = 0; i < 10; i++) { //i=
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);

/** 9 **/
function a() {
    for (var i = 0; i < 10; i++) { //i=0>2>3>5>6>8>9>11>12
        i = i + 2;
        console.log(i); //2,5,8,11
    }
}
a();

/** 11 * */
function a() {
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            console.log(i, j);
        }
        console.log(j, i);
    }
}
//donde esta el llamado a la función?

/** 15* */
var z = 10;

function a() {
    var z = 15;
    console.log(z);
    return z; //return 15;
}
z = a(); //z= 15
console.log(z);
//rspt:15,15