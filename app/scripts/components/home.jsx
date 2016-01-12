var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Navigation = require('react-router').Navigation;


var Hero = require('./hero.jsx');
var ProductTile = require('./productTile.jsx');

var TileLayout = require('pui-react-tile-layout');
var BasicPanelAlt = require('pui-react-panels').BasicPanelAlt;

var Header = require('./header');

var Firebase = require("firebase");
var ReactFireMixin = require("reactfire");


var Home = React.createClass({

  mixins: [ReactFireMixin, Navigation],

  getInitialState: function() {
    return {
      products: []
    };
  },

  componentWillMount: function() {
    var myFirebaseRef = new Firebase("https://pivotal-docs.firebaseio.com/products");
    this.bindAsArray(myFirebaseRef, "products");
  },

  render: function() {

    var products = this.state.products.map(function(product) {

      return (
        <ProductTile name={ product['.key'] }>
        </ProductTile>
      );

    });

    return (
      <div className="layout">
        <Header />
        <div className="home">
          <Hero />
          <div className="container">
            <h1 className="em-low">Pivotal Software</h1>
            <hr />
            <TileLayout columns={3}>
              { products }
            </TileLayout>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Home;
