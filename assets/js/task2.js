function reverseWord(str){
    let reverseWordStr = str.split(" ").map(m => m.split("").reverse().join(""));
    return reverseWordStr.join(" ");
}
console.log(reverseWord("Cavid"))