import {
  FETCH_PANEL_MENU,
  FETCH_PRODUCTS,
  FETCH_MANUFACTURERS,
  ADD_PRODUCT,
  ADD_MANUFACTURER,
  ADD_MENU_ITEM,
  ADD_MENU_SUBCATEGORY,
  DELETE_MANUFACTURER,
  DELETE_PRODUCT,
  DELETE_MENU_ITEM,
  DELETE_MENU_SUBCATEGORY,
  FILTER_PRODUCTS,
  NOTIFY_SUCCESS,
  NOTIFY_ERROR
} from './types';

export const fetchPanelMenu = () => dispatch => {
  let url = '/admin';
  fetch(url, {
    method: 'GET'
  })
    .then(res => res.json())
    .then(fetchedMenu => {
      dispatch({
        type: FETCH_PANEL_MENU,
        payload: fetchedMenu
      })
    })
    .then(() => {
      dispatch({
        type: NOTIFY_SUCCESS,
        payload: 'Menu fetched'
      })
    })
    .catch(err => {
      dispatch({
        type: NOTIFY_ERROR,
        payload: err.message
      })
    });
};

export const fetchPanelProducts = () => dispatch => {
  let url = '/products';
  fetch(url, {
    method: 'GET'
  })
    .then(res => res.json())
    .then(fetchedProducts => {
      dispatch({
        type: FETCH_PRODUCTS,
        payload: fetchedProducts
      });
    })
    .then(() => {
      dispatch({
        type: NOTIFY_SUCCESS,
        payload: 'Products fetched'
      })
    })
    .catch(err => {
      dispatch({
        type: NOTIFY_ERROR,
        payload: err.message
      })
    });
};
export const fetchPanelManufacturers = () => dispatch => {
  let url = '/manufacturers';
  fetch(url, {
    method: 'GET'
  })
    .then(res => res.json())
    .then(fetchedManufacturers => {
      dispatch({
        type: FETCH_MANUFACTURERS,
        payload: fetchedManufacturers
      });
    })
    .then(() => {
      dispatch({
        type: NOTIFY_SUCCESS,
        payload: 'Manufacturers fetched'
      })
    })
    .catch(err => {
      dispatch({
        type: NOTIFY_ERROR,
        payload: err.message
      })
    });
};

export const addProduct = product => dispatch => {
  let url = '/product';
  fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'content-type': 'application/json'
    },
    body: JSON.stringify(product)
  })
    .then(res => res.json())
    .then(product => {
      dispatch({
        type: ADD_PRODUCT,
        payload: product
      });
    })
    .then(() => {
      dispatch({
        type: NOTIFY_SUCCESS,
        payload: `${product.name} successfuly created!`
      })
    })
    .catch(err => {
      dispatch({
        type: NOTIFY_ERROR,
        payload: err.message
      })
    });
};

export const uploadImage = image => dispatch => {
  
  const formData = new FormData();
  formData.append('image', image)

  let url = '/upload';

  fetch(url, {
    method: 'POST',
    body: formData
  })
    .then(() => {
      dispatch({
        type: NOTIFY_SUCCESS,
        payload: 'success'
      });
    })
    .catch(err => {
      dispatch({
        type: NOTIFY_ERROR,
        payload: err.message
      })
    })
};

export const addManufacturer = manufacturer => dispatch => {
  let url = '/manufacturer';
  fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'content-type': 'application/json'
    },
    body: JSON.stringify(manufacturer)
  })
    .then(res => res.json())
    .then(manufacturer => {
      dispatch({
        type: ADD_MANUFACTURER,
        payload: manufacturer
      });
    })
    .then(() => {
      dispatch({
        type: NOTIFY_SUCCESS,
        payload: `${manufacturer.name} successfuly created!`
      })
    })
    .catch(err => {
      dispatch({
        type: NOTIFY_ERROR,
        payload: err.message
      })
    });
};

export const addCategory = category => dispatch => {
  let url = '/menu';

  fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'content-type': 'application/json'
    },
    body: JSON.stringify(category)
  })
    .then(res => res.json())
    .then(category => {
      dispatch({
        type: ADD_MENU_ITEM,
        payload: category
      });
    })
    .then(() => {
      dispatch({
        type: NOTIFY_SUCCESS,
        payload: `${category.name} successfuly created!`
      })
    })
    .catch(err => {
      dispatch({
        type: NOTIFY_ERROR,
        payload: err.message
      })
    });
};

export const addSubcategory = (subcategory, parentId) => dispatch => {
  let url = `/menu/${parentId}/subcategory`;

  fetch(url, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'content-type': 'application/json'
    },
    body: JSON.stringify(subcategory)
  })
    .then(res => res.json())
    .then(subcategory => {
      dispatch({
        type: ADD_MENU_SUBCATEGORY,
        payload: subcategory
      });
    })
    .then(() => {
      dispatch({
        type: NOTIFY_SUCCESS,
        payload: `${subcategory.name} successfuly created!`
      })
    })
    .catch(err => {
      dispatch({
        type: NOTIFY_ERROR,
        payload: err.message
      })
    });
};

export const deleteManufacturer = id => dispatch => {
  let url = `/manufacturer/${id}`;

  fetch(url, {
    method: 'DELETE'
  })
    .then(res => res.json())
    .then(deletedManufacturer => {
      dispatch({
        type: DELETE_MANUFACTURER,
        payload: deletedManufacturer
      });
    })
    .then(() => {
      dispatch({
        type: NOTIFY_SUCCESS,
        payload: `Manufacturer successfuly deleted!`
      })
    })
    .catch(err => {
      dispatch({
        type: NOTIFY_ERROR,
        payload: err.message
      })
    });
};

export const deleteProduct = id => dispatch => {
  let url = `/product/${id}`;

  fetch(url, {
    method: 'DELETE'
  })
    .then(res => res.json())
    .then(deletedProduct => {
      dispatch({
        type: DELETE_PRODUCT,
        payload: deletedProduct
      });
    })
    .then(() => {
      dispatch({
        type: NOTIFY_SUCCESS,
        payload: `Product successfuly deleted!`
      })
    })
    .catch(err => {
      dispatch({
        type: NOTIFY_ERROR,
        payload: err.message
      })
    });
};

export const deleteMenuItem = id => dispatch => {
  let url = `/menu/${id}`;

  fetch(url, {
    method: 'DELETE'
  })
    .then(res => res.json())
    .then(deletedMenuItem => {
      dispatch({
        type: DELETE_MENU_ITEM,
        payload: deletedMenuItem
      });
    })
    .then(() => {
      dispatch({
        type: NOTIFY_SUCCESS,
        payload: `Menu item successfuly deleted!`
      })
    })
    .catch(err => {
      dispatch({
        type: NOTIFY_ERROR,
        payload: err.message
      })
    });
};

export const deleteMenuSubcategory = (id, subcategoryId) => dispatch => {
  let url = `/menu/${id}/${subcategoryId}`;

  fetch(url, {
    method: 'DELETE'
  })
    .then(res => res.json())
    .then(deletedSubcategory => {
      dispatch({
        type: DELETE_MENU_SUBCATEGORY,
        payload: deletedSubcategory
      });
    })
    .then(() => {
      dispatch({
        type: NOTIFY_SUCCESS,
        payload: `Subcategory successfuly deleted!`
      })
    })
    .catch(err => {
      dispatch({
        type: NOTIFY_ERROR,
        payload: err.message
      })
    });
};

export const setProductsFilter = filter => dispatch => {
  dispatch({
    type: FILTER_PRODUCTS,
    payload: filter
  });
};
