import React from 'react';
import { marked } from 'marked';

const PreviewContainer = ({ markdownInput }) => {
  const renderer = new marked.Renderer();
  renderer.link = (href, title, text) => `<a href="${href}" target="_blank">${text}</a>`;
  
  return (
    <div className="preview-content" dangerouslySetInnerHTML={{__html: marked(markdownInput, {breaks: true, renderer})}}></div>
  );
}

export default PreviewContainer;
