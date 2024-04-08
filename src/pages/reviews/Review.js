import React from 'react'

import styles from "../../styles/Review.module.css"
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { Card, Media } from 'react-bootstrap';

import Avatar from '../../components/Avatar';
import { Link } from 'react-router-dom/cjs/react-router-dom';

const Review = (props) => {
    const {
        id,
        owner,
        profile_id,
        profile_image,
        comments_count,
        likes_count,
        title,
        content,
        image,
        rating,
        game,
        created_at,
        save_id,
        reviewPage,

    } = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner


  return <Card className={styles.Review}>
    <Card.Body>
        <Media className="align-items-center justify-content-between">
            <Link to={`/profiles/${profile_id}`}>
                <Avatar src={profile_image} height={50} />
                {owner}s
            </Link>
            <div className="d-flex align-items-center">
              <span>{created_at}</span>
              {is_owner && reviewPage && "edit here"}
            </div>
        </Media>
    </Card.Body>

  </Card>
}

export default Review