import './App.css';
import { Routes, Route } from 'react-router-dom';
import logo from './Union.svg';
import menuH from './menu.svg';
import geo from './geo.svg'
import userInco from './user.svg' 
import basketIcon from './basket.svg'
import userLike from './like.svg'
import lupaUser from './lupa.svg'
import strelkaUser from './strelka.svg'
import cross from './cross.svg'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainPage from './components/MainPage/MainPage';
import ProductsPage from './components/ProductsPage/ProductsPage';
import RoomsPage from './components/RoomsPage/RoomsPage';
import Login from './components/Login/Login';
import DesignPage from './components/DesignPage/DesignPage';
import Signup from './components/Signup/Signup';
import CartPage from './components/CartPage/CartPage';
import LikePage from './components/LikePage/LikePage';
import IdeasPage from './components/IdeasPage/IdeasPage';

function AppContent() {
  return (
    <div className="app-wrapper">
      <Header img={logo} menu={menuH} geoUser={geo} user={userInco} basket={basketIcon} like={userLike} lupa={lupaUser} cross={cross} />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path='/product' element={<ProductsPage />}/>
          <Route path='/rooms' element={<RoomsPage />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/design-room' element={<DesignPage />}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/basket' element={<CartPage/>}/>
          <Route path='/like' element={<LikePage/>}/>
          <Route path='/ideaspage' element={<IdeasPage/>}/>
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
      <AppContent />
  );
}

export default App;



// import logo from './Union.svg';
// import menuH from './menu.svg';
// import geo from './geo.svg'
// import userInco from './user.svg' 
// import basketIcon from './basket.svg'
// import userLike from './like.svg'
// import lupaUser from './lupa.svg'
// import strelkaUser from './strelka.svg'
// import cross from './cross.svg'
// import './App.css';
// import Header from './components/Header/Header';
// import Hero from './components/Hero/Hero';
// import Collection from './components/Collection/Collection';
// import New from './components/New/New';
// import Recommendation from './components/Recommendation/Recommendation';
// import Catalog from './components/Catalog/Catalog';
// import Ideas from './components/Ideas/Ideas'
// import InfoSection from './components/InfoSection/InfoSection';
// import AddRecommends from './components/AddRecommends/AddRecommends';
// import Footer from './components/Footer/Footer';

// function App() {
//   return (
//     <div className="App">

//       <Header img={logo} menu={menuH} geoUser={geo} user={userInco} basket={basketIcon} like={userLike} lupa={lupaUser} />
//       <Hero strelka={strelkaUser}/>
//       <Collection />
//       <Recommendation />
//       <New />
//       <Catalog />
//       <Ideas/>
//       <AddRecommends/>
//       <InfoSection/>
//       <Footer/>
//     </div>
//   );
// }

// export default App;




// import './App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import logo from './Union.svg';
// import menuH from './menu.svg';
// import geo from './geo.svg';
// import userInco from './user.svg';
// import basketIcon from './basket.svg';
// import userLike from './like.svg';
// import lupaUser from './lupa.svg';

// import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';
// import Main from './components/Main/Main';

// function AppAll() {
//   return (
//     <div className="app-wrap">
//       <Header 
//         img={logo}
//         menu={menuH}
//         geoUser={geo}
//         user={userInco}
//         basket={basketIcon}
//         like={userLike}
//         lupa={lupaUser}
//       />

//       <main className="main-content">
//         <Routes>
//           <Route path="/" element={<Main />} />
//         </Routes>
//       </main>

//       <Footer />
//     </div>
//   );
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <AppAll />
//     </BrowserRouter>
//   );
// }

// export default App;