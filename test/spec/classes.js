/**
 * Created by DivineDon on 12/13/2015.
 */
(function () {
    'use strict';

    /**
     * @Classes
     */
    describe('the class keyword', function () {
        it('can create a class', function () {

            class Employee {
                doWork() {
                    return 'complete!';
                }

                getName() {
                    return 'Don';
                }
            }

            let e = new Employee();

            expect(e.doWork()).toBe('complete!');
            expect(e.getName()).toBe('Don');

        })
    });
})();
