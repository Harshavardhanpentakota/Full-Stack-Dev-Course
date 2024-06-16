// Reverse=Original
// ababa = ababa

function Palindrome(string) {
  let n = string.length;
  let flag = 1;

  for (let i = 0; i < n; i++) {
    if (string[i] !== string[n - i - 1]) {
      flag = 0;
      console.log("It is not a Palindrome");
      break;
    }
  }
  if (flag === 1) {
    console.log("Is palindrome");
  }
}

let string1 = "Harsha";
let string2 = "ababa";
let string3 = "rtyhbnj";

Palindrome(string1);
Palindrome(string2);
Palindrome(string3);
