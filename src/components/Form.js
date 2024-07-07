import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div({
  fontFamily: 'Helvetica Neue',
  backgroundColor: 'white',
  borderRadius: '8px',
  padding: '1rem',
  marginBottom: '1rem',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
});

const StyledForm = styled.form({
  display: 'flex',
  flexDirection: 'column',
});

const Input = styled.input({
  width: '100%',
  padding: '0.5rem',
  border: '1px solid #ddd',
  borderRadius: '4px',
  marginBottom: '1rem',
});

const TextArea = styled.textarea({
  width: '100%',
  height: '100px',
  padding: '0.5rem',
  border: '1px solid #ddd',
  borderRadius: '4px',
  marginBottom: '1rem',
  resize: 'vertical',
});

const SubmitButton = styled.button({
  backgroundColor: '#3498db',
  color: 'white',
  border: 'none',
  padding: '0.5rem 1rem',
  borderRadius: '4px',
  cursor: 'pointer',
  fontWeight: '500',
  alignSelf: 'flex-end',
});

const Form = ({ onSubmit }) => {
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
        <SubmitButton type="submit">Add Post</SubmitButton>
      </StyledForm>
    </FormContainer>
  );
};

export default Form;