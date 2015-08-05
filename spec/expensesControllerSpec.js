describe('expensesController', function() {

    // Set up to bring in a controller
    var $controllerConstructor;
    var scope;

    beforeEach(module('app'));

    // We get inject from Angular Mocks JS
    beforeEach(inject(function($controller, $rootScope){
        $controllerConstructor = $controller;
        scope = $rootScope.$new();
    }));


    it('should have three expense items', function(){
        // creating an instance of the controller
        var ctrl = $controllerConstructor('expensesController', {$scope:scope});
        expect(ctrl.expenseItems.length).toBe(3);
    });
});