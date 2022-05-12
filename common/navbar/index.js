import React, { useEffect, useState } from 'react'
import { NavbarContainer } from './styles'

export default function Navbar() {
  
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0 ? true : false);
};
  
  useEffect(() => {
    setIsScrolled(window.scrollY >= 500 );
    window.addEventListener('scroll', handleScroll);
}, []);
  
  return (
    <NavbarContainer active={isScrolled} >Navbar</NavbarContainer>
  )
}
