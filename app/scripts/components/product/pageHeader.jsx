var React = require('react');
var Navigation = require('react-router').Navigation;

// Firebase
var Firebase = require("firebase");
var ReactFireMixin = require("reactfire");

var LinkDropdown = require('pui-react-dropdowns').LinkDropdown;
var DropdownItem = require('pui-react-dropdowns').DropdownItem;
var Flag = require('pui-react-media').Flag;
var Row = require('pui-react-grids').Row;
var Col = require('pui-react-grids').Col;
var InlineList = require('pui-react-lists').InlineList;
var ListItem = require('pui-react-lists').ListItem;

var pcfLogo = <svg x="0px" y="0px" width="35px" viewBox="0 0 272.6 200.4"><path fill="#008774" d="M159.9,169.6c0-44.1-35.9-79.9-79.9-79.9S0,125.5,0,169.6c0,7.3,1,14.4,2.9,21.2h0c0.7,2.6,1.5,5.1,2.5,7.6 c0.5,1.3,1.7,2.1,3.1,2.1h21.8c2.5,0,4.1-2.7,2.9-4.9c-0.9-1.5-1.6-3.1-2.3-4.8h0c-2.8-6.5-4.4-13.6-4.4-21.2 c0-29.6,24-53.6,53.6-53.6s53.6,24,53.6,53.6c0,7.5-1.6,14.7-4.4,21.2h0c-0.7,1.7-1.6,3.4-2.5,5.1c-1.2,2,0.4,4.6,2.7,4.6 c6.7,0,17.7,0,22.2,0c1.3,0,2.4-0.8,2.9-2c1-2.5,1.8-5.1,2.5-7.7h0C158.9,184,159.9,176.9,159.9,169.6z"/><path fill="#00AE9E" d="M171.2,63.3c-56,0-101.5,45.5-101.5,101.5c0,8.9,1.2,17.6,3.4,25.8h0c0.7,2.6,1.4,5.2,2.3,7.7 c0.4,1.3,1.7,2.1,3,2.1h21.5c2.3,0,3.9-2.4,2.9-4.5c-0.8-1.7-1.5-3.5-2.1-5.3h0c-3-8.1-4.6-16.7-4.6-25.8 c0-41.4,33.7-75.1,75.1-75.1s75.1,33.7,75.1,75.1c0,9.1-1.6,17.8-4.6,25.8h0c-0.7,1.9-1.4,3.7-2.3,5.5c-0.9,2,0.5,4.3,2.8,4.3H264 c1.3,0,2.5-0.8,2.9-2c0.9-2.6,1.7-5.2,2.3-7.8h0c2.2-8.2,3.4-16.9,3.4-25.8C272.6,108.8,227.1,63.3,171.2,63.3z"/><path fill="#008774" d="M227.3,90c0-49.6-40.4-90-90-90c-49.6,0-90,40.4-90,90c0,2.8,0.1,5.5,0.4,8.2h26.5 c-0.3-2.7-0.5-5.4-0.5-8.2c0-35.1,28.5-63.6,63.6-63.6c35.1,0,63.6,28.5,63.6,63.6c0,1.2,0,2.3-0.1,3.4h0c-0.7,13-5.3,25-12.7,34.8 c-1.7,2.2-0.1,5.5,2.7,5.5h23c1.3,0,2.4-0.7,3-1.8c6.1-11.6,9.8-24.6,10.3-38.5h0C227.3,92.3,227.3,91.1,227.3,90z"/></svg>;
var versionDropdownTitle = <span className="type-dark-4 h5 mlxl">v1.6.0.0 <i className="fa fa-angle-down"></i></span>;

var PageHeader = React.createClass({

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

  componentDidMount: function() {
    $('.docs-search-input').bind("enterKey",function(e){
      $('#search-results').toggleClass('hidden');
    });

    $('.docs-search-input').keyup(function(e){
      if(e.keyCode == 13)
        {
          $(this).trigger("enterKey");
        }
    });

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
      <div className="page-header">
        <div style={{maxWidth: "1140px"}}>
          <p className="mvn type-dark-5 em-alt type-sm">Latest Stable Version: 1.6.0.0 <span>- <a href="#">Changelog</a></span></p>

          <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <div style={{display: "flex", alignItems: "center"}}>
              {pcfLogo}
              <div style={{display: "flex", alignItems: "center"}}>
                <h1 className="em-low mvn type-dark-1 mll">Pivotal Cloud Foundry</h1>
                <LinkDropdown title={versionDropdownTitle}>
                  <DropdownItem href="http://media.giphy.com/media/TlK63EQERmiAVzMEgO4/giphy.gif">v1.5.0.0</DropdownItem>
                  <DropdownItem href="http://media.giphy.com/media/TlK63EQERmiAVzMEgO4/giphy.gif">v1.4.0.0</DropdownItem>
                  <DropdownItem href="http://media.giphy.com/media/TlK63EQERmiAVzMEgO4/giphy.gif">v1.3.0.0</DropdownItem>
                  <DropdownItem href="http://media.giphy.com/media/TlK63EQERmiAVzMEgO4/giphy.gif">v1.2.0.0</DropdownItem>
                </LinkDropdown>
              </div>
            </div>

            <div className="search">
              <div className="docs-search-wrap">
                <i className="fa fa-search search-icon"></i>
                <input placeholder="Search PCF 1.6.0.0" className="docs-search-input" />
              </div>
              <div id="search-results" className="search-results hidden" style={{width: "350px"}}>
                <ul className="search-results-list">
                  <li className="top-results pal">
                    <a href="#/search-results">
                      <span>Show All Results</span>
                      <i className="fa fa-angle-right"></i>
                    </a>
                  </li>
                  <li>
                    <hr className="mvn" />
                  </li>
                  { searchResults }
                </ul>
              </div>
            </div>
          </div>

          <Row>
            <Col md={24}>
              <InlineList spacing="l" className="mvn">
                <ListItem className="mvn mln">
                  <span className="type-sm">
                    <i className="fa-download fa mrm type-accent-5"></i>
                    <a href="#">Download Product Files</a>
                  </span>
                </ListItem>
                <ListItem className="mvn">
                  <span className="type-sm">
                    <i className="fa-support fa mrm type-accent-5"></i>
                    <a href="#">Submit Support Ticket</a>
                  </span>
                </ListItem>
                <ListItem className="mvn">
                  <span className="type-sm">
                    <i className="fa-question fa mrm type-accent-5"></i>
                    <a href="#">Knowledge Base</a>
                  </span>
                </ListItem>
              </InlineList>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
});

module.exports = PageHeader;
