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

var pcfLogo = <svg x="0px" y="0px" width="35px" viewBox="0 0 272.6 200.4"><path fill="#008774" d="M159.9,169.6c0-44.1-35.9-79.9-79.9-79.9S0,125.5,0,169.6c0,7.3,1,14.4,2.9,21.2h0c0.7,2.6,1.5,5.1,2.5,7.6 c0.5,1.3,1.7,2.1,3.1,2.1h21.8c2.5,0,4.1-2.7,2.9-4.9c-0.9-1.5-1.6-3.1-2.3-4.8h0c-2.8-6.5-4.4-13.6-4.4-21.2 c0-29.6,24-53.6,53.6-53.6s53.6,24,53.6,53.6c0,7.5-1.6,14.7-4.4,21.2h0c-0.7,1.7-1.6,3.4-2.5,5.1c-1.2,2,0.4,4.6,2.7,4.6 c6.7,0,17.7,0,22.2,0c1.3,0,2.4-0.8,2.9-2c1-2.5,1.8-5.1,2.5-7.7h0C158.9,184,159.9,176.9,159.9,169.6z"/><path fill="#00AE9E" d="M171.2,63.3c-56,0-101.5,45.5-101.5,101.5c0,8.9,1.2,17.6,3.4,25.8h0c0.7,2.6,1.4,5.2,2.3,7.7 c0.4,1.3,1.7,2.1,3,2.1h21.5c2.3,0,3.9-2.4,2.9-4.5c-0.8-1.7-1.5-3.5-2.1-5.3h0c-3-8.1-4.6-16.7-4.6-25.8 c0-41.4,33.7-75.1,75.1-75.1s75.1,33.7,75.1,75.1c0,9.1-1.6,17.8-4.6,25.8h0c-0.7,1.9-1.4,3.7-2.3,5.5c-0.9,2,0.5,4.3,2.8,4.3H264 c1.3,0,2.5-0.8,2.9-2c0.9-2.6,1.7-5.2,2.3-7.8h0c2.2-8.2,3.4-16.9,3.4-25.8C272.6,108.8,227.1,63.3,171.2,63.3z"/><path fill="#008774" d="M227.3,90c0-49.6-40.4-90-90-90c-49.6,0-90,40.4-90,90c0,2.8,0.1,5.5,0.4,8.2h26.5 c-0.3-2.7-0.5-5.4-0.5-8.2c0-35.1,28.5-63.6,63.6-63.6c35.1,0,63.6,28.5,63.6,63.6c0,1.2,0,2.3-0.1,3.4h0c-0.7,13-5.3,25-12.7,34.8 c-1.7,2.2-0.1,5.5,2.7,5.5h23c1.3,0,2.4-0.7,3-1.8c6.1-11.6,9.8-24.6,10.3-38.5h0C227.3,92.3,227.3,91.1,227.3,90z"/></svg>;
var DropdownToggle= <Flag leftImage={pcfLogo} className="mtn"><h1 className="em-low mvn type-dark-1">Pivotal Cloud Foundry <span className="type-dark-4 type-sm">v1.6.0.0</span></h1></Flag>;

var Product = React.createClass({

  mixins: [ReactFireMixin, Navigation],

  getInitialState: function() {
    return {
      searchResults: [],
      product: {}
    };
  },

  componentWillMount: function() {
    var myFirebaseRef = new Firebase("https://pivotal-docs.firebaseio.com/search-results");
    this.bindAsArray(myFirebaseRef, "searchResults");
    this.bindAsObject(new Firebase("https://pivotal-docs.firebaseio.com/products/" + this.props.params.name), "product");
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
      <div className="layout">
        <Header />
        <Subnav />
        <div className="product-docs">
          <PageHeader />
          <div className="docs-content paxxl">
            <ol className="className-list lvl">
              <li>
                <a href="./index.html">Getting Started</a>
                <div className="docs-module-description">A quick guide to installing and getting started with <a href="https://network.pivotal.io/products/pivotal-cf">Pivotal Cloud Foundry®</a> (PCF). If you are new to PCF, start here.</div>
              </li>
              <li>
                <a href="../customizing/index.html">Using Ops Manager</a>
                <div className="docs-module-description">A guide to using the Pivotal Cloud Foundry® Operations Manager interface to manage your PCF PaaS.</div>
              </li>
              <li>
                <a href="../concepts/index.html">Elastic Runtime Concepts</a>
                <div className="docs-module-description">An explanation of the components in Pivotal Cloud Foundry® Elastic Runtime and how they work.</div>
              </li>
              <li>
                <a href="../opsguide/index.html">Operating Elastic Runtime</a>
                <div className="docs-module-description">A guide to running the Elastic Runtime component of PCF.</div>
              </li>
              <li>
                <a href="../adminguide/index.html">Administering Elastic Runtime</a>
                <div className="docs-module-description">A guide to managing Elastic Runtime at the administrator level.</div>
              </li>
              <li>
                <a href="../console/index.html">Using the Apps Manager</a>
                <div className="docs-module-description">A guide to using the web-based Apps Manager application for managing users, organizations, spaces, and applications.</div>
              </li>

              <li>
                <a href="../devguide/index.html">Deploying Applications</a>
                <div className="docs-module-description">A guide for developers on deploying and troubleshooting applications running in Elastic Runtime (Cloud Foundry).</div>
              </li>
              <li>
                <a href="../buildpacks/index.html">Buildpacks</a>
                <div className="docs-module-description">A guide to using system buildpacks and extending your Elastic Runtime with custom buildpacks.</div>
              </li>
              <li>
                <a href="../services/">Custom Services</a>
                <div className="docs-module-description">A guide to extending your Elastic Runtime with custom services.</div>
              </li>
              <li>
                <a href="../packaging/">Packaging Pivotal Cloud Foundry®</a>
                <div className="docs-module-description">A guide to packaging PCF products.</div>
              </li>
              <li>
                <a href="../pcf-release-notes/">Release Notes</a>
                <div className="docs-module-description">Release notes and known issues for Pivotal Operations Manager, Pivotal Elastic Runtime and Pivotal MySQL Developer.</div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Product;
