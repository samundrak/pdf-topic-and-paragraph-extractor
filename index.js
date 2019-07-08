const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync(
  '/home/samundrak/Documents/ books/javascript-the-good-parts.pdf'
);

const renderPage = function(pageData) {
  //check documents https://mozilla.github.io/pdf.js/
  let render_options = {
    //replaces all occurrences of whitespace with standard spaces (0x20). The default value is `false`.
    normalizeWhitespace: false,
    //do not attempt to combine same line TextItem's. The default value is `false`.
    disableCombineTextItems: false,
  };
  //   console.log(pageData);
  return pageData.getTextContent(render_options).then(function(textContent) {
    // if (pageData.pageIndex === 2 || pageData.pageIndex === 81) {
    const mapByTransform = new Map();
    textContent.items.forEach((element) => {
      const { str, transform } = element;
      if (!mapByTransform.has(transform[0])) {
        mapByTransform.set(transform[0], [str]);
      } else {
        mapByTransform.get(transform[0]).push(str);
      }
    });
    console.log(mapByTransform);
    // }
    //     let lastY;
    //     let text = '![pageStart]';
    //     for (let item of textContent.items) {
    //       if (lastY == item.transform[5] || !lastY) {
    //         text += item.str;
    //       } else {
    //         text += '\n' + item.str;
    //       }
    //       lastY = item.transform[5];
    //     }
    //     return text + '![pageEnd]';
  });
};
pdf(dataBuffer, {
  pagerender: renderPage,
}).then(function(data) {
  //   // number of pages
  //   console.log(data.numpages);
  //   // number of rendered pages
  //   console.log(data.numrender);
  //   // PDF info
  //   console.log(data.info);
  //   // PDF metadata
  //   console.log(data.metadata);
  //   // PDF.js version
  //   // check https://mozilla.github.io/pdf.js/getting_started/
  //   console.log(data.version);
  // PDF text
  //   console.log(data.text);
});
