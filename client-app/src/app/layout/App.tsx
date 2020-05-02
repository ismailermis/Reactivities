import React, { useState, useEffect } from "react";
import { Header, Icon, List } from "semantic-ui-react";
import axios from "axios";
import { IActivity } from "../models/activity";
import { NavBar } from "../nav/NavBar";
import "semantic-ui-css/semantic.min.css";
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
		<div>
			<NavBar />
			<List>
				{activities.map((activity) => (
					<List.Item key={activity.id}>
						{activity.title}-->{activity.description}
					</List.Item>
				))}
			</List>
		</div>
	);
};

export default App;
