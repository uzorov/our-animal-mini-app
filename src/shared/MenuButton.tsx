
const MenuButton = () => {
  const dotStyle = {
    backgroundColor: "#1D5D31",
    borderRadius: "50%",
    width: 12,
    height: 12,
    margin: "0 2px",
  };

  return (
    <button style={{ display: "flex", alignItems: "center", padding: 8, background: "transparent", border: "none", cursor: "pointer" }}>
      <span style={{ ...dotStyle, marginLeft: 0 }} />
      <span style={dotStyle} />
      <span style={dotStyle} />
    </button>
  );
};

export default MenuButton;
