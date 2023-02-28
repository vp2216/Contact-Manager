import { BsFillCheckCircleFill } from "react-icons/bs";

export default function Deletesuccess({ setDeleteSuccess }) {
  return (
    <div className="popup-main">
      <span className="popup-body">
        <BsFillCheckCircleFill className="popup-icon" />
        <span className="popup-heading">Deleted Contacts</span>
        <button
          className="popup-btn"
          onClick={() => {
            setDeleteSuccess(false);
          }}
        >
          OK
        </button>
      </span>
    </div>
  );
}
