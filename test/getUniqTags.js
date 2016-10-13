const html = require('./getHtml');

const commonTags = ['html', 'head', 'meta', 'title', 'link', 'body'];
const foundTags = [];

html.match(/\<\s*[a-z]+/ig).forEach(tag => {
    tag = tag.replace('<', '');

    if (commonTags.indexOf(tag) === -1 && foundTags.indexOf(tag) === -1) {
        foundTags.push(tag);
    }
});

module.exports = foundTags;
