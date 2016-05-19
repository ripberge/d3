var gulp = require('gulp');
var smash = require('smash');
var path = require('path');
var fs = require('fs');

// Build custom D3 version
// -----------------------

const D3_MODULES = [
    "start.js",
    "behavior/drag.js",
    "behavior/zoom.js",
    "compat/index.js",
    "geom/quadtree.js",
    "transition/transition.js",
    "end.js"
];
const D3_DIR = './';
const D3_BUILD_FILE = path.join(D3_DIR, 'd3-custom.js');

module.exports = function (){
    var paths = D3_MODULES.map(function (p) {
        return path.resolve(path.join(D3_DIR, 'src', p));
    });
    console.log(paths);
    smash(paths)
        .pipe(fs.createWriteStream(D3_BUILD_FILE));
};
