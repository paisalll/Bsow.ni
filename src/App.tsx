import React,{ useState } from 'react'
import { motion, useTransform, useViewportScroll } from 'framer-motion'
import logo from './assets/bsow.png'
import { FaBars } from 'react-icons/fa'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollXProgress } = useViewportScroll();

  const slideAnimation = useTransform(
    scrollXProgress,
    [0, 1, 2],
    ["0%", "-100%", "-200%"]
  );
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  console.log(isOpen);
  const slides = [
    {
      url: 'https://cdn.discordapp.com/attachments/1079408718598389772/1095733469348364288/IMG_3086.jpg'
    },
    {
      url: 'https://cdn.discordapp.com/attachments/1079408718598389772/1095733470803796130/IMG_3082.jpg'
    },
    {
      url: "https://cdn.discordapp.com/attachments/1079408718598389772/1095733469671333969/IMG_3085.jpg"
    },
    {
      url: "https://cdn.discordapp.com/attachments/1079408718598389772/1095733472200503497/IMG_3078.jpg"
    },
    {
      url: "https://cdn.discordapp.com/attachments/1079408718598389772/1095733471533596794/IMG_3080.jpg"
    },
  ]
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSLide = currentIndex === 0
    const newIndex = isFirstSLide ? slides.length - 1 : currentIndex -1
    setCurrentIndex(newIndex)
  }
  const nextSlide = () => {
    const isLastIndex = currentIndex === slides.length - 1
    const newIndex = isLastIndex ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }
  return (
    <div className="w-screen h-screen justify-center">
        <motion.nav 
        className="bg-slate-900/10 rounded-md bg-clip-padding  backdrop-blur-sm dark:bg-gray-900 fixed w-full z-20 top-0 left-0 dark:border-gray-600"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}>
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="avatar">
            <div className="w-14 rounded-full">
              <img src={logo} className="rounded-full mr-3" alt="Flowbite Logo"/>
            </div>
          </div>
          <div className="flex md:order-2">
              <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
              </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:flex-row md:space-x-8 md:mt-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <motion.div
              className="menu-toggle"
              whileHover={{ scale: 1.2 }}
            >
              <i className="fas fa-bars" onClick={toggleMenu}/>
            </motion.div>
            <motion.ul
              className={`${isOpen ? 'menu open' : 'menu'} flex flex-col p-4 md:p-0 mt-4 font-medium text-white border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.li whileHover={{ scale: 1.1 }}>Home</motion.li>
              <motion.li whileHover={{ scale: 1.1 }}>About</motion.li>
              <motion.li whileHover={{ scale: 1.1 }}>Contact</motion.li>
            </motion.ul>
            </ul>
          </div>
          </div>
        </motion.nav>
        <div className="flex flex-col justify-center ">
          <motion.div 
            key={slides[currentIndex].url}
            initial={{ x: -50, opacity: 1 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-full h-[300px] lg:h-[700px] w-full relative group">
            <motion.div 
            style={{backgroundImage: `url(${slides[currentIndex].url})`}} className="w-full h-full flex flex-col justify-center items-center rounded-b-xl bg-cover bg-center text-white">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                  >
                <h1 className='text-6xl'>Healthy Circle</h1>
                <p>Welcome To BSOW </p>
                <motion.button
                  className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{
                    y: [0, -10, 0],
                    transition: {
                      duration: 0.3,
                      repeat: Infinity,
                      repeatType: "mirror"
                    }}}
                >
                  Get Started
                </motion.button>
              </motion.div>
            </motion.div>
            {/* Left Arrow*/}
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }} className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
              <BsChevronCompactLeft onClick={prevSlide} size={30}/>
            </motion.div>
            {/* Right Arrow*/}
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }} className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
              <BsChevronCompactRight onClick={nextSlide} size={30}/>
            </motion.div>
          </motion.div>
        </div>
    </div>

  )
}

export default App
