import React from "react"
import PropTypes from "prop-types"
class Item extends React.Component {
  render () {
    return (
        <div className="item-card">
          <div className="item-image">{this.props.images}</div>
          <div className="item-details">
            <p>{this.props.name}</p>
            <p>{this.props.description}</p>
            <p>{this.props.price}</p>
          </div>
        </div>
    );
  }
}

Item.propTypes = {
  name: PropTypes.string,
  description: PropTypes.node,
  price: PropTypes.string
};
export default Item