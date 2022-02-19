import api from "@/services/api";

export const useProduct = {
  addProduct: async (product) => {
    const response = await api
      .post("/products", product)
      .then((response) => {
        return response.data;
      })
      .catch((error) => console.log(error));

    return response;
  },
  getAllProducts: async () => {
    const response = await api
      .get("/products")
      .then((response) => {
        return response.data;
      })
      .catch((error) => console.log(error));

    return response;
  },
  getProductById: async (id) => {
    const response = await api
      .get(`/products/${id}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => console.log(error));

    return response;
  },
};

export default useProduct;
