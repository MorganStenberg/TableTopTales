# TableTopTales

The testing documentation provides an overview of all testing conducted on TableTopTales. Covering Validation, performance, accessibility, automated tests and manual testing. 

## Table of contents

- [Code Validation](#code-validation)
- [Accessibility](#accessibility)
- [Responsiveness](#responsiveness)
- [Performance](#performance)
- [Automated testing](#automated-testing)
- [Manual testing](#manual-testing)
- [Summary](#summary)

### Validation

- JSX code have been manually validated and adjusted throughout development via direct feedback from npm in the terminal.
- The CSS code has been validated through [W3Cs validation](https://jigsaw.w3.org/css-validator/) service and passed without remarks.  

### Accessibility

### Responsiveness
The site has been tested for responsiveness throughout the development by using Google Dev Tools, as well as through [Responsivetesttool](https://responsivetesttool.com/). 

### Performance

### Manual testing

#### Navbar
| Feature | Action | Expected outcome | Pass/Fail |
| --- | --- | --- | --- |
| logo | hover | Change color of text | pass |
| navbar items | hover | change backgroundcolor to orange | pass |
| navbar items, except Profile | click - active page | background color stays orange to indicate active page | pass |
| logo | click | redirect to home page | pass |
| navbar items | click | redirect to correct page | pass |
| navbar items - sign out | click | logs out the user, redirect to home page | pass |

#### Loading Spinner
| Feature | Action | Expected outcome | Pass/Fail |
| --- | --- | --- | --- |
| Loading spinner | When data is being fetched from API | Spinner is displayed | pass |


#### Sign up page
| Feature | Action | Expected outcome | Pass/Fail |
| --- | --- | --- | --- |
| Link to sign in page | click | takes user to sign in page | pass |
| Sign Up button | hover | changes color of button | pass |
| Sign Up button | click | if form input is valid, creates account and takes user to sign in page | pass |
| Sign Up button | click | if form input is not valid, displays warnings to user indicating invalid form input | pass |

#### Sign in page
| Feature | Action | Expected outcome | Pass/Fail |
| --- | --- | --- | --- |
| Link to sign up page | click | takes user to sign up page | pass |
| Sign in button | hover | changes color of button | pass |
| Sign in button | click | if form input is valid, the user is logged in and redirected to home page | pass |
| Sign in button | click | if form input is not valid, displays warnings to user indicating invalid form input | pass |

#### Home page, saved reviews page, reviews on profile page
| Feature | Action | Expected outcome | Pass/Fail |
| --- | --- | --- | --- |
| like review | click | user can like a review, symbol changes color and fills, and increases count of number of likes | pass |
| like review | hover | symbol changes color, a text with information appears if user is hovering over its own review | pass |
| unlike review | click | user can unlike a review, symbol changes color and decreases count of number of likes | pass |
| save review | click | user can save a review, symbol changes color and fills | pass |
| save review | hover | symbol changes color slightly, a small text with information on saving reviews appears | pass |
| remove saved review | click | user can save a review, symbol changes color | pass |
| comment symbol | hover | symbol changes color | pass |
| comment symbol | click | takes user to detailed view of review | pass |
| title of review | click | takes user to detailed view of review | pass |
| image with review | click | takes user to detailed view of review | pass |
| profile avatar | click | takes user to that profile page | pass |
| profile avatar | hover | changes color of username text | pass |
| card with most discussed review on home page, profile page, saved page and wishlist page | hover | orange shadow around card | pass |
| card with most discussed review on home page, profile page, saved page and wishlist page | click | takes user to detailed view of review | pass |
| reviews on home page, profile page, saved reviews page | scroll | infinite scroll | pass |


### Detailed view of review
| Feature | Action | Expected outcome | Pass/Fail |
| --- | --- | --- | --- |
| profile avatar | click | takes user to that profile page | pass |
| profile avatar | hover | changes color of username text | pass |
| save review | click | user can save a review, symbol changes color and fills | pass |
| save review | hover | symbol changes color slightly, a small text with information on saving reviews appears | pass |
| like review | click | user can like a review, symbol changes color and fills, and increases count of number of likes | pass |
| like review | hover | symbol changes color, a text with information appears if user is hovering over its own review | pass |
| unlike review | click | user can unlike a review, symbol changes color and decreases count of number of likes | pass |
| comment form | type | user can type comments in to input form field | pass |
| comment post button | click | users comment is submitted and is displayed underneatch in descending order, comment count is increased | pass |
| comment - three dots symbol | display | displays the symbol only for comments made by the logged in user | pass |
| comment - three dots symbol | click | displays menu with buttons for delete and edit comment | pass |
| comment - three dots symbol - delete | click | deletes comment | pass |
| comment - three dots symbol - edit | click | opens form input for editing comment, prefilled with content of comment | pass |
| comment - edit - cancel button | click | cancels editing the comment, removes form input field | pass |
| comment - edit - save button | click | saves and updates comment with new content | pass |
| review - three dots symbol | display | displays the symbol only for the owner of the review | pass |
| review - three dots symbol | click | displays menu with buttons for delete and edit review | pass |
| review - three dots symbol - delete | click | deletes review and redirects user to the previous page | pass |
| review - three dots symbol - edit | click | redirects user to page for editing the review | pass |


#### Wishlist page
| Feature | Action | Expected outcome | Pass/Fail |
| --- | --- | --- | --- |
| Add a game to your wishlist button | hover | change color | pass |
| Add a game to your wishlist button | click | takes user to page for creating game | pass |
| Connected review badge | hover | change color | pass |
| Connected review badge | click | takes user to detailed view of review | pass |
| Edit game button | hover | change color | pass |
| Edit game button | click | takes user to page for editing game | pass |
| Delete game button | hover | change color | pass |
| Delete game button | click | deletes game from wishlist and refreshes the page | pass |

#### Create game form to add to wishlist page
| Feature | Action | Expected outcome | Pass/Fail |
| --- | --- | --- | --- |
| |  |  |  |

#### Edit game form 
| Feature | Action | Expected outcome | Pass/Fail |
| --- | --- | --- | --- |
| |  |  |  |

#### Profile page
| Feature | Action | Expected outcome | Pass/Fail |
| --- | --- | --- | --- |
| |  |  |  |

#### Edit profile page form
| Feature | Action | Expected outcome | Pass/Fail |
| --- | --- | --- | --- |
| |  |  |  |

#### Create review form
| Feature | Action | Expected outcome | Pass/Fail |
| --- | --- | --- | --- |
| |  |  |  |

#### Edit review form
| Feature | Action | Expected outcome | Pass/Fail |
| --- | --- | --- | --- |
| |  |  |  |




### Summary
