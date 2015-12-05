var React = require('react');
var LinkDropdown = require('pui-react-dropdowns').LinkDropdown;
var DropdownItem = require('pui-react-dropdowns').DropdownItem;
var UnorderedList = require('pui-react-lists').UnorderedList;
var ListItem = require('pui-react-lists').ListItem;

var pcfLogo = <svg x="0px" y="0px" width="35px" viewBox="0 0 272.6 200.4"><path fill="#008774" d="M159.9,169.6c0-44.1-35.9-79.9-79.9-79.9S0,125.5,0,169.6c0,7.3,1,14.4,2.9,21.2h0c0.7,2.6,1.5,5.1,2.5,7.6 c0.5,1.3,1.7,2.1,3.1,2.1h21.8c2.5,0,4.1-2.7,2.9-4.9c-0.9-1.5-1.6-3.1-2.3-4.8h0c-2.8-6.5-4.4-13.6-4.4-21.2 c0-29.6,24-53.6,53.6-53.6s53.6,24,53.6,53.6c0,7.5-1.6,14.7-4.4,21.2h0c-0.7,1.7-1.6,3.4-2.5,5.1c-1.2,2,0.4,4.6,2.7,4.6 c6.7,0,17.7,0,22.2,0c1.3,0,2.4-0.8,2.9-2c1-2.5,1.8-5.1,2.5-7.7h0C158.9,184,159.9,176.9,159.9,169.6z"/><path fill="#00AE9E" d="M171.2,63.3c-56,0-101.5,45.5-101.5,101.5c0,8.9,1.2,17.6,3.4,25.8h0c0.7,2.6,1.4,5.2,2.3,7.7 c0.4,1.3,1.7,2.1,3,2.1h21.5c2.3,0,3.9-2.4,2.9-4.5c-0.8-1.7-1.5-3.5-2.1-5.3h0c-3-8.1-4.6-16.7-4.6-25.8 c0-41.4,33.7-75.1,75.1-75.1s75.1,33.7,75.1,75.1c0,9.1-1.6,17.8-4.6,25.8h0c-0.7,1.9-1.4,3.7-2.3,5.5c-0.9,2,0.5,4.3,2.8,4.3H264 c1.3,0,2.5-0.8,2.9-2c0.9-2.6,1.7-5.2,2.3-7.8h0c2.2-8.2,3.4-16.9,3.4-25.8C272.6,108.8,227.1,63.3,171.2,63.3z"/><path fill="#008774" d="M227.3,90c0-49.6-40.4-90-90-90c-49.6,0-90,40.4-90,90c0,2.8,0.1,5.5,0.4,8.2h26.5 c-0.3-2.7-0.5-5.4-0.5-8.2c0-35.1,28.5-63.6,63.6-63.6c35.1,0,63.6,28.5,63.6,63.6c0,1.2,0,2.3-0.1,3.4h0c-0.7,13-5.3,25-12.7,34.8 c-1.7,2.2-0.1,5.5,2.7,5.5h23c1.3,0,2.4-0.7,3-1.8c6.1-11.6,9.8-24.6,10.3-38.5h0C227.3,92.3,227.3,91.1,227.3,90z"/></svg>;
var DropdownToggle= <div className="product-release-version">{pcfLogo}<h3 className="mvn h5 type-neutral-11" style={{marginLeft: "16px"}}>Pivotal Cloud Foundry <span className="product-version em-high">v1.6.0.0 </span><span className="fa fa-angle-down dropdown-icon"></span></h3></div>;

var Subnav = React.createClass({

  render: function() {

    return (
      <div className="subnav">
        <LinkDropdown title={DropdownToggle} className="mvn h4">
          <DropdownItem href="http://media.giphy.com/media/TlK63EQERmiAVzMEgO4/giphy.gif">v1.6.0.0</DropdownItem>
          <DropdownItem href="http://media.giphy.com/media/TlK63EQERmiAVzMEgO4/giphy.gif">v1.5.0.0</DropdownItem>
          <DropdownItem href="http://media.giphy.com/media/TlK63EQERmiAVzMEgO4/giphy.gif">v1.4.0.0</DropdownItem>
          <DropdownItem href="http://media.giphy.com/media/TlK63EQERmiAVzMEgO4/giphy.gif">v0.3.0.0</DropdownItem>
          <DropdownItem href="http://media.giphy.com/media/TlK63EQERmiAVzMEgO4/giphy.gif">v1.2.0.0</DropdownItem>
        </LinkDropdown>
        <div className="docs-search">
          <input placeholder="Search PCF 1.6.0.0" className="docs-search-input" />
        </div>
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
        <div className="docs-software-footer">
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
