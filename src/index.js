const checkPlatformCompatibility = require('./platformChecker');
const checkNodeVersionCompatibility = require('./nodeVersionChecker');
const checkDependencyCompatibility = require('./dependencyChecker');

function runCompatibilityCheck() {
    const platformCheck = checkPlatformCompatibility();
    const nodeVersionCheck = checkNodeVersionCompatibility('>=14.0.0'); // Example supported versions
    const dependencyCheck = checkDependencyCompatibility();

    return {
        platformCheck,
        nodeVersionCheck,
        dependencyCheck
    };
}

module.exports = runCompatibilityCheck;

if (require.main === module) {
    const result = runCompatibilityCheck();
    console.log(JSON.stringify(result, null, 2));
}
