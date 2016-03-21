var React = require('react');
var ReactRouter = require('react-router');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.HashHistory;

var Main = require("../components/main");
var Home = require("../components/home");
var PromtContainer = require("../containers/promptContainer");
var ConfirmBattleContainer = require("../containers/confirmBattleContainer");

var routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute path="" component={Home}/>
            <Route path="playerOne" header="Player One" component={PromtContainer}></Route>
            <Route path="playerTwo/:playerOne" header="Player Two" component={PromtContainer}></Route>
            <Route path="battle" component={ConfirmBattleContainer}></Route>
        </Route>
    </Router>
)

module.exports = routes;
