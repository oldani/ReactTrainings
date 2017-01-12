var React = require("react");


var NodeList = React.createClass({
  render: function() {
    var notes = this.props.notes.map(function(note, index) {
      return <li className="list-group" key={index}>{note['.value']}</li>
    });
    return (
      <ul className="list-group">
        {notes}
      </ul>
    )
  }
});

module.exports = NodeList;