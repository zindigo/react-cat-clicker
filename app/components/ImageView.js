import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';

export class BigImage extends React.Component {
	render() {
		return (
		   <Image src={this.props.src} onClick={this.props.onClick} rounded fluid />
		);
	}
};

export class CatChoices extends React.Component {
	render() {
		const catList = this.props.cats;
		const catBlocks = catList.map((cat, index) =>
			  <Card key={index}>
			    <Card.Img variant="top" src={cat.src} />
			    <Card.Body>
			      <Card.Title>{cat.name}</Card.Title>
			      <Card.Text>{cat.description}</Card.Text>
			      <Button variant="primary" onClick={this.props.onClick} value={index}>
			      	Select
			      </Button>
			      <Badge variant="light">{cat.clicks}</Badge>
			    </Card.Body>
			  </Card>
			);

		return (
			<CardDeck>
				{catBlocks}
			</CardDeck>
		);
	}
};