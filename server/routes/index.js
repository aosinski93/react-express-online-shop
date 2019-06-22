const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController');
const productController = require('../controllers/productController');
const manufacturerController = require('../controllers/manufacturerController');
const userController = require('../controllers/userController');
const multer = require('multer');

let upload = multer();

router.post(
  ['/admin/user/login', '/user/login'],
  userController.user_userLogin
);
router.post('/users/register', userController.user_addUser);

router.get('/', menuController.menu_displayMenu);
router.post('/menu', menuController.menu_addMenuItem);
router.delete('/menu/:id', menuController.menu_deleteMenuItem);
router.put('/menu/:id', menuController.menu_updateMenuItem);
router.put('/menu/:id/subcategory', menuController.menu_addSubcategory);
router.delete(
  '/menu/:id/:subcategoryId',
  menuController.menu_deleteSubcategory
);

router.post('/product', productController.product_addProduct);
router.get('/products', productController.product_getProducts);
router.get('/product/:id', productController.product_getProduct);
router.delete('/product/:id', productController.product_deleteProduct);
router.post(
  '/upload',
  upload.single('image'),
  productController.product_uploadImage
);

router.get(
  '/products/:manufacturerName',
  manufacturerController.manufacturer_getManfacturerProducts
);

router.get(
  '/manufacturers',
  manufacturerController.manufacturer_getManufacturers
);
router.post(
  '/manufacturer',
  manufacturerController.manufacturer_addManufacturer
);
router.delete(
  '/manufacturer/:id',
  manufacturerController.manufacturer_deleteManufacturer
);
//  admin

router.get(['/admin'], menuController.menu_displayMenu);

router.get('/users', userController.user_getUsers);

module.exports = router;
