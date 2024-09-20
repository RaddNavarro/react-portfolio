import './NavBar.css';
export const NavBar = () => {
  
  const listActive = document.querySelectorAll('li');

  listActive.forEach(list => {
      list.addEventListener('click', () => {
      document.querySelector('.active')?.classList.remove('active');
      list.classList.add('active')
    })
  })

  return (
    <header>
      <div className="container">
        <nav>
          <div className="title">
            <h1>My Portfolio</h1>
          </div>
          <ul className="nav-link"> 
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact Me</a></li>
          </ul>
        </nav>
      </div>
    </header>
    
    
    
  );

}

