var React = require("react");

var Repos = React.createClass({
    render: function() {
        return (
            <div>
                <p> Repos!</p>
                {this.props.repos}
            </div>
        )
    }
});

module.exports = Repos;