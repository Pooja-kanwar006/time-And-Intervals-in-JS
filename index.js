//setTimeout
let tm2=setTimeout(() => {
  console.log("my name is pooja");
  console.log("good evening");
}, 5000);

//setInterval
let tm = setInterval(() => {
  console.log("hoping your day");
  console.log("is going well");
}, 5000);

//clearintervel

clearInterval(tm);
//cleartimeout
clearTimeout(tm2);

//counting from 10 - 0
count=10
let timer=setInterval(()=>{
console.log(count)
count--;
if(count==0){clearInterval(timer);}
},1000);

