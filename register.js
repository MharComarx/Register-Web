console.log("Hello World");

// string - "words" , 'mharco' , "23"
//mumber - 23, 24.1 ,1230
//boolean - true, false 1 or 0, -1=false, 
//object - ["apple" , "banana" ,"grape"]
        //[1,2,3,4]
        //[1,"apple", true]
        //[
        //[1,2,3,],
        //["apple", "banna", "grape"]
        //]
// undefined = null
//console.lo(typeof(name))
console.log("Hello World,123,true");
console.error("Hello World");
console.warn("Hello World");  




let txtUsername = document.querySelector("#txtUsername")
let btnRegsiter = document.querySelector("#btnRegsiter")

btnRegsiter.onclick = function () {
    register(txtUsername.value)
}
function register (username) {
  console.log(username)
}