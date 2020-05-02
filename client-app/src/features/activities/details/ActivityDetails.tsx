import React from "react";
import { Card, Image, Icon, Button, ButtonGroup } from "semantic-ui-react";

export const ActivityDetails = () => {
	return (
		<Card>
			<Image src='/assets/placeholder.png' wrapped ui={false} />
			<Card.Content>
				<Card.Header>Title</Card.Header>
				<Card.Meta>
					<span>Date</span>
				</Card.Meta>
				<Card.Description>Description</Card.Description>
			</Card.Content>
			<Card.Content extra>
				<Button.Group widths={2}>
					<Button floated='right' content='Edit' color='blue' />
					<Button floated='right' content='Cancel' color='green' />
				</Button.Group>
			</Card.Content>
		</Card>
	);
};
