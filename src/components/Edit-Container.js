import React from 'react';

const EditContainer = ({ markdownInput, handleChange }) => {
  return (
    <React.Fragment>
      <form className="markdown-form">
      <textarea className="markdown-input" onChange={(event) => handleChange(event)} value={markdownInput} rows="20" placeholder="Enter GitHub Flavored Markdown syntax to preview..." aria-label="Enter GitHub Flavored Markdown syntax to preview" id="markdown-code" />
    </form>
    <div className="button-group">
      <button type="button" className="button" onClick={() => navigator.clipboard.writeText(markdownInput)}>Copy to Clipboard</button>
    </div>
    </React.Fragment>
  );
}

export default EditContainer;
