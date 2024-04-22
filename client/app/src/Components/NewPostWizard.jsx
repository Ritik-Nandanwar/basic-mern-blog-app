import { useState } from "react";
function NewPostWizard() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  return (
    <>
      <div className="">
        <h1 className="center">Blog It!</h1>
        <form action="" method="post">
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="Title of your blog"
          />
          <input
            type="text"
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
            placeholder="body of your blog"
          />
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              fetch("http://localhost:8080", {
                method: "POST",
                body: JSON.stringify({
                  title,
                  body,
                }),
                headers: {
                  "Content-type": "application/json; charset=UTF-8",
                },
              });
            }}
            className="btn"
          >
            Post
          </button>
        </form>
      </div>
    </>
  );
}

export default NewPostWizard;
