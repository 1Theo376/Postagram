import { useEffect, useState } from "react";
import Post from "./Post";
import { Row } from "react-bootstrap";


function PostList({ posts, updatePost }) {
    const [postss, setPostss] = useState(posts);

    const removePostFromList = async (postId) => {
        const postsFiltered = postss.filter((post) => post.id !== postId);
          setPostss(postsFiltered)
        }
    useEffect(() => {
        setPostss(posts);
      }, [posts]);
    return (
      <Row xs={1} md={2} className="g-4">
        {postss.map((post) => (
          <Post key={posts.id} post={post} removePost={removePostFromList} updatePost={updatePost} />
        )
        )}
      </Row>
    )
  }
  
export default PostList;
  