import React, { useRef } from "react";

function Url({ displayBtm, short }) {
  const a = useRef(null);
  const copy = () => {
    navigator.clipboard.writeText(short.Short_url);
    document.getElementById("message").style.display = "block";
    setTimeout(() => {
      document.getElementById("message").style.display = "none";
    }, 4000);
  };
  return (
    <>
      <div className="Url_link">
        <p>
          <span>Short-Url :</span>
          <a href={short.Full_url} target="_blank">
            <span ref={a}>{short.Short_url}</span>
          </a>
        </p>
        {displayBtm === true ? (
          <>
            {/* <button >Copy Url</button> */}
            <img
              onClick={copy}
              width="20px"
              height="20px"
              src="https://th.bing.com/th/id/R.b6aade64a212dbc7402f98547272c35f?rik=hc4xKdhOFnyeAg&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_247397.png&ehk=2eXjfoMo6ME2MrhQRdXdtE5AA2ptVKGUlKYTO0A4Sdo%3d&risl=&pid=ImgRaw&r=0"
              alt=""
            />
          </>
        ) : (
          <></>
        )}
      </div>
      <span id="message">Link copied !!</span>
    </>
  );
}

export default Url;
