import { Container, Row, Col, Tab } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Projects.css';
import './ProjectCards.css';
import { ProjectCards } from './ProjectCards';
import projImg1 from "./asset/img/projectleapyear.png"
import projImg2 from "./asset/img/NewPoster_Scoius.png"
import projImg3 from "./asset/img/TITLE PAGE.png"
import projImg4 from "./asset/img/portfolio.png"

export const Projects = () => {
  const projects = [
    {
      title: "Project: Leap Year",
      description: "A 2D game that implements the Lancer TRPG Mechanincs into an action game.",
      imgUrl: projImg1,

    },
    {
      title: "Socius",
      description: "A short film about the main character quesitoning if his friends are still truly friends",
      imgUrl: projImg2,

    },
    {
      title: "Can't Help Myself",
      description: "An Animatic about the main character who can't seem to stop helping her classmates works.",
      imgUrl: projImg3,

    },
    {
      title: "HTMLCSSJS",
      description: "Rad's first portfolio website lmao",
      imgUrl: projImg4,

    },


  ];

  return (
    <section className='projects' id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Hey, these are my projects.</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                  {
                    projects.map((project, index) => {
                      return (
                        <ProjectCards key={index} {...project
                        }/>
                      )
                    })
                  }
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  )
}