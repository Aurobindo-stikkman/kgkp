import React from "react";

interface Props {
  togglePrivacy: () => void;
}

const PrivacyPolicy: React.FC<Props> = ({ togglePrivacy }) => {
  return (
    <div className="px-4 py-11 mx-auto text-[14px] font-[400] leading-[19.6px] text-[#1A2434] lg:py-[95px] lg:px-40 lg:text-[18px] lg:leading-[21.6px] max-w-[1440px] ">
      <section className="relative flex gap-1 items-center lg:justify-center">
        <svg
          onClick={togglePrivacy}
          className="w-4 h-4 lg:hidden"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Arrow back" clip-path="url(#clip0_1776_6962)">
            <path
              id="Vector"
              d="M13.3346 7.33317H5.2213L8.94797 3.6065L8.0013 2.6665L2.66797 7.99984L8.0013 13.3332L8.9413 12.3932L5.2213 8.6665H13.3346V7.33317Z"
              fill="#1A2434"
            />
          </g>
          <defs>
            <clipPath id="clip0_1776_6962">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <div className="text-[20px] leading-[24px] font-[700] text-[#1A2434] lg:text-[42px] lg:leading-[50.4px] ">
          Privacy Policy
        </div>

        <svg
          onClick={togglePrivacy}
          className="hidden lg:block absolute top-0 right-0 w-10 h-10 cursor-pointer"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="icon-x-circle" clip-path="url(#clip0_1730_4194)">
            <g id="Shape">
              <path
                d="M10.4708 5.52843C10.7311 5.78878 10.7311 6.21089 10.4708 6.47124L8.94216 7.99984L10.4708 9.52843C10.7311 9.78878 10.7311 10.2109 10.4708 10.4712C10.2104 10.7316 9.78829 10.7316 9.52794 10.4712L7.99935 8.94265L6.47075 10.4712C6.2104 10.7316 5.78829 10.7316 5.52794 10.4712C5.26759 10.2109 5.26759 9.78878 5.52794 9.52843L7.05654 7.99984L5.52794 6.47124C5.26759 6.21089 5.26759 5.78878 5.52794 5.52843C5.78829 5.26808 6.2104 5.26808 6.47075 5.52843L7.99935 7.05703L9.52794 5.52843C9.78829 5.26808 10.2104 5.26808 10.4708 5.52843Z"
                fill="#1A2434"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.666016 7.99984C0.666016 3.94975 3.94926 0.666504 7.99935 0.666504C12.0494 0.666504 15.3327 3.94975 15.3327 7.99984C15.3327 12.0499 12.0494 15.3332 7.99935 15.3332C3.94926 15.3332 0.666016 12.0499 0.666016 7.99984ZM7.99935 1.99984C4.68564 1.99984 1.99935 4.68613 1.99935 7.99984C1.99935 11.3135 4.68564 13.9998 7.99935 13.9998C11.3131 13.9998 13.9993 11.3135 13.9993 7.99984C13.9993 4.68613 11.3131 1.99984 7.99935 1.99984Z"
                fill="#1A2434"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_1730_4194">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </section>

      <section className=" mt-4 ">
        This Privacy Policy (the <span className="font-[700] ">“Policy”</span>)
        governs the manner in which the Platform collects, uses, maintains and
        discloses information of its users. The Policy also describes the
        practices that We apply to such user information, user’s privacy rights
        and choices regarding their information. To clarify, this Policy applies
        to all users of the Platform (referred to as{" "}
        <span className="font-[700] ">“Learners”</span>,{" "}
        <span className="font-[700] ">“You”</span>,{" "}
        <span className="font-[700] ">“Your”</span>).
        <div className="mt-4 ">
          By accessing and using the Platform, providing Your Personal
          Information, or by otherwise signalling Your agreement when the option
          is presented to You, You consent to the collection, use, and
          disclosure of information described in this Policy and Terms of Use
          and we disclaim all the liabilities arising therefrom. If You do not
          agree with any provisions of this Policy and/or the Terms of Use, You
          should not access or use the Platform or engage in communications with
          us and are required to leave the Platform immediately. If any
          information You have provided or uploaded on the Platform violates the
          terms of this Policy or Terms of Use, we may be required to delete
          such information upon informing You of the same and revoke Your access
          if required without incurring any liability to You. Capitalized terms
          used but not defined in this Privacy Policy can be found in our Terms
          of Use. Please read this Policy carefully prior to accessing our
          Platform and using any of the services or products offered therein. If
          you have any questions, please contact us at the contact information
          provided below.
        </div>
      </section>

      {/* Section - 1 */}
      <section className="mt-[18px] px-[5px]  ">
        <span className="font-[700] ">1. PERSONAL INFORMATION</span>
        <div className="mt-4">
          “Personal Information” shall mean the information which identifies a
          Learner i.e., first and last name, identification number, email
          address, age, gender, location, photograph and/or phone number
          provided at the time of registration or any time thereafter on the
          Platform.
        </div>
        <div className="mt-4">
          <span className="font-[700] ">
            “Sensitive Personal Information”  
          </span>
          shall include (i) passwords and financial data (except the truncated
          last four digits of credit/debit card), (ii) health data, (iii)
          official identifier (such as biometric data, aadhar number, social
          security number, driver’s license, passport, etc.,), (iv) information
          about sexual life, sexual identifier, race, ethnicity, political or
          religious belief or affiliation, (v) account details and passwords, or
          (vi) other data/information categorized as ‘sensitive personal data’
          or ‘special categories of data’ under the Information Technology
          (Reasonable Security Practices and Procedures and Sensitive Personal
          Data or Information) Rules, 2011, General Data Protection Regulation
          (GDPR) and / or the California Consumer Privacy Act (CCPA) 
          <span className="font-[700] ">(“Data Protection Laws”)</span>  and in
          context of this Policy or other equivalent / similar legislations.
        </div>

        <div className="mt-6  ">
          Usage of the term ‘Personal Information’ shall include ‘Sensitive
          Personal Information’ as may be applicable to the context of its
          usage.
        </div>
      </section>

      {/* Section - 2 */}
      <section className="mt-4  ">
        <span className="font-[700] ">2.INFORMATION WE COLLECT:</span>
        <div className="mt-5">
          We may collect both personal and non-personal identifiable information
          from You in a variety of ways, including, but not limited to, when You
          visit our Platform, register on the Platform, and in connection with
          other activities, services, features or resources we make available on
          our Platform. However, please note that-
        </div>
        <ul className="list-disc pl-6 ">
          <li>
            We do not ask You for Personal Information unless we truly need it;
            like when You are registering for any Content on the Platform.
          </li>
          <li>
            We do not share Your Personal Information with anyone except to
            comply with the applicable laws, develop our products and services,
            or protect our rights.
          </li>
          <li>
            We do not store Personal Information on our servers unless required
            for the on-going operation of our Platform.
          </li>
        </ul>

        <div className="mt-[18px] ">
          <ul className="grid gap-5">
            <li>
              a.{" "}
              <span className="font-[700] ">
                Personal Identifiable Information:
              </span>
               We may collect personal-identifiable information such as Your
              name and emails address to enable Your access to the Platform and
              services/products offered therein. We will collect
              personal-identifiable information from You only if such
              information is voluntarily submitted by You to us. You can always
              refuse to provide such personal identification information;
              however, it may prevent You from accessing services or products
              provided on the Platform or from engaging in certain activities on
              the Platform.
            </li>

            <li>
              b.{" "}
              <span className="font-[700]">
                Non-Personal Identifiable Information:
              </span>
               When You interact with our Platform, we may collect
              non-personal-identifiable information such as the browser name,
              language preference, referring site, and the date and time of each
              user request, operating system and the Internet service providers
              utilized and other similar information.
            </li>
            <li>
              c. <span className="font-[700] ">Cookies:</span>
               To enhance User experience, our Platform may use 'cookies'. A
              cookie is a string of information that a website stores on a
              visitor’s computer, and that the visitor’s browser provides to the
              website each time the visitor returns for record-keeping purposes.
              You may choose to set Your web browser to refuse cookies, or to
              notify You when cookies are being sent; however, please note that
              in doing so, some parts of the Platform may not function properly.
            </li>
          </ul>
        </div>
      </section>

      {/* Section - 3 */}
      <section className="mt-6 ">
        <div className="font-[700] ">
          3. HOW WE USE and SHARE THE INFORMATION COLLECTED
        </div>

        <div className="mx-auto mt-6 px-2 text-center ">
          We may collect and use Your Personal Information for the following
          purposes:
        </div>

        <ul className="mt-4 grid gap-4">
          <li>
            a.{" "}
            <span className="font-[700]">
              To provide access to our Platform and/or the services/products
              offered therein:
            </span>
             We use the Your information as collected by us to allow You to
            access the Platform and the services/products offered therein,
            including without limitation to provide customer service, fulfil
            purchases through the Platform, verify User information and to
            resolve any glitches with our Platform. The legal basis for this
            processing is consent or, where applicable, our legitimate interests
            in the proper administration of our Platform, and/or the performance
            of a contract between You and us.
          </li>

          <li>
            b.{" "}
            <span className="font-[700] ">
              To improve our Platform and maintain safety:
            </span>
             We use Your information to improve and customize the Platform and
            services/products offered by us. Further, we also use Your
            information to prevent, detect, investigate, and take measures
            against criminal activity, fraud, misuse of or damage to our
            Platform or network, and other threats and violations to a third
            party's or our rights and property, or the safety of our Users, or
            others. The legal basis for this processing is consent or, where
            applicable, our legitimate interests in the proper administration of
            our Platform, and/or the performance of a contract between You and
            us.
          </li>

          <li>
            c.{" "}
            <span className="font-[700]">
              To communicate with You or market our services/products:
            </span>
             We may use the email address submitted by You to communicate with
            You about Your orders on our Platform, our offers, new products,
            services or even receive Your feedback on the Platform or any
            services/products offered therein. It may also be used to respond to
            Your inquiries, questions, and/or other requests. If at any time You
            would like to unsubscribe from receiving future emails, please write
            to us at the contact information provided below. The legal basis for
            this processing is consent or, where applicable, our legitimate
            interests in the proper administration of our Platform, and/or the
            performance of a contract between You and us.
          </li>
        </ul>

        <div className="mt-[21px] grid gap-4 ">
          <div>
            We do not use Personal Information for making any automated
            decisions affecting or creating profiles other than what is
            described in this Policy.
          </div>

          <div>
            We do not sell, trade, or otherwise exploit Your
            personal-identifiable information to others. Limited to the purposes
            stated hereinabove, we may share generic aggregated demographic
            information not linked to any personal-identifiable information
            regarding visitors and Users with our business partners and trusted
            affiliates.
          </div>
        </div>
      </section>

      {/* Section - 4 */}
      <section className="mt-6 ">
        <div className="font-[700] ">4. YOUR CHOICES:</div>

        <ul className="mt-6 grid gap-4 ">
          <li>
            a. Limit the information You provide: You always have an option to
            choose the information You provide to us, including the option to
            update or delete Your information. However, please note that lack of
            certain information may not allow You access to the Platform or any
            of its features, in part or in full. For example: information
            required for Your registration on the Platform.
          </li>
          b. Limit the communications You receive from us: Further, You will
          also have the option to choose what kind of communication You would
          like to receive from us. However, there may be certain communications
          that are required for legal or security purposes, including changes to
          various legal agreements, that you may not be able to limit.
          <li>
            c. Reject Cookies and other similar technologies: You may reject or
            remove cookies from Your web browser; You will always have the
            option to change the default settings on Your web browser if the
            same is set to ‘accept cookies’. However, please note that some of
            the services/products offered on the Platform may not function or be
            available to You, when the cookies are rejected, removed or
            disabled.
          </li>
        </ul>
      </section>

      {/* Section - 5 */}
      <section className="mt-6 grid gap-4">
        <div className="font-[700] ">5. YOUR RIGHTS:</div>

        <div className="">
          In general, all Learners have the rights specified herein this
          section. However, depending on where you are situated, you may have
          certain specific rights in respect of your Personal Information
          accorded by the laws of the country you are situated in. To
          understand <span className="font-[700] underline ">Your rights</span>,
          please refer to the 
          <span className="font-[700] underline">
            Country Specific Additional Rights
          </span>
           below.
        </div>

        <div>
          If you are a Learner, you may exercise any of these rights by using
          the options provided to you within the Platform upon your login. If
          however, you are facing any issues or require any clarifications, you
          can always write to us at the address noted in the 
          <span className="font-[700] ">‘Grievances’</span> section below, and
          we will address your concerns to the extent required by the applicable
          law.
        </div>
        <ul className="grid gap-4 ">
          <li className="indent-2.5 ">
            a.{" "}
            <span className="font-[700] ">
              Right to Confirmation and Access:
            </span>
             You have the right to get confirmation and access to your Personal
            Information that is with us along with other supporting information.
          </li>
          <li className="indent-2.5 ">
            b. <span className="font-[700] ">Right to Correction:</span> You
            have the right to ask us to rectify your Personal Information that
            is with us that you think is inaccurate. You also have the right to
            ask us to update your Personal Information that you think is
            incomplete or out-of-date.
          </li>
          <li className="indent-2.5 ">
            c. <span className="font-[700] ">Right to be Forgotten:</span> You
            have the right to restrict or prevent the continuing disclosure of
            your Personal Information under certain circumstances.
          </li>
          <li className="indent-2.5 ">
            d. <span className="font-[700] ">Right to Erasure:</span> If you
            wish to withdraw/remove your Personal Information from our Platform,
            you have the right to request erasure of your Personal Information
            from our Platform. However, please note that such erasure will
            remove all your Personal Information from our Platform (except as
            specifically stated in this Policy) and may result in deletion of
            your account on the Platform permanently, and the same will not be
            retrievable.
          </li>
        </ul>

        <div>
          Remember, you are entitled to exercise your rights as stated above
          only with respect to your information, including Personal Information,
          and not that of other Learners. Further, when we receive any requests
          or queries over email to the address specified in the ‘Grievances’
          section below, then, as per the applicable Data Protection Laws, we
          may need to ask you a few additional information to verify your
          identity in association with the Platform and the request received.
        </div>
      </section>

      {/* Section - 6 */}
      <section className="mt-6 grid gap-4">
        <div className="font-[700] ">6. PROTECTION OF YOUR INFORMATION:</div>
        <div>
          We take all measures reasonably necessary to protect against the
          unauthorized access, use, alteration or destruction of Personal
          Information or such other data on the Platform. Our disclosure of any
          such information is limited to -
        </div>
        <ul className="grid gap-4 ">
          <li>
            a. our employees, contractors and affiliated organizations (if any)
            that (i) need to know that information in order to process it on our
            behalf or to provide services available on our Platform, and (ii)
            that have agreed not to disclose it to others.
          </li>
          <li>
            b. a response to a court order, or other governmental request.
            Without imitation to the foregoing, we reserve the right to disclose
            such information where we believe in good faith that such disclosure
            is necessary to –
            <ul className="list-inside pl-4 gap-4">
              <li className="flex gap-1">
                <span>a.</span>
                comply with applicable laws, regulations, court orders,
                government and law enforcement agencies’ requests;
              </li>
              <li className="flex gap-1">
                <span>b.</span>
                protect and defend a third party's or our rights and property,
                or the safety of our users, our employees, or others; or
              </li>
              <li className="flex gap-1">
                <span>c.</span>prevent, detect, investigate and take measures
                against criminal activity, fraud and misuse or unauthorized use
                of our Platform and/or to enforce our Terms of Use or other
                agreements or policies.
              </li>
            </ul>
          </li>
        </ul>
        <div>
          To the extent permitted by law, we will attempt to give You prior
          notice before disclosing Your information in response to such a
          request.
        </div>
      </section>

      {/* Section - 7 */}
      <section className="mt-6 ">
        <div className="font-[700] ">7. THIRD PARTY WEBSITES</div>

        <div className="mt-7 ">
          You may find links to the websites and services of our partners,
          suppliers, advertisers, sponsors, licensors and other third parties.
          The content or links that appear on these sites are not controlled by
          us in any manner and we are not responsible for the practices employed
          by such websites. Further, these websites/links thereto, including
          their content, may be constantly changing and the may have their own
          terms of use and privacy policies. Browsing and interaction on any
          other website, including websites which have a link to our Site, is
          subject to that terms and policies published on such websites.
        </div>
      </section>

      {/* Section - 8 */}
      <section className="mt-6 ">
        <div className="font-[700] ">8. CROSS-BORDER DATA TRANSFER</div>

        <div className="mt-4 ">
          Your information including any Personal Information is stored,
          processed, and transferred in and to the Amazon Web Service (AWS)
          servers and databases located in India. We may also store, process,
          and transfer information in and to servers in other countries
          depending on the location of our affiliates and service providers.
        </div>

        <div className="mt-4 ">
          Please note that these countries may have differing (and potentially
          less stringent) privacy laws and that Personal Information can become
          subject to the laws and disclosure requirements of such countries,
          including disclosure to governmental bodies, regulatory agencies, and
          private persons, as a result of applicable governmental or regulatory
          inquiry, court order or other similar process.
        </div>

        <div className="mt-4 ">
          If you use our Platform from outside India, including in the USA, EU,
          EEA, and UK, your information may be transferred to, stored, and
          processed in India. By accessing our Platform or otherwise giving us
          information, you consent to the transfer of information to India and
          other countries outside your country of residence.
        </div>
      </section>

      {/* Section - 9 */}
      <section className="mt-6 ">
        <div className="font-[700] ">
          9. DURATION FOR WHICH YOUR INFORMATION IS STORED
        </div>

        <div className="mt-4 ">
          We will retain Your information for as long as it is required for us
          to retain for the purposes stated hereinabove, including for the
          purpose of complying with legal obligation or business compliances.
        </div>

        <div className="mt-4 ">
          Further, please note that we may not be able to delete all
          communications or photos, files, or other documents publicly made
          available by you on the Platform (for example: comments, feedback,
          etc.), however, we shall anonymize your Personal Information in such a
          way that you can no longer be identified as an individual in
          association with such information made available by you on the
          Platform. We will never disclose aggregated or de-identified
          information in a manner that could identify you as an individual.
        </div>

        <div className="mt-4 ">
          Note: If you wish to exercise any of your rights (as specified in 
          <span className="font-[700] ">‘Your Rights’</span>
           section below) to access, modify and delete any or all information
          stored about you, then you may do so by using the options provided
          within the Platform. You can always write to us at the email address
          specified in the ‘Grievances’ section below
        </div>
      </section>

      {/* Section - 10 */}
      <section className="mt-6 ">
        <div className="font-[700] ">10. MODIFICATION TO PRIVACY POLICY:</div>

        <div className="mt-4 ">
          We may modify, revise or change our Policy from time to time; when we
          do, we will revise the ‘updated date’ at the beginning of this page.
          We encourage You to check our Platform frequently to see the recent
          changes. Unless stated otherwise, our current Policy applies to all
          information that we have about You.
        </div>
      </section>

      {/* Grievances */}
      <section className="mt-7 ">
        <div className="font-[700] ">GRIEVANCES:</div>

        <div className="mt-4 ">
          If you have any questions about this Policy, wish to exercise your
          rights, concerns about privacy or grievances, please write to us with
          a thorough description via email to support@rueducation.in.
        </div>
      </section>

      <section className="mt-10 text-[20px] font-[700] leading-[28px] text-center w-[250px] mx-auto ">
        COUNTRY SPECIFIC ADDITIONAL RIGHTS
      </section>

      {/* Last Section */}

      <section className="mt-10 ">
        <div className="flex ">
          <div className="font-[700] ">1. </div>
          <div>
            <span className="font-[700] ">
              TERMS APPLICABLE IF YOU ARE AN INDIAN RESIDENT
            </span>
            <span className="font-[700] ">Your Rights:</span> If you are located
            in India, you may have the following rights under the Personal Data
            Protection Bill (PDPB) when it becomes a legislation. All requests
            can be made by using the option provided to you within the Platform
            upon your login. You may also write to us as stated in the 
            <span className="font-[700] ">“Grievances”</span> section above, and
            we will address you concerns to the extent required by law.
          </div>
        </div>
        <div className="mt-4">
          <span className="font-[700]">
            a. Right to Confirmation and Access:
          </span>
           You have the right to get confirmation and access to your Personal
          Information that is with us along with other supporting information.
        </div>
        <div className="mt-4">
          <span className="font-[700] ">b. Right to Correction:</span> You have
          the right to ask us to rectify your Personal Information that is with
          us that you think is inaccurate. You also have the right to ask us to
          update your Personal Information that you think is incomplete or
          out-of-date.
        </div>
        <div className="mt-4">
          <span className="font-[700] ">c. Right to Data Portability:</span> You
          have the right to ask that we transfer the Personal Information you
          gave us to another organisation, or to you, under certain
          circumstances.
        </div>
        <div className="mt-4">
          <span className="font-[700] ">d. Right to be Forgotten:</span> You
          have the right to restrict or prevent the continuing disclosure of
          your Personal Information under certain circumstances.
        </div>
        <div className="mt-4">
          <span className="font-[700] ">e. Right to Erasure:</span> If you wish
          to withdraw/remove your Personal Information from our Platform, you
          have the right to request erasure of your Personal Information from
          our Platform. However, please note that such erasure will remove all
          your Personal Information from our Platform (except as specifically
          stated in this Policy) and may result in deletion of your account on
          the Platform permanently, and the same will not be retrievable.
        </div>
        <div className="mt-6 ">
          <div className="font-[700] ">
            2.TERMS APPLICABLE IF YOU ARE A RESIDENT OF UNITED KINGDOM (UK), A
            EUROPEAN UNION (EU) COUNTRY OR EUROPEAN ECONOMIC AREA (EEA)
          </div>

          <div className="mt-4 ">
            <span className="font-[700] ">Your Rights:</span> If you are located
            in the United Kingdom (UK) or European Union (EU) or European
            Economic Area (EEA), you have the following rights under the UK and
            EU General Data Protection Regulation (GDPR) respectively. All
            requests should be sent to the address noted in
            the “Grievances” section above, and we will fulfil requests to the
            extent required by applicable law.
          </div>

          <div className="mt-4 grid gap-4 ">
            <div>
              a.
              <span className="font-[700] ">
                Right to access Your Personal Information:
              </span>
               You have the right to receive confirmation as to whether or not
              Personal Information concerning you is being processed and, where
              that is the case, access to the Personal Information can be
              sought;
            </div>
            <div>
              b. <span className="font-[700] ">Right to Rectification:</span>
               Our goal is to keep your Personal Information accurate, current
              and complete. Please contact us if you believe your information is
              inaccurate or incomplete;
            </div>
            <div>
              c. <span className="font-[700] ">Right to Erasure:</span> In some
              cases, you have a legal right to request that we erase your
              Personal Information;
            </div>
            <div>
              d.{" "}
              <span className="font-[700] ">
                Right to object to Processing:
              </span>
               You have the right to object to our processing of your Personal
              Information under certain conditions;
            </div>
            <div>
              e.{" "}
              <span className="font-[700] ">Right to restrict Processing:</span>
               You have the right to request that we restrict the processing of
              your Personal Information, under certain conditions;
            </div>
            <div>
              f. <span className="font-[700] ">Right to Data Portability:</span>
               You have the right to request that we transfer the data that we
              have collected to another organization, or directly to you, under
              certain conditions;
            </div>
            <div>
              g.{" "}
              <span className=" font-[700]">
                Right to make a complaint to a government supervisory authority:
              </span>
               If you believe we have not processed your Personal Information in
              accordance with applicable provisions of the GDPR, we encourage
              you to contact us at email address provided in
              the ‘Grievances’ section above. You also have the right to make a
              GDPR complaint to the relevant Supervisory Authority or seek a
              remedy through the courts. A list of Supervisory Authorities is
              available at: https://edpb.europa.eu/about-edpb/board/members_en.
              If you need further assistance regarding your rights, please
              contact us using the contact information provided below, and we
              will consider your request in accordance with applicable law. You
              can identify the supervising authority of your concern by visiting
              https://edpb.europa.eu/about-edpb/board/members_en.
            </div>
            <div>
              h.{" "}
              <span className="font-[700]">
                Right to not be subject to automated decision-making, including
                profiling:
              </span>
               You have the right not to be subject to a decision based solely
              on automated processing, including profiling, which produces legal
              or similarly significant effects concerning you.
              <div className="flex">
                <div>1. </div>
                <div>
                  We collect and process Personal Information about you only
                  where we have a legal rationale to do so. Specific legal
                  rationale applied for the same will depend on the type of
                  Personal Information collected and the context in which the
                  same is being processed, including the Services involved.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 ">
          <div>
            3.{" "}
            <span className="font-[700] ">
              TERMS APPLICABLE IF YOU ARE A CALIFORNIA STATE RESIDENT
            </span>
          </div>
          <div className="mt-4 ">
            If you are a California state resident, then you have the following
            rights to the extent, and in the manner, set out in the CCPA:
          </div>
          <div className="mt-4 grid gap-4">
            <div>
              a. The right to access the Personal Information that we hold on
              you;
            </div>

            <div>
              b. The right to know what Personal Information we intend on
              collecting from them before the point of collection;
            </div>

            <div>
              c. The right to opt in or out of marketing, analytics, and other
              similar activities;
            </div>

            <div>
              d. The right to equal services without discrimination; and
            </div>

            <div>e. The right to request deletion of Personal Information.</div>

            <div>
              The above rights, the manner in which you can exercise the same
              and the category of and the manner in which we collect your
              information, are detailed below.
            </div>
          </div>
          <div className="flex mt-4">
            <div>1. </div>
            <div className="grid gap-2 ">
              <div className="font-[700] ">CCPA NOTICE AT COLLECTION:</div>
              <div>
                For purposes of the CCPA, in collecting the information
                described above, we collect the categories of Personal
                Information listed below from you:
              </div>
            </div>
          </div>
          <div className="mt-4">
            a. <span className="font-[700] ">Identifiers:</span> We may collect
            your name, email address, mobile number, username, unique personal
            identifier, and Internet Protocol (IP) address. We use Identifiers
            as set forth in the “How We Use and Share the Information Collected”
            section of this Policy, like your name, contact information, and
            device and online identifiers.
          </div>
          <div className="mt-4">
            b.{" "}
            <span className="font-[700] ">
              Characteristics of Personal Information described in the
              California Customer Records statute:
            </span>
             We may collect your name, email address, username, unique personal
            identifier, and gender. We use Categories of Personal Information
            described in the California Consumer Records statute as set forth in
            the ‘How We Use and Share the Information Collected’ section of this
            Policy.
          </div>
          <div className="mt-4">
            c.{" "}
            <span className="font-[700] ">
              Internet or other electronic network activity information:
            </span>
             We collect cookies as described above, we will automatically
            receive information from your browser and your device, which
            includes the date and time of your visit to the Platform as well as
            your location, Internet Protocol (IP) address, domain server,
            browser type, access time, and data about which pages you visit on
            the Platform. We use Internet or other electronic network activity
            information as set forth in the “How We Use and Share the
            Information Collected” section of this Policy.
          </div>
          <div className="mt-4">
            d. <span className="font-[700] ">Geolocation data:</span> We may
            collect your IP address. We may use Geolocation Data as set forth in
            the “How We Use and Share the Information Collected” section of this
            Policy.
          </div>
          <div className="mt-4">
            e.{" "}
            <span className="font-[700] ">
              Audio, electronic, visual or similar information:
            </span>
             We may collect your profile picture or other audio or visual
            information uploaded as content to the Platform. We use audio,
            electronic, visual or similar information as set forth in the “How
            We Use and Share the Information Collected” section of this Policy.
          </div>
          <div className="mt-4">
            f. <span className="font-[700] ">Inferences:</span> We may make
            inferences based upon the Personal Information collected (such as
            likelihood of retention or attrition). We use Inference information
            as set forth in the “How We Use and Share the Information Collected”
            section of this Policy.
          </div>
          <div className="mt-6 font-[700] ">
            2. CCPA DATA PRACTICES DURING THE LAST 12 MONTHS:
          </div>
          <div className="mt-4 ">
            a.{" "}
            <span className="font-[700]">Personal Information collected:</span>
             As described in this Policy, we have collected the categories of
            Personal Information listed below during the preceding 12 months:
            <ul className="list-disc pl-7 ">
              <li>Identifiers</li>
              <li>
                Characteristics of Personal Information described in the
                California Customer Records statute
              </li>
              <li>Internet or other electronic network activity information</li>
              <li>Geolocation data</li>
              <li>Commercial information</li>
              <li>
                Audio, electronic, visual, thermal, olfactory, or similar
                information Inferences
              </li>
            </ul>
          </div>
          <div className="mt-4 ">
            b. <span className="font-[700] ">Categories of sources:</span> We
            have collected the Personal Information identified in this Policy
            from you and our payment processors.
          </div>
          <div className="mt-4 ">
            c.{" "}
            <span className="font-[700] ">
              Business and commercial purposes for collecting:
            </span>
             We have collected the categories of Personal Information listed
            above for the following purposes:
            <ul className="list-disc pl-7">
              <li>Operate the Platform;</li>
              <li>Provide our Services to you;</li>
              <li>Honor our Terms and Conditions and contracts;</li>
              <li>
                Ensure the privacy and security of our Platform and Services;
              </li>
              <li>Manage our relationships with you;</li>
              <li>Communicate with you;</li>
              <li>Analyze use of the Platform and our Services;</li>
              <li>Enhance your experience; Track visits to the Platform;</li>
              <li>
                Provide you with a more personal and interactive experience on
                the Platform; and
              </li>
              <li>Usage analytics purposes.</li>
            </ul>
          </div>
          <div className="mt-4 ">
            d. <span className="font-[700] ">Personal Information sold:</span>
             We have not sold categories of Personal Information during the
            preceding 12 months.
          </div>
          <div className="mt-4 ">
            e.{" "}
            <span className="font-[700] ">
              Personal Information disclosed for a business purpose:
            </span>
             We have disclosed for a business purpose the categories of Personal
            Information listed below during the preceding 12 months:
          </div>
          <ul className="list-disc pl-7 ">
            <li>Identifiers</li>
            <li>Characteristics of Personal Information described in the</li>
            <li>California Customer Records statute</li>
            <li>Internet or other electronic</li>
            <li>network activity information</li>
            <li>Geolocation data</li>
            <li>Commercial information</li>
            <li>
              Audio, electronic, visual, thermal, olfactory, or similar
              information Inferences
            </li>
          </ul>
          <div className="mt-4">
            We have disclosed each category of Personal Information to the
            following categories of third parties: (1) corporate parents,
            subsidiaries, and affiliates; (2) advisors (accountants, attorneys);
            (3) service providers (data analytics, data storage, mailing,
            marketing, website and platform administration, technical support);
            and (4) operating systems and platforms.
          </div>
          <div className="mt-6 font-[700]">
            3. CONSUMER RIGHTS AND REQUESTS UNDER THE CCPA
          </div>

          <div className="mt-4 ">
            The CCPA gives consumers the right to request that we (1) disclose
            what Personal Information we collect, use, disclose, and sell, and
            (2) delete certain Personal Information that we have collected or
            maintained. you may submit these requests to us as described below,
            and we honor these rights where they apply.
          </div>

          <div className="mt-4 ">
            If a request is submitted in a manner that is not one of the
            designated methods for submission, or if the request is deficient in
            some manner unrelated to our verification process, we will either
            (i) treat the request as if it had been submitted in accordance with
            the designated manner, or (ii) provide you with specific directions
            on how to submit the request or remedy any deficiencies with the
            request, as applicable.
          </div>

          <div className="mt-4 ">
            a. <span className="font-[700] ">Request to Know:</span> As a
            California resident, you have the right to request: (1) the specific
            pieces of Personal Information we have collected about you; (2) the
            categories of Personal Information we have collected about you; (3)
            the categories of sources from which the Personal Information is
            collected; (4) the categories of Personal Information about you that
            we have sold and the categories of third parties to whom the
            Personal Information was sold; (5) the categories of Personal
            Information about you that we disclosed for a business purpose and
            the categories of third parties to whom the Personal Information was
            disclosed for a business purpose; (6) the business or commercial
            purpose for collecting, disclosing, or selling Personal Information;
            and (7) the categories of third parties with whom we share Personal
            Information. Our response will cover the 12-month period preceding
            our receipt of a verifiable request.
          </div>

          <div className="mt-4 ">
            b. <span className="font-[700] ">Request to Delete:</span> As a
            California resident, you have a right to request the
            erasure/deletion of certain Personal Information collected or
            maintained by us. As described herein, we will delete your Personal
            Information from our records and direct any service providers (as
            defined under applicable law) to delete your Personal Information
            from their records. However, we are not required to honor a deletion
            request if an exemption applies under the law.
          </div>

          <div className="mt-4 font-[700]">c. Submitting a Request:</div>

          <div className="mt-4 ">
            a. Submission of Instructions: You may submit a request to know or
            to delete by email to the address provided in the ‘Grievances’
            section above or by submitting a request via mail to address
            provided by us in our Terms of Use or the Platform page. Regarding
            requests to delete, we may present you with the choice to delete
            select portions of your Personal Information, but a global option to
            delete all Personal Information will be offered and more prominently
            presented.
          </div>

          <div className="mt-4 ">
            b. Verification Process: We are required by law to verify the
            identities of those who submit requests to know or to delete. To
            determine whether the individual making the request is the consumer
            about whom we have collected information, we will verify your
            identity by matching the identifying information provided by you in
            the request to the Personal Information that we already maintain
            about you. As a part of this process, you will be required to
            provide your name and email address, and mobile number (if the same
            have been voluntarily provided by you at the time of registering on
            the Platform or otherwise while using the Platform). We will inform
            you if we cannot verify your identity. Please note-
          </div>

          <ul className="list-inside indent-7 grid gap-3 ">
            <li>
              a. If we cannot verify the identity of the person making a request
              for categories of Personal Information, we may deny the request.
              If the request is denied in whole or in part for this reason, we
              will provide a copy of, or direct you to, our Privacy Policy.
            </li>

            <li>
              b. If we cannot verify the identity of the person making the
              request for specific pieces of Personal Information, we are
              prohibited from disclosing any specific pieces of Personal
              Information to the requestor. However, if denied in whole or in
              part for this reason, we will evaluate the request as if it is
              seeking the disclosure of categories of Personal Information about
              the consumer.
            </li>

            <li>
              c. If we cannot verify the identity of the person making a request
              to delete, we may deny the request. If there is no reasonable
              method by which we can verify the identity of the requestor to the
              degree of certainty required, we will state this in our response
              and explain why we have no reasonable method by which we can
              verify the identity of the requestor.
            </li>
            <li>
              c. Authorized Agents: Authorized agents may submit requests via
              the methods identified in this Policy. If you use an authorized
              agent to submit a request to know or a request to delete, we may
              require you to: (1) provide the authorized agent with signed
              permission to do so; (2) verify your identity directly with us;
              and (3) directly confirm with us that you provided the authorized
              agent permission to submit the request. However, we will not
              require these actions if you have provided the authorized agent
              with power of attorney pursuant to the California Probate Code.
            </li>

            <li>
              d. Excessive Requests: If requests from a User are manifestly
              unfounded or excessive, in particular because of their repetitive
              character, we may either (1) charge a reasonable fee, or (2)
              refuse to act on the request and notify the User of the reason for
              refusing the request. If we charge a fee, the amount will be based
              upon the administrative costs of providing the information or
              communication or taking the action requested.
            </li>
            <li>
              e. CCPA Non-Discrimination: You have the right not to receive
              discriminatory treatment by us due to your exercise of the rights
              provided by the CCPA. We do not offer financial incentives and
              price or service differences, and we do not discriminate against
              Users/consumers for exercising their rights under the CCPA.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
