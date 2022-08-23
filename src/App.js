import { useState } from 'react'
import { Container, Navbar, Row, Col } from 'react-bootstrap'
import AddBook from './components/AddBook'
import BooksList from './components/BooksList'
import './index.css'

function App() {
  const [annId, setAnnId] = useState('')

  const getAnnIdHandler = (id) => {
    console.log('Id of doc to be edited:', id)
    setAnnId(id)
  }

  return (
    <>
      <Navbar bg='dark' variant='dark' className='header'>
        <Container>
          <Navbar.Brand href='#home'>Library - Firebase CRUD</Navbar.Brand>
        </Container>
      </Navbar>

      <Container style={{ width: '400px' }}>
        <Row>
          <Col>
            <AddBook id={annId} setAnnId={setAnnId} />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <BooksList getAnnId={getAnnIdHandler} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
