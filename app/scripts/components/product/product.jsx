var React = require('react');
var Header = require('./header');
var Subnav = require('./subnav');

var Product = React.createClass({

  render: function() {

    return (
      <div className="layout">
        <Header />
        <Subnav />
        <div className="product-docs">
        </div>
      </div>
    );
  }
});

module.exports = Product;
