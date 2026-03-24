import { useState } from "react";

function AddPostForm({ onAddPost }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title.trim() || !body.trim()) return;

    onAddPost({ title, body });

    // เคลียร์ค่า
    setTitle("");
    setBody("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        border: "1px solid #e2e8f0",
        borderRadius: "8px",
        padding: "1rem",
        marginBottom: "1.5rem",
        background: "#f7fafc",
      }}
    >
      <h3 style={{ marginBottom: "0.75rem" }}>เพิ่มโพสต์ใหม่</h3>

      {/* INPUT TITLE */}
      <input
        type="text"
        placeholder="หัวข้อโพสต์"
        value={title}
        maxLength={100} // จำกัด 100 ตัว
        onChange={(e) => setTitle(e.target.value)}
        style={{
          width: "100%",
          padding: "0.5rem",
          border: "1px solid #cbd5e0",
          borderRadius: "4px",
        }}
      />

      {/* CHARACTER COUNTER */}
      <div
        style={{
          textAlign: "right",
          fontSize: "0.8rem",
          marginBottom: "0.5rem",
          color: 100 - title.length < 10 ? "red" : "#718096",
        }}
      >
        {title.length}/100
      </div>

      {/* TEXTAREA BODY */}
      <textarea
        placeholder="เนื้อหาโพสต์"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        rows={3}
        style={{
          width: "100%",
          padding: "0.5rem",
          marginBottom: "0.75rem",
          border: "1px solid #cbd5e0",
          borderRadius: "4px",
        }}
      />

      {/* BUTTON */}
      <button
        type="submit"
        style={{
          background: "#1e40af",
          color: "white",
          border: "none",
          padding: "0.5rem 1.5rem",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        โพสต์
      </button>
    </form>
  );
}

export default AddPostForm;