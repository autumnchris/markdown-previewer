import React from 'react';

const EditContainer = ({ markdownInput, handleChange }) => {
  return (
    <form className="markdown-form">
      <textarea className="markdown-input" onChange={(event) => handleChange(event)} value={markdownInput} rows="20" placeholder="Enter GitHub Flavored Markdown syntax to preview..." aria-label="Enter GitHub Flavored Markdown syntax to preview" />
    </form>
  );
}

export default EditContainer;