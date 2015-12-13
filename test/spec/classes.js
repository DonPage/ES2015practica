/**
 * Created by DivineDon on 12/13/2015.
 */
/**
 * @SpreadOperator
 * Spread array over individual parameters.
 */
describe('spread parameters', function () {
    it('can spread an array across parameters', function () {

        let doWork = function (x, y, z) {
            return x + y + z;
        };
        let otherArray = [2, 3];
        let array = [1, ...otherArray];
        console.log("array", array);
        var result = doWork(...array);

        expect(result).toBe(6);

    })
});