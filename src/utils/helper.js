const fetchAPI = (url, option) => fetch(url, option)
  .then(r => r.json())
  .then(r => ({ res: r }))
  .catch(e => ({ err: e }));

  export default fetchAPI;

  export const Validator = {
    email : email =>{
      return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    },
    password : password =>{
      return /^(?=.*\d)(?=[^\s])(?=.*[a-zA-Z]).{5,63}([^\s])$/.test(password);
    }
  };
