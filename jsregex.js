// node jsregex.js
// let x = "I have ten cats"

// const exists = regex.test(x);
// returns boolean
// console.log(exists)


// let x = "3fish4534/1 dog;' hat mon3333key z;:`_-"

// const regex = /(\s*[a-z]+\s*)/g;

// let match = regex.exec(x);
// let s = ""
// while (match) {
//     let filename = match[1]
//     s += filename
//     match = regex.exec(x);  
// }
// console.log(s)
// fish dog hat monkey z


// if (match) {
//     let name = match
    // gets a specific group
//     console.log(name)
// } else {
//     console.log('no match');
// }


// let y = "filea.mp3 file_01.mp3 fight.mp3 test.csv other.txt"

// const regex = /(\w+)\.mp3/g;
//g means global finds more than first match

// let match = regex.exec(y);
// while (match) {
//     let filename = match[1]
//     console.log(filename)
//     match = regex.exec(y);  
// }



function bin_to_dec(bstr) { 
    console.log(
        parseInt(
            (bstr + '').replace(
                /[^01]/gi, ''
            ), 2
        )
    );
}
console.log(bin_to_dec('110011'));

parseInt(arg1, arg2)
arg1 = num 
arg2 = radix