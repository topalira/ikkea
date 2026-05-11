import './MainPage.css';

import Hero from '../Hero/Hero';
import Collection from '../Collection/Collection';
import New from '../New/New';
import Recommendation from '../Recommendation/Recommendation';
import Catalog from '../Catalog/Catalog';
import Ideas from '../Ideas/Ideas';
import InfoSection from '../InfoSection/InfoSection';
import AddRecommends from '../AddRecommends/AddRecommends';

import strelkaUser from '../../strelka.svg'

export function MainPage() {
  return (
    <div className="main">
      <Hero strelka={strelkaUser}/>
      <Collection />
      <Recommendation />
      <New />
      <Catalog />
      <Ideas />
      <AddRecommends />
      <InfoSection />
    </div>
  );
}

export default MainPage;