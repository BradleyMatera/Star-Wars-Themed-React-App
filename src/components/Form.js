// Importing necessary libraries and components
import React, { Component } from 'react';
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

// Defining the Form class component
class Form extends Component {
  constructor(props) {
    super(props);
    // Initializing state to manage form inputs
    this.state = {
      avatar: '', // State to hold avatar URL, try for yourself here https://vinicius73.github.io/gravatar-url-generator/#/
      title: '',
      description: ''
    };

    // Binding event handler methods to the component instance
    this.handleAvatarChange = this.handleAvatarChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Event handler to update state when avatar input changes
  handleAvatarChange(e) {
    this.setState({ avatar: e.target.value });
  }

  // Event handler to update state when title input changes
  handleTitleChange(e) {
    this.setState({ title: e.target.value });
  }

  // Event handler to update state when description input changes
  handleDescriptionChange(e) {
    this.setState({ description: e.target.value });
  }

  // Event handler for form submission
  handleSubmit(e) {
    e.preventDefault();
    const { avatar, title, description } = this.state;
    if (avatar.trim() && title.trim() && description.trim()) {
      this.props.onSubmit({ avatar, title, description });
      this.setState({ avatar: '', title: '', description: '' });
    }
  }

  render() {
    const { buttonBgColor, buttonColor, buttonHoverBgColor } = this.props; // Destructuring props for use within the component
    const { avatar, title, description } = this.state; // Destructuring state for use within the render method

    return (
      // The main container for the form, using styled-components for styling
      <FormContainer>
        <StyledForm onSubmit={this.handleSubmit}>
          <Input
            type="text"
            placeholder="Avatar URL"
            value={avatar}
            onChange={this.handleAvatarChange}
          />
          <Input
            type="text"
            placeholder="Post Title"
            value={title}
            onChange={this.handleTitleChange}
          />
          <TextArea
            placeholder="Post Description"
            value={description}
            onChange={this.handleDescriptionChange}
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
  }
}

// Exporting the Form component for use in other parts of the application
export default Form;