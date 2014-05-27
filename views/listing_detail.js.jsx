/** @jsx React.DOM */

var ListingDetail = React.createClass({
  goHome: function(){ 
    console.log('go home')
    $('#view-2').hide()
    $('#view-3').show()
  },

  componentWillMount: function(){
  },

  render: function(){
    lst = JSON.parse(localStorage.listing)
    console.log(lst)
    return (
        <div id="view-2" className="view tab">
        <div className="navbar">
          <div className="navbar-inner">
          <div className="left">
            <a href="#" onClick={this.goHome} className="back link"><i className="icon icon-back-blue"></i><span>Back</span></a></div>
              <div className="center sliding" style={{marginRight:'auto',marginLeft:'auto',paddingRight:'60px'}}>
              {JSON.parse(localStorage.listing).property1}
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
                    <img style={{width:"100%"}} src={lst.big_pic} />
                </div>

                <div className="row">
                  <p>{lst.property3}</p>
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
      <a href="#" onClick={this.handleClick} data-panel="left" className="button button-big button-submit">I'm Interested</a>
      </div>
    );
  }
});

//React.renderComponent(<ListingDetail />, document.getElementById('content'));

