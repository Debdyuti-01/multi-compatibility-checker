const semver = require('semver');

function checkNodeVersionCompatibility(supportedVersions) {
    const currentNodeVersion = process.version;

    if (semver.satisfies(currentNodeVersion, supportedVersions)) {
        return { compatible: true, version: currentNodeVersion };
    } else {
        return { compatible: false, version: currentNodeVersion };
    }
}

module.exports = checkNodeVersionCompatibility;
