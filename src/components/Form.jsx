// Importing necessary libraries and components
import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';

// Defining styled components for form layout and styling
const FormContainer = styled.div`
  font-family: "Helvetica Neue"; // Font styling
  background-color: white; // Background color
  border-radius: 8px; // Rounded corners
  padding: 1rem; // Padding inside the container
  margin-bottom: 1rem; // Margin below the container
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); // Box shadow for elevation effect
`;

// Styled form component for layout
const StyledForm = styled.form`
  display: flex; // Flexbox for layout
  flex-direction: column; // Column direction for form elements
`;

// Styled input component
const Input = styled.input`
  width: 100%; // Full width
  padding: 0.5rem; // Padding inside the input
  border: 1px solid #ddd; // Border styling
  border-radius: 4px; // Rounded corners
  margin-bottom: 1rem; // Margin below the input
`;

// Styled textarea component
const TextArea = styled.textarea`
  width: 100%; // Full width
  height: 100px; // Fixed height
  padding: 0.5rem; // Padding inside the textarea
  border: 1px solid #ddd; // Border styling
  border-radius: 4px; // Rounded corners
  margin-bottom: 1rem; // Margin below the textarea
  resize: vertical; // Vertical resizing only
`;

// Styled submit button component
const SubmitButton = styled.button`
  background-color: ${(props) =>
    props.bgColor || "#3498db"}; // Dynamic background color
  color: ${(props) => props.color || "white"}; // Dynamic text color
  border: none; // No border
  padding: 0.5rem 1rem; // Padding inside the button
  border-radius: 4px; // Rounded corners
  cursor: pointer; // Pointer cursor on hover
  font-weight: 500; // Font weight
  align-self: flex-end; // Align button to the end
  &:hover {
    background-color: ${(props) =>
      props.hoverBgColor || "#2980b9"}; // Hover background color
  }
`;

// Defining the Form functional component
// This component will be used in Home.js to add new posts
const Form = ({ buttonBgColor, buttonColor, buttonHoverBgColor, onSubmit }) => {
  const [avatar, setAvatar] = useState(""); // State to hold avatar URL
  const [title, setTitle] = useState(""); // State to hold post title
  const [description, setDescription] = useState(""); // State to hold post description

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (avatar.trim() && title.trim() && description.trim()) {
      onSubmit({ avatar, title, description }); // Call the onSubmit handler with the form data
      setAvatar(""); // Reset avatar input
      setTitle(""); // Reset title input
      setDescription(""); // Reset description input
    }
  };

  return (
    // The main container for the form, using styled-components for styling
    <FormContainer>
      <StyledForm onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Avatar URL"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)} // Update avatar state on input change
        />
        <Input
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)} // Update title state on input change
        />
        <TextArea
          placeholder="Post Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)} // Update description state on input change
        />
        <SubmitButton
          type="submit"
          bgColor={buttonBgColor} // Background color for button
          color={buttonColor} // Text color for button
          hoverBgColor={buttonHoverBgColor} // Hover background color for button
        >
          Add Post {/* Button text */}
        </SubmitButton>
      </StyledForm>
    </FormContainer>
  );
};

// PropTypes validation for the Form component
Form.propTypes = {
  buttonBgColor: PropTypes.string,
  buttonColor: PropTypes.string,
  buttonHoverBgColor: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};

// Exporting the Form component for use in other parts of the application
export default Form;
