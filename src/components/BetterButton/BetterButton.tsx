import "./BetterButton.scss";

type BetterButtonProps = {
  hasAqua?: boolean;
};

export default function BetterButton({ hasAqua = false }: BetterButtonProps) {
  return (
    <div className={`BetterButton ${hasAqua ? "hasAqua" : ""}`}>
      BetterButton
    </div>
  );
}
