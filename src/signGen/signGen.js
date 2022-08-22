import React from "react";

const SignGen = ({ details }) => {
  return (
    <table className="signGenContainer">
      <tr className="tableRowContianer">
        <td className="tableDataContianer">
          <img
            className="logoContianer"
            src="https://lh3.googleusercontent.com/d/1ijGrkSvZqB7yShwLdGahLbnNInMxUiXx"
            alt="Logo"
          />
        </td>
        <td>
          <p
            className="name"
            style={{
              color:
                details.department === "BIMSolutions"
                  ? "#7662ED"
                  : details.department === "expertServices"
                  ? "#024DFF"
                  : details.department === "designBureau"
                  ? "#FFC003"
                  : "#00D5FD",
            }}
          >
            {details.fullNameE}{" "}
            {details.fullNameE.trim() && details.fullNameA.trim() && (
              <span className="breaker"> / </span>
            )}
            {details.fullNameA}
          </p>
          <p className="position">
            {details.positionE}
            {details.positionE.trim() && details.positionA.trim() && (
              <span className="breaker"> / </span>
            )}
            {details.positionA}
          </p>
          <p className="phone">
            +966 {details.phoneNumber.slice(0, 2)}{" "}
            {details.phoneNumber.slice(2, 5)} {details.phoneNumber.slice(5, 9)}
          </p>

          <a className="links" href="https://bimventures.com/">
            bimventures.com
          </a>
          <p className="phone">Riyadh, Saudi Arabia</p>
          <div>
            <img
              className="imageContainer"
              src="https://lh3.googleusercontent.com/d/1LGC3qbRC158yjrPeQ_iEUSh___CCFiJz"
              alt="full Logo"
            />
          </div>
          <div>
            <img
              className="imageContainer"
              src="https://lh3.googleusercontent.com/d/1E36h0EPWZEqR5SNk-n5_D6kNvZNcmPDo"
              alt="departments"
            />
          </div>
          <div className="linksContainer">
            <a href="https://twitter.com/bim_ventures">
              <img
                className="linkImg"
                src="https://lh3.googleusercontent.com/d/1Wea_chwiAm68qCZWU5bxbqQ35jhm3evZ"
                alt="twitter"
              />
            </a>
            <div className="spacer"></div>
            <a href="https://bimventures.com/">
              <img
                className="linkImg"
                src="https://lh3.googleusercontent.com/d/1I-9oQwzL8iROuCAe34FH2ikf9KWDTy7O"
                alt="website"
              />
            </a>
            <div className="spacer"></div>

            <a href="https://www.linkedin.com/company/bimventures">
              <img
                className="linkImg"
                src="https://lh3.googleusercontent.com/d/1drW_Xqf061beLPPnh3aqe6hPlrWtIrMf"
                alt="linkedIn"
              />
            </a>
          </div>
        </td>
      </tr>
    </table>
  );
};

export default SignGen;
