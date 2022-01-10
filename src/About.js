import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

export default class About extends Component {
  render() {
    return (
      <Container>
        <Row className="bg-dark py-5 my-5">
          <Col className="px-0">
            <div
              className="text-white d-flex flex-column justify-content-center align-items-center"
              style={{ position: "relative", letterSpacing: '2px' }}
            >
              <div className='d-flex justify-content-center align-items-center' style={{ width: "100%", height: "300px" }}>
                <div
                  className="rounded-circle around"
                  id="logoDeg"
                  style={{
                    background: 'url("./logo512.png") center center no-repeat',
                    backgroundSize: "cover",
                    width: "100px",
                    height: "100px",
                    border: '1px solid #61DAFB',
                  }}
                />
                <span id="a1" className="rounded-circle around"></span>
                <span id="a2" className="rounded-circle around"></span>
                <span id="a3" className="around"></span>
              </div>

              <h5>Dr. Jack Anderson</h5>
              <small className="text-secondary">Dr. Jack Anderson</small>
            </div>

            <div
              className="text-white p-5"
              id="extra"
              style={{ letterSpacing: "1px", textAlign: "justify" }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae distinctio dolorum cum reiciendis repudiandae vitae
              praesentium temporibus magnam ut exercitationem, molestiae odit,
              natus dolores omnis ratione in minima! Consectetur nobis
              laudantium vitae sapiente reprehenderit sit. Voluptatum corporis
              laudantium reprehenderit, porro voluptate quis blanditiis ea
              facilis, ab nostrum nam laboriosam quos? Consectetur corrupti
              facilis beatae numquam mollitia exercitationem repudiandae
              temporibus veniam accusantium deleniti quibusdam aspernatur
              commodi, eum esse quae culpa! Cupiditate nam obcaecati quis ipsam
              magnam recusandae sapiente mollitia corporis nemo rem inventore
              odit iure et perferendis veniam similique dolorum maxime omnis
              explicabo, hic adipisci natus architecto quasi porro. Harum neque
              aliquam beatae ipsa praesentium, itaque ratione velit nulla
              temporibus accusantium veniam sequi repudiandae nemo iste est
              doloremque provident architecto repellat ab impedit magni, atque
              tempora nobis. Maiores nobis quod ipsa aperiam dolore natus
              blanditiis architecto consequuntur. Praesentium iste delectus sit,
              id quaerat quibusdam quod soluta tempora ratione, repellendus
              omnis doloremque consectetur non, cupiditate incidunt. Enim
              maiores alias inventore molestias consequuntur dolor quam pariatur
              sunt, nam, saepe dignissimos iusto maxime itaque, nesciunt ducimus
              quasi! Doloribus explicabo ad iure enim quia necessitatibus. Cum
              doloremque voluptate natus? Tempora, eligendi. Esse tempore ab
              laudantium, corrupti ipsam repellat doloremque a, quibusdam
              explicabo animi deserunt maxime dolore aliquid temporibus
              necessitatibus cum voluptatem voluptates maiores pariatur
              architecto rerum. Dicta nesciunt sit, voluptas modi amet quas
              officiis dolore exercitationem cupiditate nobis accusantium porro
              rem velit sapiente quasi dolorum earum dolor. Dicta quae incidunt
              aperiam eligendi voluptate fugit quibusdam sunt, odio officiis
              amet dolores, quo quas ex! Cupiditate, atque?
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
