
import React from 'react';
import Timeline from 'react-image-timeline';
import 'react-image-timeline/dist/timeline.css';

const events = [{
	"date": Date.parse("2013-05-15T07:00:00.000Z"),
	"text": "Sed leo elit, pellentesque sit amet congue quis, ornare nec lorem. Phasellus tincidunt rhoncus magna,\neget elementum odio rutrum fermentum. Ut a justo lacus. Maecenas blandit molestie felis ac viverra. Pellentesque\nsagittis ligula neque, sit amet feugiat massa tempor sed. Duis id bibendum ex, pulvinar tincidunt ",
	"title": "Berlin, Germany",
	"imageUrl": "https://s3.amazonaws.com/aaron-cdn/react-image-timeline/berlin.jpg"
}, {
	"date": Date.parse("2013-08-14T07:00:00.000Z"),
	"text": "Sed leo elit, pellentesque sit amet congue quis, ornare nec lorem. Phasellus tincidunt rhoncus magna,\neget elementum odio rutrum fermentum. Ut a justo lacus. Maecenas blandit molestie felis ac viverra. Pellentesque\nsagittis ligula neque, sit amet feugiat massa tempor sed. Duis id bibendum ex, pulvinar tincidunt orci. Curabitur\nid sem urna. Maecenas sed elit malesuada, cursus ligula ut, vestibulum lorem. Suspendisse vitae ultrices libero.\nMauris maximus, ligula vitae tincidunt scelerisque, ipsum magna euismod massa, eu vulputate enim est tempus sem.\nMaecenas id nibh vitae ante volutpat facilisis nec eget velit. Proin et ligula feugiat, auctor tellus sit amet,\naccumsan neque. Quisque porttitor lectus quis elit fermentum, a facilisis est suscipit. Integer consectetur dapibus\nnisi, ut lacinia enim vulputate vitae. Curabitur id diam mauris. Duis dictum, dolor at porttitor aliquet, justo libero\nmattis magna, eu pellentesque augue mauris eget erat. Pellentesque lacinia velit nec ullamcorper mollis. Pellentesque\nlacus tortor, m",
	"title": "Chicago, Illinois",
	"imageUrl": "https://s3.amazonaws.com/aaron-cdn/react-image-timeline/chicago.jpg"
}];

export default class App extends React.Component {
    
    render() {
        return (
            <Timeline events={events} />
        );
    }
}
