var express = require("express");
const router = express.Router();
const menuController = require("../controllers/menuController");
const productController = require("../controllers/productController");
const manufacturerController = require("../controllers/manufacturerController");

router.get("/", menuController.menu_displayMenu);
router.post("/menu", menuController.menu_addMenuItem);
router.delete("/menu/:id", menuController.menu_deleteMenuItem);
router.put("/menu/:id", menuController.menu_updateMenuItem);
router.put("/menu/:id/subcategory", menuController.menu_addSubcategory);

router.post("/product", productController.product_addProduct);
router.get("/products/:manufacturerName",manufacturerController.manufacturer_getManfacturerProducts);

router.post("/manufacturer", manufacturerController.manufacturer_addManufacturer);

module.exports = router;
