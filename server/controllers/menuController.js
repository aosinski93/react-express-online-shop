const Menu = require("../models/Menu");
const uuid = require("uuid");
const slugify = require("slugify");

exports.menu_displayMenu = (req, res) => {
  Menu.getMenu((err, menu) => {
    if (err) {
      throw err;
    }
    res.send(menu);
  });
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
  let id = req.params;

  Menu.deleteMenuItem(id, (err, menuItem) => {
    if (err) {
      throw err;
    }
    res.json({ success: ` "${menuItem.name}" successfuly deleted` });
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
  Menu.getMenuItem(req.params.id, (err, item) => {
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
    update.subcategories.push({
      parentId: menuItem._id,
      name: req.body.subcategory.name,
      slug: slugify(req.body.subcategory.name)
    });
    Menu.updateMenuItem(
      req.params.id,
      update,
      { new: true },
      (err, new_menuItem) => {
        if (err) {
          throw err;
        }
        res.send(new_menuItem);
      }
    );
  });
};
