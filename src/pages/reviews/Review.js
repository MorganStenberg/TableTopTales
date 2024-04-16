import React from 'react'

import styles from "../../styles/Review.module.css"
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { Card, OverlayTrigger, ProgressBar, Tooltip } from 'react-bootstrap';

import Avatar from '../../components/Avatar';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom';
import DOMPurify from 'dompurify';
import { axiosRes } from '../../api/axiosDefaults';
import { MoreDropdown } from '../../components/MoreDropDown';


const Review = (props) => {
	const {
		id,
		owner,
		profile_id,
		profile_image,
		comments_count,
		likes_count,
		like_id,
		title,
		content,
		image,
		rating,
		game,
		created_at,
		save_id,
		reviewPage,
		setReviews,

	} = props;

	const currentUser = useCurrentUser();
	const is_owner = currentUser?.username === owner;

	const ratingPercentage = (rating / 10) * 100;

	const history = useHistory();

	const handleEdit = () => {
		history.push(`/reviews/${id}/edit`)
	}

	const handleDelete = async () => {
		try {
			await axiosRes.delete(`/reviews/${id}/`);
			history.goBack();
		} catch (err) {
			//console.log(err)
		}
	};

	const handleLike = async () => {
		try {
			const { data } = await axiosRes.post("/likes/", { review: id });
			setReviews((prevReviews) => ({
				...prevReviews,
				results: prevReviews.results.map((review) => {
					return review.id === id
						? { ...review, likes_count: review.likes_count + 1, like_id: data.id }
						: review;
				}),
			}));
		} catch (err) {
			//console.log(err);
		}
	};

	const handleUnlike = async () => {
		try {
			await axiosRes.delete(`/likes/${like_id}`);
			setReviews((prevReviews) => ({
				...prevReviews,
				results: prevReviews.results.map((review) => {
					return review.id === id
						? { ...review, likes_count: review.likes_count - 1, like_id: null }
						: review;
				}),
			}));
		} catch (err) {
			//console.log(err);
		}
	};


	const handleSave = async () => {
		try {
			const { data } = await axiosRes.post("/saved/", { review: id });
			setReviews((prevReviews) => ({
				...prevReviews,
				results: prevReviews.results.map((review) => {
					return review.id === id
						? { ...review, save_id: data.id }
						: review;
				}),
			}));
		} catch (err) {
			//console.log(err);
		}
	};

	const handleRemoveSave = async () => {
		try {
			await axiosRes.delete(`/saved/${save_id}`);
			setReviews((prevReviews) => ({
				...prevReviews,
				results: prevReviews.results.map((review) => {
					return review.id === id
						? { ...review, save_id: null }
						: review;
				}),
			}));
		} catch (err) {
			//console.log(err);
		}
	};

	// Credit to Code Institute walkthrough for the structure for ternary for like icon and like function
	return (

		<Card className={styles.Review}>
			<Card.Body className="d-flex align-items-center">

				{title && <Card.Title className={`${styles.Title}`}><Link to={`/reviews/${id}`}>{title}</Link></Card.Title>}

			</Card.Body>
			<Link to={`/reviews/${id}`}>
				{image && <Card.Img src={image} alt={title} className={styles.Image} />}
			</Link>

			<Card.Body className={`${styles.CardPadding} ${styles.GameRatingTitle}`}>
				<Card.Title>Rating</Card.Title>
				{rating && <ProgressBar className={styles.RatingBar} now={ratingPercentage} label={`${rating}/10`} />}

			</Card.Body>
			<Card.Body className={`${styles.CardPadding} ${styles.GameRatingTitle}`}>
				<Card.Title className={styles.BorderBottom}>Game</Card.Title>
				{game && <Card.Text className={styles.CardGame}>{game}</Card.Text>}

			</Card.Body>
			<Card.Body className={styles.CardPadding}>
				{content && <Card.Text className={styles.ReviewText} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}></Card.Text>}

				<div className="d-flex align-items-center justify-content-between">
					<Link to={`/profiles/${profile_id}`}>
						<Avatar src={profile_image} height={40} />
						{owner}
					</Link>

					<div>
						{is_owner ? (
							<OverlayTrigger placement='top' overlay={<Tooltip>You can't like your own review!</Tooltip>}>
								<i className={`fa-regular fa-heart ${styles.Heart}`}></i>
							</OverlayTrigger>
						) : like_id ? (
							<span onClick={handleUnlike}>
								<i className={`fa-solid fa-heart ${styles.Heart} ${styles.HeartLiked}`} />
							</span>
						) : currentUser ? (
							<span onClick={handleLike}>
								<i className={`fa-regular fa-heart ${styles.Heart} ${styles.HeartOutline}`}></i>
							</span>
						) : (
							<OverlayTrigger placement='top' overlay={<Tooltip>You can't like reviews if you are not logged in!</Tooltip>}>
								<i className={`fa-regular fa-heart ${styles.Heart}`}></i>
							</OverlayTrigger>
						)}
						<span className={styles.LikesAndComments}>
							{likes_count}
						</span>
						<span className={styles.LikesAndComments}>
							<Link to={`/reviews/${id}`}>
								<i className={`fa-regular fa-comments ${styles.CommentIcon}`}></i>
							</Link>
							{comments_count}
						</span>
						<span className={styles.LikesAndComments}>
							{is_owner ? (
								<OverlayTrigger placement='top' overlay={<Tooltip>You can't save your own review!</Tooltip>}>
									<i className={`fa-regular fa-bookmark ml-1`}></i>
								</OverlayTrigger>
							) : save_id ? (
								<span onClick={handleRemoveSave}>
									<i className={`fa-solid fa-bookmark ml-1 ${styles.HeartLiked}`} />
								</span>
							) : currentUser ? (

								<span onClick={handleSave}>
									<OverlayTrigger placement='top' overlay={<Tooltip>Save review!</Tooltip>}>
										<i className={`fa-regular fa-bookmark ml-1 ${styles.HeartOutline}`}></i>
									</OverlayTrigger>
								</span>

							) : (
								<OverlayTrigger placement='top' overlay={<Tooltip>You can't save reviews if you are not logged in!</Tooltip>}>
									<i className={`fa-regular fa-bookmark ml-1`}></i>
								</OverlayTrigger>
							)}

						</span>
					</div>
					<div className='d-flex align-items-center'>
						<span className='mr-3'>{created_at} </span>
						{is_owner && reviewPage && <MoreDropdown handleEdit={handleEdit} handleDelete={handleDelete} />}
					</div>


				</div>
			</Card.Body>
		</Card>
	)
}

export default Review