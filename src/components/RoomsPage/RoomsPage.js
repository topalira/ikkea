import './RoomsPage.css';

import Additional from '../Additional/Additional'
import Cat from '../Cat/Cat'
import Cozysets from '../Cozysets/Cozysets'
import Ideasfor from '../Ideasfor/Ideasfor'
import Information from '../Information/Information'
import Productss from '../Productss/Productss'
import Rooms from '../Rooms/Rooms'

export function RoomsPage() {
  return (
    <div className="RoomsPage" >
      <Rooms/>
      <Productss/>
      <Information/>
      <Cat/>
      <Ideasfor/>
      <Cozysets/>
      <Additional/>
    </div>
  );
}

export default RoomsPage;
