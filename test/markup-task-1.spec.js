/* global describe, it, global */

require('should');

const tags = require('./getUniqTags');

describe('Кол-во тегов.', function(){
    it('Должно быть не менее уникальных 25 тегов.', function () {
        console.log(`Кол-во уникальных тегов: ${tags.length}`);

        (tags.length >= 25).should.be.eql(true);
    });
});
