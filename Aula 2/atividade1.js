class StringManipulations {

    /**
     * Class for string manipulations
     * @param  {String} string  
     */
    constructor(string) {
        this.string = string;
    }

    /**
     * Returns the first substring that matches the given string
     * @param  {String} subStr  substring to be matched
     * @return {String}
     */
    findFirstMatch(subStr) {
        let matchs = this.string.toUpperCase().indexOf(subStr.toUpperCase())
        return matchs >= 0 ? subStr : ""
    }

    /**
     * Returns the last substring that matches the given string
     * @param  {String} subStr  substring to be matched
     * @return {String}
     */
    findLastMatch(subStr) {
        let matchs = this.string.toUpperCase().lastIndexOf(subStr.toUpperCase())
        return matchs >= 0 ? subStr : ""
    }

    /**
     * Returns the fsubstring between two given other strings
     * @param  {String} subStr1  begining of the match
     * @param  {String} subStr2  ending of the match
     * @return {String}
     */
    substringBetweenMatches(subStr1, subStr2) {
        if (this.findFirstMatch(subStr1) != "" && this.findFirstMatch(subStr2) != "") {
            let firstIndice = this.string.toUpperCase().indexOf(subStr1.toUpperCase())
            let lastIndice = this.string.toUpperCase().indexOf(subStr2.toUpperCase())
            return this.string.slice(firstIndice, lastIndice).trim()

        } else {
            return ""
        }
    }

    /**
    Given the string attribute of the class, 
    return a string made of the first 2
    and the last 2 chars of the original string.
    If the string length is less than 2, 
    return instead the empty string.
    * @return {String}
    */
    both_ends() {
        if (this.string.length >= 2) {
            let arrayString = this.string.split('')
            let newString = arrayString[0] + arrayString[1] + arrayString[arrayString.length - 2] + arrayString[arrayString.length - 1]
            return newString
        } else {
            return ""
        }
    }

    /**
     Given a string, return a string
    where all occurences of its first char have
    been changed to '*', except do not change
    the first char itself.
    e.g. 'babble' yields 'ba**le'
    * @param  {String} str1  
    * @return {String}
    */
    fix_start(str1) {
        let arrayStr = str1.split("")

        let newString = arrayStr.map(function(char, indice) {
            if (indice != 0 && char == arrayStr[0]) {
                return "*"
            }
            return char
        })
        return newString.join('')
    }

}

module.exports = StringManipulations;