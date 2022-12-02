module.exports = (function (eleventyConfig) {
  let options = {
    html: true,
    breaks: true,
    linkify: true
  };
  var markdownIt = require("markdown-it")(options);
  var markdownItAttrs = require('markdown-it-attrs');

  markdownIt.use(markdownItAttrs, {
    leftDelimiter: '{',
    rightDelimiter: '}',
    allowedAttributes: []
  });

  eleventyConfig.setLibrary("md", markdownIt);
  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.addFilter("displaySlides", function (items, className) {
    var returnValue = '';
    items.forEach(element => {
      if (element.type == 'image') {
        returnValue = returnValue + `<div class="${className}" style="background-image: url(${element.filename});"></div>`;
      }
      if (element.type == 'weather') {
        returnValue = returnValue + `<div class="${className} weather"></div>`;
      }
      if (element.type == 'calendar') {
        returnValue = returnValue + `<div class="${className} calendar-slide"><p class="room">${element.title}</p><div class="calendar-items" data-calendarid="${element.data}"></div><div class="calendar-footer"></div></div>`;
      }
    });
    return returnValue;
  });
});
