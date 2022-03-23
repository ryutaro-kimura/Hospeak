import SmallCard from '../components/SmallCard';
import { projectIcons } from '../components/Icons';

import { projects } from '../utils/projectsData';
import { TextBox } from '../components/TextBox';

const Home = () => (
  <div className="home">
    <h1>Hospeak</h1>
    <h2>俺の思い伝われ</h2>
    <div className="card-grid">
      {projects.map((project) => {
        const Icon = projectIcons[project.id];
        return <SmallCard key={project.id} Icon={Icon} title={project.name} slug={project.slug} />;
      })}
    </div>
    <TextBox></TextBox>
  </div>
);

export default Home;
