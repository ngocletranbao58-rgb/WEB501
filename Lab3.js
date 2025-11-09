// Bài 1: Chuyển đổi hàm
// Function 1
// function multiply(a, b) {
//     return a * b;
// }
// Function 1
const multiply = (a, b) => a * b;

// Function 2
// function isPositive(number) {
//     return number >= 0;
// }
// Function 2
const isPositive = number => number >= 0;

// Function 3
// function getRandomNumber() {
//     return Math.random();
// }
// Function 3
const getRandomNumber = () => Math.random();

// Function 4
// document.addEventListener("click", function () {
//     console.log("Clicked!");
// });
// Function 4 (phiên bản Node.js)
const handleClick = () => {
    console.log("Clicked!");
};

handleClick();

//Bài 2: Sử dụng Default Parameters
function createUser(name = "Nam", age = 17, isAdmin = false) {
    return {
        name,
        age,
        isAdmin,
    };
}

console.log(createUser());
console.log(createUser("Ngọc", 19));
console.log(createUser("Admin", 20, true));

//Bài 3:  Rest và Spread
const student = {
    name: "Lê Trần Bảo Ngọc",
    age: 19,
    major: "Công nghệ thông tin",
    scores: [10, 10, 10, 10]
};

const { name, age, major, scores } = student;

const [score1, score2, score3, score4] = scores;

const average = ((score1 + score2 + score3 + score4) / 4).toFixed(2);

console.log(`Thông tin sinh viên:`);
console.log(`Họ tên: ${name}`);
console.log(`Tuổi: ${age}`);
console.log(`Ngành học: ${major}`);
console.log(`Điểm trung bình: ${average}`);

//Bài 4: Ứng dụng thực tế
function shoppingCart(customerName, ...products) {
    return {
        customer: customerName,
        items: products,
        totalItems: products.length
    };
}

const order1 = shoppingCart("Lê Trần Bảo Ngọc", "Bánh mì", "Sữa", "Trứng", "Táo");

console.log(order1);
