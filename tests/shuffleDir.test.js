const shuffleDir = require("../lib/shuffleDir");
const path = require("path");
const fs = require("mz/fs");

describe("shuffleDir", () => {
    beforeAll(async () => {

    });

    afterAll(async () => {

    });

    it("shuffles a directory", async () => {
        expect.assertions(1);

        const testDir = path.join(__dirname, "test_dir");
        const beforeShuffle = fs.readdirSync(testDir);
        await shuffleDir(testDir);
        const afterShuffle = fs.readdirSync(testDir);

        expect(beforeShuffle).not.toEqual(afterShuffle);
    });
});
