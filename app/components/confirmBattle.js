var React = require('react');
var styles = require("../styles");

var puke = function (object){
    return <pre>{JSON.stringify(object, null, ' ')}</pre>
};


function ConfirmBattle (props) {
    return props.isLoading === true
    ? <p> Loading! </p>
: <div className="jumbotrone col-sm-12 text-center" style={styles.transparentBg}></div>
    <h1>Confirm Players</h1>
    <div className="col-sm-8 col-sm-offset-2">
        <div className="col-sm-6">
            <p className="lead">Player 1</p>
            Player 1 info
        </div>
        <div className="col-sm-6">
            <p className="lead">Player 2</p>
            Player 2 info
        </div>
    </div>
    <div className="col-sm-8 col-sm-offset-2">
        <div className="col-sm-12" style={styles.space}>
            Initiate Battle button
        </div>
        <div className="col-sm-12" style={styles.space}>
            Link to player one 
        </div>
    </div>

}

ConfirmBattle.PropTypes = {
    isLoading: React.PropTypes.bool.isRequired,
    playersInfo: React.PropTypes.array.isRequired,
    onInitiateBattle: React.PropTypes.func.isRequired
};

module.exports = ConfirmBattle;
