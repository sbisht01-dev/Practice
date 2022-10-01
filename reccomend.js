/* 
Recomendation system 
*/

/* Array Declared*/
let batch = ["A", "B", "C", "D", "E"];

/* function for selection of any alphabet*/
function selection() {
  console.log("1-A , 1-B , 3-C , 4-D , 5-E");
  console.log("Select your fav alphabet");
  /* flag array*/
  let flag = [0, 0, 0, 0, 0];
  for (let i = 0; i < flag.length; i++) {
    let choice = prompt("Enter");
    if (choice > 0 && choice <= 5) {
      flag[choice - 1] = flag[choice - 1] + 1;
      console.log(flag);
    } else {
      console.log("Enter valid number.");
    }
  }
  return flag;
}
/* more loops can be used for the automation

/*generating random values for system*/
function gen() {
  let store = [0, 0, 0, 0, 0];
  for (let i = 0; i < flag.length; i++) {
    let x = Math.random();
    store[i] = store[i] + x;
  }
  console.log(store);
}
