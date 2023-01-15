import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import vanya from '../svg/vanya.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Table from 'react-bootstrap/Table';
import vk from '../svg/vk.svg';

const Body = () => {
  return (
    <Container>
      <Row className="cont">
        <Col xs={'auto'} md={5} lg={4} xl={4}>
          <Card className="avatar">
            <Card.Img className="avatarImg" variant="top p-1" src={vanya} />
            <Card.Footer className="border-primary avatarFooter">
              <DropdownButton
                variant="info"
                id="dropdown-basic-button"
                title="Добавить в друзья"
              >
                <Dropdown.Item href="https://vk.com/john_autumn">
                  ВКонтакте
                </Dropdown.Item>
                <Dropdown.Item>Где-то</Dropdown.Item>
                <Dropdown.Item>Нигде</Dropdown.Item>
              </DropdownButton>
            </Card.Footer>
          </Card>
        </Col>

        <Col xs={'auto'} md={7} lg={8} xl={8}>
          <Card className="text" bg="dark" text="white">
            <Card.Header className="border-primary">
              <h5>John Autumn &#9895;</h5>
            </Card.Header>
            <Card.Body>
              <Card.Title>Full-stack developer</Card.Title>
              <Card.Text>
                <b>Место жительства:</b> Night City
                <br />
                <b>Пол:</b> Не определился
                <br />
                <b>Дата рождения:</b> 110010 110010 101110 110000 110110 101110
                110001 111001 110000 110000
              </Card.Text>
            </Card.Body>
          </Card>
          <Table striped bordered hover variant="dark" className="tabl">
            <thead>
              <tr>
                <th colSpan={4}>Любимая музыка</th>
              </tr>
            </thead>
            <thead>
              <tr>
                <th>№</th>
                <th>Исполнитель</th>
                <th>Название композиции</th>
                <th>Год выпуска</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>John Autumn</td>
                <td>Mr.Hover заработал деняк</td>
                <td>1900</td>
              </tr>
              <tr>
                <td>2</td>
                <td>John Autumn</td>
                <td>Приколюня наш любимый браток</td>
                <td>1900</td>
              </tr>
              <tr>
                <td>3</td>
                <td>John Autumn</td>
                <td>McHover пес хулиганский</td>
                <td>1900</td>
              </tr>
              <tr>
                <td>4</td>
                <td>John Autumn</td>
                <td>Пару водников с приколюней на подоконнике</td>
                <td>1900</td>
              </tr>
              <tr>
                <td>5</td>
                <td>John Autumn</td>
                <td>Hover заработал новый мерин</td>
                <td>1900</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      <hr className="end" />
      <div className="vk">
        <a href="https://vk.com/john_autumn">
          <img src={vk} alt="Vanya" />
        </a>
      </div>
    </Container>
  );
};

export { Body };
