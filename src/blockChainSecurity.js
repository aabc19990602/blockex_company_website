function BlockChainSecurity() {
    return (
        <section className="blockChainSecurity">
            <div className="topView"></div>

            <div className="outli">Ecosystem</div>
            <p className="bloackChain_p1">BlockEx Ecosystem</p>
            <h1 className="bloackChain_h1">Security. Decentralized. Reinvented.</h1>
            <p className="bloclChain_p2">
                From zero-knowledge protocols to real-time threat mitigation, BlockEx embeds <br />
                advanced cryptographic defense into its DNA. Our ecosystem thrives on verified trust,<br />
                layered defense, and a community that codes security into the future.
            </p>

            <div className="container">
                <div className="row justify-content-center">
                    {/* Live Card */}
                    <div className="col-xl-3 col-lg-5 col-md-5 col-sm-8">
                        <a href="https://exchangeblockex.com/" target="_blank" className="eco_card_a">
                            <div className="blockChain_box card">
                                <div className="text-center">
                                    <img
                                        src="/assets/images/BlockEx_echange.jpg"
                                        alt=""
                                        className="rounded"
                                        style={{ width: "100%", height: "auto", objectFit: "contain" }}
                                    />
                                </div>
                                <div>
                                    <h1 style={{ fontSize: "20px", color: "#00F0FF" }} className="px-3 mt-4 fw-bold">
                                        BlockEx Exchange{" "}
                                        <span style={{ background: "green", fontSize: "12px", color: "white" }} className="px-2 py-1 rounded">
                                            Live
                                        </span>
                                    </h1>
                                    <p className="mt-2 px-3 text-white">World Best Secure Crypto Exchange</p>
                                </div>
                            </div>
                        </a>
                    </div>

                    {/* Coming Soon Cards */}
                    {[
                        {
                            title: "BlockEx Staking App",
                            description: "Allows users to stake their XBE coins and earn",
                            image: "/assets/images/Staking_app.jpg",
                        },
                        {
                            title: "Decentralized Exchange",
                            description: "Exchange ensures the security of your funds while providing a seamless trading experience",
                            image: "/assets/images/Decentralized_Exchange_banner.jpg",
                        },
                        {
                            title: "Crypto Master Card",
                            description: "Unlock the Future: Spend Anywhere with Master Crypto Card.",
                            image: "/assets/images/crypto_card.jpg",
                        },
                    ].map((card, index) => (
                        <div key={index} className="col-xl-3 col-lg-5 col-md-5 col-sm-7">
                            <div className="blockChain_box card coming-soon-hover">
                                {/* Hover Overlay */}
                                <div className="overlay">Coming Soon</div>

                                <div className="text-center">
                                    <img
                                        src={card.image}
                                        className="rounded"
                                        alt=""
                                        style={{ width: "100%", height: "auto", objectFit: "contain" }}
                                    />
                                </div>
                                <div>
                                    <h1 style={{ fontSize: "20px", color: "#00F0FF" }} className="px-3 mt-4 fw-bold">
                                        {card.title}
                                    </h1>
                                    <p className="mt-2 px-3 text-white">{card.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bottomView"></div>
        </section>
    );
}

export default BlockChainSecurity;
