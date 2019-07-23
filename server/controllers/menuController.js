require('dotenv').config();
const Menu = require('../models/Menu');
const uuid = require('uuid');
const slugify = require('slugify');

exports.menu_displayMenu = (req, res) => {
  if (process.env.CONNECTION_ERROR) {
    // read default data from file
    res.send();
  } else {
    Menu.getMenu((err, menu) => {
      if (err) {
        throw err;
      }
      res.send(menu);
    });
  }
};

exports.menu_addMenuItem = (req, res) => {
  let { name, chlidren } = req.body;
  let menuItem = {
    name,
    slug: slugify(name),
    subcategories: chlidren || []
  };

  Menu.addMenuItem(menuItem, (err, menuItem) => {
    if (err) {
      throw err;
    }
    res.send(menuItem);
  });
};

exports.menu_deleteMenuItem = (req, res) => {
  let id = req.params.id;

  Menu.deleteMenuItem(id, (err, menuItem) => {
    if (err) {
      throw err;
    }
    res.json(menuItem);
  });
};

exports.menu_updateMenuItem = (req, res) => {
  let { new_name, new_subcategories } = req.body;
  let new_menuItem = {
    name: slugify(new_name),
    slug: slugify(new_name),
    subcategories: new_subcategories
  };

  Menu.updateMenuItem(req.params.id, new_menuItem, (err, new_menuItem) => {
    if (err) {
      throw err;
    }
    res.json({ success: `${new_menuItem.name} successfuly updated` });
  });
};
exports.menu_addSubcategory = (req, res) => {
  let { subcategoryName, parentId } = req.body;

  let subcategory = {
    parentId: parentId,
    name: subcategoryName,
    slug: slugify(subcategoryName)
  };

  Subcategory.addSubcategory(subcategory, (err, subcategory) => {
    if (err) {
      throw err;
    }
    Menu.getMenuItem(subcategory.parentId, (err, item) => {
      if (err) {
        throw err;
      }

      let menuItem = {
        _id: item.id,
        name: item.name,
        slug: item.slug,
        subcategories: item.subcategories
      };

      let update = Object.assign({}, menuItem);
      update.subcategories.push(subcategory._id);
      Menu.updateMenuItem(
        req.params.id,
        update,
        { new: true },
        (err, new_menuItem) => {
          if (err) {
            throw err;
          }
        }
      );
    });
    res.send(subcategory);
  });
};

exports.menu_deleteSubcategory = (req, res) => {
  Subcategory.deleteSubcategory(
    req.params.subcategoryId,
    (err, subcategory) => {
      if (err) {
        throw err;
      }
      res.send(subcategory);
    }
  );
};
