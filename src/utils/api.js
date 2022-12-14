const BASE_URL = "https://jsonplaceholder.typicode.com/";

const GET = async (path) => {
  const res = await fetch(BASE_URL + path);

  return await res.json();
};

const GETCOMMENT = async (path, specific = "", param) => {
  const res = await fetch(BASE_URL + path + "/" + specific + "/" + param);

  return await res.json();
};

export { GET, GETCOMMENT };
