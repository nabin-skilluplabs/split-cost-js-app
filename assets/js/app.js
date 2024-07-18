function User(name, email, mobile, photo ) {
    this.name = name;
    this.email = email;
    this.mobile = mobile;
    this.photo = photo;
}


function Expense(description, amount) {
    this.description = description;
    this.amount = amount;
    this.isSettled = false;
    this.date = new Date();
}

function SplitCostApp() {
    this.unsettledAmount = 20.00;
    this.users = [];
    this.expenses = [];

    this.displayUnsettledAmount = function() {
        document.querySelector(".amount").textContent = `$${this.unsettledAmount}`; 
    }

    this.addUser = function(name, email, mobile, photo) {
        const user = new User(name, email, mobile, photo);
        this.users.push(user);
    }

    this.displayUsers = function() {
        let userElements = '';
        for(let user of this.users) {
            userElements += `<div><img src="${user.photo}" alt="${user.name}" /></div>`
        }
        document.querySelector(".users-wrapper").innerHTML = userElements;
    }
}

const splitCostApp = new SplitCostApp();
splitCostApp.displayUnsettledAmount();
splitCostApp.addUser('Alex', 'alex@gmail.com', '0420400168', 'https://randomuser.me/api/portraits/men/90.jpg');
splitCostApp.displayUsers();
