import React from 'react';

const EditContainer = ({ markdownInput, handleChange }) => {

  function copyText(text) {
    navigator.clipboard.writeText(text);
  }

  return (
    <React.Fragment>
      <form className="markdown-form" onSubmit={(event) => { event.preventDefault(); }}>
        <textarea className="markdown-input" name="markdownCode" onChange={(event) => handleChange(event)} value={markdownInput} rows="20" placeholder="Enter GitHub Flavored Markdown syntax to preview..." aria-label="Enter GitHub Flavored Markdown syntax to preview" id="markdown-code" autoComplete="off" />
      </form>
      <div className="button-group">
        <button type="button" className="button" onClick={() => copyText(markdownInput)}><span className="far fa-copy fa-fw" aria-hidden="true"></span> Copy to Clipboard</button>
      </div>
    </React.Fragment>
  );
}

export default EditContainer;
