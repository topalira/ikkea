import './IdeasPage.css';

import Ideadecor from '../Ideadecor/Ideadecor'
import IdeasCard from '../IdeasCard/IdeasCard'
import Interiorlayout from '../Interiorlayout/Interiorlayout'
import Many from '../Many/Many'
import Rooms from '../Rooms/Rooms'

export function IdeasPage() {
  return (
    <div className="IdeasPage" >
      <Ideadecor />
      <Interiorlayout />
       <Rooms/>
      <IdeasCard />
      <Many />
      <Rooms/>
    </div>
  );
}

export default IdeasPage;