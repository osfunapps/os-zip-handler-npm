const StreamZip = require('node-stream-zip');
const fh = require('os-file-handler');

const self = module.exports = {

    /**
     * Will extract a bunch of zips, from their archive, each to a given destination
     *
     * @param zips -> could be a dictionary {zipPath: destinationPath} or an array (in this scenario
     * the zip will be extracted in the directory they contain)
     * @param createIndividualDirs -> will create a directory for each extracted zip to keep
     * things in order
     */
    extractZips: async function (zips, createIndividualDirs=true) {

        if (Array.isArray(zips)) {
            for (let i = 0; i < zips.length; i++) {
                let dest = fh.getParentDirPath(zips[i]);
                if(createIndividualDirs) {
                    dest = fh.joinPath(dest, fh.getFileNameFromPath(zips[i], false))
                }
                fh.createDir(dest);
                await extractZip(zips[i], dest);
            }
        } else {
            for (let zipPath in zips) {
                if (zips.hasOwnProperty(zipPath)) {
                    let dest = zips[zipPath];
                    if(createIndividualDirs) {
                        dest = fh.joinPath(dest, fh.getFileNameFromPath(zipPath, false))
                    }
                    fh.createDir(dest);
                    await extractZip(zipPath, dest);
                }
            }
        }
    },
};

function extractZip(zipPath, destPath) {
    return new Promise(async function (resolve, reject) {
        if(!await fh.isFileOrDirExists(zipPath)) {
            console.log("ERROR: Can't extract non existing zip: " + zipPath)
            resolve()
            return
        }
        const zip = new StreamZip({file: zipPath, storeEntries: true});
        zip.on('ready', () => {
            zip.extract(null, destPath, (err, count) => {
                zip.close();
                resolve()
            });
        });
    }.bind())
}