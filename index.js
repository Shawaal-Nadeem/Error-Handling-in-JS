equation=(x,y)=>{
try{
let z;
z=x*x+5*y;
return z;
}
catch(error){
console.log("Error is "+error)
}
}
let result;
result=equation(10,20);
console.log("The result of equation is :" +result);
