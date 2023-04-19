import React, { useState, useEffect } from 'react';
import Tabs from './Tabs';
import EditContainer from './EditContainer';
import PreviewContainer from './PreviewContainer';
import getMarkdownCode from '../utils/getMarkdownCode';

const TabsContainer = () => {
  const [markdownInput, setMarkdownInput] = useState(getMarkdownCode());
  const [openTab, setOpenTab] = useState('edit');

  useEffect(() => {
    getMarkdownCode(markdownInput);
  }, [markdownInput]);

  function handleChange(event) {
    setMarkdownInput(event.target.value);
  }

  return (
    <div className="tabs-container">
      <Tabs openTab={openTab} setOpenTab={setOpenTab} />
      <div className="tabs-content">
        {openTab === 'edit' ? <EditContainer markdownInput={markdownInput} handleChange={handleChange} /> : <PreviewContainer markdownInput={markdownInput} />}
      </div>
    </div>
  );
}

export default TabsContainer;
