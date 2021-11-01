/***************Api function*************************/

const api = (url) => {
  console.log("hello")

  let apiUrl =
  {
    originalApi: "http://localhost:3000/api/furniture/",
    postApi: "http://localhost:3000/api/furniture/order/",
  }
  console.log(apiUrl[originalApi]);
  return apiUrl[url];
}

console.log("coucou");