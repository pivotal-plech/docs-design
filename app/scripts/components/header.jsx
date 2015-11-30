var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Navigation = require('react-router').Navigation;

var InlineList = require('pui-react-lists').InlineList;
var ListItem = require('pui-react-lists').ListItem;
var Col = require('pui-react-grids').Col;
var Row = require('pui-react-grids').Row;
var Flag = require('pui-react-media').Flag;

var Logo = <svg className="block" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 50 50"><rect fill="#00786E" width="50" height="50"/><path fill="#FFFFFF" d="M23.5,13.5H17V37h4V17h2c0.5,0,0.9,0,1.3,0c3.3,0.1,4.9,1.1,4.9,3.6c0,0.1,0,0.2,0,0.3 c0,2.4-1.3,3.9-4.8,3.9c-0.3,0-0.9-0.1-0.9-0.1V28c0,0,0.5,0,0.9,0c5.1,0,8.7-2,8.7-7.1c0-0.1,0-0.2,0-0.3 C33.1,15.4,29.2,13.5,23.5,13.5z"/></svg>;
var SearchIcon = <svg x="0px" y="0px" width="25px" viewBox="0 0 17.5 17.5"><path d="M6.5,11C4,11,2,9,2,6.5S4,2,6.5,2S11,4,11,6.5S9,11,6.5,11z M12.5,11h-0.8l-0.3-0.3c1-1.1,1.6-2.6,1.6-4.2 C13,2.9,10.1,0,6.5,0S0,2.9,0,6.5S2.9,13,6.5,13c1.6,0,3.1-0.6,4.2-1.6l0.3,0.3v0.8l5,5l1.5-1.5L12.5,11z"/></svg>;

var Header = React.createClass({

  mixins: [Navigation],

  render: function() {

    return (
      <div className="header">
        <div className="logo">
          <a href="/">
            <Flag leftImage={Logo}>
              <p className="type-dark-11 mvn h4">Pivotal <span className="em-high">Documentation</span></p>
            </Flag>
          </a>
        </div>
        <nav className="main-nav prxl">
          <InlineList className="mvn txt-r" spacing="l">
            <ListItem>
              <span className="type-dark-11">Downloads</span>
            </ListItem>
            <ListItem>
              <span className="type-dark-11">Support</span>
            </ListItem>
          </InlineList>
        </nav>
        <div className="search">
          {SearchIcon}
        </div>
      </div>
    );
  }
});

module.exports = Header;
