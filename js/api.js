/***************Api function*************************/

const api = (url) => {
  let apiUrl =
  {
    originalApi: "http://localhost:3000/api/furniture/",
    postApi: "http://localhost:3000/api/furniture/order/",
  }

  return apiUrl[url];
}
