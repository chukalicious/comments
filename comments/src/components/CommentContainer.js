import CommentBox from "./CommentBox";

const CommentContainer = (props) => {
  console.log("CommentContainer.js: props:", props);
  return (
    <div>
      {props.data.comments.map((comm) => (
        <CommentBox
          key={comm.id}
          content={comm.content}
          user={comm.user}
          createdAt={comm.createdAt}
          score={comm.score}
          replies={comm.replies}
        />
      ))}

      {/* the current user might be held here */}
    </div>
  );
};

export default CommentContainer;
