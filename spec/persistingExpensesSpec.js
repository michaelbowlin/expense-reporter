'use strict';
describe('persisting expenses', function(){

    beforeEach(module('app'));

    describe('call backs', function(){
        it('should call back when persisted', inject(function(expensesDataService){

            // creating a spy
            var spyCallBack = jasmine.createSpy('callBackSpy');
            expensesDataService.persistExpenses(spyCallBack);
            expect(spyCallBack).toHaveBeenCalled();

        }));
    });

});