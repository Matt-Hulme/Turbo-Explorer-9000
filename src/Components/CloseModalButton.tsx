import CloseModalButtonIcon from "../assets/CloseModalButtonIcon.svg";

interface CloseModalButtonProps {
  onDismiss: () => void;
}

export const CloseModalButton: React.FC<CloseModalButtonProps> = ({
  onDismiss,
}) => {
  return (
    <div onClick={onDismiss} className="absolute top-0 right-0 m-2">
      <img
        src={CloseModalButtonIcon}
        className="w-1rem h-1rem"
        alt="Close button"
      ></img>
    </div>
  );
};
