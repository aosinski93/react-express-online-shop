import React, { Component } from "react";
import { connect } from "react-redux";
import { addSubcategory } from "../../actions/panelActions";

class SubMenu extends Component {
  constructor() {
    super();
    this.state = {
      subcategoryName: ""
    };
  }

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

  render() {
    return (
      <div>
        <p className="categoryName">{this.props.item.name}</p>
        <form
          className="menuForm"
          id={this.props.item._id + "-form"}
          onSubmit={this.onSubmit}
        >
          <input
            type=""
            name="subcategoryName"
            value={this.state.subcategoryName}
            onChange={this.onChange}
            placeholder={`Add new ${this.props.item.name} subcategory`}
            style={{ marginLeft: 30 + "px" }}
          />
          <input type="submit" value="+" />
        </form>
        <ul className="subcategories" style={{ marginLeft: 30 + "px" }}>
          {this.props.item.subcategories &&
            this.props.item.subcategories.map(subcategoryItem => (
              <li key={this.props.item.subcategories.indexOf(subcategoryItem)}>
                <p className="subcategoryName">{subcategoryItem.name}</p>
              </li>
            ))}
          {this.props.addedSubcategory.name}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  addedSubcategory: state.panel.newSubcategory
});

export default connect(
  mapStateToProps,
  { addSubcategory }
)(SubMenu);
