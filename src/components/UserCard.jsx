function getAvatarColor(name) {
  const code = name.charCodeAt(0);
  const group = code % 3;

  switch (group) {
    case 0:
      return "#3b82f6"; // น้ำเงิน
    case 1:
      return "#22c55e"; // เขียว
    case 2:
      return "#a855f7"; // ม่วง
    default:
      return "#3b82f6";
  }
}

function UserCard({ name, email }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  // 👇 ต้องมีบรรทัดนี้
  const color = getAvatarColor(name);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        border: "1px solid #e2e8f0",
        borderRadius: "8px",
        padding: "0.75rem 1rem",
        marginBottom: "0.75rem",
        background: "white",
      }}
    >
      <div
        style={{
          width: "40px",
          height: "40px",
          background: color, // 👈 ใช้ตรงนี้
          color: "white",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
          fontSize: "0.9rem",
        }}
      >
        {initials}
      </div>

      <div>
        <div style={{ fontWeight: "bold", color: "#2d3748" }}>
          {name}
        </div>
        <div style={{ fontSize: "0.85rem", color: "#718096" }}>
          {email}
        </div>
      </div>
    </div>
  );
}

export default UserCard;