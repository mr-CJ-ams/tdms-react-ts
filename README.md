# 1. App.tsx
## Purpose:

• `App.tsx` serves as the entry point for the application. It sets up the main layout and passes initial data to the `ProfileCard` component.

## Logic Process:

## 1. Import React and ProfileCard Component:

• The `React` library is imported to create the functional component.
• The `ProfileCard` component is imported to be used within App.tsx.

## 2. App Component Definition:

• The `App` component is a functional component that returns JSX.
• It acts as a container for the entire application.

## 3. Render ProfileCard:

• Inside the JSX, the `ProfileCard` component is rendered.
• The `ProfileCard` component receives three props: `initialName`, `initialTitle`, and `initialProfileImageUrl`.
• These props contain default data, such as the user’s name, job title, and profile image URL.

## 4. Export App Component:

• The `App` component is exported as the default export, allowing it to be used in other parts of the application, such as in index.tsx where it gets rendered to the DOM.

## Design System:

## • Component Reusability:

• The `App.tsx` is designed to be simple and modular. It focuses on passing initial data to child components (e.g., `ProfileCard`), making it easy to manage and modify.

## • Props-Driven Approach:

The initial data for the profile card is passed through props, making the `ProfileCard` component flexible and reusable in different contexts.

# 2. ProfileCard.tsx

## Purpose:

• The `ProfileCard` component handles the display of the user's profile, allowing the user to click the profile image to edit their name, job title, and profile picture.

## Logic Process:

## 1. Import Statements:

• Import React and `useState` to manage component state.
• Import the CSS file to style the component.

## 2. Component Props:

• Define an interface `ProfileCardProps` for the props, ensuring that the component receives `initialName`, `initialTitle`, and `initialProfileImageUrl`.

## 3. State Management:

## • Profile Information State:

• Use `useState` to manage `profileImage`, `name`, and `title`. These represent the current state of the user’s profile.

## • Modal and Edit Form State:

• Manage whether the modal or edit form is visible using `showModal` and `showEditForm` state variables.

## 4. Event Handlers:

## • handleImageChange:

• Triggered when the user selects a new image file. It reads the file using `FileReader` and updates the `profileImage` state.

## • handleNameChange & handleTitleChange:

These functions update the `name` and `title` state respectively when the user types in the input fields.

## • Modal Management (openModal, closeModal):

• `openModal` shows the confirmation modal asking the user if they want to change their profile.
• `closeModal` hides the modal without making any changes.

## • Form Management (openEditForm, closeEditForm):

• `openEditForm` displays the edit form where the user can change their profile details.
• `closeEditForm` hides the form without saving changes.

## 5. Save Changes:

• `saveChanges` finalizes the modifications by hiding the edit form. (Note: You could expand this function to include saving changes to a backend or local storage.)

## 6. Rendering Logic:

## • Profile Image:

• Render the profile image inside a circular container. Clicking on the image opens the modal.

## • Profile Info:

• Display the user’s name and job title below the image.

## • Modal & Edit Form:

• Conditionally render the modal and edit form based on the state. The modal asks for confirmation, and the edit form allows the user to update their profile information.