// for, while

// 0 -> 10

let variable1 = 0;

for (let i = 0; i <= 10; i++) {
  variable1 = variable1 + i;
}

console.log(variable1);

//while

let i = 0;
while (i <= 10) {
  variable1 = variable1 + i;
  i++;
}

// do - while

i = 0;
variable1 = 0;
do {
  if (i == 11) {
    break;
  }
  variable1 = variable1 + i;
  i++;
} while (i > 0);

console.log(variable1);
