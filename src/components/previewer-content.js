import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import marked from 'marked';

const PreviewerContent = ({ markdownInput, handleChange }) => {

  const renderer = new marked.Renderer();
  renderer.link = (href, title, text) => `<a href="${href}" target="_blank">${text}</a>`;

  return (
    <Tabs>
      <TabList>
        <Tab><span className="material-icons">create</span> Edit</Tab>
        <Tab><span className="material-icons">visibility</span> Preview</Tab>
      </TabList>
      <TabPanel>
        <form className="markdown-form">
          <textarea className="markdown-input" onChange={(event) => handleChange(event)} value={markdownInput} rows="20" aria-label="enter GitHub Flavored Markdown to preview" />
        </form>
      </TabPanel>
      <TabPanel>
        <div className="preview-content" dangerouslySetInnerHTML={{__html: marked(markdownInput, {breaks: true, renderer})}} ></div>
      </TabPanel>
    </Tabs>
  );
}

export default PreviewerContent;
