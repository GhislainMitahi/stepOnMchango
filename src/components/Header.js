import wold from './assets/wold.jpg';
import Nav from './core/Nav'
import Details from './core/Details'

const Header = ({text}) => {
  return (
    <header>
    <Nav logo='LOGO'
          province='Nord-kivu'
          economy='Economy' 
          social='Social' 
          vibes='Environement'
          search='Search'
          count='count'
          />
          <Details/>
      <p className="video"><img src={wold} alt=""/></p>
      <p className="text"><h1>{text}</h1></p>
    </header>
  )
}

export default Header;