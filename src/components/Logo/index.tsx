interface Props {
  width: string;
  height: string;
}

const Logo = ({ width, height }: Props) => {
  return (
    <img
      src="/assets/logo.svg"
      alt="Charge-In Logo"
      width={width}
      height={height}
    />
  );
};

export default Logo;
