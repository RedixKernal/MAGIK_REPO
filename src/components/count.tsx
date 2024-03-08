type Tprops = {
  count: number;
};
function Count({ count }: Tprops): JSX.Element {
  return (
    <div style={{ margin: "10px 0px" }} data-testid="test-count">
      increased value : {count}
    </div>
  );
}

export default Count;
