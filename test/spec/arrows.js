(function () {
    'use strict';


    /**
     * @ArrowFunctions
     *
     */
    describe('arrow functions', function () {
        it('provide a compact syntax to define a function', function () {

            let add = (x,y) => {
                return x + y;
            };

            let hello = (name) => `Hello, ${name}`;
            console.log("hello(name)", hello('don'));
            expect(add(2,3)).toBe(5);
            expect(hello('Don')).toBe('Hello, Don');

        });

        it('can be used with array methods', function () {

            let numbers = [1,2,3,4];

            let sum = 0;
            numbers.forEach(n => sum += n);

            expect(sum).toBe(10);

        });

        it('lexically binds to \'this\'', function (done) {

            this.name = 'Don';
            setTimeout(() => {
                expect(this.name).toBe('Don');
                done();
            }, 15);

        });

    });




})();
