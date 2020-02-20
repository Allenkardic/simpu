/** @format */

import React from "react";
import "./App.css";
import IMG from "./images/img.jpg";

function App() {
  return (
    <div className="App">
      <div className="Rectangle">
        <div className="Rectangle-items">
          <div className="logo">
            <i class="far fa-eye" />
            <span>Simpu</span>
          </div>
        </div>
        <div className="Rectangle-items">
          <span className="Oval">S</span>
          <span className="Organisation-Name">Organisation Name</span>
          <span>
            <i className="fas fa-chevron-down  icon-color" />
          </span>
        </div>
      </div>

      <div className="conversation-box">
        {/* first part */}
        <div className="conversation-box-items">
          <div className="sidebar">
            <i className="far fa-eye image-sidebar" />
            <i className="far fa-eye image-sidebar" />
            <i className="far fa-eye image-sidebar" />
            <i className="far fa-eye image-sidebar" />
          </div>
        </div>

        <div className="conversation-box-items">
          {/* first part */}
          <div className="conversation">Conversation</div>

          {/* second part */}
          <div className="card-one">
            {/* one */}
            <div className="card-one-items">
              <div className="one-itemss open">Open</div>
              <div className="one-itemss">Archived</div>
              <div className="one-itemss">Snoozed</div>
              <div className="one-itemss">Trash</div>
            </div>

            {/* two */}
            <div className="card-one-items">
              <div className="card-one-items-two-content item-four">
                <i className="far fa-clock clock item-four" />
                <i className="far fa-trash-alt delete item-four" />
                <i className="far fa-trash-alt delete item-four" />
                <i className="fas fa-ellipsis-h dot item-four" />
              </div>

              <div className="card-one-items-two-content">
                <img src={IMG} alt="imagee" className="img-top" />
                <img src={IMG} alt="imagee" className="img-top" />
                <img src={IMG} alt="imagee" className="img-top" />
                <span className="assign">Assign</span>
                <i className="far fa-user-circle " />
              </div>
            </div>
          </div>

          {/* third card */}
          <div className="card-two">
            {/* third first child */}
            <div className="card-two-items">
              <div className="card-two-items-one-content">
                <div className="two-content-ss">
                  <i className="fab fa-twitter social-icon twi" />
                </div>
                <div className="two-content">
                  <div className="reeds">Zarela Read </div>
                  <div className="used-electronic-test">
                    Used Electronic Equipment Not wor...{" "}
                  </div>
                  <div className="hello-guys">
                    hello guys i have been unavailable to make use of{" "}
                  </div>
                </div>
                <div className="two-content">
                  <div className="oval-two">2</div>
                </div>
              </div>

              {/* ////// */}
              <div className="card-two-items-one-content">
                <div className="two-content-ss">
                  <i className="far fa-eye social-icon mess" />
                </div>
                <div className="two-content">
                  <div className="reeds">Ava Gregoraci </div>
                  <div className="used-electronic-test">
                    Used Electronic Equipment Not wor...{" "}
                  </div>
                  <div className="hello-guys">
                    hello guys i have been unavailable to make use of{" "}
                  </div>
                </div>
                <div className="two-content">
                  <div className="hrs">23hrs</div>
                  <i className="fas fa-paperclip attachment" />
                </div>
              </div>

              {/* //// */}
              <div className="card-two-items-one-content">
                <div className="two-content-ss">
                  <i className="far fa-eye social-icon tele" />
                </div>
                <div className="two-content">
                  <div className="reeds">Iruka Akuchi </div>
                  <div className="used-electronic-test">
                    Used Electronic Equipment Not wor...{" "}
                  </div>
                  <div className="hello-guys">
                    hello guys i have been unavailable to make use of{" "}
                  </div>
                </div>
                <div className="two-content">
                  <div className="hrs">Jan 1</div>
                  <i className="fas fa-paperclip attachment" />
                </div>
              </div>

              {/* //// */}
              <div className="card-two-items-one-content">
                <div className="two-content-ss">
                  <i className="far fa-eye social-icon whatsapp" />
                </div>
                <div className="two-content">
                  <div className="reeds">Iruka Akuchi </div>
                  <div className="used-electronic-test">
                    Used Electronic Equipment Not wor...{" "}
                  </div>
                  <div className="hello-guys">
                    hello guys i have been unavailable to make use of{" "}
                  </div>
                </div>
                <div className="two-content">
                  <div className="hrs">Jan 1</div>
                </div>
              </div>

              {/* //// */}
              <div className="card-two-items-one-content">
                <div className="two-content-ss">
                  <i className="fab fa-apple social-icon apple" />
                </div>
                <div className="two-content">
                  <div className="reeds">Charles Davies </div>
                  <div className="used-electronic-test">
                    Used Electronic Equipment Not wor...{" "}
                  </div>
                  <div className="hello-guys">
                    hello guys i have been unavailable to make use of{" "}
                  </div>
                </div>
                <div className="two-content">
                  <div className="hrs">Jan 1</div>
                </div>
              </div>
            </div>

            {/* second child */}
            <div className="card-two-items">
              <div className="whatsapp-for-business">
                <div>
                  WhatsApp for Business: Dont forget to start your free trial{" "}
                </div>
              </div>

              {/* 1 of 3 */}
              <div className="conversation-main">
                <div className="conversation-items">
                  <div className="conversation-items-content">Zerela Reed</div>
                  <div className="conversation-items-content">
                    {" "}
                    <span>
                      <i className="fas fa-reply replysss" />
                    </span>
                    Reply this conversation
                  </div>
                </div>

                <div className="conversation-items">
                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas voluptates, tempora voluptatum sed libero, cumque
                    natus maxime recusandae dolor perferendis blanditiis animi
                    reprehenderit iure harum fugit! Rerum temporibus voluptas a!
                    kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
                  </div>
                </div>

                <div className="conversation-items">
                  <div className="pm">12.59 PM</div>
                </div>
              </div>

              {/* 2 of 3 */}
              <div className="conversation-main">
                <div className="conversation-items">
                  <div className="conversation-items-content">
                    Collins Iheagwara
                  </div>
                  <div className="conversation-items-content"> </div>
                </div>

                <div className="conversation-items conssss">
                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas voluptates, tempora voluptatum sed libero, cumque
                    natus maxime recusandae dolor perferendis blanditiis animi
                    reprehenderit iure harum fugit! Rerum temporibus voluptas a!
                    kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
                  </div>
                </div>

                <div className="conversation-items">
                  <div>
                    <span className="pm">12.59 PM</span>
                    <span>
                      <i className="fas fa-check-double ticks" />
                    </span>
                  </div>
                </div>
              </div>

              {/* 3 of 3 */}
              <div className="conversation-main">
                <div className="conversation-items ">
                  <div className="conversation-items-content">
                    Collins Iheagwara
                  </div>
                  <div className="conversation-items-content"></div>
                </div>

                <div className="conversation-items conssss">
                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas voluptates, tempora voluptatum sed libero, cumque
                    natus maxime recusandae dolor perferendis blanditiis animi
                    reprehenderit iure harum fugit! Rerum temporibus voluptas a!
                    kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
                  </div>
                </div>

                <div className="conversation-items">
                  <div>
                    <span className="pm">12.59 PM</span>
                    <span>
                      <i className="fas fa-check-double ticks" />
                    </span>
                  </div>
                </div>
              </div>

              {/* input */}
              <div className="text-area">
                <input
                  type="text"
                  className="input-text"
                  placeholder="Type a message..."
                />

                <i className="fas fa-paperclip attachment-big" />
              </div>
            </div>

            {/* third other child */}
            <div className="card-two-items">
              <div className="comment">Comments</div>

              {/* 1 of 5 */}
              <div className="comment-items">
                <div className="comment-items-content">
                  <img src={IMG} alt="imagee" className="img" />
                </div>
                <div className="comment-items-content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  adipisci excepturi quidem.
                </div>
              </div>

              {/* 2 of 5 */}
              <div className="comment-items">
                <div className="comment-items-content">
                  <img src={IMG} alt="imagee" className="img" />
                </div>
                <div className="comment-items-content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  adipisci excepturi quidem.
                </div>
              </div>

              {/* 3 of 5 */}
              <div className="comment-items">
                <div className="comment-items-content">
                  <img src={IMG} alt="imagee" className="img" />
                </div>
                <div className="comment-items-content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  adipisci excepturi quidem.
                </div>
              </div>

              {/* 4 of 5 */}
              <div className="comment-items">
                <div className="comment-items-content">
                  <img src={IMG} alt="imagee" className="img" />
                </div>
                <div className="comment-items-content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  adipisci excepturi quidem
                </div>
              </div>

              {/* 5 of 5 */}
              <div className="comment-items">
                <div className="comment-items-content">
                  <img src={IMG} alt="imagee" className="img" />
                </div>
                <div className="comment-items-content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  adipisci excepturi quidem voluptatibus.
                </div>
              </div>

              {/* chat area */}
              <div className="comment-items chart-section">
                <div className="comment-items-content">
                  <img src={IMG} alt="imagee" className="img" />
                </div>
                <div className="comment-items-content chart-area">
                  <input
                    type="text"
                    placeholder="write your comment"
                    className="chart-comment"
                  />
                  <div className="chart-img">
                    <i className="fas fa-paper-plane send" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
