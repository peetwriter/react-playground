var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var MainContainer = require("./mainContainer");

var Home = React.createClass({
    render: function(){
        return(
            <MainContainer>
                <h1 className='lead'>Github Battle</h1>
                <Link to="/playerOne">
                    <button type="button" className="btn btn-large btn-success">Get started</button>
                </Link>

            </MainContainer>
        )
    }
});

module.exports = Home;
