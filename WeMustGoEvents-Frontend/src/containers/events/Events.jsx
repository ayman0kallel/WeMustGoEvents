import Article from '../../components/article/Article';
import { tomorrowland } from './imports';
import './events.css';

const events = () => (
  <div className="events section__padding" id="events">
    <div className="events-heading">
      <h1 className="gradient__text">Prêt à commencer l&apos; aventure ? <br/> Explorez nos événements dès maintenant !</h1>
    </div>
    <div className="events-container">
      {/* <div className="events-container_groupA">
        <Article imgUrl={tomorrowland} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div> */}
      <div className="events-container_groupB">
        <Article imgUrl={tomorrowland} date="Sep 26, 2021" text="tomorrowland" />
        <Article imgUrl={tomorrowland} date="Sep 26, 2021" text="tomorrowland" />
      </div>
    </div>
  </div>
);

export default events;
