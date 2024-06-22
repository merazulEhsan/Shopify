const {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} = require("@/lib/data-utils");
const { productModel } = require("@/models/product-model");
const { dbConnect } = require("@/services/dbConnection");

async function getAllProducts() {
  await dbConnect();
  const products = await productModel?.find().lean();
  return replaceMongoIdInArray(products);
}
async function getProductById(id) {
  await dbConnect();
  const product = await productModel?.findById(id).lean();
  return replaceMongoIdInObject(product);
}

export { getAllProducts, getProductById };
