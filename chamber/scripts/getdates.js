const currentYear = new Date().getFullYear();
document.getElementById('copyright').innerHTML = `&copy; ${currentYear} Isaac Huffman, Idaho`;

var lastModifiedDate = new Date(document.lastModified);
document.getElementById('lastModified').innerHTML = `Last Modified: ${lastModifiedDate}`;