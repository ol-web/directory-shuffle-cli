const glob = require("glob");
const shuffle = require("lodash/shuffle");
const nanoid = require("nanoid");
const fs = require("mz/fs");
const path = require("path");

module.exports = (dir, preview = false) => {
    return new Promise((resolve, reject) => {
        glob(path.join(dir, "*.*"), {}, async (err, files) => {
            if (err) reject(err);
            else if (preview) return resolve(files);

            const id = nanoid();
            const shuffled = shuffle(files);
            const shuffleFile = async (file, i) => {
                const fileContent = await fs.readFile(file);
                const ext = path.extname(file);
                const newName = i + "-" + id;
                const newPath = path.join(dir, newName + ext);
                await Promise.all([fs.writeFile(newPath, fileContent), fs.unlink(file)]);
            };

            await Promise.all(shuffled.map(shuffleFile));
            resolve();
        });
    });
};