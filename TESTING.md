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

- JSX code have been manually validated and adjusted throughout development via direct feedback from npm in the terminal, via Eslint. Any errors or violations that were detected was immediately displayed in the terminal, which helped in identifying and fixing the underlying issues with the code that was causing it. 
- The CSS code has been validated through [W3Cs validation](https://jigsaw.w3.org/css-validator/) service and passed without remarks.  

### Accessibility and performance
The site has been tested for performance and accessibility through Google Devtools Lighthouse. 

There are some issues with accessibility related some React Bootstrap components, like the Progressbar the is being used for the rating in the reviews. I have added an aria-label, but it is not targeting the inner div that is being created. To sort this out and improve the accessibility I created a custom progressbar component instead, that I could target with and Aria-label. 

### Responsiveness
The site has been tested for responsiveness throughout the development by using Google Dev Tools, as well as through [Responsivetesttool](https://responsivetesttool.com/). 

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
| comment - three dots symbol | hover | changes color | pass |
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
| Games added to wishlist | scroll | infinite scroll | pass |

#### Create game form to add to wishlist page
| Feature | Action | Expected outcome | Pass/Fail |
| --- | --- | --- | --- |
| Add game button | hover | change color | pass |
| Add game button | click | if the form inputs are valid, create a game and redirect user to the wishlist page | pass |
| Add game button | click | if form input is not valid, displays warnings to user indicating invalid form input | pass |
| Cancel button | click | redirects user back to the previous page | pass |
| Saved reviews | click | displays a list of saved reviews | pass |


#### Edit game form 
| Feature | Action | Expected outcome | Pass/Fail |
| --- | --- | --- | --- |
| Save your changes | hover | change color | pass |
| Save your changes | click | if the form inputs are valid, create a game and redirect user to the wishlist page | pass |
| Save your changes | click | if form input is not valid, displays warnings to user indicating invalid form input | pass |
| Cancel button | click | redirects user back to the previous page | pass |
| Saved reviews | click | displays the review that the user has chosen to connect the game with, if not chosen displays a list of saved reviews | pass |

#### Profile page
| Feature | Action | Expected outcome | Pass/Fail |
| --- | --- | --- | --- |
| Profile - three dots symbol | display | displays the symbol only for comments made by the logged in user | pass |
| Profile - three dots symbol | click | displays menu with buttons for edit profile, change username, change password | pass |
| Profile - three dots symbol | hover | changes color | pass |
| Profile - three dots symbol - Edit profile | click | takes user to page with form for editing user profile | pass |
| Profile - three dots symbol - Change username | click | takes user to page with form for changing username | pass |
| Profile - three dots symbol - Change password | click | takes user to page with form for changing password | pass |
| Profile information | view | displays information on bio, favorite game, username and number of reviews written | pass |

#### Edit profile page form, edit password form and edit username form
| Feature | Action | Expected outcome | Pass/Fail |
| --- | --- | --- | --- |
| Save button, cancel button, change image button | hover | change color | pass |
| Save button  | click | if the form inputs are valid, update profile fields and redirect user back to profile page | pass |
| Save button | click | if form inputs are not valid, displays warnings to user indicating invalid form input | pass |
| Cancel button | click | redirects user back to the previous page | pass |
| Change image button | click | opens input for selecting image | pass |

#### Create review form
| Feature | Action | Expected outcome | Pass/Fail |
| --- | --- | --- | --- |
| Share your tale button, cancel button, change image button | hover | change color | pass |
| Share your tale  | click | if the form inputs are valid, create review and redirect user to detailed view of that review | pass |
| Share your tale | click | if form inputs are not valid, displays warnings to user indicating invalid form input | pass |
| Cancel button | click | redirects user back to the previous page the were on| pass |
| Image upload symbol | click | opens input for selecting image | pass |
| Change image button | click | opens input for selecting image | pass |

#### Edit review form
| Feature | Action | Expected outcome | Pass/Fail |
| --- | --- | --- | --- |
| Save your changes, cancel button, change image button | hover | change color | pass |
| Save your changes | click | if the form inputs are valid, save changes to review and redirect user to detailed view of that review | pass |
| Save your changes | click | if form inputs are not valid, displays warnings to user indicating invalid form input | pass |
| Cancel button | click | redirects user back to the previous page the were on| pass |
| Image upload symbol | click | opens input for selecting image | pass |
| Change image button | click | opens input for selecting image | pass |




### Summary
