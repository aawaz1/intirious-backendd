// const productService = require("../services/product.service.js");

// const createProduct = async (req,res) => {
//     try {
//         const product = await productService.createProduct(req.body);
//         return res.status(201).send(product)

        
//     } catch (error) {
//         return res.status(500).send({error:error.message});
        
//     }
// }
// async function createProduct(req, res) {
//     try {
//       const product = await productService.createProduct(req.body);
//       return res.status(201).json(product);
//     } catch (err) {
//       return res.status(500).json({ error: err.message });
//     }
//   }
  


// const deleteProduct = async (req,res) => {
//     try {
//         const product = await productService.deleteProduct(req.body);
//         return res.status(201).send(product)
        
        
//     } catch (error) {
//         return res.status(500).send({error:error.message});
        
//     }
// }

// const updateProduct = async (req,res) => {
//     const productId = req.params.id
//     try {
//         const product = await productService.updateProduct(productId, req.body);
//         return res.status(201).send(product)
        
        
//     } catch (error) {
//         return res.status(500).send({error:error.message});
        
//     }
// }

// const findProductById = async (req,res) => {
//     const productId = req.params.id
//     try {
//         const product = await productService.findProductById(productId);
//         return res.status(201).send(product)
        
        
//     } catch (error) {
//         return res.status(500).send({error:error.message});
        
//     }
// }

// const getAllProducts = async (req,res) => {
//     const productId = req.params.id
//     try {
//         const products = await productService.getAllProducts(productId);
//         return res.status(201).send(products)
        
        
//     } catch (error) {
//         return res.status(500).send({error:error.message});
        
//     }
// }

// const createMultipleProduct= async (req,res) => {
//     const productId = req.params.id
//     try {
//         const product = await productService.createMultipleProduct( req.query);
//         return res.status(201).send({message:"Products Created Successfully"});
        
        
//     } catch (error) {
//         return res.status(500).send({error:error.message});
        
//     }
// }

// module.exports = {
//     createMultipleProduct,
//     findProductById,
//     createProduct,
//     deleteProduct,
//     updateProduct,
//     getAllProducts,
    
// }

// productController.js
const productService = require("../services/product.service.js")

// // Create a new product
// async function createProduct(req, res) {
//   try {
//     const product = await productService.createProduct(req.body);
//     return res.status(201).send(product);
//   } catch (error) {
//     return res.status(500).send({ error : error.message });
//   }
// }

// Create a new product
async function createProduct(req, res) {
  try {
    const product = await productService.createProduct(req.body);
    return res.status(201).json(product);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}


// Delete a product by ID
async function deleteProduct(req, res) {
  try {
    const productId = req.params.id;
    const message = await productService.deleteProduct(productId);
    return res.json({ message });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}

// Update a product by ID
async function updateProduct(req, res) {
  try {
    const productId = req.params.id;
    const product = await productService.updateProduct(productId, req.body);
    return res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Get all products
async function getAllProducts(req, res) {
  try {
    const products = await productService.getAllProducts();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Find a product by ID
async function findProductById(req, res) {
  try {
    const productId = req.params.id;
    const product = await productService.findProductById(productId);
    return res.status(200).send(product);
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
}

// Find products by category
async function findProductByCategory(req, res) {
  try {
    const category = req.params.category;
    const products = await productService.findProductByCategory(category);
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Search products by query
async function searchProduct(req, res) {
  try {
    const query = req.params.query;
    const products = await productService.searchProduct(query);
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Get all products with filtering and pagination
async function getAllProducts(req, res) {
  try {

    const products = await productService.getAllProducts(req.query);

    return res.status(200).send(products);
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
}

const createMultipleProduct= async (req, res) => {
  try {
    await productService.createMultipleProduct(req.body)
    res
      .status(202)
      .json({ message: "Products Created Successfully", success: true });
  } catch (error) {
    res.status(500).send({ error: "Something went wrong" });
  }
};

module.exports = {
  createProduct,
  deleteProduct,
  updateProduct,
  getAllProducts,
  findProductById,
  findProductByCategory,
  searchProduct,
  createMultipleProduct

};
