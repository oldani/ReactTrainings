import React from "react";
import Rebase from "re-base";
import Repos from "./GitHub/Repos";
import UserProfile from "./GitHub/UserProfile";
import Notes from "./Notes/Notes";
import getGitHubInfo from "../utils/helpers"


const base = Rebase.createClass('https://first-react-app-578fb.firebaseio.com/')

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      bio: {},
      repos: []
    }
  }
  componentWillReceiveProps(nextProps) {
    base.removeBinding(this.ref);
    this.init(nextProps.params.username);
  }
  componentDidMount() {
    this.init(this.props.params.username);
  }
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }
  init(username) {
    this.ref =  base.bindToState(username, {
      context: this,
      asArray: true,
      state: 'notes'
    });

    getGitHubInfo(username)
           .then(data => {
              this.setState({
                bio: data.bio,
                repos: data.repos
              });
           });
  }
  handleAddNote(newNote) {
    base.post(this.props.params.username, {
      data: this.state.notes.concat([newNote])
    });
  }
  render() {
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
            addNote={newNote => this.handleAddNote(newNote)} />
        </div>
      </div>
    )
  }
}


export default Profile;
