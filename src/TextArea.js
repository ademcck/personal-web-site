import React, { Component } from "react";
import { Button, Col, Container, Row, Table } from "reactstrap";

export default class TextArea extends Component {
  state = {
    // Timer Function ~~~~~~~~~~~~~~~~~~~
    interval: null,
    oldContent: "",
    message: [],
    newWordsList: [],
    wrongWords: [],
    rightWords: [],
    timeNow: 60,
    statusTimer: true,
    word: "",
    count: 0,
    counter: 0,
    counter2: 0,
    scrollWords: 1,
    spaceSt: false,
  };
  restartState = () => {
    this.setState({ oldContent: "" });
    this.setState({ message: [] });
    this.setState({ newWordsList: [] });
    this.setState({ wrongWords: [] });
    this.setState({ rightWords: [] });
    this.setState({ timeNow: 60 });
    this.setState({ statusTimer: true });
    this.setState({ word: "" });
    this.setState({ count: 0 });
    this.setState({ counter: 0 });
    this.setState({ counter2: 0 });
    this.setState({ scrollWords: 1 });
    this.setState({ spaceSt: false });
    clearInterval(this.state.interval);
  };
  componentDidMount() {
    this.getContent();
    //this.listener();
  }
  restartButton() {
    return (
      <Button className="btn btn-warning px-4" onClick={() => this.restart()}>
        RESTART
      </Button>
    );
  }
  restart = () => {
    this.restartState();
    document.getElementById("floatingTextarea").innerHTML = "";
    this.getContent();
    this.setState({ scrollWords: 0 });
    document.getElementById("summaryText").innerHTML = "";
    document.getElementById("summaryTitle").innerHTML = "awaiting";
    document.getElementById("results").style.display = "none";
    document.getElementById("time").innerHTML = "01:00";
    document.getElementById("textInput").removeAttribute("disabled");
  };
  getContent = () => {
    fetch("http://localhost:3000/text?id=1")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ oldContent: data.t });
        this.contentParser();
      });
    fetch("http://localhost:3000/scoreSummary")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ message: data[0] });
      });
  };
  controller = () => {
    document.getElementById("floatingTextarea").innerHTML = "";
    if (this.state.word !== this.state.newWordsList[this.state.counter2]) {
      let list = this.state.oldContent.split(" ");
      list.forEach((word) => {
        if (this.state.counter2 === this.state.count) {
          document.getElementById(
            "floatingTextarea"
          ).innerHTML += `<span class='text-danger'>${word}</span> `;
          this.state.wrongWords.push(this.state.counter2);
          this.counter2 = this.state.count;
        } else if (this.state.counter2 + 1 === this.state.count) {
          document.getElementById(
            "floatingTextarea"
          ).innerHTML += `<span class='text-warning'>${word}</span> `;
          this.counter2 = this.state.count;
        } else {
          let stateWord;
          this.state.wrongWords.forEach((num) => {
            if (this.state.count === num) {
              document.getElementById(
                "floatingTextarea"
              ).innerHTML += `<span class='text-danger'>${word}</span> `;

              stateWord = true;
            }
          });
          this.state.rightWords.forEach((num) => {
            if (this.state.count === num) {
              document.getElementById(
                "floatingTextarea"
              ).innerHTML += `<span class='text-success'>${word}</span> `;

              stateWord = true;
            }
          });
          if (stateWord != true) {
            document.getElementById("floatingTextarea").innerHTML += word + " ";
          }
        }
        this.state.count++;
      });
      this.setState({ count: 0 });
      this.state.counter2++;
    } else {
      let list = this.state.oldContent.split(" ");

      list.forEach((word) => {
        if (this.state.counter2 === this.state.count) {
          document.getElementById(
            "floatingTextarea"
          ).innerHTML += `<span class='text-success'>${word}</span> `;
          this.state.rightWords.push(this.state.counter2);
          this.counter2 = this.state.count;
        } else if (this.state.counter2 + 1 === this.state.count) {
          document.getElementById(
            "floatingTextarea"
          ).innerHTML += `<span class='text-warning'>${word}</span> `;
          this.counter2 = this.state.count;
        } else {
          let stateWord;
          this.state.wrongWords.forEach((num) => {
            if (this.state.count === num) {
              document.getElementById(
                "floatingTextarea"
              ).innerHTML += `<span class='text-danger'>${word}</span> `;

              stateWord = true;
            }
          });
          this.state.rightWords.forEach((num) => {
            if (this.state.count === num) {
              document.getElementById(
                "floatingTextarea"
              ).innerHTML += `<span class='text-success'>${word}</span> `;

              stateWord = true;
            }
          });
          if (stateWord != true) {
            document.getElementById("floatingTextarea").innerHTML += word + " ";
          }
        }
        this.state.count++;
      });
      this.state.counter2++;
      this.setState({ count: 0 });
    }
  };
  // Get Function ~~~~~~~~~~~~~~~~~~~~
  getNewWord = (e) => {
    
    if (this.state.statusTimer) {
      this.setState({ interval: setInterval(this.timmerFunction, 1000) });
      this.state.statusTimer = false;
    }
    if (e.key.trim() !== "") {
      this.state.word = document.getElementById("textInput").value.trim();
      this.setState({ spaceSt: true });
    } else {
      if (this.state.spaceSt) {
        if (this.state.scrollWords % 30 === 0){
          document.getElementById('floatingTextarea').scrollTop += 30;
        }
        document.getElementById("textInput").value = "";
        let size = this.state.scrollWords + 1;
        this.setState({ scrollWords: size });
        this.controller();
        this.setState({ spaceSt: false });
      } else {
        document.getElementById("textInput").value = "";
        this.setState({ spaceSt: false });
        return;
      }
    }
  };
  timmerFunction = () => {
    if (this.state.timeNow === 1) {
      document.getElementById("time").innerText = "00:00";
      document.getElementById("textInput").value = "";
      document.getElementById("textInput").setAttribute("disabled", true);
      document.getElementById("textInput").placeholder = "Time End";
      this.result();
      clearInterval(this.state.interval);
    } else {
      this.setState({ timeNow: this.state.timeNow - 1 });
      if (this.state.timeNow.toString().length < 2) {
        document.getElementById("time").innerText = "00:0" + this.state.timeNow;
      } else {
        document.getElementById("time").innerText = "00:" + this.state.timeNow;
      }
    }
  };

  result = () => {
    document.getElementById("resultTable").style.display = "block";
    this.summary();
  };
  // Parser Function ~~~~~~~~~~~~~~~~~~~~
  contentParser = (state = "warning") => {
    let list = this.state.oldContent.split(" ");
    list.forEach((word) => {
      if (this.state.count === this.state.counter) {
        document.getElementById(
          "floatingTextarea"
        ).innerHTML += `<span class='text-${state}'>${word}</span> `;

        this.counter2 = this.state.count;
      } else {
        document.getElementById("floatingTextarea").innerHTML += word + " ";
      }
      this.state.count++;
    });
    this.setState({ count: 0, newWordsList: list });
  };

  // Summary ~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  summary = () => {
    let score = this.state.rightWords.length;
    let result;
    if (score <= 15) {
      result = this.state.message.l1;
    } else if (score <= 25) {
      result = this.state.message.l2;
    } else if (score <= 35) {
      result = this.state.message.l3;
    } else if (score <= 55) {
      result = this.state.message.l4;
    } else {
      result = this.state.message.l5;
    }
    document.getElementById("results").style.display = "block";
    document.getElementById("summaryTitle").innerHTML = "SUMMARY";
    document.getElementById("summaryText").innerHTML += result;
  };

  resultRender() {
    return (
      <Table
        className="text-white"
        id="resultTable"
        style={{ display: "none" }}
      >
        <thead>
          <tr>
            <th className="text-info">Right Words</th>
            <th className="text-info">Wrong Words</th>
            <th className="text-info">Total Time</th>
            <th className="text-info">Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="text-success">{this.state.rightWords.length}</th>
            <th className="text-danger">{this.state.wrongWords.length}</th>
            <th className="text-white">1 min</th>
            <th className="text-white">
              {this.state.newWordsList.length / this.state.rightWords.length}
            </th>
          </tr>
        </tbody>
      </Table>
    );
  }
  render() {
    return (
      <Container>
        <Row className="bg-dark py-5 my-5 justify-content-center">
          <Col xs="8">
            <div className="py-2 d-flex justify-content-between">
              {this.restartButton()}
              <div
                id="time"
                className="border border-info rounded-pill p-2 px-3 text-white"
                style={{ fontSize: "24px", maxWidth: "100px" }}
              >
                01:00
              </div>
            </div>
            <div className="form-floating">
              <div
                className="form-control bg-transparent border-white text-white"
                id="floatingTextarea"
                style={{
                  height: "200px",
                  overflowY: "auto",
                  textAlign: "justify",
                }}
              ></div>
            </div>
            <input
              className="mt-5 text-center bg-transparent border border-white text-white py-2 rounded-pill"
              type="text"
              id="textInput"
              placeholder="Enter the text above.."
              autoComplete="off"
              onKeyUp={(e) => this.getNewWord(e)}
              style={{ width: "100%", fontSize: "24px" }}
            />
            <div className="form-floating mt-3">
              <div
                className="form-control bg-transparent border-0 d-flex justify-content-between"
                id="divTextarea"
                style={{ width: "100%", height: "100%" }}
              >
                <div id="results">
                  {this.resultRender()}
                </div>
                <div
                  className="text-center text-white border-start border-end"
                  id="summary"
                  style={{
                    width: "100%",
                    letterSpacing: "1px",
                    fontWeight: "700",
                    textAlign: "justify",
                  }}
                >
                  <h3
                    className="text-success"
                    id="summaryTitle"
                    style={{ letterSpacing: "1px", fontWeight: "700" }}
                  >
                    awaiting
                  </h3>
                  <div
                    className="text-center text-white"
                    id="summaryText"
                    style={{
                      width: "100%",
                      letterSpacing: "1px",
                      fontWeight: "700",
                      textAlign: "justify",
                    }}
                  />
                </div>
              </div>
              <label className="text-info">RESULT</label>
            </div>
          </Col>
        </Row>
        <Row className="bg-dark py-5 my-5">
          <div
            className="text-white"
            id="extra"
            style={{ letterSpacing: "1px", textAlign: "justify" }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            distinctio dolorum cum reiciendis repudiandae vitae praesentium
            temporibus magnam ut exercitationem, molestiae odit, natus dolores
            omnis ratione in minima! Consectetur nobis laudantium vitae sapiente
            reprehenderit sit. Voluptatum corporis laudantium reprehenderit,
            porro voluptate quis blanditiis ea facilis, ab nostrum nam
            laboriosam quos? Consectetur corrupti facilis beatae numquam
            mollitia exercitationem repudiandae temporibus veniam accusantium
            deleniti quibusdam aspernatur commodi, eum esse quae culpa!
            Cupiditate nam obcaecati quis ipsam magnam recusandae sapiente
            mollitia corporis nemo rem inventore odit iure et perferendis veniam
            similique dolorum maxime omnis explicabo, hic adipisci natus
            architecto quasi porro. Harum neque aliquam beatae ipsa praesentium,
            itaque ratione velit nulla temporibus accusantium veniam sequi
            repudiandae nemo iste est doloremque provident architecto repellat
            ab impedit magni, atque tempora nobis. Maiores nobis quod ipsa
            aperiam dolore natus blanditiis architecto consequuntur. Praesentium
            iste delectus sit, id quaerat quibusdam quod soluta tempora ratione,
            repellendus omnis doloremque consectetur non, cupiditate incidunt.
            Enim maiores alias inventore molestias consequuntur dolor quam
            pariatur sunt, nam, saepe dignissimos iusto maxime itaque, nesciunt
            ducimus quasi! Doloribus explicabo ad iure enim quia necessitatibus.
            Cum doloremque voluptate natus? Tempora, eligendi. Esse tempore ab
            laudantium, corrupti ipsam repellat doloremque a, quibusdam
            explicabo animi deserunt maxime dolore aliquid temporibus
            necessitatibus cum voluptatem voluptates maiores pariatur architecto
            rerum. Dicta nesciunt sit, voluptas modi amet quas officiis dolore
            exercitationem cupiditate nobis accusantium porro rem velit sapiente
            quasi dolorum earum dolor. Dicta quae incidunt aperiam eligendi
            voluptate fugit quibusdam sunt, odio officiis amet dolores, quo quas
            ex! Cupiditate, atque?
          </div>
        </Row>
      </Container>
    );
  }
}
