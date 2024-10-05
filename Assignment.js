// Coding Assignment: 
// ○Create a Git repository for a small project 
// ○ Create a simple "Hello World" project and push it to your GitHub repo. 
// ○ Make at least three meaningful commits throughout the project. 
// ○ Push the repository to GitHub and submit the link for review.

console.log("Hello world");

var statement= "Hello world";

function print_fun(statement){
   
    for(let i = 0; i<statement.length; i++){
        
        console.log(statement[i])
    }
}
// print_fun(statement);

for(let x of statement){
    console.log(x)
}