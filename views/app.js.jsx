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
  }
});

var listing = React.createClass({
  render: function(){
    lst = this.props.listing
    return (
        <li>
          <a href="#" className="item-link item-content">
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
      <div id="view-1" className="view view-main tab active">
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
        <div className="navbar">
          <div className="navbar-inner">
            <div className="center sliding">Second View</div>
          </div>
        </div>
        <div className="pages navbar-through">
          <div data-page="index-2" className="page">
            <div className="page-content">
              <div className="content-block">
                <p>This is a second view. Lets, for example, have here some internal pages with navbar navigation</p>
              </div>
              <div className="list-block">
                <ul>
                  <li><a href="about.html" className="item-link">
                      <div className="item-content">
                        <div className="item-inner">
                          <div className="item-title">About Us</div>
                        </div>
                      </div></a></li>
                  <li><a href="services.html" className="item-link">
                      <div className="item-content">
                        <div className="item-inner">
                          <div className="item-title">Services</div>
                        </div>
                      </div></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
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
      <div id="view-4" className="view tab">
        <div className="pages navbar-fixed">
          <div data-page="index-4" className="page">
            <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Settings</div>
              </div>
            </div>
            <div className="page-content">
              <div className="list-block">
                <ul>
                  <li>
                    <div className="item-content">
                      <div className="item-media"><i className="icon icon-form-name"></i></div>
                      <div className="item-inner">
                        <div className="item-title label">Name</div>
                        <div className="item-input">
                          <input type="text" placeholder="Your name" />
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="item-content">
                      <div className="item-media"><i className="icon icon-form-email"></i></div>
                      <div className="item-inner">
                        <div className="item-title label">E-mail</div>
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
                        <div className="item-title label">URL</div>
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
                        <div className="item-title label">Password</div>
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
                        <div className="item-title label">Phone</div>
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
                        <div className="item-title label">Gender</div>
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
                      <div className="item-media"><i className="icon icon-form-calendar"></i></div>
                      <div className="item-inner">
                        <div className="item-title label">Birth date</div>
                        <div className="item-input">
                          <input type="date" placeholder="Birth day" value="2014-04-30" />
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="item-content">
                      <div className="item-media"><i className="icon icon-form-toggle"></i></div>
                      <div className="item-inner">
                        <div className="item-title label">Switch</div>
                        <div className="item-input">
                          <label className="label-switch">
                            <input type="checkbox" />
                          </label>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="item-content">
                      <div className="item-media"><i className="icon icon-form-settings"></i></div>
                      <div className="item-inner">
                        <div className="item-title label">Slider</div>
                        <div className="item-input">
                          <div className="range-slider">
                            <input type="range" min="0" max="100" value="50" step="0.1" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="content-block">
                <p>Mauris commodo lacus at nisl lacinia, nec facilisis erat rhoncus. Sed eget pharetra nunc. Aenean vitae vehicula massa, sed sagittis ante. Quisque luctus nec velit dictum convallis. Nulla facilisi. Ut sed erat nisi. Donec non dolor massa. Mauris malesuada dolor velit, in suscipit leo consectetur vitae. Duis tempus ligula non eros pretium condimentum. Cras sed dolor odio.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="toolbar tabbar tabbar-labels">
        <div className="toolbar-inner"><a href="#view-1" className="tab-link active"><i className="icon tabbar-demo-icon-1"></i><span className="tabbar-label">Information</span></a><a href="#view-2" className="tab-link"><i className="icon tabbar-demo-icon-2"></i><span className="tabbar-label">Inbox</span></a><a href="#view-3" className="tab-link"><i className="icon tabbar-demo-icon-3"><span className="badge badge-red">4</span></i><span className="tabbar-label">Upload</span></a><a href="#view-4" className="tab-link"><i className="icon tabbar-demo-icon-4"></i><span className="tabbar-label">Photos</span></a></div>
      </div>
    </div>
    </div>
    )
  }
});

React.renderComponent(<App />, document.getElementById('content'));
