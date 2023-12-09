import CloseModalButtonIcon from "../assets/CloseModalButtonIcon.svg";

interface CloseModalButtonProps {
  onDismiss: () => void;
}

export const CloseModalButton: React.FC<CloseModalButtonProps> = ({
  onDismiss,
}) => {
  return (
    <div onClick={onDismiss} className="w-1rem h-1rem">
      <img src={CloseModalButtonIcon} className="w-1rem h-1rem"></img>
    </div>
  );
};
