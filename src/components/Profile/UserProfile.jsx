 const UserProfile = () => {
  return (<section className='profile'>
    <img src="https://avatars.mds.yandex.net/i?id=8ce540ee79d9ebb60cfddce707089744-4377975-images-thumbs&n=13" alt="avatar" className="profile__img" />
    <div className="profile__description">
      <h1 className='profile__username'>Aleksandr Zhdanko</h1>
      <ul className="profile__info list">
        <li className="profile__text">Date of Birth: <span className="profile__data date-of-birth">2 january</span></li>
        <li className="profile__text">City: <span className="profile__data city">Minsk</span></li>
        <li className="profile__text">Education: <span className="profile__data education">BSU'11</span></li>
        <li className="profile__text">Web-site: <span className="profile__data web-site">https://pug.com</span></li>
      </ul>
    </div>
  </section>)
 }

 export default UserProfile