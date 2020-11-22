import BaseLayout from "@/components/layouts/BaseLayout"
import { Container, Row, Col, Button } from "reactstrap"
import Typed from "react-typed"
import { useGetUser } from "@/actions/user"

const ROLES = [
  "Developer",
  "Team Player",
  "Frontend",
  "Backend",
  "Next.js",
  "React.js",
  "MongoDB",
  "Express",
  "Node",
  "Husband",
  "Father",
]
const Index = () => {
  const { data, loading } = useGetUser()

  return (
    <BaseLayout
      user={data}
      loading={loading}
      navClass='transparent'
      className='cover'
    >
      <div className='main-section'>
        <div className='background-image'>
          {/* <img src="/images/background-index.png" /> */}
        </div>
        <Container>
          <Row>
            <Col md='6'>
              <div className='hero-section'>
                <div className={`flipper`}>
                  <div className='back'>
                    <div className='hero-section-content'>
                      <h2> Full Stack Web Developer </h2>
                      <div className='hero-section-content-intro'>
                        <Button className='btnCta'>
                          Get in touch with me!
                        </Button>
                      </div>
                    </div>
                    <img
                      className='image'
                      src='/images/web_developer_isometric.svg'
                    />
                    <div className='shadow-custom'>
                      <div className='shadow-inner'> </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md='6' className='hero-welcome-wrapper'>
              <div className='hero-welcome-text'>
                <h1>
                  Hey!
                  <br />
                  Nice to meet you. My name is Ferruccio Bentio and this is my
                  Portfolio and Blog website. Have a look at my Projects and
                  Blogposts.
                </h1>
              </div>
              <Typed
                loop
                typeSpeed={70}
                backSpeed={70}
                strings={ROLES}
                backDelay={1000}
                loopCount={0}
                showCursor
                className='self-typed'
                cursorChar='|'
              />
              <div className='hero-welcome-bio'>
                <h1>Let's take a look on my work.</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </BaseLayout>
  )
}

export default Index
