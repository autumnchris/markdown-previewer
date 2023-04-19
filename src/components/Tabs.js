import React from 'react';

const Tabs = ({ openTab, setOpenTab }) => {

  function handleKeyDown(event, selectedOpenTab) {
    if (event.key === 'Enter') setOpenTab(selectedOpenTab);
  }

  return (
    <div className="tabs">
      <div className={`tab edit-tab ${openTab === 'edit' && 'selected'}`} onClick={() => setOpenTab('edit')} onKeyDown={(event) => handleKeyDown(event, 'edit')} tabIndex="0"><span className="material-icons" aria-hidden="true">create</span> Edit</div>
      <div className={`tab preview-tab ${openTab === 'preview' && 'selected'}`} onClick={() => setOpenTab('preview')} onKeyDown={(event) => handleKeyDown(event, 'preview')} tabIndex="0"><span className="material-icons" aria-hidden="true">visibility</span> Preview</div>
    </div>
  );
}

export default Tabs;