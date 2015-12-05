var React = require('react');
var Header = require('../header');
var Subnav = require('./subnav');
var DefaultButton = require('pui-react-buttons').DefaultButton;
var TileLayout = require('pui-react-tile-layout');
var BasicPanelAlt = require('pui-react-panels').BasicPanelAlt;

var Product = React.createClass({

  render: function() {

    return (
      <div className="layout">
        <Header />
        <Subnav />
        <div className="product-docs">
          <div className="page-header">
            <p className="mvn type-dark-5 em-alt type-sm">Version: 1.6.0.0 <span>- Changelog</span></p>
            <h1 className="em-low mvn type-dark-1">Pivotal Cloud Foundry Docs</h1>
          </div>
          <div className="docs-content">

            <TileLayout noGutter columns={3} className="toc-grid">
              <TileLayout.Item>
                <div className="grid-item">
                  <h3>Getting Started</h3>
                  <p>Description</p>
                </div>
              </TileLayout.Item>
              <TileLayout.Item>
                <div className="grid-item">
                  <h3>Getting Started</h3>
                  <p>Description</p>
                </div>
              </TileLayout.Item>
              <TileLayout.Item>
                <div className="grid-item">
                  <h3>Getting Started</h3>
                  <p>Description</p>
                </div>
              </TileLayout.Item>
              <TileLayout.Item>
                <div className="grid-item">
                  <h3>Getting Started</h3>
                  <p>Description</p>
                </div>
              </TileLayout.Item>
              <TileLayout.Item>
                <div className="grid-item">
                  <h3>Getting Started</h3>
                  <p>Description</p>
                </div>
              </TileLayout.Item>
              <TileLayout.Item>
                <div className="grid-item">
                  <h3>Getting Started</h3>
                  <p>Description</p>
                </div>
              </TileLayout.Item>
              <TileLayout.Item>
                <div className="grid-item">
                  <h3>Getting Started</h3>
                  <p>Description</p>
                </div>
              </TileLayout.Item>
              <TileLayout.Item>
                <div className="grid-item">
                  <h3>Getting Started</h3>
                  <p>Description</p>
                </div>
              </TileLayout.Item>
              <TileLayout.Item>
                <div className="grid-item">
                  <h3>Getting Started</h3>
                  <p>Description</p>
                </div>
              </TileLayout.Item>
            </TileLayout>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Product;
