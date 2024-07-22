 import ProjectCard from './ProjectCard';
 

 interface Project {
    title: string;
    description: string;
    webUrl: string; 
  }
  
  const projects: Project[] = [
    {
      title: 'BASIC',
      description: 'Perfect for channels just starting out or those looking for clean, straightforward edits',
      webUrl: 'https://www.youtube.com/embed/DsdcCtif6sc?si=cYAsLW5oT1DUX0yI'
     
    },
    {
        title: 'Standard',
        description: ' Make your videos look more polished to increase your AVD',
        webUrl: "https://www.youtube.com/embed/EBbTwPNbyKE?si=_Dw4C7q6cpKnTgF3",
     
      },
        {
        title: 'Premium',
        description: 'Make your videos truly stand out with high-end production value ',
        webUrl: 'https://www.youtube.com/embed/0PyeuKNgxBU?si=z8BwFRL88VzPg-xc',
  
      } 
  ];
  
  const Portfolio: React.FC = () => {
    return (
      <div>
       
        <center> <h1>My Portfolio</h1></center>
       
        <div>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              webUrl={project.webUrl} 
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default Portfolio;