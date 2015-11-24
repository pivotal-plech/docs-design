var React = require('react');
var LinkDropdown = require('pui-react-dropdowns').LinkDropdown;
var DropdownItem = require('pui-react-dropdowns').DropdownItem;

var Subnav = React.createClass({

  render: function() {

    return (
      <div className="subnav">
        <div className="product-nav">
          <LinkDropdown title="Pivotal Cloud Foundry v1.6.0.0" className="type-dark-11 mvn h4">
            <DropdownItem href="http://media.giphy.com/media/TlK63EQERmiAVzMEgO4/giphy.gif">v1.6.0.0</DropdownItem>
            <DropdownItem href="http://media.giphy.com/media/TlK63EQERmiAVzMEgO4/giphy.gif">v1.5.0.0</DropdownItem>
            <DropdownItem href="http://media.giphy.com/media/TlK63EQERmiAVzMEgO4/giphy.gif">v1.4.0.0</DropdownItem>
            <DropdownItem href="http://media.giphy.com/media/TlK63EQERmiAVzMEgO4/giphy.gif">v0.3.0.0</DropdownItem>
            <DropdownItem href="http://media.giphy.com/media/TlK63EQERmiAVzMEgO4/giphy.gif">v1.2.0.0</DropdownItem>
          </LinkDropdown>
        </div>
      </div>
    );
  }
});

module.exports = Subnav;
