(function () {
    'use strict';


    /**
     * @ArrowFunctions
     *
     */
    describe('arrow functions', function () {
        it('provide a compact syntax to define a function', function () {

            let add = (x,y) => x + y;

            expect(add(2,3)).toBe(5)

        });

    });




})();
