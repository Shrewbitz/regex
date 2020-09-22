// node jsregex.js


// exec()	Executes a search for a match in a string. It returns an array of information or null on a mismatch.
// test()	Tests for a match in a string. It returns true or false.
// match()	Returns an array containing all of the matches, including capturing groups, or null if no match is found.
// matchAll()	Returns an iterator containing all of the matches, including capturing groups.
// search()	Tests for a match in a string. It returns the index of the match, or -1 if the search fails.
// replace()	Executes a search for a match in a string, and replaces the matched substring with a replacement substring.
// replaceAll()	Executes a search for all matches in a string, and replaces the matched substrings with a replacement substring.
// split()	Uses a regular expression or a fixed string to break a string into an array of substrings.


// let x = "I have ten cats"

// const exists = regex.test(x);
// // returns boolean
// console.log(exists)


let x = "3fish4534/1 dog;' hat mon3333key z;:`_-"

// const regex = /(\s*[a-z]+\s*)/g;
// const regex = /(\s*[ ^a-z ]+\s*)/g;

//1
// let match = x.split(regex)
// console.log(match)

//2
// let match = regex.exec(x);


// let s = ""
// while (match) {
//     let filename = match[1]
//     s += filename
//     match = regex.exec(x);  
//     // console.log(s)
// }
// console.log(s)

//3
// let match = x.match(/(\s*[a-z]+\s*)/g).join("");
// console.log(match)
// console.log(match.join(""))

//4 
// function replacer(match) {
   
//     const regex = /(\s*[ ^a-z ]+\s*)/g;
//     // console.log(regex.exec(match)[0][1])
//     return regex.exec(match);
// }
// const regex2 = /(\s*[\S]+\s*)/g;

// let match = x.replace(regex2, "fish")
// console.log(match)

// fish dog hat monkey z


// if (match) {
//     let name = match
//     // gets a specific group
//     console.log(name)
// } else {
//     console.log('no match');
// }


let y = "filea.mp3 file_01.mp3 fight.mp3 test.csv other.txt"

const regex = /(\w+)\.mp3/g;
// g means global finds more than first match

let match = regex.exec(y);
while (match) {
    let filename = match[1]
    console.log(filename)
    match = regex.exec(y);  
}

















// function bin_to_dec(bstr) { 
//     console.log(
//         parseInt(
//             (bstr + '').replace(
//                 /[^01]/gi, ''
//             ), 2
//         )
//     );
// }
// console.log(bin_to_dec('110011'));

// parseInt(arg1, arg2)
// arg1 = num 
// arg2 = radix