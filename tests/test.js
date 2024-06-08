const runCompatibilityCheck = require('../src/index');

function testCompatibilityChecker() {
    const result = runCompatibilityCheck();
    console.log('Compatibility Check Result:', JSON.stringify(result, null, 2));
}

testCompatibilityChecker();
