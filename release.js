// const input = require('prompt');
// const format = require('json-format')
// const packageData = require('./package.json')
// const proc = require('child_process')
//
//
// function getNextVersion() {
//     let version = packageData.version.split('.');
//     const last = parseInt(version[version.length - 1]);
//     version[version.length - 1] = String(last + 1);
//     return version.join('.');
// }
//
// type SchemaItem = {
//     name: string;
//     description?: string;
//     type?: string;
//     pattern?: RegExp;
//     message?: string;
//     hidden?: string;
//     replace?: string;
//     default?: any;
//     required?: boolean;
// } | string
//
// function getInput<T>(schema: SchemaItem[]) {
//     return new Promise<T>((resolve, reject) => {
//         input.get(schema, function (err: any, result: T) {
//             if (err) reject(err)
//             else resolve(result)
//         });
//     })
// }
//
// const nextVersion = getNextVersion()
// getInput<{ version: string, commit: string }>([{
//     name: 'version',
//     default: nextVersion
// }, 'commit']).then(result => {
//     console.log(result)
//     packageData.version = result.version;
//     proc.execSync('git add .')
//     proc.execSync(`git commit -m "${result.commit || 'push version ' + result.version}"`)
//     console.log("start push code...")
//     proc.exec('git push origin main', (error: any, stdout: string) => {
//         if (error) {
//             console.log('release failed:', error)
//         } else {
//             console.log(stdout)
//             console.log('release success!')
//         }
//     })
//
// });
// export {}

const input = require('prompt');
const format = require('json-format')
const packageData = require('./package.json')
const proc = require('child_process')


function getNextVersion() {
    let version = packageData.version.split('.');
    const last = parseInt(version[version.length - 1]);
    version[version.length - 1] = String(last + 1);
    return version.join('.');
}

function getInput(schema) {
    return new Promise((resolve, reject) => {
        input.get(schema, function (err, result) {
            if (err) reject(err)
            else resolve(result)
        });
    })
}

const nextVersion = getNextVersion()
getInput([{
    name: 'version',
    default: nextVersion
}, 'commit']).then(result => {
    console.log(result)
    packageData.version = result.version;
    proc.execSync('git add .')
    proc.execSync(`git commit -m "${result.commit || 'push version ' + result.version}"`)
    console.log("start push code...")
    proc.exec('git push origin main', (error, stdout) => {
        if (error) {
            console.log('release failed:', error)
        } else {
            console.log(stdout)
            console.log('release success!')
        }
    })

});