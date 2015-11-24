var React = require('react');

var Hero = React.createClass({

  render: function() {

    return (
      <div className="hero">
        <p className="type-dark-11 txt-c h1 mvn em-low" style={{maxWidth: "800px", margin: "0 auto"}}>Detailed documentation to help you install, understand, and succeed with Pivotal's enterprise-grade software.</p>
      </div>
    );
  }
});

module.exports = Hero;
