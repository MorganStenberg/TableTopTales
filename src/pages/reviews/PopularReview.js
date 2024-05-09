import React from 'react'
import styles from "../../styles/PopularReview.module.css"
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import logoDefault from '../../assets/logo_ttt_default.png'

const PopularReview = (props) => {

	const { review, smallscreen } = props;
	const { id, title, image } = review;

	return (
		<div
			className={`mb-3 d-flex align-items-center justify-content-center ${smallscreen && "flex-column"}`}>
			<div>
				<Link className={`${styles.Popular}`} to={`/reviews/${id}`}>
					<Card className={`${styles.Card} overflow-hidden m-1`}>
						<Card.Img
							src={image || logoDefault}
							alt={title}
							className={styles.CardImage}
						/>
						<p>{title}</p>
					</Card>
				</Link>
			</div>
		</div>
	)
}

export default PopularReview;