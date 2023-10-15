class ProductManager {
    constructor() {
      this.products = [];
      this.productIdCounter = 1;
    }
  
    addProduct(product) {
      if (
        !product.title ||
        !product.description ||
        !product.price ||
        !product.thumbnail ||
        !product.code ||
        !product.stock
      ) {
        return;
      }
  
      if (this.products.some((p) => p.code === product.code)) {
        console.log("El producto con el mismo código ya existe.");
        return;
      }
  
      product.id = this.productIdCounter++;
      this.products.push(product);
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find((p) => p.id === id);
      if (product) {
        return product;
      } else {
        console.log("Producto no encontrado");
      }
    }
  }

  const manager = new ProductManager();
  
  manager.addProduct({
    title: "Dvr 16ch",
    description: "Dvr 16 canales tecnologia 1080 lite",
    price: 85.00,
    thumbnail: "imagen1.jpg",
    code: "dvr123",
    stock: 10,
  });
  
  manager.addProduct({
    title: "Camara domo",
    description: "Camara domo exterior 3.6mm ip67",
    price: 15.00,
    thumbnail: "imagen2.jpg",
    code: "domo123",
    stock: 15,
  });

  manager.addProduct({
    title: "Camara bullet",
    description: "Camara bullet exterior 3.6mm ip67",
    price: 19.00,
    thumbnail: "imagen3.jpg",
    code: "bullet123",
    stock: 15,
  });
  console.log(manager.getProducts());
  
  const product = manager.getProductById(1);
  console.log(product);
  
  const nonExistentProduct = manager.getProductById(3);
  