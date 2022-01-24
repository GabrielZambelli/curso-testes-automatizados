const StringManipulations = require('./atividade1');

describe("StringManipulations class teste", () => {
    const defaultString = "it those who don't believe in magic will never find it"
    let stringManipulator

    beforeAll(() => {
        stringManipulator = new StringManipulations(defaultString)
    })

    describe("StringManipulations, func First/Last match", () => {
        it("should return the first matched substring for a given string", () => {
            // arrange
            const output = 'magic';

            //act
            const result = stringManipulator.findFirstMatch("magic")

            //assert
            expect(result).toEqual(output);
        })

        it("should return the last matched substring for a given string", () => {
            // arrange
            const output = "it"
            //act
            const actual = stringManipulator.findLastMatch("it")
            //assert
            expect(actual).toEqual(output);
        })

        it("should return the firt matching substring for a given string no case sensitive", () => {
            // arrange
            const output = "WILL"
            //act
            const result = stringManipulator.findFirstMatch("WILL")
            //assert
            expect(result).toEqual(output);
        })

        it("should return the last matching substring for a given string no case sensitive", () => {
            // arrange
            const output = "IT"
            //act
            const result = stringManipulator.findLastMatch("IT")
            //assert
            expect(result).toEqual(output);
        })
        it("should return a value when there is no matching string", () => {
            // arrange
            const output = ""
            //act
            const resultFirts = stringManipulator.findFirstMatch("its")
            const resultLast = stringManipulator.findLastMatch("its")
            //assert
            expect(resultFirts).toEqual(output);
            expect(resultLast).toEqual(output);
        })
    })

    describe("StringManipulations, Func BetweenMatch", () => {
        it("should return between substring for a given string", () => {
            // arrange
            const output = 'it those who don\'t';

            //act
            const findFirstFunc = jest.spyOn(stringManipulator, "findFirstMatch");
            const result = stringManipulator.substringBetweenMatches("it", "believe")

            //assert
            expect(result).toEqual(output);
            expect(findFirstFunc).toHaveBeenCalled();
        })

        it("should return between substring for a given string no case sensitive", () => {
            // arrange
            const output = 'it those who don\'t';

            //act
            const findFirstFunc = jest.spyOn(stringManipulator, "findFirstMatch");
            const result = stringManipulator.substringBetweenMatches("IT", "Believe")

            //assert
            expect(result).toEqual(output);
            expect(findFirstFunc).toHaveBeenCalled();
        })

        it("should return empty string when there is no matching between string", () => {
            // arrange
            const output = '';

            //act
            const findFirstFunc = jest.spyOn(stringManipulator, "findFirstMatch");
            const result = stringManipulator.substringBetweenMatches("it", "not")

            //assert
            expect(result).toEqual(output);
            expect(findFirstFunc).toHaveBeenCalled();
        })
    })

    describe("StringManipulations, Func both_ends", () => {
        beforeEach(() => {
            stringManipulator = new StringManipulations("home")
          });

          afterEach(() => {
            stringManipulator = new StringManipulations(defaultString)
          });

        it("should return the first and last two characters of a string", () => {
            // arrange
            const output = 'home';

            //act
            const result = stringManipulator.both_ends()

            //assert
            expect(result).toEqual(output);
        })

    })

    describe("StringManipulations, Func both_ends", () => {
        beforeEach(() => {
            stringManipulator = new StringManipulations("h")
          });

          afterEach(() => {
            stringManipulator = new StringManipulations(defaultString)
          });

        it("should return an empty string when the string is less than 2 characters", () => {
            // arrange
            const output = '';

            //act
            const result = stringManipulator.both_ends()

            //assert
            expect(result).toEqual(output);
        })

    })

    describe("StringManipulations, Func fix_start", () => {
        it("should return a string where characters equal to the first must be obfuscated", () => {
            // arrange
            const output = "ba**le";
            //act
            const result = stringManipulator.fix_start("babble")
            //assert
            expect(result).toEqual(output);
        })

    })
})