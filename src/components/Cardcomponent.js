import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cardcomponent({items}) {
  return (
    <div>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={items.Poster} alt={items.Title} />
        <Card.Body>
            <Card.Title>{items.Title}</Card.Title>
            <Card.Text>
              IMDB ID = {items.imdbID}
            </Card.Text>
            {/* <Button variant="primary">{items.imdbID}</Button> */}
        </Card.Body>
        </Card>
    </div>
  );
}

export default Cardcomponent;