/** @format */

import React from "react";
import "./App.css";

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
            <div>
              <i class="far fa-eye" />
            </div>
            <div>
              <i class="far fa-eye" />
            </div>
            <div>
              <i class="far fa-eye" />
            </div>
            <div>
              <i class="far fa-eye" />
            </div>
          </div>
        </div>

        {/* second part */}
        <div className="conversation-box-items">
          <div className="conversation">Conversation</div>
          <div className="card-one">
            <div className="card-one-items">
              <div>Open</div>
              <div>Archived</div>
              <div>Snoozed</div>
              <div>Trash</div>
            </div>
            <div className="card-one-items">
              <div className="card-one-items-two-content">
                <i class="far fa-eye" />
                <i class="far fa-eye" />
                <i class="far fa-eye" />
                <i class="far fa-eye" />
              </div>
              <div className="card-one-items-two-content">
                <i class="far fa-eye" />
                <i class="far fa-eye" />
                <i class="far fa-eye" />
              </div>
            </div>
          </div>
          <div className="card-two">
            <div className="card-two-items">
              <div className="card-two-items-one-content">
                <i class="far fa-eye" />
              </div>
              <div className="card-two-items-one-content">hello</div>
            </div>
            <div className="card-two-items">hello two</div>
            <div className="card-two-items">hello three</div>
            <div className="card-two-items">hello three</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
