import React from "react";


class SearchGitHub extends React.Component {
  getRef(ref) {
    this.usernameRef = ref;
  }
  handleSubmit() {
    const username = this.usernameRef.value;
    this.usernameRef.value = "";
    this.props.history.pushState(null, "/profile/" + username);
  }
  render() {
    return (
      <div className="col-sm-12">
        <form onSubmit={() => this.handleSubmit()}>
          <div className="col-sm-7 form-group">
            <input type="text" className="form-control"ref={ref => this.getRef(ref)}/>
          </div>
          <div className="col-sm-5 form-group">
            <button type="submit" className="btn btn-block btn-primary">
              Search on GitHub
            </button>
          </div>
        </form>
      </div>
    )
  } 
}

SearchGitHub.propTypes = {
  history: React.PropTypes.object.isRequired
}


export default SearchGitHub;
