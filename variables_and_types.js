let number= 1;

//number
console.log(number);
console.log(typeof(number));
number='hola';
console.log(number);
console.log(typeof(number));

//strings
console.log("sample text lmao".split(' '));

let longText1 =
    'Ln1\n' +
    'Ln2\n';
console.log(longText1);

let longText2 = [
    'ln1',
    'ln2'
].join('\n');
console.log(longText2);

let objet = {
    number: 1,
    text: "hello",
    add2: function (v) {
        return v + 2;
    }
};

console.log(objet.number);
console.log(objet.text);
console.log(objet.add2(5));

// array

let array = [
    1,
    'hii',
    function(v) { return v + 2},
    {value: "hii"}
];

console.log(array);

console.log(array[2](500));

// hoisting

let x = 100;

function y() {
    if (x==100) {
        let x = 30;
    }
    return x;
}

console.log(x, y());