var React = require("react");
var PropTypes = React.PropTypes;
var transparentBg =  require('../styles').transparentBg;

var UserDetails = require("./userDetails")
var UserDetailsWrapper = require("./userDetailsWrapper")

function Results (props) {
    var winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
    var losingIndex = winningIndex === 1 ? 0 : 1;
    return (
        <div className="jumbotrone col-sm-12 text-center" style={transparentBg}>
            <h1>
                Results
            </h1>
            <div className="col-sm-8 col-sm-offset-2">
                <UserDetailsWrapper header="Winner">
                    <UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]}></UserDetails>
                </UserDetailsWrapper>
                <UserDetailsWrapper header="Looser">
                    <UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]}></UserDetails>
                </UserDetailsWrapper>
            </div>
        </div>
    )
}

Results.PropTypes = {
    isLoading: PropTypes.bool.isRequired,
    scores: PropTypes.array.isRequired,
    playersInfo: PropTypes.array.isRequired
}

module.exports = Results;
