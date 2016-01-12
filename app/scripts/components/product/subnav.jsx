var React = require('react');
var Navigation = require('react-router').Navigation;

// Firebase
var Firebase = require("firebase");
var ReactFireMixin = require("reactfire");

// My Components
var Header = require('../header');
var Subnav = require('./subnav');
var PageHeader = require('./pageHeader');

// PUI
var LinkDropdown = require('pui-react-dropdowns').LinkDropdown;
var DropdownItem = require('pui-react-dropdowns').DropdownItem;
var DefaultButton = require('pui-react-buttons').DefaultButton;
var TileLayout = require('pui-react-tile-layout');
var BasicPanelAlt = require('pui-react-panels').BasicPanelAlt;
var Media = require('pui-react-media').Media;
var Flag = require('pui-react-media').Flag;
var UnorderedList = require('pui-react-lists').UnorderedList;
var ListItem = require('pui-react-lists').ListItem;

var LinkDropdown = require('pui-react-dropdowns').LinkDropdown;
var DropdownItem = require('pui-react-dropdowns').DropdownItem;

  var DropdownToggle =
    <div className="subnav-title">
      <h2 className="h5 type-dark-1 em-default mvn">
        <span className="product-name">Pivotal Cloud Foundry</span>
        <span className="type-dark-4 type-sm mll">v1.6.0.0 <i className="fa fa-angle-down h4 mvn mlm"></i></span>
      </h2>
    </div>;

var Subnav = React.createClass({
  mixins: [ReactFireMixin, Navigation],

  getInitialState: function() {
    return {
      searchResults: []
    };
  },

  componentWillMount: function() {
    var myFirebaseRef = new Firebase("https://pivotal-docs.firebaseio.com/search-results");
    this.bindAsArray(myFirebaseRef, "searchResults");
  },

  render: function() {

    var searchResults = this.state.searchResults.map(function(searchResult) {

      return (
        <li className="search-result-item">
          <a href="#/balancer" className="search-result-link">
            <h3 className="search-result-title h5" key={ searchResult['.key'] }>
              { searchResult.searchTitle }
            </h3>
            <p className="search-result-description type-sm type-dark-3">
              { searchResult.searchDescription }
            </p>
          </a>
        </li>
      );

    });

    return (
      <div className="subnav-wrap">
        <div className="subnav-navigation">
          <a href="#">Menu</a>
        </div>
        <div className="subnav">

          <ul className="product-docs-toc hidden">
            <li>
              <a href="#/product/cloud_foundry">Getting Started with Pivotal Cloud Foundry®</a>
            </li>
            <li>
              <a href="#">Pivotal Cloud Foundry® Docs Home</a>
            </li>
            <li>
              <a href="#">Getting Started with Pivotal Cloud Foundry®</a>
            </li>
            <li>
              <a href="#">PCF on Amazon Web Services (AWS)</a>
            </li>
            <li>
              <a href="#">PCF on OpenStack</a>
            </li>
            <li>
              <a href="#">PCF on vSphere and vCloud Air</a>
            </li>
            <li>
              <a href="#">Using Ops Manager</a>
            </li>
            <li>
              <a href="#">Elastic Runtime Concepts</a>
            </li>
            <li>
              <a href="#">Operating Elastic Runtime</a>
            </li>
            <li>
              <a href="#">Using the Apps Manager</a>
            </li>
            <li>
              <a href="#">Deploying Applications</a>
            </li>
            <li>
              <a href="#">Buildpacks</a>
            </li>
            <li>
              <a href="#">Custom Services</a>
            </li>
            <li>
              <a href="#">Creating PCF Product Tiles</a>
            </li>
            <li>
              <a href="#">Logging and Metrics</a>
            </li>
            <li>
              <a href="#">Release Notes and Known Issues</a>
            </li>
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
      </div>
    );
  }
});

module.exports = Subnav;
