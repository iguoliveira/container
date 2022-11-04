const URL = "http://localhost:8000";

export const fetchProduct = async () => {
  const res = await fetch(`${URL}/products-list`);
  return await res.json();
};

export const fetchUser = async () => {
  const res = await fetch(`${URL}/users-list`);
  return await res.json();
};

export const fetchOrder = async () => {
  const res = await fetch(`${URL}/orders-list`);
  return await res.json();
};

export const postOrder = async (data) => {
  const res = await fetch(`${URL}/insert-order`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
};

export const postProduct = async (data) => {
  const res = await fetch(`${URL}/insert-product`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const postUser = async (data) => {
  const res = await fetch(`${URL}/insert-user`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const udpateProduct = async (data) => {
  const res = await fetch(`${URL}/update-product`, {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const deleteProduct = async (data) => {
  const res = await fetch(`${URL}/delete-product`, {
    method: "DELETE",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const deleteOrder = async (data) => {
  const res = await fetch(`${URL}/delete-order`, {
    method: "DELETE",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
