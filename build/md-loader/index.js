const slugify = require('transliteration').slugify
const markdownItAnchor = require('markdown-it-anchor')
const hljs = require('highlight.js');


const MarkdownIt = require('markdown-it')
const parser = new MarkdownIt({
  html: true,
  highlight
}).use(markdownItAnchor, {
  level: 2,
  slugify
});

function highlight(str, lang) {
  if (lang && hljs.getLanguage(lang)) {
    return hljs.highlight(lang, str, true).value;
  }
  return '';
}

function cardWrapper(html) {
  const group = html.replace(/<h3/g, ':::<h3').replace(/<h2/g, ':::<h2').split(':::');
  return group.map(fragment => {
    if (fragment.indexOf('<h3') !== -1) {
      return `<div class="card">${fragment}</div>`;
    }
    return fragment;
  }).join('');
}

// 便于 vue-loader 使用
function wrapper(content) {
  content = cardWrapper(content)
  content = escape(content)
  return `
    <template>
      <section v-html="content"></section>
    </template>
    <script>
    export default {
      data() {
        return {}
      },
      created() {
        this.content = unescape(\`${content}\`);
      }
    }
    </script>
  `
}

module.exports = function(source) {
  return wrapper(parser.render(source))
}