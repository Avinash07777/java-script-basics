// function can be declare in two ways 
// classic type
// modern type

function myFunc(x,y){  //function declaration in old way
    console.log(x+y);  //function body
}
myFunc(10,20)  //function calling

/* now defining a function in modern type as per
   ECHMA Script 2015 */
  let myFirstFunction =(n) => // function defination
  {                           // function body
    console.log("hello "+n+" how are you")
  }
  myFirstFunction("AVINASH")  // function calling

  /* spread operator or copy operator */
 var paragraph = " "  // declaring a variable paragraph for making statement
 let cars =["hyundai",'maruti'];
 console.log(cars);
 let car1 =[...cars,'toyota',"mahindra","jeep"]; //using spread operator
 let car2 =[...car1,'ferrari','bmw'];            //using spread operator as car1
 let car3 =[...car2,"mercedes","landrover"];     //using spread operator as car2
 console.log(car3);
 // now we are using loop to print all items as a statement
 for (var i=0;i<car3.length;i++){
    console.log(car3[i]);
    paragraph=paragraph+car3[i]+" ";
 }
  console.log(paragraph)

  //hindustan times assignment by using spread operator
   let h1 =["Aryan","khan"]
   let h2 =[...h1,"arrest", "Nawab","Malik"]
   let h3 =[...h2,"releases","new","videos"]
   let h4 =[...h3,",","questions"]
   let h5 =[...h4,"Aryan","Khan","which"]
   let h6 =[...h5,"went","viral","The","The","NCB","had"]
   let h7 =[...h6,"to","issue","a","statement"]
   console.log(h7)
   var hindustan =" "
   //running for loop for making the statement
   for (var i=0;i<h7.length;i++) //for loop start
   {                             // for loop body
    console.log(h7[i]);
    hindustan=hindustan+h7[i]+" ";
 }                               // loop close
 console.log(hindustan)