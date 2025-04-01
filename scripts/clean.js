const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');
const os = require('os');

// Clean build output
const outPath = path.join(__dirname, '..', 'out');
console.log(`Cleaning build output directory: ${outPath}`);
try {
    rimraf.sync(outPath);
    console.log('✓ Build output directory cleaned');
} catch (err) {
    console.error('Failed to clean build output directory:', err.message);
}

// Clean VS Code test instance
const vscodePath = path.join(__dirname, '..', '.vscode-test');
console.log(`Cleaning VS Code test directory: ${vscodePath}`);
try {
    if (process.platform === 'win32') {
        setTimeout(() => {
            rimraf.sync(vscodePath, { 
                force: true,
                maxRetries: 3,
                recursive: true
            });
        }, 1000);
    } else {
        rimraf.sync(vscodePath);
    }
    console.log('✓ VS Code test directory cleaned');
} catch (err) {
    console.warn('Warning: Could not fully clean .vscode-test directory:', err.message);
}

// Clean VS Code extension development host cache
const extensionsCachePaths = [];

// On Windows
if (process.platform === 'win32') {
    extensionsCachePaths.push(path.join(os.homedir(), 'AppData', 'Roaming', 'Code', 'CachedExtensionVSIXs'));
}
// On macOS
else if (process.platform === 'darwin') {
    extensionsCachePaths.push(path.join(os.homedir(), 'Library', 'Application Support', 'Code', 'CachedExtensionVSIXs'));
}
// On Linux
else if (process.platform === 'linux') {
    extensionsCachePaths.push(path.join(os.homedir(), '.config', 'Code', 'CachedExtensionVSIXs'));
}

// Try to clean cache paths
for (const cachePath of extensionsCachePaths) {
    if (fs.existsSync(cachePath)) {
        console.log(`Cleaning extension cache: ${cachePath}`);
        try {
            const files = fs.readdirSync(cachePath);
            // Only remove files that might be related to our extension
            for (const file of files) {
                if (file.includes('agent-workshop') || file.includes('soft-assist')) {
                    const filePath = path.join(cachePath, file);
                    fs.unlinkSync(filePath);
                    console.log(`  Removed cached extension file: ${file}`);
                }
            }
            console.log('✓ Extension cache cleaned');
        } catch (err) {
            console.warn(`Warning: Could not clean extension cache: ${err.message}`);
        }
    }
} 