debugger;
console.log("Global Exectuion Context Starts");
var globalVariable = "In am a global variable";
console.log(globalVariable);
console.log(greet());
greet();
console.log("Global Exectuion cintext Ends ");
function greet(){
    var name = 'hasteg';
    console.log('Inside Global function');
    return 900;
}