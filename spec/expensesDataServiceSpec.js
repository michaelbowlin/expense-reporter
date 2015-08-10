'use strict'
describe('expensesDataService', function(){

    beforeEach(module('app'));

    it('should return three expense items', inject(function(expensesDataService) {
        expect(expensesDataService.getExpenses().length).toBe(3);
    }));

    it('should return a taxi expense', inject(function(expensesDataService) {
        var expenseItems = expensesDataService.getExpenses();
        // create an instance of the expenseItem
        var testExpenseItem = new ExpenseItem('Taxi','To airport','89.95');
        expect(expenseItems).toContain(testExpenseItem);

    }));

    // nested describe
    describe('reasonable expenses', function(){

        var taxi;
        var dinner;

        beforeEach(function(){
            jasmine.addMatchers(customMatchers);
        });

        beforeEach(function(){
            taxi = new ExpenseItem('Taxi','To airport','89.95');
            dinner = new ExpenseItem('Dinner','Dinner with John and Ward',189.50);
        });

        // custom matcher
        it('taxi should be a reasonable expense', function(){
            expect(taxi).toBeAResonableExpense();
        });

        it('dinner should not be a reasonable expense', function(){
           expect(dinner).not.toBeAResonableExpense();
        });

    });
});