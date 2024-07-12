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
    this.unsettledAmount = 0;
    this.users = [];
    this.expenses = []
}