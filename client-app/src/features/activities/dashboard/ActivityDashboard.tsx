import React from "react";
import { IActivity } from "../../../app/models/activity";
import { Grid, List, GridColumn } from "semantic-ui-react";
import ActivityList from "./ActivityList";
import { ActivityDetails } from "../details/ActivityDetails";

interface IProps {
	activities: IActivity[];
}
export const ActivityDashboard: React.FC<IProps> = ({ activities }) => {
	return (
		<Grid>
			<Grid.Column width={10}>
				<ActivityList activities={activities} />
			</Grid.Column>
			<GridColumn width={6}>
				<ActivityDetails />
			</GridColumn>
		</Grid>
	);
};
