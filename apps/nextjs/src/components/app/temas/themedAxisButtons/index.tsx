interface Props {
  themedAxis: string;
  onClick: () => void;
  selected: boolean;
}

export function ThemedAxisButtons({ themedAxis, onClick, selected }: Props) {
  return (
    <button
      className={`mx-1 p-2  ${
        selected
          ? "bor bg-blue-500 text-white"
          : "border border-gray-300 bg-white"
      }`}
      onClick={onClick}
    >
      {themedAxis}
    </button>
  );
}
