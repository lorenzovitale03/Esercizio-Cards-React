import scifi from '../../json/scifi.json'
import { Card,Button } from 'react-bootstrap';
import { useState } from 'react';
import SingleBook from './SingleBook';


const AllTheBooks = () => {
  const [list, setList] = useState(scifi);
  const [ricerca,setRicerca] = useState("");
  

  return (
    <>
      <input type="text" value={ricerca} onChange={(e) => setRicerca(e.target.value)}/>
      {list.map((book) =>
      <SingleBook book={book} key={book.asin}/>
        /*<Card style={{width: '18rem'}}key={book.asin}>
          <Card.Img variant="top" src={book.img} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>
              {book.asin}
            </Card.Text>
            <Button variant="primary">{book.price}</Button>
          </Card.Body>
        </Card>*/
      )}
    </>
  )
};

export default AllTheBooks
