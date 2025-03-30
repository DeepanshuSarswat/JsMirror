String.prototype.mySplit = function (divider) {
    const output = [];
    const stringValue = this;

    if (divider === "") return Array.from(stringValue); // Edge case: empty string

    function splitStr(str) {
        if (str.length === 0) return; // Base case

        const indexOfDivider = str.indexOf(divider);

        if (indexOfDivider !== -1) {
            output.push(str.substring(0, indexOfDivider-1)); // Push substring before divider
            splitStr(str.substring(indexOfDivider + divider.length)); // Recur for remaining string
        } else {
            output.push(str); // Push last remaining part
        }
    }

    splitStr(stringValue);

    return output;
};

const line = 'the dog ran across the park and jumped over the fence';
const lineArr = line.mySplit("the");
console.log(lineArr, "lineArr");
