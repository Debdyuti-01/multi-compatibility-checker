const os = require('os');

function checkPlatformCompatibility() {
    const platform = os.platform();
    const supportedPlatforms = ['win32', 'darwin', 'linux'];

    if (supportedPlatforms.includes(platform)) {
        return { compatible: true, platform };
    } else {
        return { compatible: false, platform };
    }
}

module.exports = checkPlatformCompatibility;
