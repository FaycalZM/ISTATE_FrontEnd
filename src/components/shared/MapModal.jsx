import ReactModal from "react-modal";

export default function MapModal({ visible, setVisible }) {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <ReactModal isOpen={visible} style={customStyles} ariaHideApp={false}>
      <div className="w-60 md:w-96">
        <div className="flex justify-between">
          <button onClick={() => setVisible(false)}>X</button>
        </div>
      </div>
    </ReactModal>
  );
}
