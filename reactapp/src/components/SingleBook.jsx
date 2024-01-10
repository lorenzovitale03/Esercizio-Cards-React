import { Card,Button } from "react-bootstrap"

const SingleCard = ({book}) => {
    return(
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
    )
}

export default SingleCard 