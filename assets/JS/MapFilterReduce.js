function greatestNumber(array )
{
    let arr =[];
    arr = array.split(","); // splitting the elements into array
   arr= arr.map(ele=>parseInt(ele)); // string to integer conversion
    console.log(arr);
   //const value= arr.map(ele=>ele*2);
  // [1,2,3].reduce((acc,ele)=>(acc<ele)?ele:acc , 0)
const val = arr.reduce((acc,ele)=>(acc<ele)?ele:acc , 0);  // compare the buffer number with every element
console.log(val);
document.getElementById("spnResGreatest").innerHTML ='The greatest number is : '+ val;
}

function factorial(number)
{
    const fact = n => n ? n * fact(n - 1) : 1;
    let arr =[];
    arr = number.split(","); // splitting the elements into array
   arr= arr.map(ele=>parseInt(ele));
      const val= arr.map(fact);
    console.log(val);
document.getElementById("spnResFactorial").innerHTML ='The factorial is : '+ val;

}

function square(array)
{
    
    let arr =[];
    arr = array.split(","); // splitting the elements into array
   arr= arr.map(ele=>parseInt(ele));
const val =arr.map(ele=>ele*ele).filter(ele=>ele<100);
console.log(val);
document.getElementById("spnResSquare").innerHTML ='The squares within 100 are : '+ val;

}