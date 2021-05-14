  export const getInitialPhotos = () => {
    return fetch(`https://jsonplaceholder.typicode.com/photos`, {
      method: 'GET',
      headers: {
        "Accept": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      });
  }