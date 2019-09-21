export const sendFile = async (apiURL, file) => {
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const formData = new FormData();
  formData.append("file", file);
  try {
    const res = await fetch(proxyurl + apiURL, {
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
  }
};
