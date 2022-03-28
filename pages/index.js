import SmallCard from '../components/SmallCard';
import { projectIcons } from '../components/Icons';
import { TextBox } from '../components/TextBox';

import { projects } from '../utils/projectsData';
import { ToggleDarkMode } from '../components/ToggleDarkMode';

const Home = () => (
  <>
    <div className="min-h-screen dark:bg-gray-800 dark:text-gray-200">
      <div className="home">
        <div className="flex justify-center mt-8">
          <ToggleDarkMode />
        </div>
        <h1>Nurse Speak</h1>
        {/* <h2>俺の思い伝われ</h2> */}
        <div className="grid grid-cols-2 gap-4">
          {projects.map((project) => {
            const Icon = projectIcons[project.id];
            return <SmallCard key={project.id} Icon={Icon} title={project.name} />;
          })}
        </div>
        <TextBox />
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
      </div>
    </div>
  </>
);

export default Home;
