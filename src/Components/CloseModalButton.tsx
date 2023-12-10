import CloseModalButtonIcon from "/public/CloseModalButtonIcon.svg";

interface CloseModalButtonProps {
  onDismiss: () => void;
}

export const CloseModalButton: React.FC<CloseModalButtonProps> = ({
  onDismiss,
}) => {
  return (
    <button
      onClick={onDismiss}
      className="absolute top-0 right-0 m-2 bg-transparent border-none"
    >
      <img
        src={CloseModalButtonIcon}
        className="w-1rem h-1rem"
        alt="Close"
      ></img>
    </button>
  );
};
