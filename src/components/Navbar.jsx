import React , {useRef} from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {MdCancel} from 'react-icons/md'
import Balance from './Balance'

const Navbar = ({total, balance}) => {

    const closeBtn = useRef()
    const searchIconRef = useRef()
    // acilacaq pencere overlayRef
    const overlayRef = useRef()

    const closeOverlay = (e) => {
      const clickedEl = e.target
      if(clickedEl.classList.contains('cross-icon'))
        clickedEl.parentElement.classList.remove('active')

      console.log(clickedEl)
    }


    const openOverlay = (e) => {
        const kliklenenElement = e.target

        if(kliklenenElement.classList.contains('s-icon')) {
            overlayRef.current.classList.add('active')
        }
        // alert("Calisir")
    }



  return (
    <>
    <div className="overlay" ref={overlayRef} >
        <MdCancel className='cross-icon' onClick={closeOverlay} ref={closeBtn} />
        <input className='overlay-search-input' type="search" placeholder='Search in IT Brains Search' />
    </div>
    <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
      <a className="navbar-brand" href="/"><img src="	https://www.bakuelectronics.az/assets/img/logo.svg" alt="" /></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="s-input">
        <input type="text" />
        <AiOutlineSearch className='s-icon' ref={searchIconRef} onClick={openOverlay} />
       

      </div>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav mx-auto">
          <a className="nav-link active text-danger" aria-current="page" href="/kampaniyalar">Kampaniyalar</a>
          <a className="nav-link" href="/magazalar">Mağazalar</a>
          <a className="nav-link" href="#"><Balance total={total} balance={balance}/></a>
          <a className="nav-link" href="#">143 </a>
        </div>
      </div>
    </div>
  </nav>

  </>
  )
}

export default Navbar