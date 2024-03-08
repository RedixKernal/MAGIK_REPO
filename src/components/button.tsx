type Tprops = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
};
function Button({ setCount }: Tprops): JSX.Element {
  return (
    <div>
      <button
        data-testid="test-button"
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
}

export default Button;
