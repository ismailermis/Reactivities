import React, { useState, useEffect, Fragment } from "react";
import { Header, Icon, Container } from "semantic-ui-react";
import axios from "axios";
import { IActivity } from "../models/activity";
import "semantic-ui-css/semantic.min.css";
import { NavBar } from "../../features/nav/NavBar";
import { ActivityDashboard } from "../../features/activities/dashboard/ActivityDashboard";
import { ActivityForm } from "../../features/activities/form/ActivityForm";
interface IState {
	activities: IActivity[];
}

const App = () => {
	const [activities, setActivities] = useState<IActivity[]>([]);
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
				<ActivityDashboard activities={activities} />
				<ActivityForm />
			</Container>
		</Fragment>
	);
};

export default App;
