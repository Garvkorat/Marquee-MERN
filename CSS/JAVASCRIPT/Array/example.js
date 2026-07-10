// const students = [
//   {
//     name: "Aarav Sharma",
//     email: "aarav.sharma@example.com",
//     phone: "9876543210",
//     course: "BCA",
//     examScore: [
//       { subject: "Java", marks: 80 },
//       { subject: "HTML", marks: 75 },
//       { subject: "JavaScript", marks: 90 }
//     ]
//   },
//   {
//     name: "Rahul Verma",
//     email: "rahul.verma@example.com",
//     phone: "9876543212",
//     course: "B.Tech",
//     examScore: [
//       { subject: "Java", marks: 92 },
//       { subject: "HTML", marks: 87 },
//       { subject: "JavaScript", marks: 95 }
//     ]
//   },
//   {
//     name: "Priya Patel",
//     email: "priya.patel@example.com",
//     phone: "9876543213",
//     course: "BCA",
//     examScore: [
//       { subject: "Java", marks: 70 },
//       { subject: "HTML", marks: 85 },
//       { subject: "JavaScript", marks: 80 }
//     ]
//   }
// ];

// let arrayOfMarks = students.map((student) =>
//   student.examScore.reduce((acc, curr) => acc + curr.marks, 0)
// );

// console.log("Total Marks:", arrayOfMarks);

// let sortedArray = [...arrayOfMarks].sort((a, b) => b - a);

// // console.log("Sorted Marks:", sortedArray);

// console.log("Highest Marks:", sortedArray[0]);


const students = [
  { id: 1, name: "Garv", course: "BCA" },
  { id: 2, name: "Dhruv", course: "MCA" },
  { id: 3, name: "Kremish", course: "BCA" },
  { id: 4, name: "Meet", course: "B.Tech" }
];

function getStudentsByCourse(courseName) {
  return students.filter(student => student.course === courseName);
}

const bcaStudents = getStudentsByCourse("BCA");
console.log(bcaStudents);


const cart = [
  { name: 'Laptop', quantity: 1, price: 55000 },
  { name: 'Mouse', quantity: 2, price: 700 },
  { name: 'Keyboard', quantity: 1, price: 1500 },
  { name: 'Monitor', quantity: 2, price: 12000 },
  { name: 'Headphones', quantity: 1, price: 2500 },
  { name: 'USB Cable', quantity: 3, price: 250 },
  { name: 'Webcam', quantity: 1, price: 3200 },
  { name: 'External Hard Drive', quantity: 1, price: 4800 },
  { name: 'Laptop Stand', quantity: 2, price: 900 },
];

const totalPrice = cart.reduce((total, item) => {
  return total + (item.price * item.quantity);
}, 0);

console.log(`Total Price: ${totalPrice}`);

