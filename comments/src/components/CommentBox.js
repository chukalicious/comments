const CommentBox = (props) => {
  console.log("CommentBox: prop: ", props);

  //   this needs to have a header with the user's name, thumbnail, indicator for current user, time posted,
  //  a footer for a votes counter, delet and edit buttons
  // these are...
  // <header>
  //   <img>
  //  <h1>
  // main body div
  // <footer>
  // counter - which is a completely separate compononet with state to keep the count
  //   edit & delete buttons that will only work if I make a back end for it....
  // it can also be done in the fron end. I just will not post new comment or may not really edit
  // might managed only thru local state
  return (
    <div>
      <p>{props.user.username}</p>
      <p>{props.content}</p>
    </div>
  );
};

export default CommentBox;
