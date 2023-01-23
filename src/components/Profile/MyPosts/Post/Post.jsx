const Post = (props) => {
  return (
    <li className="post">
      <img src="https://i.pinimg.com/originals/61/56/f9/6156f9cedca91927f691be7b4ad2b3f9.jpg" alt="" className="friend-avatar friend-avatar_place_post" />
      <p className="post__text">{props.message}</p>
      <form className="like">
        <button className="btn btn__like"></button>
        <span className="like__cur">{props.likeCur}</span>
      </form>
    </li>
  )
}

export default Post