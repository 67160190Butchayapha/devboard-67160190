import { useState } from "react";
import PostCard from "./PostCard";

function PostList({ posts, favorites, onToggleFavorite }) {
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");

  const filtered = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  const sorted = [...filtered].sort((a, b) =>
    sortOrder === "desc" ? b.id - a.id : a.id - b.id
  );

  return (
    <div>
      <h2>โพสต์ล่าสุด</h2>

      <input
        type="text"
        placeholder="ค้นหาโพสต์..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: "100%", marginBottom: "1rem" }}
      />

      <button
        onClick={() =>
          setSortOrder(sortOrder === "desc" ? "asc" : "desc")
        }
        style={{ marginBottom: "1rem" }}
      >
        {sortOrder === "desc"
          ? "🔽 ใหม่สุดก่อน"
          : "🔼 เก่าสุดก่อน"}
      </button>

      {sorted.length === 0 && <p>ไม่พบโพสต์ที่ค้นหา</p>}

      {sorted.map((post) => (
        <PostCard
          key={post.id}
          title={post.title}
          body={post.body}
          isFavorite={favorites.includes(post.id)}
          onToggleFavorite={() => onToggleFavorite(post.id)}
        />
      ))}
    </div>
  );
}

export default PostList;