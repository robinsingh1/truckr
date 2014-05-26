/** @jsx React.DOM */

var ListingDetail = React.createClass({
  goHome: function(){ 
    window.location.href="index.html"
  },

  render: function(){
    return (
      <div className="views tabs toolbar-through">
        <div id="view-1" className="view view-main tab active">
        <div className="navbar">
          <div className="navbar-inner">
          <div className="left">
            <a href="/" onClick={this.goHome} className="back link"><i className="icon icon-back-blue"></i><span>Back</span></a></div>
              <div className="center sliding" style={{marginRight:'auto',marginLeft:'auto',paddingRight:'60px'}}>
              Listing Detail
            </div>
          </div>
        </div>

          <div className="pages">
            <div data-page="index-1" className="page">
              <div className="page-content">
                <div className="content-block-title">&nbsp;</div>
                <div className="content-block">

                <div className="content-block-inner">
                <div className="row">
                <div className="col-50"></div>
                <div className="col-50">
                <p>Couple of worlds here because my app is so awesome!</p>
                <p>Duis sed erat ac eros ultrices pharetra id ut tellus. Praesent rhoncus enim ornare ipsum aliquet ultricies. Pellentesque sodales erat quis elementum sagittis.</p>
                </div>
                </div>
                </div>

      <br/>
      <interestedButton/>
    <br/>
      <div className="row content-block-inner">
        <div className="content-block-inner col-50">50%</div>
        <div className="content-block-inner col-50">50%</div>
      </div>

                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

var interestedButton = React.createClass({
  handleClick: function(){
    console.log('handle Click')
    // show modal
    // set interested 
    // change interested button background-color
  },

  componentDidMount: function(){
    var myApp = new Framework7();
    var $$ = Framework7.$;
 
    $$('.alert-text').on('click', function () {
        myApp.alert('Thanks For The Interest! One of our sales reps will email you details shortly!', 'Thanks!');
    });
  },

  render: function(){
    return (
      <div>
      <a href="#" onClick={this.handleClick} data-panel="left" className="button alert-text">I'm Interested</a>
      </div>
    );
  }
});

//React.renderComponent(<ListingDetail />, document.getElementById('content'));

