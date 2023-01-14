import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import vanya from '../svg/vanya.jpg';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Body = () => {
  return (
    <Container>
      <div>
        <Row>
          <Col xs={6} md={4}>
            <Card className="avatar">
              <Card.Img className="avatarImg" variant="top p-1" src={vanya} />
            </Card>
          </Col>

          <Col xs={12} md={8}>
            <Card className="text" bg="dark" text="white">
              <Card.Header>John Autumn</Card.Header>
              <Card.Body>
                <Card.Title>Full-stack developer</Card.Title>
                <Card.Text>
                  Дата рождения: 110010 110010 101110 110000 110110 101110
                  110001 111001 110000 110000
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Button
          className="add"
          variant="primary rounded-5"
          size="lg"
          href="https://vk.com/john_autumn"
        >
          Добавить в друзья
        </Button>
      </div>
      <hr />
    </Container>
  );
};

export { Body };
