const url = 'http://localhost:3000/products';

const ListProducts = () => fetch(url).then((res) => res.json());

const AddProduct = (product) =>
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  });

export const productServices = {
  ListProducts,
  AddProduct,
};
