function MediaPartner() {
    return (
        <div className="mediaPartners">
            <div className="row justify-content-end">
                <div className="col-xl-6 col-lg-6 col-md-5 col-sm-12 d-flex justify-content-end align-items-center">
                    <div className="mediaPartner">
                        <h1 style={{ color: "black" }}>Partners</h1>
                        <p className="main" style={{ color: "black" }}>Media <br />Partners</p>
                        <p className="sub" style={{ color: "black", opacity: "0.7" }}>Find us across the digital<br /> spectrum, check us out, feel the<br /> pulse of the BlockEx project.</p>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-7 col-sm-12 d-flex justify-content-center align-items-center">
                    {/* <div className="d-flex justify-content-center">
                        <div className="">
                            <div className="borderBox px-5 py-1 p-md-5" >
                                <img src="/assets/logo/blockex-final.svg" width="200" />
                            </div>

                        </div>
                    </div> */}
                    <div className="d-flex">
                        <div>
                            {/* <div className="borderBox">
                                <img src="/assets/images/media/1.png" width="200" />
                            </div> */}
                            <div className="borderBox">
                                <img src="/assets/images/media/8.png" width="200" alt="" />
                            </div>
                            <div className="borderBox">
                                <img src="/assets/images/media/3.png" width="200" alt="" />
                            </div>

                        </div>
                        <div className="">
                            <div className="borderBox">
                                <img src="/assets/images/media/4.png" width="200" alt="" />
                            </div>
                            <div className="borderBox">
                                <img src="/assets/images/media/5.png" width="200" alt="" />
                            </div>
                            {/* <div className="borderBox">
                                <img src="/assets/images/media/5.png" width="200" />
                            </div> */}
                            {/* <div className="borderBox">
                                <img src="/assets/images/media/6.png" width="200" />
                            </div> */}
                            {/* <div className="borderBox">
                                <img src="/assets/images/media/7.png" width="200" />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MediaPartner