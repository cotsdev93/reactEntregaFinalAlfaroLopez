const products = [
  {
    id: "1",
    name: "New York",
    price: 1000,
    category: "America", 
    img: "./assets/img/newyork.png",
    stock: 10,
    description: "paisaje de New York",
  },
  {
    id: "2",
    name: "Paris",
    price: 1000,
    category: "Europa",
    img: "./assets/img/paris.png",
    stock: 10,
    description: "paisaje de Paris",
  },
  {
    id: "3",
    name: "San Francisco",
    price: 1000,
    category: "America",
    img: "./assets/img/sanfrancisco.png",
    stock: 10,
    description: "paisaje de San Francisco",
  },
  {
    id: "4",
    name: "Kenia",
    price: 1000,
    category: "Africa",
    img: "./assets/img/kenia.png",
    stock: 10,
    description: "Zebras al atardecer",
  },
  {
    id: "5",
    name: "Kilimanjaro",
    price: 1000,
    category: "Africa",
    img: "./assets/img/kilimanjaro.png",
    stock: 10,
    description: "Jirafas africanas",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === categoryId));
    }, 1000);
  });
};

export const getProductsById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 1000);
  });
};
