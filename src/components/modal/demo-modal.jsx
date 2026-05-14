import { useState } from "react";
import ModalPopup from ".";
import "./modal.css";


function ModalDemo() {
  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleToggleModalPopup() {
    setShowModalPopup(!showModalPopup);
  }

  return (
    <div className="demo-container">
      <button className="open-modal-btn" onClick={handleToggleModalPopup}>
        Open Modal Popup
      </button>
      {showModalPopup && (
        <ModalPopup
          header="Modern Modal"
          body={
            <div>
              <p>This is a customizable modal popup.</p>
            </div>
          }
          footer={<button>Confirm</button>}
          onClose={handleToggleModalPopup}
        />
      )}
    </div>
  );
}

export default ModalDemo;
