function PostCard({ title, body, isFavorite, onToggleFavorite }) {
  return (
    <div
      style={{
        border: "1px solid #e2e8f0",
        borderRadius: "8px",
        padding: "1rem",
        marginBottom: "1rem",
        background: "white",
      }}
    >
      <h3>{title}</h3>
      <p>{body}</p>

      <button onClick={onToggleFavorite}>
        {isFavorite ? "❤️ ถูกใจแล้ว" : "🤍 ถูกใจ"}
      </button>
    </div>
  );
}

export default PostCard;