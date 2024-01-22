import './App.css'
import CarouselCustom from './components/CarouselCustom';
import Navbar from './components/NavbarCustom';
import FooterCustom from './components/FooterCustom';
import Portada from './components/Portada';
function App() {
  return (
    <>
    <div className='flex flex-col h-screen justify-center'>
      <Navbar></Navbar>
      <Portada></Portada>
      <CarouselCustom></CarouselCustom>
      <FooterCustom></FooterCustom>
    </div>

    </>
  )
}
export default App
