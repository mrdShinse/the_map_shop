/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import React from 'react';
import ReactDOM from 'react-dom';

import MapForm from './components/MapForm';

const componentsIndex = {
  'map-form': MapForm,
};

const mountEntries = () => {
  Object.keys(componentsIndex).forEach((id: string) => {
    const Component = componentsIndex[id];
    const node = document.getElementById(id);
    const props = JSON.parse(node != null ? node.getAttribute('data-props') : '{}');
    if (node) {
      ReactDOM.render(
        <Component {...props} />,
        node,
      );
    }
  });
}

document.addEventListener("DOMContentLoaded", mountEntries);
