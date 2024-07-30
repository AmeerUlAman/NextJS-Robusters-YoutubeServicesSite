 import ProjectCard from './TierCard';
 

 interface Project {
  tier:string;
    title: string;
    description: string;
    webUrl: string; 
    but:string;
    butid:string;
  }
  
  const projects: Project[] = [
    { tier:"Tier 1",
      title: 'BASIC',
      description: 'Perfect for channels just starting out or those looking for clean, straightforward edits',
      webUrl: 'https://www.youtube.com/embed/DsdcCtif6sc?si=cYAsLW5oT1DUX0yI',
     but:'See Package',
     butid:'but1',
    },
    {  tier:"Tier 2",
        title: 'STANDARD',
        description: ' Make your videos look more polished to increase your AVD',
        webUrl: "https://www.youtube.com/embed/EBbTwPNbyKE?si=_Dw4C7q6cpKnTgF3",
        but:'See Package',
     butid:'but2',
      },
        {tier:"Tier 3",
        title: 'PREMIUM',
        description: 'Make your videos truly stand out with high-end production value ',
        webUrl: 'https://www.youtube.com/embed/0PyeuKNgxBU?si=z8BwFRL88VzPg-xc',
        but:'See Package',
        butid:'but3',} 
  ];
  
  const Tier: React.FC = () => {
    return (
      <div>
 
       
        <div>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              tier={project.tier}
              title={project.title}
              description={project.description}
              webUrl={project.webUrl} 
              but={project.but}
              butid={project.butid}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default Tier;