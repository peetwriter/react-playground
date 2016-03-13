var React = require("react");
var ReactDOM = require("react-dom");

var HelloWorld = React.createClass({
    render: function() {
        return(
            <div>Hello World lll, {this.props.name}</div>
        )
    }
});

ReactDOM.render(
    <HelloWorld name="a"/>,
    document.getElementById("app")
)
