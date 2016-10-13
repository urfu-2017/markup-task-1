/* global describe, it, global */

require('should');
const fs = require('fs');
let files = fs.readdirSync('.');

files = files.filter(file => {
    return fs.statSync(file).isFile() && /\.html$/.test(file);
});

describe('Кол-во html файлов', () => {
    it('Должен быть один html-файл в проекте', () => {
        files.length.should.be.eql(1);
    });
});

module.exports = fs.readFileSync(files[0], 'utf-8');
