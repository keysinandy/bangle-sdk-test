
const requestBase = 'http://127.0.0.1:8080'
export const ajax = (url: string) => {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", requestBase+url);
    xhr.onreadystatechange = function () {
      if(xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status >= 200 || xhr.status < 300) {
          resolve(xhr.response)
        } else {
          reject(xhr.response)
        }
      }
    }
  })
}

export const fet = (url: string) => {
  return fetch(requestBase+ url)
  .then(function(response) {
    if (response.ok) {
      return response.json()
    }
  })
}
