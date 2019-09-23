export const sendFile = async (apiURL, file) => {

  // Use proxy to override browser's same origin policy
  const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
  const formData = new FormData();
  formData.append("file", file);
  try {
    const res = await fetch(PROXY_URL + apiURL, {
      method: "post",
      body: formData
    })
      .then(res => res.text())
      .then(text => JSON.parse(text))
      .catch(error => console.log(error));
    if (res.error) {
      throw Error(res.error);
    }
    return res;
  } catch (error) {    
    console.error(error);
    throw Error(error);
  }
};
