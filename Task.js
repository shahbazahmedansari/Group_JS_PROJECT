// 1. Sasmita
// Q: Add your sum function here
let a = 5;
let b = 4;
let ab = function (a, b) {
    return a + b;
};
console.log(ab(a, b));;


// 2. Afnaan
// Q: Add your max function here

let qw = 5;
let xy = 13;

if (qw === xy) {
    console.log("same");

}

else if (qw > xy) {
    console.log("qw");

}

else {
    console.log("xy");
}


function max(a, b) {
    return Math.max(a, b);
}
console.log(max(12, 13));


// 3. Ganapati
// Q: Add your reverse string function here
function reverse(str) {
    return str.split("").reverse().join("");
}
reverse("xyz");


// 4. Shahbaz
// Q: Add your isEven function here
function isEven(num) {
    return num % 2 === 0;
}

console.log(isEven(45));
console.log(isEven(12));


// 5. Rahul
// Q: Add your countVowels function here
let vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
let count = 0;
function countVowels(str) {
    for (let char of str) {
        if (vowel.includes(char)) {
            count++;
        }
    }
    console.log("Vowels Count : ", count);
}
countVowels("Team work is good for health")

// Member 6: Add your factorial function here

