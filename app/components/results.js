var React = require("react");
var PropTypes = React.PropTypes;
var styles =  require('../styles').transparentBg;
var Link = require("react-router").Link;

var UserDetails = require("./userDetails");
var UserDetailsWrapper = require("./userDetailsWrapper");
var MainContainer = require("./mainContainer");

function StartOver () {
    return (
        <div className="col-sm-12" style={styles.space}>
            <Link to="/playerOne">
                <button type="button" className="btn btn-lg btn-danger">Start Over</button>
            </Link>
        </div>
    )
}

function Results (props) {
    if (props.isLoading) {
        return (
            <p>Loading </p>
        )
    }

    if (props.scores[0] === props.scores[1]) {
        return (
            <MainContainer>
                <h1>Its a tie! </h1>
                <StartOver/>
            </MainContainer>
        )
    }

    var winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
    var losingIndex = winningIndex === 1 ? 0 : 1;
    return (
        <MainContainer>
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
                <StartOver/>
            </div>
        </MainContainer>
    )
}

Results.PropTypes = {
    isLoading: PropTypes.bool.isRequired,
    scores: PropTypes.array.isRequired,
    playersInfo: PropTypes.array.isRequired
}

module.exports = Results;
