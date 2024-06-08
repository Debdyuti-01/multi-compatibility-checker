const { execSync } = require('child_process');

function formatDependencies(dependencies) {
    const formatted = {};
    for (const [name, info] of Object.entries(dependencies)) {
        formatted[name] = {
            version: info.version,
            resolved: info.resolved,
            dependencies: info.dependencies ? formatDependencies(info.dependencies) : {}
        };
    }
    return formatted;
}

function checkDependencyCompatibility() {
    try {
        const npmLsOutput = execSync('npm ls --json').toString();
        const dependencies = JSON.parse(npmLsOutput).dependencies;

        // Log the raw dependencies to check the structure
        console.log('Raw dependencies:', dependencies);

        const formattedDependencies = formatDependencies(dependencies);

        return { compatible: true, dependencies: formattedDependencies };
    } catch (error) {
        return { compatible: false, error: error.message };
    }
}

module.exports = checkDependencyCompatibility;
