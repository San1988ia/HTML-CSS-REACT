import "./Button.scss";

type ButtonProps = {
  bgColor: string;
};

export default function Button({ bgColor }: Readonly<ButtonProps>) {
  const styleobjekt = {
    backgroundColor: bgColor,
  };

  return (
    <>
      <div style={styleobjekt}>Button</div>
      <div className="Button">Bättre Button</div>
    </>
  );
}
