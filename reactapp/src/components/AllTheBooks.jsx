import scifi from '../../json/scifi.json'
import { Card,Button } from 'react-bootstrap';
import { useState } from 'react';


const AllTheBooks = () => {
  const [list, setList] = useState(scifi);

  return (
    <>
      {list.map((book) =>
        <Card style={{width: '18rem'}}key={book.asin}>
          <Card.Img variant="top" src={book.img} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>
              {book.asin}
            </Card.Text>
            <Button variant="primary">{book.price}</Button>
          </Card.Body>
        </Card>
      )}
    </>
  )
};

export default AllTheBooks
