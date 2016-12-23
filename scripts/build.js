require('shelljs/global');
const command = process.argv[2];
switch (command) {
    case 'dev':
        exec('jspm bundle configs/vendor.config.dev.js temp/vendor.dev.js');
        break;
    case 'app':
        cp('assets/*', 'dist');
        cp('index.prod.html', 'dist/index.html');
        exec('jspm bundle-sfx src/app.js - configs/vendor.config.prod.js dist/app.js --skip-source-maps --minify --no-mangle --format umd');
        break;
    case 'vendor':
        exec('jspm bundle-sfx configs/vendor.config.prod.js dist/vendor.prod.js --skip-source-maps --minify --no-mangle --format global');
        cp('-R', ['config.js', 'jspm_packages/system.js'], 'dist');
        break;
    default:
        console.log('\nUsage: node build.js <arg>');
        console.log('\nwhere <arg> is one of:');
        console.log('    dev, app, vendor, debug\n');
        break;
}