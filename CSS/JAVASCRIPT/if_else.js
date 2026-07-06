let IsAdmin = false;
checkEvenOdd(197);
checkAdmininOrNot(1);
CandidateCanVote(101);
userCanDriveOrNot(20, false);
function checkEvenOdd(value) {
  if (value % 2 == 0) {
    console.log(`${value} is Even`);
  } else {
    console.log(`${value} is Odd`);
  }
}

function checkAdmininOrNot(value) {
  if (value == true) {
    console.log(`User is Admin`);
  } else {
    console.log(`Guest User`);
  }
}

function CandidateCanVote(age) {
  if (age >= 18 && age <= 100) {
    console.log(`You Can vote`);
  } else {
    console.log(`You can not vote`);
  }
}

let age = 1;
let License = true;

function userCanDriveOrNot(age, license) {
  if (age >= 18) {
    if (license == true) {
      console.log(`### User Can Drive ###`);
    } else {
      console.log(`### User Can Not Drive ###`);
    }
  } else {
    console.log(`### User Can Not Drive ###`);
  }
}

function grade(mark) {
  switch (true) {
    case mark >= 90:
      return "A+";
    case mark >= 80:
      return "A";
    case mark >= 70:
      return "B";
    case mark >= 60:
      return "c";
    case mark >= 50:
      return "D";
    case mark >= 30:
      return "Fail";
  }
}
console.log(grade(99));
console.log(grade(30));

function whoWins(user, computer) {
  switch (user + "-" + computer) {
    case "rock-scissor":
    case "paper-rock":
    case "scissor-paper":
      return "You win";

    default:
      return "You lose or Draw";
  }
}

console.log(whoWins("rock", "scissor"));


function weekDays(days){
    switch(days){
        case 1 :
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        default:
            console.log("Sunday");
    }
}
weekDays(1);

function multiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(num + " x " + i + " = " + (num * i));
    }
}
multiplicationTable(5);

function sum(num){
  let sum =0;
  for(let i=1;i<=num;i++){
     sum += i;
  }
   console.log(sum);
}
sum(7);
  

function oddNumber(n){
  for(let i =1;i<=n;i++){
    if(i % 2 != 0){
      console.log(i);
    }
  }
}
oddNumber(15);

function divisible(n){
  for(let i=1;i<=n;i++){
    if(i % 3 == 0 && i % 5 == 0){
      console.log(i);
    }
  }
}
divisible(15)

function divisible2(n){
  for(let i=1;i<=n;i++){
    if(i % 3 != 0 && i % 5 != 0){
      console.log(i);
    }
  }
}
 divisible2(30);



