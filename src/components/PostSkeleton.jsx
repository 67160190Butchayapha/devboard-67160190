function PostSkeleton() {
  return (
    <div>
      {[1, 2, 3].map((item) => (
        <div
          key={item}
          style={{
            background: "#f1f5f9",
            padding: "15px",
            borderRadius: "10px",
            marginBottom: "10px",
          }}
        >
          {/* title */}
          <div
            style={{
              height: "20px",
              width: "60%",
              background: "#e2e8f0",
              marginBottom: "10px",
              borderRadius: "5px",
            }}
          ></div>

          {/* body line 1 */}
          <div
            style={{
              height: "14px",
              width: "90%",
              background: "#e2e8f0",
              marginBottom: "8px",
              borderRadius: "5px",
            }}
          ></div>

          {/* body line 2 */}
          <div
            style={{
              height: "14px",
              width: "80%",
              background: "#e2e8f0",
              borderRadius: "5px",
            }}
          ></div>
        </div>
      ))}
    </div>
  );
}

export default PostSkeleton;