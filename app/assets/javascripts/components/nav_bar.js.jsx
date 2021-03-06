
var NavBar = React.createClass({
  render: function() {
    var url = this.href;
    return (
      <nav className="navbar navbar-default navbar-fixed-top" id="nav">
        <div className="container-fluid">
            <div className="navbar-header links">
              <a href="/">Home</a>
            </div>
            <ul className="nav navbar-nav navbar pull-right">
                <li> <a className="btn btn-default active_url" href="/users">All Users</a> </li>
                <li> <a className="btn btn-default active_url" href="/cheeses/new">Add Cheese</a> </li>
                <li> <a className="btn btn-default active_url" href="/likes">Like Your Cheeses</a> </li>
                <li> <a className="btn btn-danger" rel="nofollow" data-method="DELETE" href="/sign_out">Sign Out</a> </li>
            </ul>
          </div>
      </nav>
    );
    getInitialState: function () {
      return {
        activeMenuItemrUrl: 'home'
      };
    },
    setActiveMenuItem: function(url) {
      this.setSate({activeMenuItemrUrl: url});
    },
    render: function(){
      var menuItems = this.props.menuItems.map(function(menuItem) {
        return (
        MenuItem({
          active: (this.state.activeMenuItemUrl === menuItem.Url),
          key: menuItem.Url,
          onSelect: this.setActiveMenuItem,
          url: menuItem.url
        })
      );
    }.bind(this));

    return (
      React.DOM.ul({className: 'nav navbar-nav'}, menuItems)
    );
  }
});

var MenuItem = React.createClass({
  handleClick: function(event) {
    event.preventDefault();
    this.props.onSelect(this.props.uid);
  },
  render: function() {
    var active_url = this.props.active ? 'active' : null;

    return (
      React.DOM.li({active_url: active_url},
        React.DOM.a({href: "#" + this.props.url, onClick: this.handleClick})
      )
    );
  }
});

var LoggedOutNavBar = React.createClass({
  render: function () {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
            <div className="navbar-header links">
              <a href="/">Home</a>
            </div>
            <ul className="nav navbar-nav navbar pull-right">
            <li> <a className="btn btn-default navbar-btn" href="/sign_in">Sign In</a> </li>
            <li> <a className="btn btn-default navbar-btn" href="/users/new">New User</a> </li>
            </ul>
          </div>
      </nav>
    );
  }
})
