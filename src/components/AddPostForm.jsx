import { useState } from "react";

function AddPostForm({ onAddPost }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim() || !body.trim()) return;

    onAddPost({ title, body });

    setTitle("");
    setBody("");
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <h3>เพิ่มโพสต์ใหม่</h3>

      <input
        type="text"
        placeholder="หัวข้อโพสต์"
        value={title}
        maxLength={100}
        onChange={(e) => setTitle(e.target.value)}
        style={{ width: "100%" }}
      />

      <div
        style={{
          textAlign: "right",
          color: 100 - title.length < 10 ? "red" : "#718096",
        }}
      >
        {title.length}/100
      </div>

      <textarea
        placeholder="เนื้อหาโพสต์"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        style={{ width: "100%" }}
      />

      <button type="submit">โพสต์</button>
    </form>
  );
}

export default AddPostForm;