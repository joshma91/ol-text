export const sendFile = async (apiURL, file) => {
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const formData = new FormData()
  formData.append('file', file)
  const res = await fetch(proxyurl + apiURL, {
    // headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    method: "post",
    body: formData
  })
  .then(res => res.text())
  .then(text => JSON.parse(text));
  
  return res
};
