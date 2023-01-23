import Posts from "../Profile/MyPosts/Posts"
import UserProfile from "./UserProfile"

const Profile = () => {
  return (
    <main className='main'>
      <div className='main__img'></div>
      <UserProfile />
      <Posts />
    </main>)
}

export default Profile