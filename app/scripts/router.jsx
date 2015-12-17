var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var Layout = require('./components/layout');
var Home = require('./components/home');
var Product = require('./components/product/product');
var Balancer = require('./components/balancer');

var routes = (
  <Route name="layout" path="/" handler={Layout}>
    <DefaultRoute handler={Home} />
    <Route handler={Product} name="/product" />
    <Route handler={Balancer} name="/balancer" />
  </Route>
);

exports.start = function() {

  Router.run(routes, function (Handler) {
    React.render(<Handler />, document.getElementById('content'));
  });
}
