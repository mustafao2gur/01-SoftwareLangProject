import HeaderStyle from '../Header/Header.module.css';


const Header = () => {
  return (
    <div className={HeaderStyle.header}>
        <img
          src="https://clarusway.com/wp-content/uploads/2022/02/Adsiz-tasarim-4-300x78.png"
          alt="logo"
          className="logo"/>
      
    </div>
  )
}

export default Header
