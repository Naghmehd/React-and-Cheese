var Likes = React.createClass({
  getInitialState: function () {
    return {
      chosen: false
    };
  },
  onClick: function (e) {
    var _this = this;
    $.ajax({
      method: "POST",
      url: '/cheeses',
      dataType: 'JSON',
      data: {
        favorite: {
          cheese_id: this.props.cheeseid,
          user_id: this.props.userid
        }
      }
    }).done(function () {
      this.setState({ chosen: true });
    }.bind(this));
  },

  render: function() {
    if (this.state.chosen) {
      return (<div className=''>Likes</div> ); //no button when faved?
    } else {
      return (<div className='btn btn-xs btn-default' onClick={this.onClick}>Save Favorite Cheeses</div> );
    }
  }
});
