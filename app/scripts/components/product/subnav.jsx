var React = require('react');
var UnorderedList = require('pui-react-lists').UnorderedList;
var ListItem = require('pui-react-lists').ListItem;

var Subnav = React.createClass({

  render: function() {

    return (
      <div className="subnav">
        <ul className="product-docs-toc">
          <li>Getting Started with Pivotal Cloud Foundry®</li>
          <li>Pivotal Cloud Foundry® Docs Home</li>
          <li>Getting Started with Pivotal Cloud Foundry®</li>
          <li>PCF on Amazon Web Services (AWS)</li>
          <li>PCF on OpenStack</li>
          <li>PCF on vSphere and vCloud Air</li>
          <li>Using Ops Manager</li>
          <li>Elastic Runtime Concepts</li>
          <li>Operating Elastic Runtime</li>
          <li>Using the Apps Manager</li>
          <li>Deploying Applications</li>
          <li>Buildpacks</li>
          <li>Custom Services</li>
          <li>Creating PCF Product Tiles</li>
          <li>Logging and Metrics</li>
          <li>Release Notes and Known Issues</li>
        </ul>
        <div className="docs-software-footer hidden">
          <UnorderedList unstyled spacing="l">
            <ListItem>
              <a href="#"><i className="fa fa-file-pdf-o mrl type-dark-5"></i>Download 1.6.0.0 Documentation</a>
            </ListItem>
            <ListItem>
              <a href="#"><i className="fa fa-download mrl type-dark-5"></i>Download PCF 1.6.0.0</a>
            </ListItem>
            <ListItem>
              <a href="#"><i className="fa fa-support mrl type-dark-5"></i>Support and Troubleshooting PCF 1.6.0.0</a>
            </ListItem>
          </UnorderedList>
        </div>
      </div>
    );
  }
});

module.exports = Subnav;
