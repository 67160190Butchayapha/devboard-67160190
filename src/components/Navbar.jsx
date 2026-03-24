function Navbar({ favoriteCount }) {
  return (
    <nav
      style={{
        background: "#1e40af",
        color: "white",
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h1>DevBoard</h1>

      {favoriteCount > 0 && (
        <div style={{ background: "#e53e3e", padding: "5px 10px", borderRadius: "20px" }}>
          ❤️ {favoriteCount}
        </div>
      )}
    </nav>
  );
}

export default Navbar;