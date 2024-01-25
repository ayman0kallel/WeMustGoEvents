import Article from '../../components/article/Article';
import { tomorrowland } from './imports';
import './blog.css';

const Blog = () => (
  <div className="blog section__padding" id="blog">
    <div className="blog-heading">
      <h1 className="gradient__text">Prêt à commencer l&apos; aventure ? <br/> Explorez nos événements dès maintenant !</h1>
    </div>
    <div className="blog-container">
      {/* <div className="blog-container_groupA">
        <Article imgUrl={tomorrowland} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div> */}
      <div className="blog-container_groupB">
        <Article imgUrl={tomorrowland} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={tomorrowland} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={tomorrowland} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={tomorrowland} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div>
    </div>
  </div>
);

export default Blog;
