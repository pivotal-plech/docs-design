var React = require('react');
var Header = require('../header');
var Subnav = require('./subnav');
var DefaultButton = require('pui-react-buttons').DefaultButton;

var Product = React.createClass({

  render: function() {

    return (
      <div className="layout">
        <Header />
        <Subnav />
        <div className="product-docs">
          <div className="page-header">
            <p className="mvn type-dark-5 em-alt type-sm">Version: 1.6.0.0 <span>- Changelog</span></p>
            <h1 className="title mvn type-dark-1">Pivotal Cloud Foundry</h1>
            <DefaultButton>Download v1.6.0.0</DefaultButton>
          </div>
          <div className="docs-content">
            <h1>Some stuff</h1>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Product;
