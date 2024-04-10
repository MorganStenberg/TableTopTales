import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import styles from "../styles/MoreDropdown.module.css"

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
  

export const MoreDropdown = ({handleEdit, handleDelete}) => {
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
  