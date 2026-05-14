import "./modal.css";

function ModalPopup({ id, header, body, footer, onClose }) {
  return (
    <div id={id || "Modal"} className="modal">
      <div className="modal-content">
        <div className="header">
          <span className="close-modal-icon" onClick={onClose}>
            &times;
          </span>
          <h2>{header || "Header"}</h2>
        </div>
        <div className="body">{body || <p>This is our modal content</p>}</div>
        <div className="footer">{footer || <h3>Footer</h3>}</div>
      </div>
    </div>
  );
}

export default ModalPopup;
