import jsdom from 'jsdom';
// import React from 'react';
// import TestUtils from 'react-addons-test-utils';
// import { expect } from 'chai';
// import sinon from 'sinon';

const document = jsdom.jsdom('<!doctype html><html><body></body></html>');
const window = document.defaultView;

// from mocha-jsdom https://github.com/rstacruz/mocha-jsdom/blob/master/index.js#L80
function propagateToGlobal(window) {
  for (const key in window) {
    if (!window.hasOwnProperty(key)) continue;
    if (key in global) continue;

    global[key] = window[key];
  }
}
propagateToGlobal(window);

// global.expect = expect;
// global.sinon = sinon;
// global.React = React;
// global.TestUtils = TestUtils;
