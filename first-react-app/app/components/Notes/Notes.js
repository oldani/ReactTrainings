var React = require("react");
var NodeList = require("./NodesList");
var AddNote = require("./AddNote");

var Notes = React.createClass({
    propTypes: {
      username: React.PropTypes.string.isRequired,
      notes: React.PropTypes.array.isRequired,
      addNote: React.PropTypes.func.isRequired
    },
    render: function() {
      return (
        <div>
          <h3> Notes for {this.props.username} </h3>
          <AddNote addNote={this.props.addNote} />
          <NodeList notes={this.props.notes} />
        </div>
      )
    }
});

module.exports = Notes;