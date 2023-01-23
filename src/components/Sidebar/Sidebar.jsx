const Sidebar = () => {
  return (
    <nav className='sidebar'>
      <ul className='list sidebar__list'>
        <li>
          <a href='#' className='link sidebar__item'>
            <img src="https://cdn-icons-png.flaticon.com/512/7799/7799100.png" alt="profile" className="sidebar__ico" />
            <p className="sidebar__text">Profile</p>
          </a>
        </li>
        <li>
          <a href='#' className='link sidebar__item'>
            <img src="https://cdn-icons-png.flaticon.com/512/2169/2169654.png" alt="profile" className="sidebar__ico" />
            <p className="sidebar__text">Messages</p>
          </a>
        </li>
        <li>
          <a href='#' className='link sidebar__item'>
            <img src="https://cdn-icons-png.flaticon.com/512/6683/6683800.png" alt="profile" className="sidebar__ico" />
            <p className="sidebar__text">News</p>
          </a>
        </li>
        <li>
          <a href='#' className='link sidebar__item'>
            <img src="https://cdn-icons-png.flaticon.com/512/1175/1175846.png" alt="profile" className="sidebar__ico" />
            <p className="sidebar__text">Music</p>
          </a>
        </li>
        <li>
          <a href='#' className='link sidebar__item sidebar__setting'>
            <img src="https://cdn-icons-png.flaticon.com/512/2618/2618137.png" alt="profile" className="sidebar__ico" />
            <p className="sidebar__text">Setting</p>
          </a>
        </li>
        <li className="sidebar__friend">
          <a href='#' className='link sidebar__item'>
            <img src="https://cdn-icons-png.flaticon.com/512/4841/4841054.png" alt="profile" className="sidebar__ico" />
            <p className="sidebar__text">Friends</p>
          </a>
          
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar