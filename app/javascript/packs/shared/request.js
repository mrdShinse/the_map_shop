import { csrfToken } from 'rails-ujs'
const qs           = require('qs')

const request = (path, params, onSuccess = null, onError = null, method = 'GET') => {
  let url = path
  let options = {
    method: method,
    credentials: 'same-origin',
    headers: {
      'X-CSRF-Token': csrfToken(),
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    }
  }

  if (method === 'GET') {
    url = `${path}?${qs.stringify(params, { encode: false })}`;
  } else {
    options.body = JSON.stringify(params);
  }

  fetch(url, options)
  .then((res) => {
    return res.json()
  }).then((json) => {
    if (typeof onSuccess === 'function') { onSuccess(json); }
  })
  .catch((e) => {
    if (typeof onError === 'function') {
      onError(e);
    } else {
      $.growl('エラーが発生しました', { type: 'danger', z_index: 1500 });
    }
  })
}

export default request
