interface MoreDetailsButtonProps {
  handleMoreDetailsButtonClick: () => void;
}

export const MoreDetailsButton: React.FC<MoreDetailsButtonProps> = ({
  handleMoreDetailsButtonClick,
}: MoreDetailsButtonProps) => {
  return (
    <button
      className="m-r-.5rem rounded border-.10rem bg-gray-300 "
      onClick={handleMoreDetailsButtonClick}
    >
      More Details
    </button>
  );
};
