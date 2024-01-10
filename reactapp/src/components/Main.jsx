import { Container,Row } from "react-bootstrap"
import JumboTron from "./JumboTron"
import AllTheBooks from "./AllTheBooks"

const Main = () => {
    return (
        <Container style={{ minHeight: "88vh" }}>
            <Row>
                <JumboTron />
            </Row>
            <Row>
                <AllTheBooks />
            </Row>
        </Container>
    )
}

export default Main