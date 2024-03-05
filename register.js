console.log("Hello World");

// string -"jm", 'km' , "21"
// number - 21, 21.1, 123e
// boolean - true, false, 1 or 0, -1 = false, >0
//object  - ["apple", "banana", "grape"]
            //[1,2,3,4]
            //[1,"apple", true]
            //[
            //   [1,2,3,4]
            //   ["apple", "banana", "grape"]
            //   ]
// undefined = null            

// console.log("Hello World", 123, true, ["apple"]);
// console.error("Hello");
// console.warn("Hello");
// console.table();

let name = true;
console.log(typeof(name));

let txtUsername = document.querySelector("#txtUsername")
let txtPassword = document.querySelector("#txtPassword")
let txtConfirmPassword = document.querySelector("#txtConfirmPassword")
let btnRegister = document.querySelector("#btnRegister")

btnRegister.onclick = function () {
    register(txtUsername.value, txtPassword.value, txtConfirmPassword)
}

function register (username, Password, ConfirmPassword) {
    console.log(username, Password, ConfirmPassword)

    // if.. else if.. if
    // Conditional Ops(Greater Than >, Less Than <, Equal ==, Not !, or ||
    // Greater Than or Equal >= , Less Than or Equal <=.
    // Not Equal != 
    
    if(Password == ConfirmPassword && Password != "" && ConfirmPassword !=""){
      return  console.log("Password Match!")
    } else if (Password == "" || ConfirmPassword == "" ){
      return  console.log("Password must not be empty.")
    }   else {
     return console.log("Password does not match.")
    }
}