var React = require('react');
var ConfirmBattle = require('../components/confirmBattle');
var githubHelpers = require('../utils/githubHelpers');

console.log(githubHelpers);

var ConfirmBattleContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function () {
        return {
            isLoading: true,
            playersInfo: []
        }
    },
    componentDidMount: function () {
        var query = this.props.location.query;
        githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
    },
    render: function (){
        return (
            <ConfirmBattle
                isLoading={this.state.isLoading}
                playersInfo={this.state.playersInfo}/>
        );
    }
});

module.exports = ConfirmBattleContainer;
