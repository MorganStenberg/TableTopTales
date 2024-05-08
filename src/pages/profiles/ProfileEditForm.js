import React, { useState, useEffect, useRef } from "react";
import { useParams, useHistory } from "react-router-dom/cjs/react-router-dom";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

import { axiosReq } from "../../api/axiosDefaults";
import { useCurrentUser, useSetCurrentUser } from "../../contexts/CurrentUserContext";

import styles from "../../styles/ProfileEditForm.module.css"
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";


// Credit to Code Institute Moments Walkthrough for structure of ProfileEditForm

const ProfileEditForm = () => {
	const currentUser = useCurrentUser();
	const setCurrentUser = useSetCurrentUser();
	const { id } = useParams();
	const history = useHistory();
	const imageFile = useRef();

	const [profileData, setProfileData] = useState({
		name: "",
		content: "",
		image: "",
		favorite_game: "",
	});
	const { name, content, image, favorite_game } = profileData;

	const [errors, setErrors] = useState({});

	useEffect(() => {
		const handleMount = async () => {
			if (currentUser?.profile_id?.toString() === id) {
				try {
					const { data } = await axiosReq.get(`/profiles/${id}/`);
					const { name, content, image, favorite_game } = data;
					setProfileData({ name, content, image, favorite_game });
				} catch (err) {
					history.push("/");
				}
			} else {
				history.push("/");
			}
		};

		handleMount();
	}, [currentUser, history, id]);

	const handleChange = (event) => {
		setProfileData({
			...profileData,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const formData = new FormData();
		formData.append("name", name);
		formData.append("content", content);
		formData.append("favorite_game", favorite_game);

		if (imageFile?.current?.files[0]) {
			formData.append("image", imageFile?.current?.files[0]);
		}

		try {
			const { data } = await axiosReq.put(`/profiles/${id}/`, formData);
			setCurrentUser((currentUser) => ({
				...currentUser,
				profile_image: data.image,
			}));
			history.goBack();
		} catch (err) {
			setErrors(err.response?.data);
		}
	};

	const textFields = (
		<>
			<Form.Group>
				<Form.Label>Bio</Form.Label>
				<Form.Control
					as="textarea"
					value={content}
					onChange={handleChange}
					name="content"
					rows={7}
				/>
			</Form.Group>

			{errors?.content?.map((message, idx) => (
				<Alert variant="warning" key={idx}>
					{message}
				</Alert>
			))}
			<Form.Group>
				<Form.Label>Favorite Game</Form.Label>
				<Form.Control
					type="text"
					value={favorite_game}
					onChange={handleChange}
					name="favorite_game"
				/>
			</Form.Group>

			{errors?.content?.map((message, idx) => (
				<Alert variant="warning" key={idx}>
					{message}
				</Alert>
			))}
			<Button
				className={`${btnStyles.Button} ${btnStyles.Orange}`}
				onClick={() => history.goBack()}
			>
				cancel
			</Button>
			<Button className={`${btnStyles.Button} ${btnStyles.Orange}`} type="submit">
				save
			</Button>
		</>
	);

	return (
		<Form onSubmit={handleSubmit}>
			<Row>
				<Col md={8} lg={7} className="d-none d-md-block p-0 p-md-2 text-center">
					<Container className={`${appStyles.Content} ${styles.Container}`}>{textFields}</Container>
				</Col>
				<Col className="py-2 p-0 p-md-2 text-center" md={4} lg={5}>
					<Container className={`${appStyles.Content} ${styles.Container}`}>
						<Form.Group>
							{image && (
								<figure>
									<Image src={image} fluid />
								</figure>
							)}
							{errors?.image?.map((message, idx) => (
								<Alert variant="warning" key={idx}>
									{message}
								</Alert>
							))}
							<div>
								<Form.Label
									className={`${btnStyles.Button} ${btnStyles.Orange} btn my-auto`}
									htmlFor="image-upload"
								>
									Change the image
								</Form.Label>
							</div>
							<Form.File
								id="image-upload"
								ref={imageFile}
								accept="image/*"
								onChange={(e) => {
									if (e.target.files.length) {
										setProfileData({
											...profileData,
											image: URL.createObjectURL(e.target.files[0]),
										});
									}
								}}
							/>
						</Form.Group>
						<div className="d-md-none">{textFields}</div>
					</Container>
				</Col>

			</Row>
		</Form>
	);
};

export default ProfileEditForm;