import React from "react";
import { IoInformationCircle } from "react-icons/io5";

const Section = ({ title, children }) => (
  <div className="py-3">
    {title && <h3 className="bloackChain_p1 text-start">{title}</h3>}
    {children}
  </div>
);


const RiskComp = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <h1 className="bloackChain_h1 text-start">
          BlockEx Risk Disclosure Statement
        </h1>
        <p className="text-start text-white py-1" style={{ opacity: 0.5 }}>
          Last Updated: 01 November, 2025
        </p>
        <div className="alert alert-info" role="alert">
          <h2 className="fw-bold">
            {" "}
            <IoInformationCircle /> IMPORTANT
          </h2>
          To better safeguard your interests, BlockEx reminds you that trading
          and/or investing in the cryptocurrency market is subject to severe
          risks. By participating in these activities you risk losing ALL OR
          SUBSTANTIALLY ALL OF YOUR ASSETS. Please understand and evaluate the
          risk of trading and assess your risk tolerance carefully before
          conducting any cryptocurrency trading or investment activities.
        </div>
        {/*  */}
        <Section title={"Interpretation"}>
          <ul
            className="pl-6"
            style={{ listStyleType: "upper-alpha", color: "white" }}
          >
            <li className="text-white li-text">
              All terms used in this notice, which are defined in the BlockEx
              User Agreement (the “User Agreement”), shall have the same meaning
              and construction as in the User Agreement.
            </li>
            <li className="text-white li-text">
              This Risk Disclosure Statement (the “Statement”) forms part of the
              Legal Documents and has the same effect thereto.
            </li>
          </ul>
        </Section>
        <Section title={"BlockEx Services"}>
          <ul
            className="pl-6"
            style={{ listStyleType: "upper-alpha", color: "white" }}
          >
            <li className="text-white li-text">
              This Statement provides you with information about the risks
              associated with BlockEx Services. Each BlockEx Service has its own
              distinct risks, which may be separately contained under the
              corresponding Legal Documents. This Statement provides a
              non-exclusive, general disclosure of the risks involved when you
              use BlockEx Services.
            </li>
            <li className="text-white li-text">
              This Statement does not explain all of the risks or how such risks
              relate to your personal circumstances. It is important that you
              fully understand the risks involved before making a decision to
              use BlockEx Services.
            </li>
          </ul>
        </Section>
        <Section title={"No Advice"}>
          <p className="text-white">
            We do not provide advice in relation to our Products or Services. We
            sometimes provide factual information, information about transaction
            procedures and information about potential risks. However, any
            decision to use our Products or Services is made by you. No
            communication or information provided to you by us is intended as,
            or shall be considered or construed as, investment, financial,
            trading, legal, or tax advice. You are solely responsible for
            determining whether any investment, investment strategy or related
            transaction is appropriate for you according to your personal
            investment objectives, financial circumstances and risk tolerance.
          </p>
        </Section>
        <Section title={"No Monitoring"}>
          <p className="text-white">
            BlockEx is not your broker, intermediary, agent, or advisor and has
            no fiduciary relationship or obligation to you in connection with
            any trades or other decisions or activities undertaken by you using
            BlockEx Services. We do not monitor whether your use of BlockEx
            Services is consistent with your financial goals and objectives. It
            is up to you to assess whether your financial resources are adequate
            to engage in financial activity with us, and to determine your risk
            appetite in the Products and Services you use.
          </p>
        </Section>
        <Section title={"No Tax, Regulatory or Legal Advice"}>
          <p className="text-white">
            The taxation of Digital Assets is uncertain and may vary by
            location. You are responsible for determining what taxes you might
            be liable to, and how they apply, when transacting through BlockEx
            Services. It is your responsibility to report and pay any taxes that
            may arise from using BlockEx Services, and you acknowledge that
            BlockEx does not provide legal or tax advice relative to these
            transactions. If you have any doubts about your tax status or
            obligations when using BlockEx Services, or with respect to the
            Digital Assets held in your BlockEx Account, you are encouraged to
            seek independent advice.
          </p>
        </Section>
        <Section title={"Market Risks"}>
          <p className="text-white">
            Digital Asset trading is subject to severe market risk and price
            volatility. Changes in value may be significant and may occur
            rapidly and without warning. Past performance is not an indicator of
            future performance. The value of an investment and any returns can
            go down as well as up. You may not get back the amount you have
            invested, and there is a severe risk of losing all of your assets.
          </p>
        </Section>
        <Section title={"Liquidity Risks"}>
          <p className="text-white">
            Digital Assets may have limited liquidity which may make it
            difficult or impossible for you to sell or exit a position when you
            wish to do so. This may occur at any time, including during rapid
            price movements.
          </p>
        </Section>
        <Section title={"Availability Risks"}>
          <p className="text-white">
            We do not guarantee that BlockEx Services will be available at any
            particular time or that BlockEx Services will not be subject to
            unplanned service outages or network congestion. It may not be
            possible for you to buy, sell, store, transfer, send or receive
            Digital Assets when you wish to do so.
          </p>
          <p className="text-white">
            When a Digital Assets project party faces bankruptcy, liquidation or
            dissolution, or violates national laws and regulations, or upon the
            request of the project party, BlockEx may delist such Digital
            Assets, which may cause losses for Users.
          </p>
          <p className="text-white">
            There are legal requirements in various countries which may restrict
            the Products and Services that BlockEx can lawfully provide.
            Accordingly, some products, services and/or certain functionality of
            the BlockEx Platform may not be available or may be restricted in
            certain jurisdictions or regions or to certain Users, and any
            BlockEx marketing campaign, activities, or other promotions will not
            be open to (and are not targeted at or intended for) Users to whom
            restrictions apply. Users are responsible for informing themselves
            about and observing any restrictions and/or requirements imposed
            with respect to access to and use of the BlockEx Platform and the
            corresponding Services in each jurisdiction from which the Platform
            and the corresponding Services are accessed by or on behalf of the
            User. BlockEx reserves the right to change, modify or impose
            additional restrictions with respect to access to and use of the
            Platform and/or the corresponding Services from time to time in its
            sole discretion without notification.
          </p>
        </Section>
        <Section title={"Third Party Risks"}>
          <p className="text-white">
            Third parties, such as payment providers, custodians, and banking
            partners may be involved in the provision of BlockEx Services. You
            may be subject to the terms and conditions of these third parties.
            BlockEx shall not be held responsible for any loss that these third
            parties may cause to you.
          </p>
        </Section>
        <Section title={"Security Risks"}>
          <p className="text-white">
            It is not possible for BlockEx to eliminate all security risks. You
            are responsible for keeping your BlockEx Account password safe, and
            you may be responsible for all the transactions under your BlockEx
            Account, whether you authorised them or not. Transactions in Digital
            Assets may be irreversible, and losses due to fraudulent or
            unauthorised transactions may not be recoverable.
          </p>
        </Section>
        <Section title={"Risks Related to Digital Assets Themselves"}>
          <p className="text-white">
            Given the nature of Digital Assets and their underlying
            technologies, there are a number of intrinsic risks, including but
            not limited to:
          </p>
          <ul
            className="pl-6"
            style={{ listStyleType: "upper-alpha", color: "white" }}
          >
            <li className="text-white li-text">
              faults, defects, hacks, exploits, errors, protocol failures or
              unforeseen circumstances occurring in respect of a Digital Asset
              or the technologies or economic systems on which the Digital Asset
              relies;
            </li>
            <li className="text-white li-text">
              transactions in Digital Assets being irreversible. Consequently,
              losses due to fraudulent or accidental transactions may not be
              recoverable;
            </li>
            <li className="text-white li-text">
              technological development leading to the obsolescence of a Digital
              Asset; and
            </li>
            <li className="text-white li-text">
              attacks on the protocol or technologies on which a Digital Asset
              depends, including, but not limited to:     i. distributed denial
              of service; ii. sybil attacks; iii. phishing; iv. social
              engineering; v. hacking; vi. smurfing; vii. malware; viii. double
              spending; ix. majority-mining, consensus-based or other mining
              attacks; x. misinformation campaigns; xi. forks; and xii.
              spoofing.
            </li>
          </ul>
        </Section>
        <Section title={"Monitoring Risks"}>
          <p className="text-white">
            Digital Asset markets are open 24 hours a day, 7 days a week. Rapid
            price changes may occur at any time, including outside of normal
            business hours. You are solely responsible to ensure constant
            monitoring of the Digital Asset markets.
          </p>
        </Section>
        <Section title={"Communication Risks"}>
          <p className="text-white">
            When you communicate with BlockEx via electronic communication, you
            should be aware that electronic communications can fail, can be
            delayed, may not be secure and/or may not reach the intended
            destination.
          </p>
        </Section>
        <Section title={"Currency Risks"}>
          <p className="text-white">
            Currency exchange fluctuations will impact your gains and losses.
          </p>
        </Section>
        <Section title={"Legal Risks"}>
          <p className="text-white">
            Changes in laws and regulations may materially affect the value of
            Digital Assets. This risk is unpredictable and may vary from market
            to market. Also, you may suffer severe losses if your actions breach
            national laws or regulations.
          </p>
        </Section>
        <Section title={"Other Risks"}>
          <p className="text-white">
            This Statement is a non-exclusive list of the risks which may be
            involved during your use of BlockEx Services. There may be other
            risks which are Service-specific or Product-specific. You should
            read carefully the risk disclosures contained separately under the
            Legal Documents, including the User Agreement.
          </p>
        </Section>
      </div>
    </div>
  );
};

export default RiskComp;
