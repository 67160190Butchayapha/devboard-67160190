import PostList from "../components/PostList";
import AddPostForm from "../components/AddPostForm";

function HomePage() {
  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "2rem auto",
        padding: "0 1rem",
      }}
    >
      {/* กล่องเพิ่มโพสต์ */}
      <div
        style={{
          background: "#fff",
          padding: "1rem",
          borderRadius: "8px",
          marginBottom: "1rem",
          border: "1px solid #e2e8f0",
        }}
      >
        <AddPostForm onAddPost={() => {}} />
      </div>

      {/* checkbox */}
      <div style={{ marginBottom: "1rem" }}>
        <label>
          <input type="checkbox" /> ใหม่สุดก่อน
        </label>
      </div>

      {/* list */}
      <PostList />
    </div>
  );
}

export default HomePage;