import React from "react";
import pytmImage from "../Image/pytm.png";
import Reward from "../Image/Reward.png";
import Ajio from "../Image/Ajio.png";
import Sony from "../Image/Sony.png";

function Details() {
  return (
    <div>
      <div className="Number">
        <h4>Share your number to ensure this is the right card for you!</h4>
        <input type="number" placeholder="Enter your mobile" />
      </div>
      <button>Submit</button>
      <div className="Vouture">
        <div>
          <img
            src={pytmImage}
            alt="Description of your card image"
            width={"30%"}
          />
          <div>
            <img
              src={Reward}
              alt="Description of your card image"
              width={"30%"}
            />
            <div>
              <img
                src={Ajio}
                alt="Description of your card image"
                width={"30%"}
              />
              <div>
                <img
                  src={Sony}
                  alt="Description of your card image"
                  width={"30%"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
