import React from "react";

const SignGen = ({ details }) => {
  return (
    <table className="signGenContainer">
      <tr className="tableRowContianer">
        <td className="tableDataContianer">
          <img
            className="logoContianer"
            src="https://lh3.googleusercontent.com/d/1JcWIFWsPzGXJwsdGnoDDs9036xXla_QJ"
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
              src="https://lh3.googleusercontent.com/d/1crOQVnX7DI2F5KDwFoVRh6qohlDN9H14"
              alt="Logo"
            />
          </div>
          <div>
            <img
              className="imageContainer"
              src="https://lh3.googleusercontent.com/d/1X_tJsV5MkX0Q-FawgjbS3vvxY1K6ECEg"
              alt="Logo"
            />
          </div>
          <div className="linksContainer">
            <a href="https://twitter.com/bim_ventures">
              <img
                className="linkImg"
                src="https://lh3.googleusercontent.com/fife/AAbDypBCPxKiyJ5E4tYvz6T8ZtPQdNVQB_Z5rXUE6VtEo8QI5mnoAAY5-cAKxSY4GHpPjwB7AGLjgsP_EISBRFIyX9Onwz3RUHNLCdEhkPfIJTI5lrNrJwlcZjxdn4POxzK63d1plv_X7jdIo8oU2TI5xCAbZar_6NGEkDhgbOXtOls-7IrcjdO_FXwZMgPHY4I8iaxc_yPs1AxeRPnjDE0lgAegJCmUA1kjCIX8Ic-VfJmbcXz-b5nc-7YM65Au_uPILK5S17D7bVWPl7JTGkI76kLlqGPIta3eploDdi5-R2tl_nlgb44jTMqQE-YOdb7zNOXUnuzwjA9mEtBw2tqOVUQ6a00b-B1II9BLzBsYIX77c2DhJeDoCZ4y2QaLTbASCEVXyyuclgn9ucNq-34V_TJvj3HlQN42FW2T5O6xyfjmM2bUEaydtQCePVOS1M28y01aLJO6aG1GBeNYlaSFuWWKxupBDjx8s-nsIbLFd7RPK-MBETh4BYLf4XiPac3cCDDtEBFweKpmha7tHbEVe44H_rzd8wEa4LgwLZYJqfOo0GuqjuyxWpB7mMO-AULHjCBFL4QfpIulPy1HRQMcHr0gqALEUZhuR4FFGq9u6r2GDJy-tuQJ4RHVzDZm6HaL12wi-NvKbFICHUefb2sgZHmUXNTnp2X_5Qtswd7OBS3OBeYyxBPBPpMBoqJ1YzPr2R0DyDMbQQT7U1PkLFJ6kG-DJ-AQIgbJtLI8mj04wM6KY4TpU9Oe_SOeuYtivjKCCh6qpVH6EawSa_6dHIB7gVoGenXO8CNkotzy9f--ovuDRR9HwZR4XqwE8pswXp-UEndQHBlMsAENuOYwrKHiO-fMpyCMaQthQyle-6vMsHKkvL_YXjnU9hPgip6uJulGM8Dlo3vrKXm8aGGloU_qcrINkxj0f64zl0wYFG8UoVakF3OA7X3bMaq0GYg-P_MjkbhVzLgmd-mq3AG65E9OsnI-AU5cwnPTBBCqj0UcvyWbLjiBskebNC_Un7VeWYKPxEJ62V4FYIrT0MxS6frBAj7MGGZbVE9DxH3Q8DqOfcROKRPn1ENXWEpQe5tZADuq4uHYBhwusNNNFaZ8dLZWD6Z7USvimV3fmBFpWWR0u4a0DAMJhvbH8NtabK2pRTReI5VQieZh5xbUsnkROeGv8rAVdfujGS2kedG-U7N6yNpBJFPTAO8UotvGrAKLB3885QbnokdecmOflAbKsolWj_qPs3w90W9K0r7Gp5xcUdPmtu4n9N-9btNrOf8cgGZRar8ckuAJYQ=w1920-h872"
                alt="Logo"
              />
            </a>
            <div className="spacer"></div>
            <a href="https://bimventures.com/">
              <img
                className="linkImg"
                src="https://lh3.googleusercontent.com/d/1XUK0C5FcxfYvY6m7I039eGGSsIXFKGdi"
                alt="Logo"
              />
            </a>
            <div className="spacer"></div>

            <a href="https://www.linkedin.com/company/bimventures">
              <img
                className="linkImg"
                src="https://lh3.googleusercontent.com/d/12AuaNF-D4ULSGQ1bAlQfN6FfzlerwFs8"
                alt="Logo"
              />
            </a>
          </div>
        </td>
      </tr>
    </table>
  );
};

export default SignGen;
