export const fetchProduct = async () => {
  const res = await fetch("http://localhost:8000/products-list");
  return await res.json();
};

export const fetchUser = async () => {
  const res = await fetch("http://localhost:8000/users-list");
  return await res.json();
};

export const fetchOrder = async () => {
  const res = await fetch("http://localhost:8000/orders-list");
  return await res.json();
};

export const postOrder = async (data) => {
  const res = await fetch("http://localhost:8000/insert-order", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
};

export const postProduct = async (data) => {
  const res = await fetch("http://localhost:8000/insert-product", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const postUser = async (data) => {
  const res = await fetch("http://localhost:8000/insert-user", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const udpateProduct = async (data) => {
  const res = await fetch("http://localhost:8000/update-product", {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const deleteProduct = async (data) => {
  const res = await fetch("http://localhost:8000/delete-product", {
    method: "DELETE",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
