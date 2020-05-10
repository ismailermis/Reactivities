import React from "react";
import { IActivity } from "../../../app/models/activity";
import { Grid, List, GridColumn } from "semantic-ui-react";
import ActivityList from "./ActivityList";
import { ActivityDetails } from "../details/ActivityDetails";
import { ActivityForm } from "../form/ActivityForm";

interface IProps {
	activities: IActivity[];
	selectActivity: (id: string) => void;
	selectedActivity: IActivity | null;
}
export const ActivityDashboard: React.FC<IProps> = ({
	activities,
	selectActivity,
	selectedActivity,
}) => {
	return (
		<Grid>
			<Grid.Column width={10}>
				<ActivityList activities={activities} selectActivity={selectActivity} />
			</Grid.Column>
			<GridColumn width={6}>
				{selectedActivity && <ActivityDetails activity={selectedActivity} />}
				<ActivityForm />
			</GridColumn>
		</Grid>
	);
};
