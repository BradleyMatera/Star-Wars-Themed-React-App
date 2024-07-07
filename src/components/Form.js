import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div({
  backgroundColor: 'white',
  borderRadius: '8px',
  padding: '1rem',
  marginBottom: '1rem',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
});

const StyledForm = styled.form({
  display: 'flex',
  flexDirection: 'column'
});

const TextArea = styled.textarea({
  width: '100%',
  height: '100px',
  padding: '0.5rem',
  border: '1px solid #ddd',
  borderRadius: '4px',
  marginBottom: '1rem',
  resize: 'vertical'
});

const SubmitButton = styled.button({
  backgroundColor: '#3498db',
  color: 'white',
  border: 'none',
  padding: '0.5rem 1rem',
  borderRadius: '4px',
  cursor: 'pointer',
  fontWeight: '500',
  alignSelf: 'flex-end'
});

const Form = ({ onSubmit }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim()) {
      onSubmit(content);
      setContent('');
    }
  };

  return (
    <FormContainer>
      <StyledForm onSubmit={handleSubmit}>
        <TextArea
          placeholder="What's on your mind?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <SubmitButton type="submit">Post</SubmitButton>
      </StyledForm>
    </FormContainer>
  );
};

export default Form;