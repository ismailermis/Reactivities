import React, { useState, FormEvent } from "react";
import { Segment, Form, Button } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";
import { v4 as uuid } from "uuid";

interface IProps {
	setEditMode: (editMode: boolean) => void;
	activity: IActivity;
	createActivity: (activity: IActivity) => void;
	editActivity: (activity: IActivity) => void;
}
export const ActivityForm: React.FC<IProps> = ({
	setEditMode,
	activity: initialFormState,
	editActivity,
	createActivity,
}) => {
	const initializeForm = () => {
		if (initialFormState) {
			return initialFormState;
		} else {
			return {
				id: "",
				title: "",
				description: "",
				category: "",
				date: "",
				city: "",
				venue: "",
			};
		}
	};
	const [activity, setActivity] = useState<IActivity>(initializeForm);

	const handleSubmit = () => {
		if (activity.id.length === 0) {
			let newActivity = {
				...activity,
				id: uuid(),
			};
			createActivity(newActivity);
		} else {
			editActivity(activity);
		}
	};

	const handlerInputChange = (
		event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		//console.log(event?.target.value);
		const { name, value } = event.currentTarget;
		//setActivity({ ...activity, title: event.target.value });
		setActivity({ ...activity, [name]: value }); // inputta name ile title ı dinliyor.
	};

	return (
		<Segment clearing>
			<Form onSubmit={handleSubmit}>
				<Form.Input
					onChange={handlerInputChange}
					name='title'
					placeholder={"Title"}
					value={activity.title}
				/>
				<Form.TextArea
					rows={2}
					placeholder='Description'
					value={activity.description}
					onChange={handlerInputChange}
					name='description'
				/>
				<Form.Input
					placeholder='Category'
					value={activity.category}
					onChange={handlerInputChange}
					name='category'
				/>
				<Form.Input
					type='datetime-local'
					placeholder='Date'
					value={activity.date}
					onChange={handlerInputChange}
					name='date'
				/>
				<Form.Input
					placeholder='City'
					value={activity.city}
					onChange={handlerInputChange}
					name='city'
				/>
				<Form.Input
					placeholder='Venue'
					value={activity.venue}
					onChange={handlerInputChange}
					name='venue'
				/>
				<Button floated='right' positive type='submit' content='Submit' />
				<Button
					onClick={() => setEditMode(false)}
					floated='right'
					type='button'
					content='Cancel'
				/>
			</Form>
		</Segment>
	);
};
