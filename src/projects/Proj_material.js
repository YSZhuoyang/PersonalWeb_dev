
import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';


//import './Proj.css';

injectTapEventPlugin();

export default class Proj extends React.Component {

    constructor() {
        super();
        this.handleTouch.bind(this);
    }

    static childContextTypes = {
        muiTheme: React.PropTypes.object
    }

    getChildContext() {
        return {
            muiTheme: getMuiTheme()
        }
    }

    handleTouch(e) {
        Console.log("Touched")
    }

    renderProj1() {
        return(
            <Card onTouch={this.handleTouch}>
                <CardHeader
                title="URL Avatar"
                subtitle="Subtitle"
                avatar="./img/pass.png"
                />
                <CardMedia
                overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                >
                <img src="./img/pass.png" alt="Project 1" />
                </CardMedia>
                <CardTitle title="Card title" subtitle="Card subtitle" />
                <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
            </Card>
        );
    }

    render() {
        return(
            <div>
                {this.renderProj1()}
            </div>
        );
    }
}
