(function () {

    'use strict';

    /**
     * @let
     * Replacing var.
     * Var only has global scope and function scope.
     * Let will provide block scoping
     */
    describe("how let works", function () {

        var doWork = function (flag) {
            if (flag) {
                let x = 3;
            }
            return x;
        };
        let result = doWork(true);
        expect(result).toBe(3);

    });


})();
