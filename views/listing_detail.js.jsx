/** @jsx React.DOM */

var ListingDetail = React.createClass({
  goHome: function(){ 
    console.log('go home')
    $('#view-2').hide()
    $('#view-3').show()
  },

  componentWillMount: function(){
    localStorage.listing = "{}"
    localStorage.stats = "{}"
  },

  render: function(){
    lst = JSON.parse(localStorage.listing)
    stats = JSON.parse(localStorage.stats)
    console.log(lst)
    console.log(stats)

    console.log(stats)
    the_stats = []
    for(key in stats) {
      var value = stats[key];
      console.log(the_stats)
      //the_stats.push(<stats title={key} value={value} />)
      
      the_stats.push( <div className="row content-block-inner">
          <div className="col-50">{key}</div>
          <div className="col-50">{value}</div>
        </div>
      );
    }

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
                    <img style={{width:"100%"}} src={lst.small_picture} />
                </div>

                <div className="row">
                  <p>{lst.property3}</p>
                </div>
                </div>

      <br/>
      <interestedButton/>
    <br/>
      <div className="row content-block-inner">
        {the_stats}
      </div>
                </div>


              </div>
            </div>
          </div>
        </div>
    );
  }
});

var stats = React.createClass({
  render: function(){
    return(
      <div>
        <div className="col-50">{this.props.title}</div>
        <div className="col-50">{this.props.value}</div>
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
    
    $.ajax({
      url: "https://api.parse.com/1/functions/notify_team",
      type:'post',
      contentType:'application/json',
      headers:{"X-Parse-Application-Id": "aIHDo506A6fdlZ7YZB6n93EZQeBvV8wBFsArgIYB",
               "X-Parse-REST-API-Key": "uh3i9ceRbn19xJubtw9EuAgYhto7vgmNnHzfEJZ2" 
      },
      data : JSON.stringify({'listing_url':JSON.parse(localStorage.listing).listing_url}),
    }).done(function(lol) {
      console.log(lol)
    })
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

