"use strict";
let anyFlag;
const globalVar = 'Message';
function logInfo(data, _) {
    console.log(data);
    anyFlag = true;
    console.log(anyFlag);
}
function multiple(a, b) {
    if (a && b) {
        return a * b;
    }
    return;
}
logInfo('I am log string');
//# sourceMappingURL=app.js.map