(function () {

    'use strict';

    /**
     * @let
     * Replacing var.
     * Var only has global scope and function scope.
     * Let will provide block scoping
     */
    describe('how let works', function () {
        it('will provide block scoping, unlike var', function () {
            var doWork = function (flag) {
                if (flag) {
                    let x = 3;
                    return x;
                }
                //line below will fail since x is scoped to the if statement.
                //return x;
            };
            let result = doWork(true);
            expect(result).toBe(3);
        });
    });

    /**
     * @const
     * Block scoped.
     * A variable you can never change. (read-only)
     */
    describe('how const works', function () {
        it('will make a variable read-only', function () {
            const MAX_SIZE = 10;

            //MAX_SIZE = 20; //Syntax Error, const are read only.

            expect(MAX_SIZE).toBe(10);

        })
    });


    /**
     * @Destructuring
     * Operation allows you to assign values to a set of variables.
     */
    describe('destructuring', function () {
        'use strict';
        it('can destructure arrays', function () {

            let [, x, y, z] = [1, 3, 2, 10];
            console.log([, x, y]);

            expect(x).toBe(3);
            expect(y).toBe(2);
        });

        it('can destructure objects', function () {

            let doWork = function () {
                return {
                    firstName: 'don',
                    lastName: 'page',
                    twitter: 'Code'
                };
            };

            let {
                firstName: firstName,
                twitter: twitter
                } = doWork();

            expect(firstName).toBe('don');

        });

        it('works with parameters', function () {

            let doWork = function (url, {data, cache}) {
                console.log(data);
                return data

            };

            let results = doWork(
                'api/test',
                {data: 'test', cache: false}
            );

            expect(results).toBe('test');

        });
    });

    /**
     * @DefaultParameterValues
     * If caller doesn't pass value for function you can set a default.
     */
    describe('default parameters', function () {
        it('provides defaults', function () {

            let getName = function (name='Don') {
                return name;
            };

            let result = getName();

            expect(result).toBe('Don');

        })
    });

})();
