import { useState, useEffect } from 'react'
const url = 'http://localhost:3000/products';

const Products = (param = null) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  // const [callFetch, setCallFetch] = useState(false);
  const [productId, setProductId] = useState(null)

  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
    } else if (method === "DELETE") {
      setConfig({
        method,
        headers: {
          'Content-Type': 'application/json',
        }
      });
      setProductId(data);
    }
    setMethod(method);
  };

  useEffect(() => {
    const fetchData = async () => {
      let res;
      setLoading(true);
      try {
        if (param != null) {
          res = await fetch(`${url}/${param}`)
        } else {
          res = await fetch(url);
        }
        const json = await res.json();
        setData(json);
      } catch (error) {
        setError("Erro ao carregar os dados");
      }
      setLoading(false);
    }
    fetchData()
  }, []);

  //POST
  useEffect(() => {
    const httpRequest = async () => {
      setLoading(true);
      if (method === "POST") {
        let fetchOption = [url, config];
        await fetch(...fetchOption);
        // const res = await fetch(...fetchOption);
        // return await res.json();
        // const json = await res.json();
      } else if (method === "DELETE") {
        const deleteUrl = `${url}/${productId}`;
        await fetch(deleteUrl, config);
        // const res = await fetch(deleteUrl, config);
        // const json = await res.json();
        // setCallFetch(json);
      }
      setLoading(false);
    }
    httpRequest();
  }, [config, method, url]);
  return { data, httpConfig, loading, error };
}
// const AddProduct = (product) => {
//   fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(product),
//   });
// }
// const RemoveProduct = (id) => {
//   fetch(url + id, {
//     method: "DELETE"
//   }).then(res => res.json());
// }

export default Products;
// export {
//   ListProducts,
//   AddProduct,
//   RemoveProduct
// };
