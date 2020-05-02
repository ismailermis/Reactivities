import React from "react";
import { Item, Button, Label, Segment } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";

interface IProps {
	activities: IActivity[];
}

export const ActivityList: React.FC<IProps> = ({ activities }) => {
	return (
		<Segment clearing>
			<Item.Group divided>
				{activities.map((activitiy) => (
					<Item key={activitiy.id}>
						<Item.Content>
							<Item.Header as='a'>{activitiy.title}</Item.Header>
							<Item.Meta>{activitiy.date}</Item.Meta>
							<Item.Description>
								<div>{activitiy.description}</div>
								<div>
									{activitiy.city} ,{activitiy.venue}
								</div>
							</Item.Description>
							<Item.Extra>
								<Button floated='right' content='View' color='blue' />
								<Label basic content='Category'></Label>
							</Item.Extra>
						</Item.Content>
					</Item>
				))}
			</Item.Group>
		</Segment>
	);
};
export default ActivityList;
