import "./App.css";
import { data } from "./data";
import CommentContainer from "./components/CommentContainer";
import CommentBox from "./components/CommentBox";

function App() {
  const commentData = data;

  console.log("data", commentData);
  return (
    <div className="App">
      <CommentContainer data={commentData} />
    </div>
  );
}

export default App;
