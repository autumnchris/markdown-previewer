import React, { useState, useEffect } from 'react';
import EditContainer from './EditContainer';
import PreviewContainer from './PreviewContainer';

const TabsContainer = () => {
  const [markdownInput, setMarkdownInput] = useState(JSON.parse(localStorage.getItem('markdownCode')) || '');
  const [openTab, setOpenTab] = useState('edit');

  useEffect(() => {
    localStorage.setItem('markdownCode', JSON.stringify(markdownInput));
  }, [markdownInput]);

  function handleChange(event) {
    setMarkdownInput(event.target.value);
  }

  function handleKeyDown(event, selectedOpenTab) {
    if (event.keyCode === 13) setOpenTab(selectedOpenTab);
  }

  return (
    <div className="tabs-container">
      <div className="tabs">
        <div className={`tab edit-tab ${openTab === 'edit' && 'selected'}`} onClick={() => setOpenTab('edit')} onKeyDown={(event) => handleKeyDown(event, 'edit')} tabIndex="0"><span className="material-icons" aria-hidden="true">create</span> Edit</div>
        <div className={`tab preview-tab ${openTab === 'preview' && 'selected'}`} onClick={() => setOpenTab('preview')} onKeyDown={(event) => handleKeyDown(event, 'preview')} tabIndex="0"><span className="material-icons" aria-hidden="true">visibility</span> Preview</div>
      </div>
      <div className="tabs-content">
        {openTab === 'edit' ? <EditContainer markdownInput={markdownInput} handleChange={handleChange} /> : <PreviewContainer markdownInput={markdownInput} />}
      </div>
    </div>
  );
}

export default TabsContainer;
