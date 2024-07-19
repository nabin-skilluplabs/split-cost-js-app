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

        this.displayUsers();
    }

    this.displayUsers = function() {
        let userElements = '';
        for(let user of this.users) {
            userElements += `<div><img src="${user.photo}" alt="${user.name}" /></div>`
        }
        document.querySelector(".users-wrapper").innerHTML = userElements;
    }

    this.displayExpenses = function() {
        let expenseElements = '';
        for(let expense of this.expenses) {
            expenseElements += `
                    <div class="expenses-item ${expense.isSettled ? 'settled' : ''}">
                    <div>
                        <span>${expense.description}</span>
                        <span>$${expense.amount}</span>
                    </div>
                    <div class="date">${expense.date} </div>
                </div>
            `
        }
        document.querySelector('.expenses-wrapper').innerHTML = expenseElements;
    }

    this.addExpenses = function(event) {
        event.preventDefault();
        console.log('Adding expenses...');
        const description = document.querySelector("#description").value;
        const amount = document.querySelector("#amount").value;
        if(description && amount) {
            const expense = new Expense(description, amount);
            this.expenses.unshift(expense);
    
            this.displayExpenses();
            document.querySelector("form").reset();  
            this.calculateUnsettledAmount();
            this.displayUnsettledAmount();
        }
        return false;
    }

    this.calculateUnsettledAmount = function() {
        let total = 0;
        for(let expense of this.expenses) {
            if(!expense.isSettled) {
                total = total + Number(expense.amount);
            }
        }
        const unsettledAmount = total / this.users.length;
        this.unsettledAmount = unsettledAmount.toFixed(2);
    }

    // this.addNewEventListener = function() {
    //     document.querySelector("form").addEventListener('submit',  (event) => {
    //         this.addExpenses(event);
    //     });
    // }
    this.addSettleNowEventListener = function() {
        document.querySelector("#settleNowBtn").addEventListener("click", () => {
            this.settleNow();
        })
    }

    this.settleNow = function() {
        console.log('Settling now!');
        this.expenses = this.expenses.map(expense => {
            return {...expense, isSettled: true};
        });
        this.displayExpenses();
        this.calculateUnsettledAmount();
        this.displayUnsettledAmount();
    }

    this.addNewUserEventListener = function() {
        document.getElementById("addNewUser").addEventListener('click', () => {
            const randomValue = parseInt(Math.random() * 100);
            this.addUser('Alex', 'alex@gmail.com', '0420400168', `https://randomuser.me/api/portraits/men/${randomValue}.jpg`);
            this.calculateUnsettledAmount();
            this.displayUnsettledAmount();
        })
    }
}

const splitCostApp = new SplitCostApp();
// splitCostApp.addNewEventListener();
splitCostApp.addSettleNowEventListener();
splitCostApp.displayUnsettledAmount();
splitCostApp.addUser('Alex', 'alex@gmail.com', '0420400168', 'https://randomuser.me/api/portraits/men/90.jpg');
splitCostApp.addUser('Jet', 'jet@gmail.com', '0420400162', 'https://randomuser.me/api/portraits/men/80.jpg');
splitCostApp.addUser('Jacky', 'jacky@gmail.com', '0420400164', 'https://randomuser.me/api/portraits/men/70.jpg');
splitCostApp.addNewUserEventListener();
