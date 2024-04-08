import React from 'react'

import styles from "../../styles/Review.module.css"
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { Card, Media, OverlayTrigger, ProgressBar, Tooltip } from 'react-bootstrap';

import Avatar from '../../components/Avatar';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import DOMPurify from 'dompurify';

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
        ReviewPage,

    } = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;

    const ratingPercentage = (rating / 10) *100;

 // Credit to Code Institute walkthrough for Liking and unliking reviews
  return (
  
  <Card className={styles.Review}>
    <Card.Body>
    {title && <Card.Title className='text-center'>{title}</Card.Title>}
        <Media className="align-items-center justify-content-between">
            <Link to={`/profiles/${profile_id}`}>
                <Avatar src={profile_image} height={50} />
                {owner}s
            </Link>
            <div className="d-flex align-items-center">
              <span>{created_at}</span>
              {is_owner && ReviewPage && "..edit here"}
            </div>
        </Media>
    </Card.Body>
    <Link to={`/reviews/${id}`}>
    <Card.Img src={image} alt={title}/>
    </Link>
    
    <Card.Body>
        <Card.Title>Rating</Card.Title>
        {rating && <ProgressBar now={ratingPercentage} label={`${rating}/10`} />}
        
    </Card.Body>
    <Card.Body>
        <Card.Title>Game</Card.Title>
        {game && <Card.Text>{game}</Card.Text> }
        
    </Card.Body>
    <Card.Body>
        {content && <Card.Text dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}></Card.Text>}
        <div>
            {is_owner ? (
                <OverlayTrigger placement='top' overlay={<Tooltip>You can't like your own review!</Tooltip>}>
                    <i className={`fa-regular fa-heart ${styles.Heart}`}></i>
                </OverlayTrigger>
            ) : like_id ? (
                <span onClick={()=>{}}>
                    <i className={`fa-regular fa-heart ${styles.Heart}`} />
                </span>
            ) : currentUser ? (
                <span onClick={()=>{}}>
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
        </div>
    </Card.Body>
  </Card>
  )
}

export default Review