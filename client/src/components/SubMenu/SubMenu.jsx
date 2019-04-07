import React, { Component } from "react";
import { connect } from "react-redux";
import { addSubcategory } from "../../actions/panelActions";
import "./submenu.css";

class SubMenu extends Component {
  constructor() {
    super();
    this.state = {
      subcategoryName: ""
    };
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.addedSubcategory) {
      if (nextProps.item._id === nextProps.addedSubcategory.parentId) {
        nextProps.item.subcategories.unshift(nextProps.addedSubcategory);
      }
    }
  };

  onChange = e => {
    let value = e.target.value;
    let name = e.target.name;

    this.setState({
      [name]: value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    let parentId = e.target.id.split("-")[0];

    this.props.addSubcategory(
      {
        subcategory: {
          parentId: parentId,
          name: this.state.subcategoryName
        }
      },
      parentId
    );

    this.setState({
      subcategoryName: ""
    });
  };

  onDelete = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="subMenuContainer col-lg-8">
        <div className="subMenuHeader flex v-align">
          <div className="col-lg-2">
            <p className="categoryName">{this.props.item.name}</p>
          </div>
          <div className="col-lg-10">
            <form
              className="menuForm"
              id={this.props.item._id + "-form"}
              onSubmit={this.onSubmit}
            >
              <div className="col-lg-7">
                <input
                  type="text"
                  name="subcategoryName"
                  value={this.state.subcategoryName}
                  onChange={this.onChange}
                  className="postDataInput"
                  placeholder={`Add new subcategory to ${
                    this.props.item.name
                  } `}
                  style={{ marginLeft: 30 + "px" }}
                />
              </div>
              <div className="col-lg-3">
                <input
                  type="submit"
                  value="+"
                  className="dataSubmit postDataButton"
                  title="Add subcategory"
                />
                <button
                  className="dataSubmit deleteDataButton"
                  onClick={e => this.onDelete(e)}
                  title="Delete submenu"
                >
                  &times;
                </button>
              </div>
            </form>
          </div>
        </div>
        <ul
          id={this.props.item._id + "-subcategories"}
          className="subcategories"
        >
          {this.props.item.subcategories &&
            this.props.item.subcategories.map(subcategoryItem => (
              <li
                key={this.props.item.subcategories.indexOf(subcategoryItem)}
                className="subcategory flex v-align"
              >
                <div className="col-lg-10">
                  <p className="subcategoryName col-lg-10">
                    {subcategoryItem.name}
                  </p>
                </div>
                <div className="col-lg-1">
                  <button
                    className="dataSubmit deleteDataButton"
                    onClick={e => this.onDelete(e)}
                    title="Delete subcategory"
                  >
                    &times;
                  </button>
                </div>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  addedSubcategory: state.panel.addedSubcategory
});

export default connect(
  mapStateToProps,
  { addSubcategory }
)(SubMenu);
