import { useState } from "react";
import PostCard from "./PostCard";
import LoadingSpinner from "./LoadingSpinner";
import useFetch from "../hooks/useFetch";

function PostList({ favorites, onToggleFavorite }) {
  const { data: posts, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const POSTS_PER_PAGE = 10;

  const filtered = posts
    .slice(0, 20)
    .filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase())
    );

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);

  const currentPosts = filtered.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  if (loading) return <LoadingSpinner />;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h2>โพสต์ล่าสุด</h2>

      <input
        type="text"
        placeholder="ค้นหาโพสต์..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1);
        }}
      />

      {currentPosts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          isFavorite={favorites.includes(post.id)}
          onToggleFavorite={() => onToggleFavorite(post.id)}
        />
      ))}

      {/* pagination */}
      <div style={{ marginTop: "1rem" }}>
        <button
          onClick={() => setCurrentPage((p) => p - 1)}
          disabled={currentPage === 1}
        >
          ← ก่อนหน้า
        </button>

        <span> หน้า {currentPage} / {totalPages} </span>

        <button
          onClick={() => setCurrentPage((p) => p + 1)}
          disabled={currentPage === totalPages}
        >
          ถัดไป →
        </button>
      </div>
    </div>
  );
}

export default PostList;