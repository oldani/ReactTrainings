var React = require("react");
var Router = require("react-router");
var Firebase = require("firebase");
var ReactFireMixin = require("reactfire");
var Repos = require("./GitHub/Repos");
var UserProfile = require("./GitHub/UserProfile");
var Notes = require("./Notes/Notes");


var Profile = React.createClass({
  mixins: [ReactFireMixin],
  componentDidMount: function() {
    this.ref = new Firebase('https://first-react-app-578fb.firebaseio.com/');
    var childRef = this.ref.child(this.props.params.username);
    this.bindAsArray(childRef, 'notes');
  },
  componentWillUnmount: function() {
    this.unbind('notes');
  },
  getInitialState: function() {
    return {
      notes: [1,2,3],
      bio: {
        name: "Ordanis"
      },
      repos: ['a', 'b', 'c']
    }
  },
  render: function() {
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={this.props.params.username}
            bio={this.state.bio} />
        </div>
        <div className="col-md-4">
          <Repos username={this.props.params.username} 
            repos={this.state.repos} />
        </div>
        <div className="col-md-4">
          <Notes username={this.props.params.username} 
            notes={this.state.notes} />
        </div>
      </div>
    )
  }
});

module.exports = Profile;

