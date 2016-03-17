var React = require('react');
var trasparentBg =  require('../styles').transparentBg;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Home = React.createClass({
    render: function(){
        return(
            <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={trasparentBg}>
                <h1 className='lead'>Github Battle</h1>
                <Link to="/playerOne">
                    <button type="button" className="btn btn-large btn-success">Get started</button>
                </Link>

            </div>
        )
    }
});

module.exports = Home;
