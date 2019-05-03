var React = require('react');
var ReactDOM = require('react-dom');
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
require('./index.css');

import { BigImage, CatChoices } from './components/ImageView';

const cats = [
	{
		src: 'https://images.pexels.com/photos/2061057/pexels-photo-2061057.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		name: 'Penelope',
		description: 'World-class staring contest champion.',
		clicks: 0
	},
	{
		src: 'https://images.pexels.com/photos/96938/pexels-photo-96938.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
		name: 'Pickles',
		description: 'The excitement from watching Jeopardy is just... too... much!',
		clicks: 0
	},
	{
		src: 'https://images.pexels.com/photos/399647/pexels-photo-399647.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		name: 'Tiger',
		description: 'Waffles!!!!!!!!',
		clicks: 0
	}
]

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			cats: cats,
			selected: 0
		}

		this.handleClick = this.handleClick.bind(this);
		this.handleCatSelect = this.handleCatSelect.bind(this);
	}

	handleClick(e) {
		// increment clicks for selected cat
		const selectedCat = this.state.selected;
		var clickedCats = cats;
		clickedCats[selectedCat].clicks++;

		this.setState({
			cats: clickedCats
		});
	}

	handleCatSelect(e) {
		const newCatSelected = e.target.value;

		this.setState({
			selected: newCatSelected
		});
	}

	render() {
		const selectedCat = this.state.selected;

		return (
		    <div>
			  <Container>
				  <Row>
				    <Col><h1>Cat Clicker</h1></Col>
				  </Row>
				  <Row>
				    <Col>
				    	<h4>{this.state.cats[selectedCat].name}</h4>
				    	<BigImage
				    		src={this.state.cats[selectedCat].src}
				    		onClick={this.handleClick}
				    	/>
				    	Clicks: {this.state.cats[selectedCat].clicks}
				    </Col>
				  </Row>
				  <Row>
				 	<Col>
				 		<CatChoices
				 			cats={this.state.cats}
				 			onClick={this.handleCatSelect}
				 		/>
				 	</Col>
				  </Row>
				</Container>
		    </div>
		)
	}
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)