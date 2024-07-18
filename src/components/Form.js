// Importing necessary libraries and components
import React, { useState } from 'react';
import styled from 'styled-components';

// Defining styled components for form layout and styling
const FormContainer = styled.div`
  font-family: 'Helvetica Neue';
  background-color: white;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 1rem;
  resize: vertical;
`;

const SubmitButton = styled.button`
  background-color: ${props => props.bgColor || '#3498db'};
  color: ${props => props.color || 'white'};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  align-self: flex-end;

  &:hover {
    background-color: ${props => props.hoverBgColor || '#2980b9'};
  }
`;

// Defining the Form functional component
const Form = ({ buttonBgColor, buttonColor, buttonHoverBgColor, onSubmit }) => {
  const [avatar, setAvatar] = useState(''); // State to hold avatar URL
  const [title, setTitle] = useState(''); // State to hold post title
  const [description, setDescription] = useState(''); // State to hold post description

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (avatar.trim() && title.trim() && description.trim()) {
      onSubmit({ avatar, title, description });
      setAvatar('');
      setTitle('');
      setDescription('');
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
          onChange={(e) => setAvatar(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextArea
          placeholder="Post Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <SubmitButton
          type="submit"
          bgColor={buttonBgColor}
          color={buttonColor}
          hoverBgColor={buttonHoverBgColor}
        >
          Add Post
        </SubmitButton>
      </StyledForm>
    </FormContainer>
  );
};

// Exporting the Form component for use in other parts of the application
export default Form;
