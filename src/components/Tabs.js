import React from 'react';

const Tabs = ({ openTab, setOpenTab }) => {

  function handleKeyDown(event, selectedOpenTab) {
    if (event.key === 'Enter') setOpenTab(selectedOpenTab);
  }

  return (
    <div className="tabs">
      <div className={`tab edit-tab ${openTab === 'edit' && 'selected'}`} onClick={() => setOpenTab('edit')} onKeyDown={(event) => handleKeyDown(event, 'edit')} tabIndex="0"><span className="fa-solid fa-pen fa-sm" aria-hidden="true"></span> Edit</div>
      <div className={`tab preview-tab ${openTab === 'preview' && 'selected'}`} onClick={() => setOpenTab('preview')} onKeyDown={(event) => handleKeyDown(event, 'preview')} tabIndex="0"><span className="fa-solid fa-eye fa-sm" aria-hidden="true"></span> Preview</div>
    </div>
  );
}

export default Tabs;