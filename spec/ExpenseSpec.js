describe("Expense objects", function(){

    var expenseItem, expense;

    beforeEach(function(){
        expenseItem = new ExpenseItem(100);
        expense = new Expense(expenseItem);
    });

    it("should be of type ExpenseItem", function(){
        // use an assertion or "matchers" in jasmine ie. toBe
        expect(expense.expenseItem).toBe(expenseItem);

    });

    it("shoud have the correct expense amount", function(){
        expect(expense.expenseItem.amount).toEqual(100);

    });

});