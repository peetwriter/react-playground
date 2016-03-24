var React = require('react');
var Results = require('../components/results');
var githubHelpers = require('../utils/githubHelpers');

var ResultsContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function() {
        return({
            isLoading: true,
            scores: []
        })
    },
    componentDidMount: function() {
        // this.props.location.state.playersInfo
        githubHelpers.battle(this.props.location.state.playersInfo)
            .then(function(scores){
                this.setState({
                    scores: scores,
                    isLoading: false
                })
            });
    },
    render: function (){
        return (
            <Results
                isLoading={this.state.isLoading}
                scores={this.state.scores}
                playersInfo={this.props.location.state.playersInfo}/>
        );
    }
});

module.exports = ResultsContainer;
