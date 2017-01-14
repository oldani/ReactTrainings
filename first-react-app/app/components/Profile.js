var React = require("react");
var Router = require("react-router");
var Firebase = require("firebase");
var ReactFireMixin = require("reactfire");
var Repos = require("./GitHub/Repos");
var UserProfile = require("./GitHub/UserProfile");
var Notes = require("./Notes/Notes");
var helpers = require("../utils/helpers");


var Profile = React.createClass({
  mixins: [ReactFireMixin],
  componentWillReceiveProps: function(nextProps) {
    this.unbind('notes');
    this.init(nextProps.params.username);
  },
  componentDidMount: function() {
    this.ref = new Firebase('https://first-react-app-578fb.firebaseio.com/');
    this.init(this.props.params.username);
  },
  componentWillUnmount: function() {
    this.unbind('notes');
  },
  init: function(username) {
    var childRef = this.ref.child(username);
    this.bindAsArray(childRef, 'notes');

    helpers.getGitHubInfo(username)
           .then(function(data) {
              this.setState({
                bio: data.bio,
                repos: data.repos
              });
           }.bind(this));
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
  handleAddNote: function(newNote) {
    this.ref.child(this.props.params.username)
            .push(newNote);
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
          <Notes
            username={this.props.params.username} 
            notes={this.state.notes}
            addNote={this.handleAddNote} />
        </div>
      </div>
    )
  }
});

module.exports = Profile;

