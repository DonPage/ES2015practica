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

        });
        it('can create a class', function(){

            class Employee {

                constructor(name) {
                    this._name = name;
                }

                doWork() {
                    return 'complete!'
                }

                getName() {
                    return this._name;
                }
            }

            let e1 = new Employee('Don');
            let e2 = new Employee('Alex');

            expect(e1.getName()).toBe('Don');
            expect(e2.getName()).toBe('Alex');
        });
    });
})();
