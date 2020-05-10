import React, { useState, useEffect, Fragment } from "react";
import { Header, Icon, Container } from "semantic-ui-react";
import axios from "axios";
import { IActivity } from "../models/activity";
import "semantic-ui-css/semantic.min.css";
import { NavBar } from "../../features/nav/NavBar";
import { ActivityDashboard } from "../../features/activities/dashboard/ActivityDashboard";
import ActivityList from "../../features/activities/dashboard/ActivityList";

interface IState {
	activities: IActivity[];
}

const App = () => {
	const [activities, setActivities] = useState<IActivity[]>([]);
	const [selectedActivity, setSelectedActivity] = useState<IActivity | null>(
		null
	);

	const handleSelectedActivity = (id: string) => {
		setSelectedActivity(activities.filter((a) => a.id == id)[0]);
	};

	useEffect(() => {
		axios
			.get<IActivity[]>("http://localhost:5000/api/activities/")
			.then((response) => {
				setActivities(response.data);
			});
	}, []);

	return (
		<Fragment>
			<NavBar />
			<Container style={{ marginTop: "7em" }}>
				<ActivityDashboard
					activities={activities}
					selectActivity={handleSelectedActivity}
					selectedActivity={selectedActivity!}
				/>
			</Container>
		</Fragment>
	);
};

export default App;
