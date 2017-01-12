var React = require("react");
var NodeList = require("./NodesList");

var Notes = React.createClass({
    render: function() {
      return (
        <div>
          <h3> Notes for {this.props.username} </h3>
          <NodeList notes={this.props.notes} />
        </div>
      )
    }
});

module.exports = Notes;