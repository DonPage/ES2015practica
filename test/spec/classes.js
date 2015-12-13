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

        it('can have constructor', function(){

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

        it('can have getters and setters', function(){

            class Employee {

                constructor(name) {
                    this._name = name;
                }

                doWork() {
                    return 'complete!'
                }

                get name() {
                    return this._name;
                }

                set name(newVal) {
                    this._name = newVal;
                }
            }

            let e1 = new Employee('Don');
            let e2 = new Employee('Alex');

            e2.name = 'Chris';

            expect(e1.name).toBe('Don');
            expect(e2.name).toBe('Chris');
        });
    });
})();
