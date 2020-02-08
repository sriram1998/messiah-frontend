export const dataFetch = async (url, data, authReq = false) => {
  if (authReq) {
      const user = useSelector(state => state.user);

      if (user) {
          data.user_id = user.user_id;
          data.user_token = user.user_token;
      } else {
          return {message: 'User not logged in!', status_code: 400};
      }
  }
  const apiConfig = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      credentials: 'same-origin',
      body: JSON.stringify(data)
  };

  return fetch(APIURL + url, apiConfig)
      .then(function(response) {
          return response.json().then(json => {
              return json; //Gets cascaded to the next then block
          });
      })
      .catch(function(error) {
          throw error; //gets caught in the higher catch block
      });
};