import React from "react";

const PerSale = () => {
  return (
    <>
      <div className="outli" style={{}}>
        PRE-SALE
      </div>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-12">
            <h1 className="bloackChain_h1">Ground-Breaking Crypto</h1>
            <p className="bloclChain_p2">
              Thank you to our early believers! The initial token offering (ITO){" "}
              <br />
              has officially closed. Now, we’re preparing for official listing,{" "}
              <br />
              platform launch, and unlocking full $XBE utility.
            </p>
            {/* <h1 className="bloackChain_h1" style={{ color: "#00F0FF" }}>
                            $500,000 Raised
                        </h1> */}
            <div className="text-center">
              <video
                src="/assets/images/Loop_Animation-2.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="img-fluid text-center"
                width={366} // optional Bootstrap styling
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PerSale;
