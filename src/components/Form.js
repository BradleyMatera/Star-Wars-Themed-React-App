import React, { useState } from 'react';
import styled from 'styled-components';

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

const Form = ({ onSubmit, buttonBgColor, buttonColor, buttonHoverBgColor }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && description.trim()) {
      onSubmit({ title, description });
      setTitle('');
      setDescription('');
    }
  };

  return (
    <FormContainer>
      <StyledForm onSubmit={handleSubmit}>
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

export default Form;