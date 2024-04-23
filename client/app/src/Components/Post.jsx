const Post = ({ post }) => {
  const deleteSinglePost = async () => {
    // console.log("idddd " + post._id);
    await fetch(`http://localhost:8080/deleteBlog/${post._id}`, {
      method: "DELETE",
    })
      .then(() => alert("Deleted"))
      .then((res) => res.json());
  };
  return (
    <>
      <div className="card" style={{ padding: "12px" }}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <button className="red btn" onClick={() => deleteSinglePost()}>
          Delete
        </button>
        <button
          className="btn yellow"
          onClick={async () => {
            console.log("edit ", post);
            var ddata = await fetch(`http://localhost:8080/edit/${post._id}`);
            await console.log(ddata.json());
          }}
        >
          Edit
        </button>
      </div>
      <br />
    </>
  );
};

export default Post;
