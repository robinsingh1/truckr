/** @jsx React.DOM */

var truck_listings = React.createClass({
  getInitialState: function(){
    return {listings: []}
  },

  componentDidMount: function(){
    Parse.initialize("aIHDo506A6fdlZ7YZB6n93EZQeBvV8wBFsArgIYB", "wWQnUcWjA7ARW2s5n6zSfv52ypp1d7PmyMSoLxDh")
    var q2 = new Parse.Query(Parse.Object.extend('tmp_listings'));
    _this = this
    q2.find({ 
      success: function(items){
        console.log(items)
        _this.setState({listings: items});
      }
    });
  },

  render: function(){
    listings = []
    for(i=0;i<this.state.listings.length;i++){
      listings.push(<listing updateListing={this.props.updateListing} listing={this.state.listings[i]}/>)
    }
    return (
      <div>
        <div className="content-block-title">&nbsp;</div>
        <div className="list-block media-list">
          <ul> {listings} </ul>
        </div>
      </div>
    );
  },

});

var listing = React.createClass({
  clicked: function(){
    console.log('clicked')
      $('#view-2').show()
      $('#view-3').hide()
    
    console.log(this.props.listing.get('listing_url'))
    localStorage.listing = JSON.stringify(this.props.listing.attributes)
    objectId = this.props.listing.get('stats').id
    this.props.updateListing(this.props.listing)

    thiss = this;
    $.ajax({
      type:'GET',
      url: "https://api.parse.com/1/classes/tmp_stats/"+objectId,
      headers:{"X-Parse-Application-Id": "aIHDo506A6fdlZ7YZB6n93EZQeBvV8wBFsArgIYB",
               "X-Parse-REST-API-Key": "uh3i9ceRbn19xJubtw9EuAgYhto7vgmNnHzfEJZ2" 
      },
    }).success(function(lol) {
      localStorage.stats = JSON.stringify(lol)
      thiss.props.updateListing(thiss.props.listing)
    })
  },

  render: function(){
    lst = this.props.listing
    return (
        <li>
          <a href="#" onClick={this.clicked} data-view="" className="truck_listing item-link item-content">
            <div className="item-media">
              <img src="" width="80" src={lst.get('small_picture')}/>
            </div>
            <div className="item-inner">
              <div className="item-title-row">
                <div className="item-title">{lst.get('title')}</div>
                <div className="item-after">{lst.get('price')}</div>
              </div>
              <div className="item-subtitle">&nbsp;</div>
              <div className="item-text">{lst.get('short_description')}</div>
            </div>
          </a>
        </li>
    );
  }
});

var App = React.createClass({
  getInitialState: function(){
    return {currentListing: []};
  },
  componentDidMount: function(){
    $('#search').on('click', function(){
      $('#view-1').show()
      $('#view-3').hide()
      $('#view-2').hide()
    });

    $('#listing').on('click', function(){
      $('#view-1').hide()
      $('#view-3').show()
      $('#view-2').hide()
    });
  },

  updateListing: function(listing){
    this.setState({currentListing: listing})
  },

  render: function(){
    return (
    <div style={{height:"100%"}}>
    <div className="statusbar-overlay"></div>
      <div className="panel-overlay"></div>
        <div className="panel panel-left panel-reveal">
          <div className="content-block">
            <p>Left panel content goes here</p>
          </div>
        </div>

        <div className="panel panel-right panel-cover">
          <div className="content-block">
            <p>Right panel content goes here</p>
          </div>
        </div>

    <div className="views tabs toolbar-through">
      <ListingDetail currentListing={this.state.currentListing}/>
      <searchResults />

      <div id="view-3" className="view view-main tab active">
        <div className="pages">
          <div data-page="index-1" className="page">
            <div className="navbar">
              <div className="navbar-inner">
                <div className="center sliding">Listings</div>
              </div>
            </div>
            <div className="page-content">
              <div className="content-block" style={{padding:"0px"}}>
                <truck_listings updateListing={this.updateListing}/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="view-1" className="view tab">
        <div className="pages navbar-fixed">
          <div data-page="index-4" className="page">
            <div className="navbar">
              <div className="navbar-inner">
                <div className="" style={{marginRight:'auto',marginLeft:'auto'}}>
                  Search
                </div>
              </div>
            </div>
            <div className="page-content">
              <div className="list-block">
                <ul>
                  <li>
                    <div className="item-content">
                      <div className="item-media"><i className="icon icon-form-name"></i></div>
                      <div className="item-inner">
                        <div className="item-title label">Location</div>
                        <div className="item-input">
                          <select>
                            <option>Male</option>
                            <option>Female</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="item-content">
                      <div className="item-media"><i className="icon icon-form-email"></i></div>
                      <div className="item-inner">
                        <div className="item-title label">New Or Used?</div>
                        <div className="item-input">
                          <select>
                            <option>Male</option>
                            <option>Female</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="item-content">
                      <div className="item-media"><i className="icon icon-form-url"></i></div>
                      <div className="item-inner">
                        <div className="item-title label">Type</div>
                        <div className="item-input">
                          <select>
                            <option>Male</option>
                            <option>Female</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="item-content">
                      <div className="item-media"><i className="icon icon-form-password"></i></div>
                      <div className="item-inner">
                        <div className="item-title label">Make</div>
                        <div className="item-input">
                          <select>
                            <option>Male</option>
                            <option>Female</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="item-content">
                      <div className="item-media"><i className="icon icon-form-tel"></i></div>
                      <div className="item-inner">
                        <div className="item-title label">Price</div>
                        <div className="item-input">
                          <select>
                            <option>Male</option>
                            <option>Female</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="item-content">
                      <div className="item-media"><i className="icon icon-form-gender"></i></div>
                      <div className="item-inner">
                        <div className="item-title label">Search By Body Style</div>
                        <div className="item-input">
                          <select>
                            <option>Male</option>
                            <option>Female</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="content-block">
                <a href="#" onClick={this.handleSearchClick} data-panel="left" className="button button-big button-submit">Search!</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="toolbar tabbar tabbar-labels">
        <div className="toolbar-inner">
          <a href="#view-1" className="tab-link" id="search">
            <i className="icon tabbar-demo-icon-1"></i>
            <span className="tabbar-label">Search</span></a>
          <a href="#view-3" className="tab-link active" id="listing">
            <i className="icon tabbar-demo-icon-3" />
            <span className="tabbar-label">Listings</span>
          </a>
        </div>
      </div>
    </div>
    </div>
    )
  },

  handleSearchClick: function(){
    //form validation
    //
  },
  /*
          <a href="#view-2" className="tab-link">
            <i className="icon tabbar-demo-icon-2"></i>
            <span className="tabbar-label">Inbox</span>
          </a>
            <a href="#view-4" className="tab-link">
              <i className="icon tabbar-demo-icon-4" />
              <span className="tabbar-label">Photos</span>
            </a>
  */
});

var searchResults = React.createClass({
  render: function(){
    return (
      <div>
      </div>
    )
  }
});

React.renderComponent(<App />, document.getElementById('content'));
