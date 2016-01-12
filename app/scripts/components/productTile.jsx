var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Navigation = require('react-router').Navigation;
var _ = require('lodash');

var TileLayout = require('pui-react-tile-layout');
var BasicPanelAlt = require('pui-react-panels').BasicPanelAlt;

var Firebase = require("firebase");
var ReactFireMixin = require("reactfire");

var ProductTile = React.createClass({

  mixins: [ReactFireMixin, Navigation],

  getInitialState: function() {
    return {
      product: {}
    };
  },


  componentWillMount: function() {
    this.bindAsObject(new Firebase("https://pivotal-docs.firebaseio.com/products/" + this.props.name), "product");
  },


  render: function() {

    var productName = this.state.product.productName;
    var url = _.snakeCase(productName);

    return (
      <TileLayout.Item>
        <Link to={`/product/${url}`} className="panel-link">
          <BasicPanelAlt className="pvxl">
            <p className="em-high mvn h3 type-dark-1 txt-c">Pivotal</p>
            <h3 className="h3 em-low type-dark-1 txt-c">{ this.state.product.productName }</h3>
          </BasicPanelAlt>
        </Link>
      </TileLayout.Item>
    );
  }
});

module.exports = ProductTile;
