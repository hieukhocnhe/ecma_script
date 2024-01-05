/**
 * Biến
 * 
 * Sử dụng let thay vì var
 * const : hằng số, giá trị không thay đổi
 * let : biến có thể thay đổi giá trị
 * 
 * 
 * 
 * 
 * 
 */

var a = 10;
a = 20;
var b = 20;
var c = a + b;
console.log(c);

// let a = 10;
// let a = 20;
// let b = 20;
// let c = a + b;
// console.log(c);

// const a = 10;
// const a = 20;
// const b = 20;
// const c = a + b;
// console.log(c);

const myInfo = {
    name: "Hieu",
    showName: function showName() {
        console.log(this.name);
        
    },
};


const productA = {
    name : "Iphone 12"
} 

const productB = {...productA};
productB.price = 200;
console.log(productA);
console.log(productB);