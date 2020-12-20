import { useContext } from "react";
import Form from "./components/Form";
import CommentItem from "./components/CommentItem";
import { CommentContext } from "./context/CommentContextProvider";

function App() {
  const {comments} = useContext(CommentContext)
  return (
    <div className="app-container">
      <h1>Comment on this Post</h1>
      <Form />
      <ul className="post-items">
        { comments.map((commentData, index) => <CommentItem comment={commentData} key={index} />)}
      </ul>
      
    </div>
  );
}

export default App;
