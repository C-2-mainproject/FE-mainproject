import ReactDOM from "react-dom";

type ModalProps = {
  children: React.ReactNode;
};

const ModalPortal = ({ children }: ModalProps) => {
  const modalRoot = document.getElementById("modal-root") as HTMLElement;
  return ReactDOM.createPortal(children, modalRoot);
};

export default ModalPortal;
