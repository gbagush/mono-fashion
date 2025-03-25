import { products } from "../data/products.js";
import { newArivalProducts } from "../data/new-arival-products.js";
import { formatPrice, calculateDiscount } from "./utils.js";

const getAllProducts = () => {
  return products;
};

const getProductById = (id) => {
  return products.find((product) => product.id === id);
};

const getProductsBySection = (section) => {
  return products.filter((product) => product.section === section);
};

const getProductsBySectionAndCategory = (section, category) => {
  console.log(category);

  return products.filter(
    (product) => product.section === section && product.category === category
  );
};

const getNewArivalProducts = () => {
  return newArivalProducts.map((id) => getProductById(id));
};

const transformProductData = (product) => {
  return {
    imageSrc: product.thumbnail,
    altText: product.name,
    brand: product.brand,
    productName: product.name,
    price: formatPrice(product.discountedPrice),
    originalPrice: formatPrice(product.normalPrice),
    discount: calculateDiscount(product.normalPrice, product.discountedPrice),
    colorVariants: product.variant.map((v) => v.color),
  };
};

export {
  getAllProducts,
  getProductById,
  getProductsBySection,
  getProductsBySectionAndCategory,
  getNewArivalProducts,
  transformProductData,
};
