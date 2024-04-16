import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import styles from "../styles/MoreDropdown.module.css"
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const ThreeDots = React.forwardRef(({ onClick }, ref) => (
    <i
        className="fa-solid fa-ellipsis-vertical"
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
    />
));


export const MoreDropdown = ({ handleEdit, handleDelete }) => {
    return (
        <Dropdown drop="right">
            <Dropdown.Toggle as={ThreeDots} />


            <Dropdown.Menu
                className={styles.DropdownMenu}
                popperConfig={{ strategy: "fixed" }}>
                <Dropdown.Item
                    className={styles.DropdownItem}
                    onClick={handleEdit}
                    aria-label="edit"
                ><p>Edit</p>

                </Dropdown.Item>
                <Dropdown.Item
                    className={styles.DropdownItem}
                    onClick={handleDelete}
                    aria-label="delete"
                ><p>Delete</p>

                </Dropdown.Item>

            </Dropdown.Menu>
        </Dropdown>
    )
}

export function ProfileEditDropdown({ id }) {
    const history = useHistory();
    return (
        <Dropdown className={`ml-auto px-3 ${styles.DropdownRight}`} drop="left">
            <Dropdown.Toggle as={ThreeDots} />
            <Dropdown.Menu>
                <Dropdown.Item
                    className={styles.DropdownItem}
                    onClick={() => history.push(`/profiles/${id}/edit`)}
                    aria-label="edit-profile"
                > Edit profile
                </Dropdown.Item>
                <Dropdown.Item
                    className={styles.DropdownItem}
                    onClick={() => history.push(`/profiles/${id}/edit/username`)}
                    aria-label="edit-username"
                > Change username
                </Dropdown.Item>
                <Dropdown.Item
                    className={styles.DropdownItem}
                    onClick={() => history.push(`/profiles/${id}/edit/password`)}
                    aria-label="edit-password"
                > Change password
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}