function ExpenseItem(type, description, amount) {
    this.type = type;
    this.description = description;
    this.amount = amount;
};

// setting up the isResonable method with prototype
ExpenseItem.prototype.isReasonable = function(){
  return this.amount <= 100;
};