import Post from "./Post/Post"

const Posts = () => {
  return (
    <section className="my-posts">
      <div className="new-post">
        <h2 className="new-post__title">My posts</h2>
        <form name="new-post" className="form new-post__form">
          <textarea type="text" name="new-post-input" id="new-post-input" className="new-post__input" placeholder="What news?"></textarea>
          <button type="submit" className="btn btn_action_new-post" aria-label="Send">Send</button>
        </form>
      </div>
      <ul className="posts list">
        <Post message="Hey, Where is my money, Lebovski?" likeCur="1"/>
        <Post message="You are bitch!!!" likeCur="3"/>
      </ul>
    </section>
  )
}

export default Posts