var NavBar = React.createClass({
  render: function() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
            <div className="navbar-header links">
              <a href="/">Home</a>
            </div>
            <ul className="nav navbar-nav navbar pull-right">
                <li> <a className="btn btn-default" href="/users">All Users</a> </li>
                <li> <a className="btn btn-default" href="/cheeses/new">Add Cheese</a> </li>
                <li> <a className="btn btn-default" href="/likes">Like Your Cheeses</a> </li>
                <li> <a className="btn btn-danger" rel="nofollow" data-method="DELETE" href="/sign_out">Sign Out</a> </li>
            </ul>
          </div>
      </nav>
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
