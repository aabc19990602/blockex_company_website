import React from "react";
import "./PrivacyStyle.css";
import { IoInformationCircle } from "react-icons/io5";

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

const PrivacyPolicyComp = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <h1 className="bloackChain_h1 text-start">Privacy Policy</h1>
        <p className="text-start text-white py-1" style={{ opacity: 0.5 }}>
          Last Updated: 05 November, 2025
        </p>

        <Section title="INTRODUCTION">
          <p className="text-white ">
            Thank you for visiting BlockEx Trading Platform (“BlockEx”). By
            visiting, accessing, or using BlockEx and associated application
            program interface or mobile applications (“Site”), you consent to
            the policies and practices of our privacy policy (the “Privacy
            Policy”). PLEASE READ THIS PRIVACY POLICY CAREFULLY. This Privacy
            Policy explains how BlockEx uses your Personal Data (defined below)
            as we provide you with access and utility through our digital asset
            trading platform via software, API (application program interface),
            technologies, products and/or functionalities (“Service”). In the
            course of providing you our Service, to abide by the laws in the
            jurisdictions that we operate, and to improve our services, we need
            to collect and maintain personal information about you. As a rule,
            we never disclose any personal information about our customers to
            any non-affiliated third parties, except as described below. We may
            update this Privacy Policy at any time and from time to time by
            posting the amended version on this site.
          </p>
        </Section>

        <Section title="DATA WE COLLECT">
          <p className="text-white">
            BlockEx collects, processes, and stores Personal Data collected from
            you via your use of the Service or where you have given your
            consent. This Personal Data may include:
          </p>

          <ul>
            <ListItem
              label="Virtual Identity: "
              text="BlockEx Account/Password, BlockEx Nickname."
            />
            <ListItem
              label="Financial Information: "
              text="Bank account information, payment card primary account number (PAN), account assets, transaction history, trading data, and/or tax identification."
            />
            <ListItem
              label="Transaction Information: "
              text="Information about the transactions you make on the Platform, such as the name of the recipient, your name, the amount, and/or timestamp."
            />
            <ListItem
              label="Message Content: "
              text="Feedback, Email, SMS, App Rating, Comments."
            />
            <ListItem
              label="Application Activity: "
              text="Browsers and tap records, search history, installed apps, running apps, crash logs, user-generated content, favorites, mouse movement, scroll position, key events, and touch events."
            />
            <ListItem
              label="Device Information: "
              text="Carrier, brand, software version, model name, manufacturer, system language, OS version, locale, fingerprint, Build ID, baseband version, SIM country, SIM serial number, battery status, network, OAID, IMEI, IDFA, GUID, MAC address, Android ID, SSID, Advertising ID and gyroscope/accelerometer data."
            />
            <ListItem
              label="Correspondence: "
              text="Survey responses, information provided to our support team or user research team."
            />
            <ListItem text="Audio, electronic, visual and similar information, such as call and video recordings." />
            <ListItem text="Biometric data about yourself, including facial recognition data, fingerprint data, or other biometric data that may be used as a method of authentication on the Device used to access the Platform." />
          </ul>
        </Section>

        <Section>
          <p className="text-white">
            We may collect information you provide during the BlockEx onboarding
            process, which may be a completed, incomplete, or abandoned process.
            Offering services to residents in certain jurisdictions, we collect,
            store, and process your personal information in accordance with the
            provisions of your local data protection laws such as General Data
            Protection Regulation (GDPR) and Data Protection Act.
          </p>
        </Section>

        <Section>
          <p className="text-white">
            In addition, in order to stay in compliance to applicable Anti-Money
            Laundering laws and regulations, we may collect the following
            Personal Information:
          </p>

          <h3 className="bloackChain_p1 text-start">Individual customers:</h3>
          <ul>
            <ListItem
              // label="Virtual Identity: "
              text="Email address"
            />
            <ListItem
              // label="Financial Information: "
              text="Mobile phone number"
            />
            <ListItem
              // label="Transaction Information: "
              text="Full legal name (including former name, and names in local language)"
            />
            <ListItem
              // label="Transaction Information: "
              text="Nationality"
            />
            <ListItem
              // label="Transaction Information: "
              text="Passport number, or any government issued ID number"
            />
            <ListItem
              // label="Transaction Information: "
              text="Date of birth (“DOB”)"
            />
            <ListItem
              // label="Transaction Information: "
              text="Proof of identity (e.g. passport, driver’s license, or government-issued ID)"
            />
            <ListItem
              // label="Transaction Information: "
              text="Residential address"
            />
            <ListItem
              // label="Transaction Information: "
              text="
              Proof of residency
              "
            />
            <ListItem
              // label="Transaction Information: "
              text="Additional Personal Data or documentation at the discretion of our Compliance Team"
            />
          </ul>
        </Section>
        <Section>
          <h3 className="bloackChain_p1 text-start">Corporate customers:</h3>
          <ul>
            <ListItem
              // label="Virtual Identity: "
              text="Corporate legal name (including the legal name in local language)"
            />
            <ListItem
              // label="Financial Information: "
              text="Incorporation/registration Information"
            />
            <ListItem
              // label="Transaction Information: "
              text="Full legal name of all beneficial owners, directors, and legal representatives"
            />
            <ListItem
              // label="Transaction Information: "
              text="Address (principal place of business and/or other physical locations)"
            />
            <ListItem
              // label="Transaction Information: "
              text="Proof of legal existence"
            />
            <ListItem
              // label="Transaction Information: "
              text="Description of the business"
            />
            <ListItem
              // label="Transaction Information: "
              text="Percentage of ownership for Individual/corporate owners"
            />
            <ListItem
              // label="Transaction Information: "
              text="Contact information of owners, principals, and executive management (as applicable)"
            />
            <ListItem
              // label="Transaction Information: "
              text="
              Proof of identity (e.g., passport, driver’s license, or government-issued ID) for significant individual beneficial owner of the institutional customer entity
              "
            />
            <ListItem
              // label="Transaction Information: "
              text="Personal Data for each entity’s significant beneficial owner of the institutional customer entity (see the “Individual Customer” section above for details on what Personal Data we collect for individuals)"
            />
            <ListItem
              // label="Transaction Information: "
              text="Source of wealth"
            />
            <ListItem
              // label="Transaction Information: "
              text="Amount of bitcoin or other digital assets projected to be injected"
            />
          </ul>
        </Section>
        <Section title="ACCESS, CORRECTION, DELETION AND OTHER RIGHTS RELATING TO YOUR PERSONAL DATA">
          <p className="text-white">
            Subject to applicable law, as outlined below, you have a number of
            rights in relation to your privacy and the protection of your
            Personal Data. You have the right to request access to, correct, and
            delete your Personal Data, and to ask for data portability. You may
            also object to our processing of your Personal Data or ask that we
            restrict the processing of your Personal Data in certain instances.
            In addition, when you consent to our processing of your Personal
            Data for a specified purpose, you may withdraw your consent at any
            time. If you want to exercise any of your rights outlined below,
            please contact our Data Protection Officer by email via:{" "}
            <span>
              <a
                href="mailto:info@exchangeblockex.com"
                className="privacy-email-link"
              >
                info@exchangeblockex.com
              </a>
            </span>
            . These rights may be limited in some situations — for example,
            where we are required by applicable laws or AML compliance practices
            to process your Personal Data.
          </p>

          <ul>
            <ListItem
              label="Right to access: "
              text="You have the right to obtain confirmation that your Personal Data are processed and to obtain a copy of it as well as certain information related to its processing."
            />
            <ListItem
              label="Right to rectify: "
              text="You can request the rectification of your Personal Data which are inaccurate, and also add to it. You can also change your Personal Data in your Account at any time."
            />
            <ListItem
              label="Right to delete: "
              text="You can, in some cases, have your Personal Data deleted."
            />
            <ListItem
              label="Right to object: "
              text="You can object, for reasons relating to your particular situation, to the processing of your Personal Data. For instance, you have the right to object where we rely on legitimate interest or where we process your Personal Data for direct marketing purposes."
            />
            <ListItem
              label="Right to restrict processing: "
              text="You have the right, in certain cases, to temporarily restrict the processing of your Personal Data by us, provided there are valid grounds for doing so. We may continue to process your Personal Data if it is necessary for the defense of legal claims, or for any other reasons permitted by applicable law."
            />
            <ListItem
              label="Right to portability: "
              text="In some cases, you can ask to receive your Personal Data which you have provided to us in a structured, commonly used and machine-readable format, or, when this is possible, that we communicate your Personal Data on your behalf directly to another data controller."
            />
            <ListItem
              label="Right to withdraw your consent: "
              text="For processing requiring your consent, you have the right to withdraw your consent at any time. Exercising this right does not affect the lawfulness of the processing based on the consent given before the withdrawal of the latter."
            />
          </ul>

          <p className="text-white">
            Exercising of your rights above may impact the form and substance of
            the Services we provide to you, and in some circumstances, such
            exercise may mean that we will not be able to continue providing the
            Services to you, and we may need to terminate the contract you have
            with us.
          </p>

          <p className="text-white">
            We may charge you a reasonable fee for the handling and processing
            of your requests to access your personal data. If we choose to
            charge a fee, we will provide you with a written estimate of the fee
            that we will be charging. Please note that we are not required to
            respond to or deal with your request for access unless you have
            agreed to pay the fee.
          </p>
        </Section>

        <Section title="COLLECTION OF PERSONAL DATA">
          <p className="text-white">
            You will directly provide us with most of the personal information
            we are collecting. In the following situations, we will collect and
            process your information:
          </p>

          <ul
            className=""
            style={{
              listStyleType: "lower-alpha",
              color: "white",
            }}
          >
            <li className="text-white" style={{ fontSize: 16 }}>
              When you sign up online, log in or access BlockEx, or use any
              BlockEx service;
            </li>
            <li className="text-white" style={{ fontSize: 16 }}>
              When you voluntarily complete any user survey or provide feedback
              to us, through email or any other channel;
            </li>
            <li className="text-white" style={{ fontSize: 16 }}>
              Cookies through your browser or software when you use or browse
              our web pages or clients.
            </li>
            <li className="text-white" style={{ fontSize: 16 }}>
              Other situations of self-collecting information mentioned in this
              agreement.
            </li>
          </ul>

          <p className="text-white">
            We may also obtain information from public channels or third-party
            channels, such as our advertising and market research partners,
            including updating or supplementing other collected information
            about you.
          </p>
        </Section>
        <Section title="USE OF PERSONAL DATA">
          <p className="text-white">
            We can use your Personal Data in the following ways:
          </p>

          <ul
            className="pl-6"
            style={{ listStyleType: "lower-alpha", color: "white" }}
          >
            <li className="text-white" style={{ fontSize: 16 }}>
              <strong className="privacy-label">
                Compliance with laws and regulations:
              </strong>
              <p>
                Most of our services are subject to laws and regulations,
                requiring us to collect, use and store your Personal Data in
                specific ways. For example, BlockEx must identify and verify
                customers that are using our services to comply with
                cross-jurisdictional anti-money laundering laws. This includes
                collecting and storing photos of your ID. We will have to close
                your account if you do not provide the personal information as
                required by law.
              </p>
            </li>
            <li className="text-white" style={{ fontSize: 16 }}>
              <strong className="privacy-label">
                Enforce the terms of this agreement:
              </strong>{" "}
              <p>
                We actively monitor, investigate, prevent and mitigate any
                potential prohibited or illegal activities, enforce our
                agreements with third parties, and prevent and inspect
                violations of this Agreement. In addition, we may need to charge
                you for your use of our services. We collect information about
                your account usage and closely monitor your interactions with
                our services. We may use any personal information we collected
                about you for these purposes.
              </p>
            </li>
            <li className="text-white" style={{ fontSize: 16 }}>
              <strong className="privacy-label">
                Detection and prevention of fraud and/or loss of funds:
              </strong>{" "}
              <p>
                We process your personal information to help detect, prevent and
                reduce fraud and abuse of our services, and to protect your
                account security.
              </p>
            </li>
            <li className="text-white" style={{ fontSize: 16 }}>
              <strong className="privacy-label">Provide services:</strong>
              <p>
                We will require access to your personal information in order to
                provide you with services. For example, when you wish to use the
                OTC service on our platform, we will require specific
                information such as your identity, contact information, and
                payment information, or we cannot provide you with services
                without such information. Third parties such as identity
                verification service providers may also collect your personal
                information when providing identity verification and/or fraud
                prevention services.
              </p>
            </li>
            <li className="text-white" style={{ fontSize: 16 }}>
              <strong className="privacy-label">
                Provide service communication:
              </strong>{" "}
              <p>
                We will send you management or account-related information to
                let you know about the latest information about our services, to
                notify you of related security issues or updates, or to provide
                other trade-related information. Without these communications,
                you may not be aware of the important developments related to
                your account, which may affect your use of our services. You
                cannot choose to refuse to receive critical service
                communications, such as emails or text messages sent for legal
                or security purposes.
              </p>
            </li>
            <li className="text-white" style={{ fontSize: 16 }}>
              <strong className="privacy-label">
                Provide customer service:
              </strong>{" "}
              <p>
                We will access your personal information when you contact us to
                resolve any issues. We will not be able to respond to your
                request and ensure that you use the service uninterrupted if you
                do not process your personal information.
              </p>
            </li>
            <li className="text-white" style={{ fontSize: 16 }}>
              <strong className="privacy-label">
                Ensure network and information security:
              </strong>{" "}
              <p>
                We will process your personal information to improve security,
                monitor and verify your identity and access to our services,
                combat spam or other malicious software or security risks, and
                comply with applicable security laws and regulations. It is
                especially important that we obtain timely and accurate
                information about how you use our services. We may not be able
                to ensure the security of our services if you do not process
                your personal information.
              </p>
            </li>
            <li className="text-white" style={{ fontSize: 16 }}>
              <strong className="privacy-label">
                For research and development:
              </strong>{" "}
              <p>
                We will access your personal information to better understand
                how you use and interact with our services. In addition, we will
                also use this information to customize and improve the content
                and layout of our services, as well as to develop further
                services. We may not be able to ensure that you will be able to
                continue to enjoy our services if you do not process your
                personal information.
              </p>
            </li>
            <li className="text-white" style={{ fontSize: 16 }}>
              <strong className="privacy-label">
                Enhance your experience:
              </strong>{" "}
              <p>
                We will access your personal information to provide you with a
                personalized experience and to fulfill your needs. For example,
                you can allow us to access certain personal information stored
                by third parties. We may not be able to ensure that you can
                continue to enjoy some or all of our services if you do not
                process your personal information.
              </p>
            </li>
            <li className="text-white" style={{ fontSize: 16 }}>
              <strong className="privacy-label">
                To facilitate company acquisitions, mergers or trades:
              </strong>{" "}
              <p>
                We may access any information about your account and your use of
                our services in the event of a corporate acquisition, merger or
                other corporate transaction. If you do not wish for your
                personal information to be processed for these purposes, you may
                choose to close your account.
              </p>
            </li>
            <li className="text-white" style={{ fontSize: 16 }}>
              <strong className="privacy-label">
                Engage in marketing activities:
              </strong>{" "}
              <p>
                We may send you marketing communications (such as emails or text
                messages) to inform you about our events or the activities of
                our partners, to provide targeted marketing, and to offer you
                promotional offers. Our marketing strategy will be based on your
                advertising and marketing preferences and as permitted by
                applicable law. If you do not wish for us to send you marketing
                information, please submit a request to our Personal Data
                Protection Officer at{" "}
                <a
                  href="mailto:info@exchangeblockex.com"
                  className="privacy-email-link"
                >
                  info@exchangeblockex.com
                </a>
                .
              </p>
            </li>
            <li className="text-white" style={{ fontSize: 16 }}>
              <strong className="privacy-label">For any other purpose:</strong>{" "}
              <p>
                We may disclose your personal information for any purpose that
                you have consented to.
              </p>
            </li>
          </ul>
        </Section>
        <Section>
          <p className="text-white">
            Notwithstanding the foregoing, we may also share your Personal Data
            to the below persons or entities under circumstances specified
            below:
          </p>

          <ul
            className="pl-6"
            style={{ listStyleType: "lower-alpha", color: "white" }}
          >
            <li className="text-white" style={{ fontSize: 16 }}>
              <strong className="privacy-label">Affiliates:</strong>
              <p>
                Personal information that we process and collect may be
                transferred between BlockEx companies as a normal part of
                conducting business and offering our Services to you.
              </p>
            </li>
            <li className="text-white" style={{ fontSize: 16 }}>
              <strong className="privacy-label">
                Third party service providers:
              </strong>{" "}
              <p>
                We employ other companies and individuals to perform functions
                on our behalf. Examples include analysing data, providing
                marketing assistance, processing payments, transmitting content,
                assessing and managing credit risk, and coding and developing of
                BlockEx related mobile and/or other forms of portable
                applications (including BlockEx application on Google Play/Apple
                App Store). These third-party service providers only have access
                to personal information needed to perform their functions but
                may not use it for other purposes. Further, they must process
                the personal information in accordance with our contractual
                agreements and only as permitted by applicable data protection
                laws.
              </p>
            </li>
            <li className="text-white" style={{ fontSize: 16 }}>
              <strong className="privacy-label">Legal Authorities:</strong>{" "}
              <p>
                We may be required by law or by Court to disclose certain
                information about you or any engagement we may have with you to
                relevant regulatory, law enforcement and/or other competent
                authorities. We will disclose information about you to legal
                authorities to the extent we are obliged to do so according to
                the law. We may also need to share your information in order to
                enforce or apply our legal rights or to prevent fraud.
              </p>
            </li>
            <li className="text-white" style={{ fontSize: 16 }}>
              <strong className="privacy-label">Business transfers:</strong>
              <p>
                As we continue to develop our business, we might sell or buy
                other businesses or services. In such transactions, user
                information generally is one of the transferred business assets
                but remains subject to the promises made in any pre-existing
                Privacy Notice (unless, of course, the user consents otherwise).
                Also, in the unlikely event that BlockEx or substantially all of
                its assets are acquired by a third party, user information will
                be one of the transferred assets.
              </p>
            </li>
            <li className="text-white" style={{ fontSize: 16 }}>
              <strong className="privacy-label">
                Protection of BlockEx and others:
              </strong>{" "}
              <p>
                We release accounts and other personal information when we
                believe release is appropriate to comply with the law or with
                our regulatory obligations; enforce or apply our User Agreement
                and other agreements; or protect the rights, property or safety
                of BlockEx, our users or others. This includes exchanging
                information with other companies and organisations for fraud
                protection and credit risk reduction.
              </p>
            </li>
          </ul>
          <p className="text-white">
            BlockEx will not provide, sell, lease, share or trade your personal
            information to any unrelated third party, unless we have obtained
            your prior consent, unless the third party and BlockEx (including
            our affiliates) individually or jointly has provided the service to
            you, and after the end of the service, the access to such
            information, including all information that was once previously
            accessible, will be denied. BlockEx also does not allow any third
            parties to collect, edit, sell or distribute your personal
            information by any means. If any BlockEx user engages in the above
            activities, upon discovery, BlockEx has the right to terminate the
            service agreement with the user immediately.
          </p>
          <p className="text-white">
            If you are not a natural person with full capacity for civil rights
            and civil conduct, you are not authorized to use the service.
            Henceforth, BlockEx hopes that you do not provide any of your
            personal information.
          </p>
        </Section>
        <Section title={"INFORMATION STORAGE"}>
          <p className="text-white">
            The information and materials we collect about you will be kept on
            the servers of BlockEx and/or its affiliated companies, and may be
            transferred to countries, regions or places outside of the country
            where the information and materials were collected by BlockEx, and
            may be visited, stored and displayed outside the country where it
            originated from. By submitting your personal data, you agree to this
            transfer, storing and/or processing. More information about the
            transfer out of the EU, of personal data and/or information relating
            to users who are located in the EU, can be found in the section
            titled "Additional Provisions for EU Users Only".
          </p>
        </Section>
        <Section title={"CROSS-BORDER TRANSFER OF INFORMATION"}>
          <p className="text-white">
            To facilitate our global operations, BlockEx may transfer your
            personal information outside of the European Economic Area (“EEA”).
            Transfers outside of the EEA are sometimes referred to as “third
            country transfers”.
          </p>
          <p className="text-white">
            We may transfer your personal information to our Affiliates,
            third-party partners, and service providers based throughout the
            world. In cases where we intend to transfer personal information to
            third countries or international organisations outside of the EEA,
            BlockEx puts in place suitable technical, organizational and
            contractual safeguards (including Standard Contractual Clauses), to
            ensure that such transfer is carried out in compliance with
            applicable data protection rules.
          </p>
          <p className="text-white">
            We also rely on decisions from the European Commission where they
            recognise that certain countries and territories outside of the
            European Economic Area ensure an adequate level of protection for
            personal information. These decisions are referred to as “adequacy
            decisions”.
          </p>
        </Section>
        <Section title={"COOKIES"}>
          <p className="text-white">
            Installation of Cookies. When you visit the Platform, the Platform
            will use Google Stats via Cookies to record the Platform’s
            performance and check the effectiveness of online advertising.
            Cookies are a small amount of data that is sent to your browser and
            stored in your computer hard drive. Only when you use your computer
            to access the Platform can the Cookies be sent to your computer hard
            drive.
          </p>
          <p className="text-white">
            Function of Cookies. Cookies are frequently used to record the
            habits and preferences of visitors when they browse various items on
            the Platform. Cookies collect anonymous collective statistics which
            do not contain Personal Data. Cookies cannot be used to obtain data
            from your hard drive, your email address or Personal Data; they can
            enable the Platform or a service provider’s system to recognize your
            web browser as well as capture and remember information.
          </p>
          <p className="text-white">
            Disabling Cookies. Most browsers are preset to accept Cookies and
            you can choose to set their web browsers to reject Cookies or to
            notify you upon the installation of Cookies. You should be aware
            that they may be unable to start or use certain features of the
            Platform if they opt to disable Cookies. However, if you choose to
            reject the cookies, you may not be able to log in or use our
            platform services or functions that rely on such cookies. This
            paragraph shall apply to any relevant information obtained through
            cookies set forth by BlockEx.
          </p>
        </Section>
        <Section title={"INFORMATION SECURITY"}>
          <p className="text-white">
            Your account is secure and protected, please preserve your account
            and password information properly. We will ensure that your
            information is not lost, abused and altered by storing backups of
            other servers and encrypting the user passwords. In spite of the
            aforementioned security measures, please note that there are no
            "perfect security measures" on the information network. When using
            our platform services for online trades, you will inevitably
            disclose your personal information, such as contact information or
            postal address, to the counterparty or other potential
            counterparties. Please protect your personal information and provide
            it to others only if necessary. If you find that your personal
            information have been leaked, especially your account and password,
            please contact our customer service immediately so that we can take
            appropriate measures.
          </p>
          <p className="text-white">
            We will retain personal data in accordance with the Personal Data
            Protection Act and/or other applicable laws. That is, we will
            destroy or anonymize your personal data when we have reasonably
            determined that (i) the purpose for which that the personal data was
            collected is no longer being served by the retention of such
            personal data; (ii) retention is no longer necessary for any legal
            or business purposes; and (iii) no other legitimate interests
            warrant further retention of such personal data. If you cease to use
            our Services, we may continue storing, using and/or disclosing your
            personal data in accordance with this Privacy Policy and our
            obligations under the Personal Data Protection Act and/or other
            applicable laws.
          </p>
        </Section>
        <Section title={"ACCOUNT DELETION"}>
          <p className="text-white">
            You may delete your BlockEx account at any time, the consequences of
            account deletion include but not limited to the following:
          </p>
          <ul
            className="pl-6"
            style={{
              listStyleType: "lower-alpha",
              color: "white",
              fontSize: "16px",
            }}
          >
            <li className="li-text">
              You will lose all digital assets and data contained in this
              account.
            </li>
            <li className="li-text">
              You will not be able to recover the personal information,
              transaction records, business data, and historical information
              under the account.
            </li>
            <li className="li-text">
              You will not be able to use this account to log in to BlockEx’s
              services.
            </li>
          </ul>
          <div className="alert alert-info" role="alert">
            <h2 className="fw-bold">
              {" "}
              <IoInformationCircle /> IMPORTANT
            </h2>
            The account cannot be recovered once it is deleted. To protect your
            rights, we will remind you of the risks again after you select the
            button to Delete Account.
          </div>
          <p className="text-white">
            The deletion of your account does not mean that all your account
            operations and responsibilities before account deletion are exempted
            or mitigated. All records and information associated with your
            account will be deleted. However, we may retain certain information
            of your account as required by applicable law and regulations.
          </p>
        </Section>
        <Section title={"EU-ONLY PROVISIONS"}>
          <p className="text-white">
            The provisions in this Section only apply if you are a user who is
            located in the European Union ("EU"). These provisions take
            precedence over any inconsistent provisions in the remainder of this
            Privacy Policy.
          </p>
          <p className="text-white">
            Your Personal Data may be transferred outside of the EU. In such
            cases, we take all reasonable precautions to apply the appropriate
            or suitable safeguards set forth by the GDPR, for example, we
            implemented measures such as appropriate contractual clauses to
            ensure that the recipients of such transfers will protect and treat
            your personal data in accordance with all applicable personal data
            protection laws.
          </p>
          <p className="text-white">
            You are entitled to exercise the following rights in accordance with
            the GDPR:
          </p>
          <ul
            className="pl-6"
            style={{
              listStyleType: "lower-alpha",
              color: "white",
              fontSize: "16px",
            }}
          >
            <li className="li-text">
              The right to access the personal information concerning
              themselves, to correct or rectify inaccurate information and, when
              applicable, to object to data processing; b) the right of erasure
              of those data that either have been collected solely based on your
              consent, or they are no longer needed to perform the purpose(s)
              for which they were collected for;
            </li>
            <li className="li-text">
              The right of erasure of those data that either have been collected
              solely based on your consent, or they are no longer needed to
              perform the purpose(s) for which they were collected;
            </li>
            <li className="li-text">
              The right to restrict processing when such data are no longer
              needed to perform the purpose(s) for which they were collected;
            </li>
            <li className="li-text">
              The right to have personal information provided in a structured,
              commonly used and machine-readable format;
            </li>
            <li className="li-text">
              The right to withdraw consent at any time and without any
              detriment, as long as the personal data processing is based
              exclusively on your consent.
            </li>
          </ul>
        </Section>
        <Section title={"CONTACT"}>
          <p className="text-white">
            Our data protection officer can be contacted via email at
            <span>
              <a
                href="mailto:info@exchangeblockex.com"
                className="privacy-email-link"
              >
                info@exchangeblockex.com
              </a>
            </span>{" "}
            and will work to address any questions or issues that you have with
            respect to the collection and processing of your personal
            information
          </p>
        </Section>
        <Section title={"NOTICES AND REVISIONS"}>
          <p className="text-white">
            If you have any concerns about privacy at BlockEx, please do not
            hesitate to contact, we aim to respond to your enquiries as soon as
            reasonably practicable.
          </p>
          <p className="text-white">
            Our business changes regularly, and our Privacy Notice may change
            too. You should check our websites frequently to see recent changes.
            Unless stated otherwise, our current Privacy Notice applies to all
            information that we have about you and your account.
          </p>
          <p className="text-white">
            Our Privacy Notice is unrelated to Privacy Notice or Policy of any
            third parties, such as Trading View or other parties not privy to
            this Privacy Notice.
          </p>
        </Section>
       
      </div>
    </div>
  );
};

export default PrivacyPolicyComp;
