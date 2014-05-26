/** @jsx React.DOM */

var truck_listings = React.createClass({
  getInitialState: function(){
    return {listings: []}
  },

  componentDidMount: function(){
    Parse.initialize("aIHDo506A6fdlZ7YZB6n93EZQeBvV8wBFsArgIYB", "wWQnUcWjA7ARW2s5n6zSfv52ypp1d7PmyMSoLxDh")
    var q2 = new Parse.Query(Parse.Object.extend('Listings'));
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
      listings.push(<listing listing={this.state.listings[i]}/>)
    }
    return (
      <div>
        <div className="content-block-title">Songs</div>
        <div className="list-block media-list">
          <ul>
            {listings}
          </ul>
        </div>
      </div>
    );
  },
  componentDidUpdate: function(){
    console.log('called')
    $('.truck_listing').on('click',function(){
      console.log('jquery click bitch')
      window.location.href = "#view-2"
    });
  },
});

var listing = React.createClass({
  clicked: function(){
    console.log('clicked')
  },

  render: function(){
    lst = this.props.listing
    return (
        <li>
          <a href="listing_detail.html" onClick={this.clicked} className="truck_listing item-link item-content">
            <div className="item-media">
              <img src="" width="80" src={lst.get('small_picture')._url}/>
            </div>
            <div className="item-inner">
              <div className="item-title-row">
                <div className="item-title">Yellow Submarine</div>
                <div className="item-after">$15</div>
              </div>
              <div className="item-subtitle">Beatles</div>
              <div className="item-text">Lorem ipsum dolor sit amet...</div>
            </div>
          </a>
        </li>
    );
  }
});

var App = React.createClass({
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
      <div id="view-4" className="view view-main tab active">
        <div className="pages">
          <div data-page="index-1" className="page">
            <div className="page-content">
              <div className="content-block-title">Welcome</div>
              <div className="content-block">
                <p>This is an example of tab bar application layout.</p>
                <p>Each tab/view may have different layout, different </p>
                <p>And of course, your favorite panels are still here: </p>
                <p>Icons and their labels in tab bar below are just for example and don't related to their content.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="view-2" className="view tab">
        <ListingDetail />
      </div>

      <div id="view-3" className="view tab">
        <div className="pages">
          <div data-page="index-3" className="page">
        <div className="navbar">
          <div className="navbar-inner">
            <div className="center sliding">Listings</div>
          </div>
        </div>
            <div className="page-content">
              <div className="content-block" style={{padding:"0px"}}>


          <truck_listings />


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
                          <input type="text" placeholder="Select Province" />
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
                          <input type="email" placeholder="E-mail" />
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
                          <input type="url" placeholder="URL" />
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
                          <input type="password" placeholder="Password" />
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
                          <input type="tel" placeholder="Phone" />
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
      <a href="#" onClick={this.handleClick} data-panel="left" className="button alert-text">Search!</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="toolbar tabbar tabbar-labels">
        <div className="toolbar-inner">
          <a href="#view-1" className="tab-link">
            <i className="icon tabbar-demo-icon-1"></i>
            <span className="tabbar-label">Search</span></a>
            
          <a href="#view-3" className="tab-link active">
            <i className="icon tabbar-demo-icon-3" />
            <span className="tabbar-label">Listings</span>
          </a>
        </div>
      </div>
    </div>
    </div>
    )
  }
  //<i className="icon tabbar-demo-icon-3"><span className="badge badge-red">4</span></i>
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

React.renderComponent(<App />, document.getElementById('content'));
