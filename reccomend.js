/* 
Recomendation system 
*/

/* Array Declared*/
let batch = ['A','B','C','D','E']

/* function for selection of any alphabet*/
function selection(){
console.log("1-A , 1-B , 3-C , 4-D , 5-E")
console.log("Select your fav alphabet")
  /* flag array*/
  
let flag = [0,0,0,0,0]
for(let i=0; i<flag.length; i++ ){
  let choice = prompt("Enter")
if(choice>0 && choice<=5){
flag[choice-1] = flag[choice-1] + 1
console.log(flag)
  }else{
    console.log("Enter valid number.")
    }
  }
  console.log("New Flag \n")
  return flag
}

let flag = selection()
console.log("New Flag is:" + flag)

let final = []
  function values(){
  let y = 0
  for(let i=0;i<flag.length;i++){                       /*index of flag*/
    for(let j=1;j<=flag[i];j++){                        /*value at that index*/
      if(flag[i]>=1){
      y = y + Math.random()
      }else{y= y - 0.05}
    }
    final[i] = y.toFixed(5)
    y=0
    /*console.log(final)*/
  }
  return final
}

let reccomend = values()

console.log(reccomend)
