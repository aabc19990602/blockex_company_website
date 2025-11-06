import React from "react";
const Section = ({ title, children }) => (
  <div className="py-3">
    {title && <h3 className="bloackChain_p1 text-start">{title}</h3>}
    {children}
  </div>
);
const ListItem = ({ label, text }) => (
  <li className="privacy-text">
    {label ? <span className="privacy-label">{label}</span> : null}
    {text}
  </li>
);
const TermConditions = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <h1 className="bloackChain_h1 text-start">User Agreement</h1>
        <p className="text-start text-white py-1" style={{ opacity: 0.5 }}>
          Last Updated: 01 November, 2025
        </p>
        <div className="p-3 rounded" style={{ background: "#002A2B" }}>
          <p className="text-white">
            This User Agreement is concluded between you ("You" or "User") and
            BlockEx Crypto Exchange ("we", "us", "our", "ours", "BlockEx", or,
            the "Platform"). By using, accessing, or attempting to use or access
            BlockEx website {""}
            <span>
              <a
                href="https://exchangeblockex.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="privacy-email-link"
              >
                (https://www.exchangeblockex.com)
              </a>
            </span>{" "}
            , Apps and any other services provided by BlockEx or affiliated
            companies thereof (the "Services"), it will be deemed that you have
            read and agreed to all the terms and conditions specified in this
            User Agreement and Privacy Policy ("Agreement"), as well as the
            amendments and updates which we may make thereto, and any other
            agreements, terms, conditions, guidelines, rules, or written
            instructions, including the BlockEx Risk Control Guidelines, as
            published by BlockEx on its website, Apps, or other Services and
            amendments and changes thereto, from time to time (altogether as the
            "Legal Documents"), which are incorporated herein by reference. If
            you do not agree or otherwise understand the nature of this
            Agreement and the Legal Documents, do not access BlockEx or use the
            corresponding BlockEx Services.
          </p>
          <p className="text-white fw-medium">
            BY MAKING USE OF BLOCKEX SERVICES, YOU ACKNOWLEDGE AND AGREE THAT:
            (1) YOU ARE AWARE OF THE RISKS ASSOCIATED WITH TRANSACTIONS OF
            DIGITAL ASSETS AND THEIR DERIVATIVES; (2) YOU SHALL ASSUME ALL RISKS
            RELATED TO THE USE OF BLOCKEX SERVICES AND TRANSACTIONS OF DIGITAL
            ASSETS AND THEIR DERIVATIVES; AND (3) BLOCKEX SHALL NOT BE LIABLE
            FOR ANY SUCH RISKS OR ADVERSE OUTCOMES.
          </p>
        </div>
        <div className="alert alert-info mt-5" role="alert">
          If you would like to know more about the risks associated with
          investing in or trading Digital Assets, you can access our Risk
          Disclosure Statement at{" "}
          <span>
            {" "}
            <a
              href="https://www.blockex.biz/risk"
              target="_blank"
                rel="noopener noreferrer"
              className=" text-dark"
            >
              https://www.blockex.biz/risk
            </a>
          </span>
        </div>
        <Section title={"IMPORTANT"}>
          <p className="text-white">
            It is your sole responsibility ensure that the computer used for the
            trade and liquidity of Digital Assets is secure. Due to web page
            display and safety considerations, it is strongly recommended that
            Users utilize the latest version of Google Chrome to login to
            BlockEx. Users shall bear the responsibility themselves for the
            losses or damages suffered as a result thereof.
          </p>
        </Section>
        <Section title={"PROHIBITED COUNTRIES"}>
          <p className="text-white">
            You must ensure that you are not resident of Prohibited Countries.
            Currently, BlockEx does not provide Services, nor do we accept
            registration of Users or trade applications, in the following
            countries: North Korea, Cuba, Sudan, Iran, Mainland China,
            Singapore, the United States, the United Kingdoms, Hong Kong,
            Russian-controlled regions of Ukraine (currently including the
            Crimea, Donetsk, and Luhansk regions), Sevastopol, and Canada
            (altogether referred to as 'Prohibited Countries'). For the sake of
            clarification, the Prohibited Countries list is non-exclusive and is
            subject to change, at any time and from time to time, by BlockEx in
            its absolute sole discretion may decide, taking into account legal
            and compliance considerations. You understand and acknowledge that
            if it is determined that you have given false representations of
            your location or place of residence, we reserve the right to take
            any appropriate actions in compliance with applicable laws and
            regulations, including termination of any Account immediately and
            liquidating any open positions. You undertake to inform BlockEx at
            the earliest possible opportunity if you have become resident in any
            of the foregoing Prohibited Countries.
          </p>
        </Section>
        <Section title={"IMPORTANT"}>
          <p className="text-white">
            It is your sole responsibility ensure that the computer used for the
            trade and liquidity of Digital Assets is secure. Due to web page
            display and safety considerations, it is strongly recommended that
            Users utilize the latest version of Google Chrome to login to
            BlockEx. Users shall bear the responsibility themselves for the
            losses or damages suffered as a result thereof.
          </p>
        </Section>
        <Section title={"RISK DISCLOSURE"}>
          <p className="text-white">
            2) Notwithstanding our Risk Disclosure Statement available at:
            <span>
              {" "}
              <a
                href="https://www.blockex.biz/risk"
                target="_blank"
                  rel="noopener noreferrer"
                className="privacy-email-link"
              >
                https://www.blockex.biz/risk
              </a>{" "}
            </span>
            to further your understanding of the risks associated with trading
            in Digital Assets, BlockEx hereby reminds you of the following:
          </p>
          <p className="text-white">
            YOU MUST FULLY UNDERSTAND AND ASSESS THE RISKS IN DIGITAL ASSETS
            TRADING BEFORE CONDUCTING ANY TRADING ACTIVITIES OR USING OUR
            SERVICES; YOU MUST ASSESS YOUR RISK TOLERANCE CAREFULLY BEFORE
            ENGAGING IN DIGITAL ASSETS TRADINGS.
          </p>
          <p className="text-white">
            Notwithstanding the foregoing, when using our Services, you may face
            risks regarding policy, regulatory compliance, investment yield,
            trading, and force majeure, etc, the non-exhaustive details of which
            are as follows:
          </p>
          <ul
            className="pl-6"
            style={{ listStyleType: "lower-alpha", color: "white" }}
          >
            <ListItem
              label={"POLICY RISK:"}
              text={
                " Users of BlockEx may encounter losses due to the amendment of national laws, regulations or macro-policies whichmay influence the normal trade of Digital Assets."
              }
            />
            <ListItem
              label={"  COMPLIANCE RISK:"}
              text={
                "Users of BlockEx may encounter losses if the User’s Digital Assets trade violates national laws or regulations."
              }
            />
            <ListItem
              label={"INVESTMENT YIELD RISK:"}
              text={
                " the Digital Asset market has its uniqueness: it never closes, with Digital Assets prices fluctuating in a very wide range. Users may encounter losses in the market."
              }
            />
            <ListItem
              label={"TRADING RISK:"}
              text={
                " Your successful transfer is dependent on mutual assent of the parties to the transfer and BlockEx does not commit to or guarantee any successful transfer."
              }
            />
            <ListItem
              label={"FORCE MAJEURE RISK:"}
              text={
                " When natural disasters, war, strikes, cyber attacks and other unpredictable, unavoidable and unformidable situations occur, BlockEx may not be able to operate normally and this may result in Users' losses. For the User’s losses caused by force majeure, BlockEx will not assume any civil liabilities."
              }
            />
            <ListItem
              label={"RISK OF DELISTING:"}
              text={
                " When a Digital Assets project party faces bankruptcy, liquidation and dissolution, or violates national laws & regulations, or under the request of the project party, BlockEx will delist such Digital Assets, which may cause losses for Users."
              }
            />
            <ListItem
              label={"TECHNICAL RISK:"}
              text={
                " Although the chance of technical fault is remote during the Digital Assets trade, we can not exclude such possibility. If such has happened, the User’s interests may be affected."
              }
            />
            <ListItem
              label={"OPERATIONS RISK:"}
              text={
                " Users may face risks due to operational error, such as transfers to wrong accounts, violations in operation regulations, etc."
              }
            />
            <ListItem
              label={"RISK OF ACCOUNT BEING FROZEN:"}
              text={
                " User’s account may be frozen or forcefully confiscated by judicial institutions in the event of debt fraud or alleged crimes."
              }
            />
          </ul>
        </Section>
        <Section title={"Eligibility and Registration"}>
          <p className="text-white">
            4) By registering for an BlockEx Account or using or otherwise
            accessing BlockEx Services, you represent and warrant that: (i) as
            an individual, you are of legal age to form a binding contract under
            applicable laws; (ii) as an individual, legal person, or other
            organization, you have full legal capacity and sufficient
            authorizations to enter into this Agreement; (iii) you have not been
            previously suspended or removed from using BlockEx Platform or
            related Services; (iv) you do not have an existing BlockEx Account;
            (v) you are not resident, located in or otherwise attempting to
            access BlockEx Platform or BlockEx Services from, or otherwise
            acting on behalf of a person or legal entity that is resident or
            located in, a Prohibited Country; (vi) if you act as an employee or
            agent of a legal entity, and enter into these Agreements on their
            behalf, you represent and warrant that you have all the necessary
            rights and authorizations to bind such legal entity and to access
            and use BlockEx Platform and BlockEx Services on behalf of such
            legal entity; and (vii) your use of BlockEx Platform and BlockEx
            Services will not violate any and all laws and regulations
            applicable to you or the legal entity on whose behalf you are
            acting, including but not limited to regulations on anti-money
            laundering, anti-corruption, and counter-terrorist financing.
          </p>
          <p className="text-white">
            All Users must apply for an BlockEx Account before using BlockEx
            Services. When you register an BlockEx Account, you must provide the
            information identified in this Agreement or otherwise as requested
            by BlockEx, and accept this Agreement, the Privacy Policy, and other
            BlockEx Legal Documents. BlockEx may refuse, in its absolute sole
            discretion, to open an BlockEx Account for you. You agree to provide
            complete and accurate information when opening an BlockEx Account,
            and agree to timely update any information you provide to BlockEx to
            maintain the integrity and accuracy of the information. Each User
            (including natural person, business or legal entity) may maintain
            only one main account at any given time. The registration, use,
            protection and management of such trading accounts are equally
            governed by the provisions of this Agreement, unless otherwise
            stated in this Agreement or the Legal Documents.
          </p>
          <p className="text-white">
            Please note that there are legal requirements in various countries
            which may restrict the products and services that BlockEx can
            lawfully provide. Accordingly, some products and services and
            certain functionality within BlockEx Platform may not be available
            or may be restricted in certain jurisdictions or regions or to
            certain Users. You shall be responsible for informing yourself about
            and observing any restrictions and/or requirements imposed with
            respect to the access to and use of BlockEx Platform and BlockEx
            Services in each country from which BlockEx Platform and BlockEx
            Services are accessed by you or on your behalf. BlockEx reserves the
            right to change, modify or impose additional restrictions with
            respect to the access to and use of BlockEx Platform and/or BlockEx
            Services from time to time at their discretion at any time without
            prior notification.
          </p>
          <p className="text-white"></p>
          <p className="text-white"></p>
          <p className="text-white"></p>
          <p className="text-white"></p>
          <p className="text-white"></p>
        </Section>
        <Section title={"Account Security Management and User Information"}>
          <p className="text-white">
            7) The Users understand and agree that it is the sole responsibility
            of the Users to maintain the confidentiality of your BlockEx account
            and password and are responsible for all activities conducted by
            your BlockEx account (including, but not limited to, disclosure of
            information, release of information, online clicking for consent or
            submission of various rule agreements, online renewal of agreements
            or purchase service, etc.). You assume full responsibility for all
            actions and statements made using the Users’ accounts and passwords
            and agree to the following:
          </p>
          <ul
            className="pl-6"
            style={{ listStyleType: "lower-alpha", color: "white" }}
          >
            <ListItem
              text={
                " Users should create passwords in accordance with relevant rules of BlockEx and relevant prompts of BlockEx (passwords include but are not limited to login passwords, fund passwords, mobile phone numbers bound when registering accounts, mobile phone verification codes received via mobile phones, Google verification, inter alia. Specific forms thereof may change; the same hereinafter). They should avoid choosing overly obvious words or dates as their passwords, such as Users' names, nicknames, birthdays, inter alia."
              }
            />

            <ListItem
              text={
                "The Users shall not disclose their accounts or passwords to any other person, nor shall they use the accounts or passwords of any other person. If the account of a User is illegally used by any other person due to factors not attributable to BlockEx, e.g., hacking, virus or negligence on the part of the User, BlockEx will not assume any responsibility whatsoever."
              }
            />

            <ListItem
              text={
                "The Users are prohibited from giving, lending, renting out, transferring or otherwise disposing of BlockEx account to any third party without the consent of BlockEx."
              }
            />

            <ListItem
              text={
                "BlockEx recognizes the Users’ instructions through the Users’ accounts and passwords. The Users hereby confirm that all their conduct on BlockEx after they log into BlockEx using their accounts and passwords shall represent the Users themselves. The electronic information records generated by the operation of the Users’ accounts are all valid evidence of the Users’ conduct, and the Users shall bear any and all the responsibilities arising therefrom."
              }
            />

            <ListItem
              text={
                "The Users shall adopt appropriate measures to ensure the security of their accounts and passwords after BlockEx notifies the Users of foreseeable security risk."
              }
            />

            <ListItem
              text={
                "Where any person uses the account and password of a User without due authorization, BlockEx and the legally authorized subject reserve the right to hold the actual User jointly and severally liable."
              }
            />
          </ul>
          <p className="text-white">
            If a User discovers that a third person fraudulently uses or
            embezzles the User's account and password, or such third person’s
            use of the User’s account involves any absence of requisite and due
            authorization, the User shall promptly notify BlockEx in an
            effective manner and request BlockEx to suspend relevant services;
            otherwise all the responsibilities arising from such use shall be
            borne solely by the User. Furthermore, the User understands that
            BlockEx needs a reasonable period of time to take action on the
            User's request; BlockEx shall not be held liable for any loss that
            may arise in connection with such third person’s use of the services
            before BlockEx takes action.
          </p>
          <p className="text-white">
            Where BlockEx deems on its unilateral and independent judgement that
            any event which undermines the security of trading has or may arise,
            BlockEx shall have the right to suspend, interrupt or terminate all
            or part of the Services provided to a User under this Agreement,
            remove or delete registration information of such a User, seize
            illicit profits that the User may gain, without notifying such User
            and without assuming any responsibility to such User or any third
            party. The aforementioned events include:
          </p>
          <ul
            className="pl-6"
            style={{ listStyleType: "lower-alpha", color: "white" }}
          >
            <ListItem
              text={
                "BlockEx believes that the information provided by the User is not authentic, valid or complete, e.g., where the User registers with BlockEx on the basis of identity information of any other person that the User uses without due authorization, or the information provided by the User for verification is inconsistent with relevant facts."
              }
            />

            <ListItem
              text={
                "BlockEx uncovers any abnormal transaction by the User or any transaction by the User is suspicious or may be illegal, or is or likely to be in violation of BlockEx Risk Control Guidelines."
              }
            />

            <ListItem
              text={
                "BlockEx believes that the User’s account is suspected of being involved in money laundering, cash-out, pyramid selling, fraudulent use or other situations that BlockEx believes are risky or unlawful."
              }
            />

            <ListItem
              text={
                "BlockEx discovers that the User uses any illegal or improper technical means to engage in any activity that endangers the security of trading or affects fair trading, including tampering with transaction data, stealing customer information, stealing transaction data, attacking other registered accounts through BlockEx, inter alia."
              }
            />

            <ListItem
              text={
                "BlockEx believes that the User has violated any of the rules under this Agreement or the spirit thereof."
              }
            />

            <ListItem
              text={
                "BlockEx believes that the User may have participated in, or currently participates in, pump and dump schemes, wash trading, self-trading, front running, quote stuffing, spoofing, layering, or other types of market manipulative behaviours."
              }
            />

            <ListItem
              text={
                "Any other circumstances under which the User breaches this Agreement."
              }
            />

            <ListItem
              text={
                "Other circumstances under which BlockEx, based on its sole judgment, needs to suspend, interrupt or terminate all or part of the User services (including fee-based services) provided to Users under this Agreement and remove or delete the registration information on the ground of transaction security and other reasons."
              }
            />
          </ul>
          <p className="text-white">
            When a User decides to cease to use his/her/its User account, the
            User shall first pay off all outstanding payables (including service
            fees, inter alia), then withdraw all available digital assets (if
            any) from the User account that are eligible for withdrawal, apply
            to BlockEx for freezing the User account, and formally cancel the
            User account upon approval by BlockEx.
          </p>
          <p className="text-white">
            The User agrees that if the identity verification procedure for
            his/her/its User account fails to be completed, BlockEx has the
            right to terminate the supply of User account services without prior
            notice to the User, and BlockEx may promptly suspend, close or
            delete the User account and all relevant materials and files in the
            User account.
          </p>
          <p className="text-white">
            The User agrees that the suspension, interruption or termination of
            the User's account does not represent the termination of the User's
            responsibilities. The User shall still be liable for any possible
            breach of agreement or damages that may arise due to or in
            connection with such User’s conduct during the time when such User
            uses the services provided by BlockEx; furthermore, BlockEx may
            continue keeping relevant information of the User.
          </p>
        </Section>
        <Section title={"BlockEx Services"}>
          <p className="text-white">
            13) Notwithstanding the foregoing, the Services provided by BlockEx
            as provided for under this Agreement shall include the following:
          </p>
          <ul
            className="pl-6"
            style={{ listStyleType: "lower-alpha", color: "white" }}
          >
            <ListItem
              text={
                "User accounts: A User account will be generated upon a User’s registration with BlockEx. The User account will record the User's activities on the Platform. The aforementioned User account shall be the sole account for the User to log on to BlockEx and use any Services thereon."
              }
            />

            <ListItem
              text={
                "Digital asset trading: Users can submit digital asset trading instructions through BlockEx and trade other digital assets with digital assets in their User Accounts."
              }
            />

            <ListItem
              text={
                "Digital assets deposit and withdrawal: A User can transfer digital assets from other addresses to designated addresses in the User Account, or transfer digital assets from the User’s account to other addresses."
              }
            />

            <ListItem
              text={
                "Updating trading status: The User confirms that the digital asset trading status confirmed by the User in accordance with BlockEx services procedures on BlockEx will become an irrevocable instruction for BlockEx to conduct relevant transactions or operations for the User. The User agrees that the execution time of relevant instructions shall be based on the actual operation time of BlockEx in BlockEx system. The User agrees that BlockEx has the right to handle relevant matters in accordance with this Agreement and/or the relevant dispute resolution rules of BlockEx. Any dispute or loss caused by User’s failure to amend or confirm the transaction status, or to submit relevant applications in a timely manner, shall be borne by the User exclusively, and BlockEx shall not bear any responsibility whatsoever."
              }
            />

            <ListItem
              text={
                "Transmission of trading instructions: BlockEx transmits the User’s trading instructions at the time the User inputs the trading instructions and data. The User understands that BlockEx is the matchmaker of digital asset transactions, not a buyer or seller participating in the transaction of digital asset transactions itself, and that BlockEx does not provide, by itself, any services relating to the deposit or withdrawal of the legal tender of any country."
              }
            />

            <ListItem
              text={
                "Transaction inquiry: BlockEx will record all of the User's operations on BlockEx, regardless of whether the purpose of such operations is finally achieved. The User can query such transaction records under the User’s account in real time via User Account."
              }
            />

            <ListItem
              text={
                " Transaction security settings: BlockEx has the right to carry out the settings of transaction-related matters from time to time based on considerations of such factors as transaction security, including transaction limits and transaction times, inter alia. The Users understand that the aforesaid settings of BlockEx may cause certain inconveniences in trading, and the Users have no objection thereto."
              }
            />

            <ListItem
              text={
                "Handling of system failures: If BlockEx uncovers a handling error caused by a system failure or any other reason, BlockEx has the right to correct the error regardless of whether it is beneficial to BlockEx or its Users. Where due to such error, the User actually receives more digital assets than the amount that such User should have received, then regardless of the nature and reason of the error, BlockEx reserves the right to correct such improperly executed transaction and the User shall return the overcharged digital assets or perform other operations in accordance with the specific requirements of BlockEx's notice to the User regarding the correction of such error. The User understands and agrees that BlockEx will not assume any losses or responsibilities caused by the aforesaid handling error."
              }
            />

            <ListItem
              text={
                "Peer-to-Peer service: BlockEx provides a platform that allows users to directly trade Digital Assets with other users (BlockEx P2P). You may trade on BlockEx P2P to buy or sell Digital Assets as an Advertiser or a Taker."
              }
            />

            <ListItem
              text={
                "Digital Assets futures trading service: BlockEx provides services for Users to carry out Futures trading. A Futures transaction is initiated when you place orders to enter into or to close out Futures contracts with your Account on the Platform (the 'Futures Trading'). You hereby acknowledge that Futures Trading is highly leveraged, and that it is a volatile and complex activity that involves a risk of loss of some or all of your digital assets."
              }
            />

            <ListItem
              text={
                "Copy trading service: Copy trading service is a service that allows one user (hereinafter the 'Follower') to copy trade(s) made by another user (hereinafter the 'Trader')."
              }
            />

            <ListItem
              text={
                "Fiat services: BlockEx cooperates with various partners to distribute Users with means to convert Fiat currency into digital assets via Global Bank Transfer, Credit/Debit Card, and BlockEx Mastercard."
              }
            />

            <ListItem
              text={
                " Other services which BlockEx may provide from time to time."
              }
            />
          </ul>
          <p className="text-white">
            You acknowledge and agree that the above list is non-exhaustive in
            nature and the Services are provided by BlockEx or BlockEx's
            partner(s) on an 'as-is' basis, and may be subject to reduction,
            changes. cancellation, termination, and modifications by BlockEx
            under its absolute sole discretion. BlockEx Services may be varied
            in appearance, availability, pricing, operation, to residence of
            different countries, BlockEx reserve the right to modify such
            Services in its absolute sole discretion, with or without notice to
            you. Each Service BlockEx provides, provided, or will provide is
            subject to separate terms and conditions which may be contained
            under the Legal Documents, by using the Services, you are deemed to
            have read and understood the nature of those provisions.
          </p>
          <p className="text-white">
            In addition to the foregoing, the User acknowledges and agrees that
            BlockEx shall have, at BlockEx’s sole discretion, the right to
            suspend all or part of the Services, or the User’s access to all or
            part of the Services, whenever BlockEx determines in BlockEx’s sole
            discretion that:
          </p>
          <ul
            className="pl-6"
            style={{ listStyleType: "lower-alpha", color: "white" }}
          >
            <ListItem text={"the User may have breached this Agreement; or"} />
            <ListItem
              text={
                "the proper functioning of the BlockEx Platform is in jeopardy."
              }
            />
          </ul>
          <p className="text-white">
            For the purposes of Clause 15 (b), the proper functioning of BlockEx
            will be in jeopardy in the following circumstances:
          </p>
          <ul
            className="pl-6"
            style={{ listStyleType: "lower-alpha", color: "white" }}
          >
            <ListItem
              text={
                "When a computer or telecommunications network ceases to operate or function as a result of an accident."
              }
            />

            <ListItem
              text={
                "In the event of a Force Majeure Event which affects the provision of the Services."
              }
            />

            <ListItem
              text={
                "When BlockEx’s assets or the User’s assets, or the Platform, are the subject of an attempted or actual malicious attack which may, among other things, result in the theft or loss of such assets."
              }
            />

            <ListItem
              text={
                "When an event affects the proper functioning of critical systems relied upon by BlockEx, including the pricing system or any other system necessary for the provision of the Services."
              }
            />

            <ListItem
              text={
                "When BlockEx suspects unauthorized use of the Platform, or a breach of this Agreement or Applicable Laws and Regulations."
              }
            />

            <ListItem
              text={
                "When BlockEx determines that it is necessary, in its sole discretion, to conduct investigations in light of its requirements under Applicable Laws and Regulations or to ensure the proper functioning of the Platform."
              }
            />

            <ListItem
              text={
                " When BlockEx decides to cease handling a Digital Asset based on the results of a Hard Fork that causes a chain split or changes to a Digital Asset."
              }
            />

            <ListItem
              text={
                " When BlockEx deems that the provision of the Services cannot continue due to changes in Applicable Laws and Regulations, social conditions, or factors outside BlockEx’s control, including but not limited to when a Digital Asset is no longer deemed an 'Acceptable Digital Asset' by the Competent Authorities."
              }
            />

            <ListItem
              text={
                " When for any other reason, BlockEx determines in its sole discretion that the suspension is necessary."
              }
            />
          </ul>
        </Section>
        <Section title={"Rules of Services"}>
          <p className="text-white">
            17) When you use BlockEx Services, you agree and undertake to comply
            with the following provisions:
          </p>
          <ul
            className="pl-6"
            style={{ listStyleType: "lower-alpha", color: "white" }}
          >
            <ListItem
              text={
                "During the use of BlockEx Services, all activities you carry out should comply with the requirements of applicable laws and regulations, this Agreement, applicable Legal Documents, and various guidelines of BlockEx."
              }
            />

            <ListItem
              text={
                "Your use of BlockEx Services should not violate public interests, public morals, or the legitimate interests of others, including any actions that would interfere with, disrupt, negatively affect, or prohibit other Users from using BlockEx Services."
              }
            />

            <ListItem
              text={
                "You agree not to use the services for market manipulation (such as pump and dump schemes, wash trading, self-trading, front running, quote stuffing, spoofing, or layering, regardless of whether prohibited by law)."
              }
            />

            <ListItem
              text={
                "Without written consent from BlockEx, the following commercial uses of BlockEx data are prohibited:(i) Trading services that make use of BlockEx quotes or market bulletin board information. (ii) Data feeding or streaming services that make use of any market data of BlockEx. (iii) Any other websites/apps/services that charge for or otherwise profit from (including through advertising or referral fees) market data obtained from BlockEx."
              }
            />
            <ListItem
              text={
                "Without prior written consent from BlockEx, you may not modify, replicate, duplicate, copy, download, store, further transmit, disseminate, transfer, disassemble, broadcast, publish, remove or alter any copyright statement or label, or license, sub-license, sell, mirror, design, rent, lease, private label, grant security interests in the properties or any part of the properties, or create their derivative works or otherwise take advantage of any part of the properties."
              }
            />
            <ListItem
              text={
                "You may not (i) use any deep linking, web crawlers, bots, spiders or other automatic devices, programs, scripts, algorithms or methods, or any similar or equivalent manual processes to access, obtain, copy or monitor any part of the properties, or replicate or bypass the navigational structure or presentation of BlockEx Services in any way, in order to obtain or attempt to obtain any materials, documents or information in any manner not purposely provided through BlockEx Services; (ii) attempt to access any part or function of the properties without authorization, or connect to BlockEx Services or any BlockEx servers or any other systems or networks of any BlockEx Services provided through the services by hacking, password mining or any other unlawful or prohibited means; (iii) probe, scan or test the vulnerabilities of BlockEx Services or any network connected to the properties, or violate any security or authentication measures on BlockEx Services or any network connected to BlockEx Services; (iv) reverse look-up, track or seek to track any information of any other Users or visitors of BlockEx Services; (v) take any actions that imposes an unreasonable or disproportionately large load on the infrastructure of systems or networks of BlockEx Services or BlockEx, or the infrastructure of any systems or networks connected to BlockEx services; (vi) use any devices, software or routine programs to interfere with the normal operation of BlockEx Services or any transactions on BlockEx Services, or any other person’s use of BlockEx Services; (vii) forge headers, impersonate, or otherwise manipulate identification, to disguise your identity or the origin of any messages or transmissions you send to BlockEx, (viii) bulk-registration of accounts to obtain additional benefits or resources, using 'phishing' websites containing referral links, posting referral links as advertisements on search engines or bidding the same thereon, or any other activities which could be harmful to or may potentially disrupt the operation of the Platform, (ix) trade in a way that is in violation of BlockEx Risk Control Guidelines, or (x) use BlockEx Services in an illegal way."
              }
            />
          </ul>
          <p className="text-white">
            By accessing BlockEx Services, you agree that BlockEx has the right
            to investigate any violation of this Agreement, unilaterally
            determine whether you have violated this Agreement, and take actions
            under relevant regulations without your consent or prior notice.
            Examples of such actions include, but are not limited to:
          </p>
          <ul className="text-white">
            <li className="li-text">
              Blocking and closing order requests; Freezing your account;
            </li>
            <li className="li-text">
              Reporting the incident to the authorities; Publishing the alleged
            </li>
            <li className="li-text">
              violations and actions that have been taken; Deleting any
            </li>
            <li className="li-text">
              information you published that are found to be violations.
            </li>
          </ul>
          <p className="text-white">
            In addition to the foregoing, due to the operation of Applicable
            Laws, BlockEx prohibits certain businesses to be conducted on or
            otherwise utilize BlockEx Services, BlockEx has the right to monitor
            your transaction and/or account activities to determine, under our
            absolute sole discretion, if your use of BlockEx Services
            constitutes any of the prohibited businesses. These prohibited
            businesses include:
          </p>
          <ul
            className="pl-6"
            style={{ listStyleType: "lower-alpha", color: "white" }}
          >
            <ListItem
              text={
                "Unlicensed money service businesses, including but not limited to, payment services providers, the sale of money orders or cashier’s checks or any money transmitter activities."
              }
            />

            <ListItem
              text={
                " Adult content and services, including but not limited to, any types of pornography and other obscene materials (including literature, imagery and other media); sites offering any sexually-related services such as prostitution, escorts, pay-per-view, adult live chat features."
              }
            />

            <ListItem
              text={"Deceptive marketing and false advertising services."}
            />

            <ListItem text={" Religious and/or spiritual organizations."} />

            <ListItem
              text={
                "Unlicensed sale of weapons of any kind, including but not limited to, firearms, ammunition, knives, explosives, or related accessories."
              }
            />

            <ListItem
              text={
                "Certain regulated products and services, including but not limited to, marijuana dispensaries and related businesses; sale of tobacco, e-cigarettes, and e-liquid; online prescription or pharmaceutical services; age restricted goods or services, and toxic, flammable, and radioactive materials."
              }
            />

            <ListItem
              text={
                "Pseudo-pharmaceuticals - Companies manufacturing and/or selling untested or unapproved pharmaceuticals."
              }
            />

            <ListItem
              text={
                "Drugs and Drug Paraphernalia, including but not limited to, sale of narcotics, controlled substances, and any equipment designed for making or using drugs, such as bongs, vaporizers, and hookahs."
              }
            />

            <ListItem
              text={
                "Gambling activities, including but not limited to, sports betting, casino games, horse racing, dog racing, lotteries, games of chance, sweepstakes, games of skill that may be classified as gambling (i.e. poker), or other activities that facilitate any of the foregoing."
              }
            />

            <ListItem
              text={
                "Money-laundering, fraud, terrorist financing, or any other type of financial crimes."
              }
            />

            <ListItem
              text={
                "Any sort of Ponzi scheme, pyramid scheme, or multi-level marketing program."
              }
            />

            <ListItem
              text={
                "Goods or services that infringe or violate any copyright, trademark, or proprietary rights under the laws of any jurisdiction."
              }
            />

            <ListItem text={" Layaway systems, or annuities."} />

            <ListItem
              text={
                "Counterfeit or unauthorized goods, including but not limited to, sale or resale of fake or “novelty” IDs, sale of goods or services that are illegally imported or exported or which are stolen."
              }
            />

            <ListItem
              text={
                "Wash trading, front-running, insider trading, market manipulation or other forms of market-based fraud or deceit."
              }
            />

            <ListItem
              text={
                "Purchasing goods of any type from hidden service markets or “Darknet” markets, or any other service or website that acts as a marketplace for illegal goods (even though such marketplace might also sell legal goods)."
              }
            />

            <ListItem
              text={
                " Any other matters, goods, or services that from time to time we deem to be unacceptable or of high risk, and which, for example, may be restricted by our bank or payment partners."
              }
            />

            <ListItem
              text={
                "Any other unlawful activities which would violate, or assist in violation of, any law, statute, ordinance, or regulation, sanctions programs administered in the countries where we conduct business, or which would involve proceeds of any unlawful activities."
              }
            />

            <ListItem
              text={
                "Shell Banks or Financial Institutions that have customers that are shell banks."
              }
            />

            <ListItem text={"Entities with bearer share ownership."} />

            <ListItem
              text={"Defense industry, firearms & munitions manufacturers."}
            />

            <ListItem text={"Nuclear Energy."} />

            <ListItem
              text={
                "Restricted financial services, including but not limited to credit repair, debt settlement, refinance, bail bonds, collections agencies."
              }
            />

            <ListItem
              text={
                "Transactions or business involving ivory and protected species."
              }
            />
          </ul>
        </Section>
        <Section title={"Account Restrictions"}>
          <p className="text-white">
            21) In addition to other similar provisions contained under this
            Agreement and the Legal Documents, you agree and acknowledge that we
            have the right, at any time and in our absolute sole discretion, to
            implement the following measures on your Account:
          </p>
          <ul
            className="pl-6"
            style={{ listStyleType: "lower-alpha", color: "white" }}
          >
            <ListItem text={"Blocking and closing order requests."} />
            <ListItem
              text={"Freezing your account and any assets contained therein."}
            />
            <ListItem
              text={
                "Clawback and/or retrieve any profits obtained in violation of this Agreement or other Legal Documents to compensate for any losses suffered as a consequence thereto."
              }
            />
            <ListItem
              text={
                "Publishing the alleged violations and actions that have been taken."
              }
            />
            <ListItem
              text={
                "Deleting any information you published that are found to be violations."
              }
            />
          </ul>
          <p className="text-white">
            If we suspect, in our absolute sole discretion, inter alia, any of
            the following:
          </p>
          <ul
            className="pl-6"
            style={{ listStyleType: "lower-alpha", color: "white" }}
          >
            <ListItem
              text={
                " The Account is in violation of any part of this Agreement, the Legal Documents, BlockEx Risk Control Guidelines, or other guidelines as BlockEx may publish or otherwise amend from time to time."
              }
            />
            <ListItem
              text={
                " The Account is in violation of any applicable laws or regulations."
              }
            />
            <ListItem
              text={
                "The Account is in violation of Anti-Money-Laundering/Counter-Terrorism Financing laws."
              }
            />
            <ListItem
              text={
                " The Account is in violation of a regulatory authority requirement, court order, or valid subpoena."
              }
            />
            <ListItem
              text={
                " The Account is, or is related to any account that is, subject to any pending litigation, investigation, or governmental proceeding."
              }
            />
            <ListItem
              text={
                "The Account has a balance that needs to be reconciled for any reason."
              }
            />
            <ListItem
              text={
                "If BlockEx believes that an unauthorized person is attempting to gain access to your account."
              }
            />
            <ListItem
              text={
                " If BlockEx believes that you are using your credentials or other account information in an unauthorized or inappropriate manner."
              }
            />
            <ListItem
              text={
                "If BlockEx believes that your account is related to any Prohibited Businesses as set forth in Clause 19."
              }
            />
            <ListItem
              text={
                " If BlockEx believes that there are suspicious and/or fraudulent activities on your account."
              }
            />
            <ListItem
              text={" The Account has not been accessed in over one year."}
            />
          </ul>
          <p className="text-white">
            You agree and acknowledge that we have the right to immediately
            investigate and implement necessary measures on your Account and any
            Account related thereto, if we suspect, in our sole discretion, that
            any such account has committed a violation of this Agreement, the
            Legal Documents, or the Applicable Laws or Regulations.
          </p>
        </Section>
        <Section title={"Fees"}>
          <p className="text-white">
            23) BlockEx has the right to set Service charges according to this
            Agreement. BlockEx also has the right to formulate and adjust the
            Service charges, and set specific service charges for you to use the
            Service(s) and terminate any promotional efforts at any time and
            from time to time, at BlockEx's absolute sole discretion.
          </p>
          <p className="text-white">
            Unless otherwise stated or agreed upon, you agree that BlockEx has
            the right to deduct the above-mentioned service charges directly
            from the assets of your account.
          </p>
          <p className="text-white">
            At BlockEx's sole discretion, regional or country-specific pricing
            may vary based on the User’s residence or location.
          </p>
        </Section>
        <Section title={"Liabilities"}>
          <p className="text-white">
            26) BlockEx is responsible for providing BlockEx services to you
            according to the status quo and availability. BlockEx, however,
            makes no express or implied warranty with respect to the Services,
            including but not limited to the applicability, absence of error or
            omission, sustainability, accuracy, reliability, suitability for a
            particular purpose of the Services. At the same time, BlockEx makes
            no commitment or guarantee to the validity, accuracy, correctness,
            reliability, quality, stability, integrity and timeliness of the
            technology and information involved in the BlockEx service.
          </p>
          <p className="text-white">
            Notwithstanding the afore, BlockEx is responsible for reviewing the
            text of information released by the digital asset project owners,
            however it does not guarantee or assume any responsibility for the
            accuracy, completeness or legality of such information. The Users
            shall make decisions based on their independent judgment and shall
            engage their own advisors and/or conduct their own research. If
            Users conduct digital asset transactions based on such information,
            the risks arising therefrom shall be borne exclusively by the Users
            themselves, and the Users have no right to propose any legal claim
            to BlockEx on the basis of such risks. Any dispute between a User
            and the digital asset project owner arising from or related to
            transaction shall be settled by and between the parties to the
            dispute themselves, and the Platform shall not bear any transaction
            risk or legal liability whatsoever.
          </p>
          <p className="text-white">
            DISCLAIMER OF WARRANTIES: TO THE MAXIMUM EXTENT PERMITTED UNDER
            APPLICABLE LAW, BLOCKEX SERVICES, BLOCKEX MATERIALS AND ANY PRODUCT,
            SERVICE OR OTHER ITEM PROVIDED BY OR ON BEHALF OF BLOCKEX ARE
            OFFERED ON AN “AS IS” AND “AS AVAILABLE” BASIS, AND BLOCKEX
            EXPRESSLY DISCLAIMS, AND YOU WAIVE, ANY AND ALL OTHER WARRANTIES OF
            ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION,
            WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
            TITLE OR NON-INFRINGEMENT OR WARRANTIES ARISING FROM COURSE OF
            PERFORMANCE, COURSE OF DEALING OR USAGE IN TRADE. WITHOUT LIMITING
            THE FOREGOING, BLOCKEX DOES NOT REPRESENT OR WARRANT THAT THE SITE,
            BLOCKEX SERVICES OR BLOCKEX MATERIALS ARE ACCURATE, COMPLETE,
            RELIABLE, CURRENT, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL
            COMPONENTS. BLOCKEX DOES NOT GUARANTEE THAT ANY ORDER WILL BE
            EXECUTED, ACCEPTED, RECORDED OR REMAIN OPEN. EXCEPT FOR THE EXPRESS
            STATEMENTS, AGREEMENTS AND RULES SET FORTH IN this Agreement, YOU
            HEREBY ACKNOWLEDGE AND AGREE THAT YOU HAVE NOT RELIED UPON ANY OTHER
            STATEMENT OR AGREEMENT, WHETHER WRITTEN OR ORAL, WITH RESPECT TO
            YOUR USE AND ACCESS OF BLOCKEX SERVICES. WITHOUT LIMITING THE
            FOREGOING, YOU HEREBY UNDERSTAND AND AGREE THAT BLOCKEX WILL NOT BE
            LIABLE FOR ANY LOSSES OR DAMAGES ARISING OUT OF OR RELATING TO: (A)
            ANY INACCURACY, DEFECT OR OMISSION OF DIGITAL ASSETS PRICE DATA, (B)
            ANY ERROR OR DELAY IN THE TRANSMISSION OF SUCH DATA, (C)
            INTERRUPTION IN ANY SUCH DATA, (D) REGULAR OR UNSCHEDULED
            MAINTENANCE CARRIED OUT BY BLOCKEX AND SERVICE INTERRUPTION AND
            CHANGE RESULTING FROM SUCH MAINTENANCE, (E) ANY DAMAGES INCURRED BY
            OTHER USERS’ ACTIONS, OMISSIONS OR VIOLATION OF this Agreement, (F)
            ANY DAMAGE CAUSED BY ILLEGAL ACTIONS OF OTHER THIRD PARTIES OR
            ACTIONS WITHOUT AUTHORIZED BY BLOCKEX; AND (G) OTHER EXEMPTIONS
            MENTIONED IN DISCLAIMERS AND PLATFORM RULES ISSUED BY BLOCKEX.
          </p>
          <p className="text-white">
            THE DISCLAIMER OF IMPLIED WARRANTIES CONTAINED HEREIN MAY NOT APPLY
            IF AND TO THE EXTENT IT IS PROHIBITED BY APPLICABLE LAW OF THE
            JURISDICTION IN WHICH YOU RESIDE.
          </p>
          <p className="text-white">
            DISCLAIMER OF DAMAGES AND LIMITATION OF LIABILITY: TO THE MAXIMUM
            EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL BLOCKEX AND
            THEIR RESPECTIVE SHAREHOLDERS, MEMBERS, DIRECTORS, OFFICERS,
            EMPLOYEES, ATTORNEYS, AGENTS, REPRESENTATIVES, SUPPLIERS OR
            CONTRACTORS BE LIABLE FOR ANY INCIDENTAL, INDIRECT, SPECIAL,
            PUNITIVE, CONSEQUENTIAL OR SIMILAR DAMAGES OR LIABILITIES WHATSOEVER
            (INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF DATA,
            INFORMATION, REVENUE, PROFITS OR OTHER BUSINESSES OR FINANCIAL
            BENEFITS) ARISING OUT OF BLOCKEX SERVICES, ANY PERFORMANCE OR
            NON-PERFORMANCE OF BLOCKEX SERVICES, OR ANY OTHER PRODUCT, SERVICE
            OR OTHER ITEM PROVIDED BY OR ON BEHALF OF BLOCKEX AND ITS
            AFFILIATES, WHETHER UNDER CONTRACT, STATUTE, STRICT LIABILITY OR
            OTHER THEORY EVEN IF BLOCKEX HAS BEEN ADVISED OF THE POSSIBILITY OF
            SUCH DAMAGES EXCEPT TO THE EXTENT OF A FINAL JUDICIAL DETERMINATION
            THAT SUCH DAMAGES WERE A RESULT OF BLOCKEX’S GROSS NEGLIGENCE,
            FRAUD, WILLFUL MISCONDUCT OR INTENTIONAL VIOLATION OF LAW. SOME
            JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF INCIDENTAL
            OR CONSEQUENTIAL DAMAGES, SO THE ABOVE LIMITATION MAY NOT APPLY TO
            YOU.
          </p>
          <p className="text-white">
            NOTWITHSTANDING THE FOREGOING, IN NO EVENT WILL THE LIABILITY OF
            BLOCKEX, ITS AFFILIATES AND THEIR RESPECTIVE SHAREHOLDERS, MEMBERS,
            DIRECTORS, OFFICERS, EMPLOYEES, ATTORNEYS, AGENTS, REPRESENTATIVES,
            SUPPLIERS OR CONTRACTORS ARISING OUT OF SERVICES OFFERED BY OR ON
            BEHALF OF BLOCKEX AND ITS AFFILIATES, ANY PERFORMANCE OR
            NON-PERFORMANCE OF BLOCKEX SERVICES, OR ANY OTHER PRODUCT, SERVICE
            OR OTHER ITEM, WHETHER UNDER CONTRACT, STATUTE, STRICT LIABILITY OR
            OTHER THEORY, EXCEED THE AMOUNT OF THE TRANSACTION FEES PAID BY YOU
            TO BLOCKEX UNDER this Agreement IN THE THREE-MONTH PERIOD
            IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO THE CLAIM FOR
            LIABILITY.
          </p>
          <p className="text-white">
            You agree to indemnify and hold harmless BlockEx, their affiliates,
            contractors, licensors, and their respective directors, officers,
            employees and agents from and against any claims, actions,
            proceedings, investigations, demands, suits, costs, expenses and
            damages (including attorneys’ fees, fines or penalties imposed by
            any regulatory authority) arising out of or related to (i) your use
            of, or conduct in connection with, BlockEx Services, (ii) your
            breach or our enforcement of this Agreement, or (iii) your violation
            of any applicable law, regulation, or rights of any third party
            during your use of BlockEx Services. If you are obligated to
            indemnify BlockEx,, contractors, licensors, and their respective
            directors, officers, employees or agents pursuant to this Agreement,
            BlockEx will have the right, in its sole discretion, to control any
            action or proceeding and to determine whether BlockEx wishes to
            settle, and if so, on what terms.
          </p>
        </Section>
        <Section title={"Termination of Services"}>
          <p className="text-white">
            31) You agree that BlockEx shall be entitled in its sole and
            absolute discretion, without prior notice, to suspend, terminate the
            provision of part or all of the BlockEx services to you for any
            reason, as well as suspend or permanently freeze (cancel) your
            account in BlockEx, and shall not be liable to you or any third
            party for so doing, however, BlockEx has the right to retain the
            trade data, history and other information relating to the account,
            as well as the application and use of such information. In the event
            of the following circumstances, BlockEx has the right to terminate
            this Agreement directly by canceling the account, and has the right
            to permanently freeze (cancel) your account’s authority on BlockEx:
          </p>
          <ul
            className="pl-6"
            style={{ listStyleType: "lower-alpha", color: "white" }}
          >
            <ListItem
              text={
                "After BlockEx terminates the services provided to you, and you are suspected of re-registering as a user of BlockEx, directly or indirectly or in the name of others."
              }
            />
            <ListItem
              text={
                "The email address that you have provided does not exist or cannot receive emails, and there is no other way to contact you, or BlockEx has notified you to change your email information via another contact method, and you still have not changed to a valid email address within three working days after the notice from BlockEx."
              }
            />
            <ListItem
              text={
                "The main contents of the user information that you have provided are not true or inaccurate or incomplete."
              }
            />
            <ListItem
              text={
                " When the Agreement (including the rules) has changed, you should expressly inform BlockEx that you are not willing to accept the new service agreement."
              }
            />
            <ListItem
              text={
                "Other circumstances in which BlockEx believes that the service should be terminated. Upon the termination of your account services or the permanent freezing (cancellation) of your account on BlockEx, BlockEx shall have no obligation to retain or disclose to you any information in your account, or to forward to you or a third party any information you have not read or sent or forwarded to."
              }
            />
          </ul>
          <p className="text-white">
            You agree that BlockEx shall have the right to immediately suspend
            your BlockEx Account (and any accounts beneficially owned by related
            entities or affiliates), freeze or lock assets or funds in all such
            accounts, and suspend your access to BlockEx for any reason
            including if BlockEx suspects any such accounts to be in violation
            of this Agreement, the Legal Documents, or any applicable laws and
            regulations. You agree that BlockEx shall not be liable to you for
            any permanent or temporary modification of your BlockEx Account, or
            suspension or termination of your access to all or any portion of
            BlockEx Services. BlockEx shall reserve the right to keep and use
            the transaction data or other information related to such BlockEx
            Accounts. The above account controls may also be applied in the
            following cases:
          </p>
          <ul
            className="pl-6"
            style={{ listStyleType: "lower-alpha", color: "white" }}
          >
            <ListItem
              text={
                " The BlockEx Account is subject to a governmental proceeding, criminal investigation or other pending litigation;"
              }
            />
            <ListItem
              text={" We detect unusual activities in the BlockEx Account;"}
            />
            <ListItem
              text={" We detect unauthorized access to the BlockEx Account;"}
            />
            <ListItem
              text={
                " We are required to do so by a court order or command by a regulatory/government authority."
              }
            />
          </ul>
          <p className="text-white">
            In case of any of the following events, BlockEx shall have the right
            to directly terminate this Agreement by cancelling your BlockEx
            Account, and shall enjoy the right but not the obligation to
            permanently freeze (cancel) the authorizations of your BlockEx
            Account on BlockEx and withdraw the corresponding BlockEx Account
            thereof:
          </p>
          <ul
            className="pl-6"
            style={{ listStyleType: "lower-alpha", color: "white" }}
          >
            <ListItem text={"After BlockEx terminates services to you."} />
            <ListItem
              text={
                " You allegedly register or register in any other person’s name as a BlockEx User again, directly or indirectly."
              }
            />
            <ListItem
              text={
                "The information that you have provided is untruthful, inaccurate, outdated or incomplete."
              }
            />
            <ListItem
              text={
                "When this Agreement is amended, you state your unwillingness to accept the amended Terms by applying for cancellation of your BlockEx Account or by other means."
              }
            />
            <ListItem
              text={" You request that BlockEx Services be terminated."}
            />
            <ListItem
              text={
                "Any other circumstances where BlockEx deems it should terminate BlockEx Services."
              }
            />
          </ul>
          <p className="text-white">
            If BlockEx is informed that any assets or funds held in your BlockEx
            Account are stolen or otherwise are not lawfully possessed by you,
            BlockEx may, but has no obligation to, place an administrative hold
            on the affected funds and your BlockEx Account. If BlockEx does lay
            down an administrative hold on some or all of your funds or BlockEx
            Account, BlockEx may continue such hold until such time as the
            dispute has been resolved and evidence of the resolution acceptable
            to BlockEx has been provided to BlockEx in a form acceptable to
            BlockEx. BlockEx will not involve itself in any such dispute or the
            resolution of the dispute. You agree that BlockEx will have no
            liability or responsibility for any such hold, or for your inability
            to withdraw Digital Assets or funds or execute trades during the
            period of any such hold.
          </p>
          <p className="text-white">
            Except as set forth in this Agreement, once an BlockEx Account is
            closed/withdrawn, all remaining account balance (which includes
            charges and liabilities owed to BlockEx) will be payable immediately
            to BlockEx. Upon payment of all outstanding charges to BlockEx (if
            any), Users may, upon determination by BlockEx as to the User's
            eligibility, withdraw all Digital Assets or funds from the account.
          </p>
          <p className="text-white">
            BlockEx maintains full custody of the assets, funds and User
            data/information which may be turned over to governmental
            authorities in the event of BlockEx Accounts’ suspension/closure
            arising from fraud investigations, investigations of violation of
            law or violation of this Agreement.
          </p>
          <p className="text-white">
            Notwithstanding any provision of this Agreement, BlockEx may provide
            a written notice requiring you to close all of your open positions
            and withdraw all of your assets from your BlockEx Account within a
            limited period of time as determined by BlockEx. In the event that
            you fail to do so, BlockEx may, in its absolute discretion and
            without prior notice to you:
          </p>
          <ul
            className="pl-6"
            style={{ listStyleType: "lower-alpha", color: "white" }}
          >
            <ListItem
              text={"Deem your BlockEx account as a dormant account."}
            />
            <ListItem
              text={" Close any open positions in any BlockEx products."}
            />
            <ListItem
              text={
                "Convert the Digital Assets to a different type of Digital Asset (e.g., from BTC to USDT)."
              }
            />
            <ListItem
              text={
                "Close a dormant account at any time, and BlockEx will not be liable for any loss, damage or expense incurred by you as a result of the closure of a dormant account unless there was fraud or willful default by BlockEx."
              }
            />
          </ul>
          <p className="text-white">
            In addition to the foregoing, you understand and agree that:
          </p>
          <ul
            className="pl-6"
            style={{ listStyleType: "lower-alpha", color: "white" }}
          >
            <ListItem
              text={
                " If you have committed any illegal acts or violations of this Agreement during the period of using the provided Service, BlockEx may still assert rights against you in accordance with this Agreement."
              }
            />
            <ListItem
              text={
                " When BlockEx suspends or terminates the provision of services to you, BlockEx will handle your trading data recorded before service suspension or termination under the following principles. You shall handle or bear any disputes, losses or expenses incurred by yourself, and shall ensure that BlockEx is exempted from any losses or any expenses."
              }
            />
            <ListItem
              text={
                " Where you have entered into a purchase contract with other members before the suspension or termination of the Service but the contract has not been actually performed, BlockEx shall have the right to delete relevant information of such a purchase contract and the trading of digital assets thereof."
              }
            />
            <ListItem
              text={
                " Upon the termination of your account services or the permanent freezing (cancellation) of your account on BlockEx, BlockEx shall have no obligation to retain or disclose to you any information in your account, or to forward to you or a third party any information you have not read or sent or forwarded to."
              }
            />
            <ListItem
              text={
                "If you have entered into a purchase contract with any other member before the suspension or termination of services and such contract has been partially performed, BlockEx may not delete the trade; provided that BlockEx may notify the counterparty of relevant circumstances at the time of suspension or termination of services."
              }
            />
          </ul>
        </Section>
        <Section title={"Intellectual Property"}>
          <p className="text-white">
            39) All intellectual properties included in BlockEx, including, but
            not limited to, website logos, databases, website design, text and
            graphics, software, photos, videos, music, sounds and any
            combinations of the aforementioned files, and the intellectual
            property rights of software compilation, associated source code and
            software (including small applications and scripts) shall be owned
            by BlockEx. You may not copy, modify, copy, transmit or use any of
            the foregoing materials or content for commercial purposes.
          </p>
          <p className="text-white">
            Upon accepting this Agreement, it shall be deemed that you, on the
            basis of your own free will, have transferred and assigned
            exclusively and free of charge to BlockEx all copyright of any form
            of information that you have published on BlockEx, including, but
            not limited to copyrights, distribution rights, lease rights,
            exhibition rights, performance rights, projection rights,
            broadcasting rights, information network communication rights,
            production rights, adaptation rights, translation rights,
            compilation rights and other transferable rights that copyright
            owners are entitled to, and BlockEx shall have the right to sue for
            any infringement on such copyright and obtain full compensation for
            such infringement. This Agreement shall apply to any content that is
            published by you on BlockEx and is protected by copyright law,
            regardless of whether the content is generated before or after the
            signing of this Agreement.
          </p>
          <p className="text-white">
            You shall not illegally use or dispose of the intellectual property
            rights of BlockEx or any other person during your use of the
            services offered by BlockEx. For any information that you publish on
            BlockEx, you may not publish or authorize other websites (or media)
            to use such information in any manner whatsoever.
          </p>{" "}
          <p className="text-white">
            You will not be deemed to have been transferred any intellectual
            property rights to you by BlockEx when you log in to BlockEx or use
            BlockEx's Service.
          </p>
        </Section>
        <Section title={"No Professional Advice"}>
          <p className="text-white">
            43) BlockEx is not your broker, intermediary, agent, or advisor and
            has no fiduciary relationship or obligation to you in connection
            with any trades or other decisions or activities effected by you
            using BlockEx Services. No communication or information provided to
            you by BlockEx is intended as, or shall be considered or construed
            as, investment advice, legal advice, tax advice, financial advice,
            trading advice, or any other sort of advice. Unless otherwise
            specified in this Agreement and Legal Documents, all trades are
            executed automatically, based on the parameters of your order
            instructions and in accordance with posted trade execution
            procedures, and you are solely responsible for determining whether
            any investment, investment strategy or related transaction is
            appropriate for you according to your personal investment
            objectives, financial circumstances and risk tolerance, and you
            shall be solely responsible for any loss or liability therefrom. We
            recommend consultation with your financial, legal, and/or tax
            professionals regarding your specific situation. BlockEx does not
            recommend that any Digital Asset should be bought, earned, sold, or
            held by you, nor does BlockEx warrant any Services that are or
            should be available in any jurisdictions. Before making the decision
            to buy, sell or hold any Digital Asset, you should conduct your own
            due diligence and consult your financial advisors prior to making
            any investment decision. BlockEx will not be held responsible for
            the decisions you make to buy, sell, or hold Digital Assets based on
            the information provided by BlockEx.
          </p>
        </Section>
        <Section
          title={"Governing Law, Dispute Settlement, Class Action Waiver"}
        >
          <p className="text-white">
            44) Notice of Claim and Dispute Resolution Period. Please contact
            BlockEx before initiating any legal proceedings! BlockEx wants to
            address your concerns without resorting to formal legal proceedings,
            if possible. If you have a dispute with BlockEx, then you should
            contact BlockEx and a ticket number will be assigned. BlockEx will
            attempt to resolve your dispute internally as soon as possible. The
            parties agree to negotiate in good faith to resolve the dispute
            (which discussions shall remain confidential and be subject to
            applicable rules protecting settlement discussions from use as
            evidence in any legal proceeding).
          </p>
          <p className="text-white">
            In the event the dispute cannot be resolved satisfactorily, and you
            wish to assert a legal claim against BlockEx, then you agree to set
            forth the basis of such claim in writing in a “Notice of Claim,” as
            a form of prior notice to BlockEx. The Notice of Claim must:
          </p>
          <ol className="list-decimal pl-6 text-white">
            <li>Describe the nature and basis of the claim or dispute,</li>
            <li>Set forth the specific relief sought,</li>
            <li>Provide the original ticket number, and</li>
            <li>Include your BlockEx account email.</li>
          </ol>
          <p className="text-white">
            The Notice of Claim should be submitted to an email address or
            hyperlink provided in your correspondence with BlockEx. After you
            have provided the Notice of Claim to BlockEx, the dispute referenced
            in the Notice of Claim may be submitted by either BlockEx or you to
            arbitration in accordance with this Agreement. For the avoidance of
            doubt, the submission of a dispute to BlockEx for resolution
            internally and the delivery of a Notice of Claim to BlockEx are
            prerequisites to commencement of an arbitration proceeding (or any
            other legal proceeding). During the arbitration, the amount of any
            settlement offer made by you or BlockEx shall not be disclosed to
            the arbitrator.
          </p>
          <p className="text-white">
            Agreement to Arbitrate. You and BlockEx agree that, subject to this
            Agreement and Legal Documents, any dispute, claim, or controversy
            between you and BlockEx arising in connection with or relating in
            any way to this Agreement or to your relationship with BlockEx as a
            user of BlockEx Services (whether based in contract, tort, statute,
            fraud, misrepresentation, or any other legal theory, and whether the
            claims arise during or after the termination of this Agreement) will
            be determined by mandatory final and binding individual (not class)
            arbitration. You and BlockEx further agree that the arbitrator shall
            have the exclusive power to rule on his or her own jurisdiction,
            including without limitation any objections with respect to the
            existence, scope or validity of the Agreement to Arbitrate, or to
            the arbitrability of any claim or counterclaim. Arbitration is more
            informal than a lawsuit in court. THERE IS NO JUDGE OR JURY IN
            ARBITRATION, AND COURT REVIEW OF AN ARBITRATION AWARD IS LIMITED.
            There may be more limited discovery than in court. The arbitrator
            must follow this agreement and can award the same damages and relief
            as a court (including, if applicable, attorney fees), except that
            the arbitrator may not award declaratory or injunctive relief in
            favour of anyone but the parties to the arbitration. The arbitration
            provisions set forth in this Agreement will survive termination of
            this Agreement.
          </p>
          <p className="text-white">
            Arbitration Rules. The arbitration shall be subject to the HKIAC
            Administered Arbitration Rules (HKIAC Rules) in force when the
            Notice of Arbitration is submitted, as modified by this Agreement.
            The arbitration will be administered by the Hong Kong International
            Arbitration Centre (HKIAC). Unless the parties agree otherwise,
            there shall be three (3) arbitrators appointed in accordance with
            the HKIAC Rules. Any arbitration will be conducted in the English
            language. Regardless of the manner in which the arbitration is
            conducted, the arbitrator shall issue a reasoned written decision
            sufficient to explain the essential findings and conclusions on
            which the decision and award, if any, are based.
          </p>
          <p className="text-white">
            JUDGMENT ON ANY ARBITRAL AWARD MAY BE GIVEN IN ANY COURT HAVING
            JURISDICTION OVER THE PARTY (OR OVER THE ASSETS OF THE PARTY)
            AGAINST WHOM SUCH AN AWARD IS RENDERED. TIME FOR FILLING: ANY
            ARBITRATION AGAINST BLOCKEX OPERATORS MUST BE COMMENCED BY FILING A
            REQUEST FOR ARBITRATION WITHIN ONE (1) YEAR, AFTER THE DATE THE
            PARTY ASSERTING THE CLAIM FIRST KNOWS OR REASONABLY SHOULD KNOW OF
            THE ACT, OMISSION OR DEFAULT GIVING RISE TO THE CLAIM; AND THERE
            SHALL BE NO RIGHT TO ANY REMEDY FOR ANY CLAIM NOT ASSERTED WITHIN
            THAT TIME PERIOD. THIS ONE YEAR LIMITATION PERIOD IS INCLUSIVE OF
            THE INTERNAL DISPUTE RESOLUTION PROCEDURE SET FORTH IN THIS
            AGREEMENT, ABOVE. THERE SHALL BE NO RIGHT TO ANY REMEDY FOR ANY
            CLAIM NOT ASSERTED WITHIN THAT TIME PERIOD.
          </p>
          <p className="text-white">
            If applicable law prohibits a one-year limitation period for
            asserting claims, any claim must be asserted within the shortest
            time period permitted by applicable law.
          </p>
          <p className="text-white">
            Governing Law. This Agreement and the Legal Documents shall be
            governed by the laws of England and Wales, without reference to its
            conflict of laws provisions.
          </p>
          <p className="text-white">
            Class Action Waiver. You and BlockEx agree that any claims relating
            to this Agreement or to your relationship with BlockEx as a user of
            BlockEx Services (whether based in contract, tort, statute, fraud,
            misrepresentation, or any other legal theory, and whether the claims
            arise during or after the termination of this Agreement) shall be
            brought against the other party in an arbitration on an individual
            basis only and not as a plaintiff or class member in a purported
            class or representative action. You and BlockEx further agree to
            waive any right for such claims to be brought, heard, or arbitrated
            as a class, collective, representative, or private attorney general
            action, to the extent permissible by applicable law. Combining or
            consolidating individual arbitrations into a single arbitration is
            not permitted without the consent of all parties, including BlockEx.
          </p>
          <p className="text-white">
            Know-Your-Customer and Anti-Money-Laundering Policy
          </p>
        </Section>
        <Section title={"Identity Information"}>
          <p className="text-white">
            51) We ensure that we will comply with the Know-Your-Customer and
            Anti-Money-Laundering laws and regulations, and will not knowingly
            violate the Know-Your-Customer and Anti-Money-Laundering policies.
            To the extent of our reasonable control, we will adopt necessary
            measures and technology to provide you with services that are safe
            and secure, to protect you against the loss caused by money
            laundering to the greatest extent possible. The contents of
            Know-Your-Customer and Anti-Money-Laundering policies are as
            follows:
          </p>
          <ul
            className="pl-6"
            style={{ listStyleType: "lower-alpha", color: "white" }}
          >
            <ListItem
              text={
                "We promulgate and update Know-Your-Customer (KYC) and Anti-Money-Laundering (AML) policies to meet the standards set by relevant laws and regulations."
              }
            />
            <ListItem
              text={
                "We promulgate and update some parts of the guidelines and rules in connection with the operation of this Website, where our staff will provide services in accordance with these guidelines and rules."
              }
            />
            <ListItem
              text={
                " We design and complete the procedures for internal monitoring and trade control, such as rigorous identity authentication procedures, and forming a professional team responsible for anti-money laundering."
              }
            />
            <ListItem
              text={
                "We adopt a risk-prevention-based approach to carry out due diligence and continuous supervision in connection with customers."
              }
            />
            <ListItem text={" Review and regularly inspect existing trades."} />
            <ListItem
              text={"To report suspicious trades to the competent authorities."}
            />
            <ListItem
              text={
                "If you have committed any illegal acts or violations of this Agreement during the period of using the provided Service, BlockEx may still assert rights against you in accordance with this Agreement."
              }
            />
          </ul>
          <p className="text-white">
            You must provide BlockEx with complete and accurate identity
            information and supporting documents, including, but not limited to,
            proof of identity, proof of address, contact details, etc.
          </p>
          <p className="text-white">
            BlockEx will undertake due diligence to verify information provided
            by you, in circumstances where BlockEx, in its absolute sole
            discretion, deems such information may be inaccurate or incomplete,
            BlockEx shall be entitled to request further supporting documents
            from you in order to ensure the truthfulness and accuracy of User
            identity. You agree and understand that failure to provide these
            documents may result in full or partial restrictions on using
            BlockEx Services.
          </p>
          <p className="text-white">
            You hereby undertake to update in a timely manner to any changes in
            your identity information to ensure that the identity information
            provided by you are up-to-date, accurate, and complete. It is your
            responsibility to make sure that any identity information and
            supporting documents thereof provided by you are most up-to-date and
            valid.
          </p>
          <p className="text-white">
            In accordance with the laws and regulations of relevant
            jurisdictions and in light of the nature of entities concerned, the
            content of your information as it is collected by us may vary.
          </p>
          <p className="text-white">
            In principle, we will collect the following information of yours if
            you have registered as an individual:
          </p>
          <ul
            className="pl-6"
            style={{ listStyleType: "lower-alpha", color: "white" }}
          >
            <ListItem
              text={
                "Basic personal information: your name, address (and permanent address, if the two are different), date of birth and nationality, and other available information. Identity authentication shall be based on documents issued by the official or other similar authorities, such as passports, identity cards or other identity documents as are required and issued by relevant jurisdictions."
              }
            />

            <ListItem
              text={
                " Valid photo: before you sign up, you must provide a photograph showing you holding your identity document in front of your chest."
              }
            />

            <ListItem
              text={
                " Contact information: telephone/mobile phone number and valid email address."
              }
            />
          </ul>
          <p className="text-white">
            If you are a company or any other type of legal entity, we will
            collect the following information of yours to determine the final
            beneficiary of your account or your trust account.
          </p>
          <ul
            className="pl-6"
            style={{ listStyleType: "lower-alpha", color: "white" }}
          >
            <ListItem
              text={
                "Your corporation enrollment and registration certificates of the company; a copy of the articles of association and memorandum of the company."
              }
            />

            <ListItem
              text={
                "The detailed certification materials of the ownership structure and ownership description of the company, and the decision of the board of directors on designating the authorized agent of the company responsible for the opening and execution of the account of the company within the website."
              }
            />

            <ListItem
              text={
                "The identity documents of the directors, major shareholders of the company as well as the authorized signatory for the company's account with the website, as required in accordance with relevant rules."
              }
            />

            <ListItem
              text={
                "The company's main business address, and the company's mailing address if it is different from the main business address of the company."
              }
            />

            <ListItem
              text={
                "Other certification documents, documents issued by competent authorities and other documents we may deem necessary in light of the laws and regulations of relevant jurisdictions and in light of the specific nature of your entity."
              }
            />
          </ul>
          <p className="text-white">
            We only accept supporting documents pertaining to your identity
            information in English; if your identity information is not in
            English, you shall have your identity information translated into
            English and duly notarized.
          </p>
          <ul
            className="pl-6"
            style={{ listStyleType: "lower-alpha", color: "white" }}
          >
            <ListItem
              text={
                " You are required to provide both the front and back sides of your identity documents."
              }
            />

            <ListItem
              text={
                "You are required to provide us with a photograph showing you holding your identity documents in front of your chest."
              }
            />

            <ListItem
              text={
                " Copies of certification documents shall be checked against the originals thereof. Nonetheless, if a trusted and suitable certified person can prove that such copies are accurate and comprehensive duplicates of the originals thereof, such copies shall be deemed as acceptable. Such certifiers include ambassadors, members of the judiciary, magistrates, etc."
              }
            />

            <ListItem
              text={
                "The identification of the ultimate beneficiary and controller of the account shall be based on the determination of which individuals ultimately own or control the direct customer and/or the determination that the ongoing trade is performed on the behalf of others. If you are a business enterprise, the identity of major shareholders thereof (for example, those holding 10% or more of the voting equity in such business enterprise) shall be verified."
              }
            />
          </ul>
        </Section>
        <Section title={"AML"}>
          <p className="text-white">
            60) BlockEx will employ reasonable measures to supervise trading
            activities carried out on the platform in order to detect and
            prevent suspicious trading activities. In the meantime, BlockEx
            shall have the right to take appropriate actions, as BlockEx may, in
            its absolute sole discretion, determine, to respond to any
            suspicious activities carried out by the Users, including:
          </p>
          <ul
            className="pl-6"
            style={{ listStyleType: "lower-alpha", color: "white" }}
          >
            <ListItem
              text={
                " We may report suspicious trading activities to the regulating authorities to stay in compliance with applicable laws and regulations."
              }
            />

            <ListItem
              text={
                " We constantly set and adjust daily trading and cash withdrawal limits based on security requirements and actual state of trade."
              }
            />

            <ListItem
              text={
                " We may temporarily restrict trading activity(ies) and freeze any Account pending further investigations, in order to protect Assets of the User and BlockEx, and/or to comply with any ongoing judicial/regulatory investigations and/or requests."
              }
            />

            <ListItem
              text={
                " We constantly monitor your activities and trading behaviour. If trading occurs too frequently in an account registered by you, or is beyond circumstances reasonable to you, BlockEx will assess and determine whether such trades are suspicious."
              }
            />
          </ul>
          <p className="text-white ">
            If we identify a specific trade as suspicious on the basis of our
            assessment, we may adopt such restrictive measures as suspending
            trade or denying trade, and if it is possible, we may even reverse
            trade as soon as possible, and report to competent authorities,
            without, however, notifying you;
          </p>
        </Section>
        <Section title={"Sanctions"}>
          <p className="text-white">
            62) We reserve the right to reject registration applications by
            applicants that do not comply with the international standards
            against money laundering or who may be regarded as political and
            public figures; we reserve the right to suspend or terminate a trade
            identified as suspicious based on our own assessment, which,
            however, does not breach any of our obligations and duties to you.
            For details on locations where BlockEx refuses registration or to
            provide Services, kindly refer to section entitled 'Prohibited
            Countries', above.
          </p>
        </Section>
        <Section title={"Miscellaneous"}>
          <p className="text-white">
            <strong className="privacy-label">63) Independent Parties. </strong>{" "}
            BlockEx is an independent contractor but not an agent of you in the
            performance of this Agreement. this Agreement shall not be
            interpreted as facts or evidence of an association, joint venture,
            partnership, or franchise between the parties.
          </p>
          <p className="text-white">
            <strong className="privacy-label">Entire Agreement:</strong> this
            Agreement constitute the entire agreement between the parties
            regarding use of BlockEx Services and will supersede all prior
            written or oral agreements between the parties. No usage of trade or
            other regular practice or method of dealing between the parties will
            be used to modify, interpret, supplement, or alter the terms herein.
          </p>
          <p className="text-white">
            <strong className="privacy-label">
              {" "}
              Interpretation and Revision:
            </strong>{" "}
            BlockEx reserves the right to alter, revise, modify, and/or change
            this Agreement at any time. All changes will take effect immediately
            upon being published on BlockEx websites. It is your responsibility
            to regularly check relevant pages on our websites/applications to
            confirm the latest version of this Agreement. If you do not agree to
            any such modifications, your only remedy is to terminate your usage
            of BlockEx Services and cancel your account. You agree that, unless
            otherwise expressly provided in this Agreement, BlockEx will not be
            responsible for any modification or termination of BlockEx Services
            by you or any third party, or suspension or termination of your
            access to BlockEx Services.
          </p>
          <p className="text-white">
            <strong className="privacy-label">Language & Translations: </strong>{" "}
            this Agreement may, at BlockEx’s sole and absolute discretion, be
            translated into a language other than the English language. You
            agree that any such translation shall only be for your convenience
            and the English text shall prevail in the event of any ambiguity,
            discrepancy or omission as between the English text and any
            translated text.
          </p>
          <p className="text-white">
            <strong className="privacy-label">Force Majeure:</strong> BlockEx
            will not be liable for any delay or failure to perform as required
            by this Agreement because of any cause or condition beyond BlockEx’s
            reasonable control.
          </p>
          <p className="text-white">
            <strong className="privacy-label">Severability:</strong> If any
            portion of this Agreement is held invalid or unenforceable, such
            invalidity or enforceability will not affect the other provisions of
            this Agreement, which will remain in full force and effect, and the
            invalid or unenforceable portion will be given effect to the
            greatest extent possible.
          </p>
          <p className="text-white">
            <strong className="privacy-label"> Assignment:</strong> You may not
            assign or transfer any right to use BlockEx Services or any of your
            rights or obligations under this Agreement without prior written
            consent from BlockEx, including any right or obligation related to
            the enforcement of laws or the change of control. BlockEx may assign
            or transfer any or all of its rights or obligations under this
            Agreement, in whole or in part, without notice or obtaining your
            consent or approval.
          </p>
          <p className="text-white">
            <strong className="privacy-label">Waiver:</strong> The failure of
            one party to require performance of any provision will not affect
            that party’s right to require performance at any time thereafter. At
            the same time, the waiver of one party to seek recovery for the
            other party’s violation of this Agreement or any provision of
            applicable terms shall not constitute a waiver by that party of any
            subsequent breach or violation by the other party or of the
            provision itself.
          </p>
          <p className="text-white">
            <strong className="privacy-label">
              Third-Party Website Disclaimer:
            </strong>{" "}
            Any links to third-party websites from BlockEx Services does not
            imply endorsement by BlockEx of any product, service, information or
            disclaimer presented therein, nor does BlockEx guarantee the
            accuracy of the information contained on them. If you suffer loss
            from using such third-party product and service, BlockEx will not be
            liable for such loss. In addition, since BlockEx has no control over
            the terms of use or privacy policies of third-party websites, you
            should read and understand those policies carefully.
          </p>
          <p className="text-white"></p>
        </Section>
        {/* <Section title={""}></Section>
        <Section title={""}></Section>
        <Section title={""}></Section>
        <Section title={""}></Section>
        <Section title={""}></Section> */}
      </div>
    </div>
  );
};

export default TermConditions;
