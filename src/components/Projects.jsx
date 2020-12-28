import React from 'react';
import ProjectTopic from "./ProjectTopic"
import "../css/Projects.scss"
import game from "../Image/game.png"
import books from "../Image/books.png"
import good from "../Image/good.png"
import harry from "../Image/harry.png"

const Projects = (props) => {
  return (
    <section id="services">
      <div className="servicesDiv">
        <h1 className="title">Projects</h1>
        <ProjectTopic
          image={game}
          topic="Video Game Triva"
          paragraph="This app was built to test the knowledge of gamers"
          customStyle="gameImg"
        />
        <ProjectTopic
          image={books}
          topic="Once Upon A Book"
          paragraph="This is an on going project, My sons love of books inspired me to create an easier way to find new books"
          customStyle="booksImg"
          side="rightFacing"
        />
        <ProjectTopic
          image={good}
          topic="Good Cuisine"
          paragraph="Good Cuisine was a collaboration with UX designers, with a fully built backend and front end using react.."
          customStyle="goodImg"
        />
        <ProjectTopic
          image={harry}
          topic="Harry Potter Wiki"
          paragraph="Learn about the wizards of hogwarts with this app built using a harry potter api and react."
          customStyle="harryImg"
          customStyle2="pressure2"
          side="rightFacing"
        />
      </div>
    </section>
  );
}

export default Projects;