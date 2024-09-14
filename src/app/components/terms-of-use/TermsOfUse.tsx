import React from "react";

interface TermsOfUseProps {
  toggleTerms: () => void;
}

const TermsOfUse = ({ toggleTerms }: TermsOfUseProps) => {
  return (
    <div className="px-6 py-11 text-[14px] font-[400] leading-[19.6px] text-[#1A2434] lg:py-[95px] lg:px-40 lg:text-[18px] lg:leading-[21.6px] ">
      <section className="relative flex gap-1 items-center lg:justify-center">
        <svg
          onClick={toggleTerms}
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
          Terms of Use
        </div>

        <svg
          onClick={toggleTerms}
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

      <section className="mt-4 lg:mt-8">
        These Terms of Use set out the terms and conditions for use of this RU
        Eduction Pvt. Ltd. <span className="font-[700]">( “Website”)</span> and
        any content, Public Forums, or services offered on or through the
        Website and/or through any mobile application(s)
        <span className="font-[700]">( “Application”)</span> (collectively
        referred to as the  <span className="font-[700]">“Platform”</span>).
      </section>

      <section className="mt-6 lg:mt-9">
        These Terms of Use apply to end users of the Website (referred to as 
        <span className="font-[700]">“Learners”, “You”, “Your”</span>). These
        Terms of Use, including the 
        <span className="text-[#0051FF]">Privacy Policy</span> and any other
        terms and conditions published on the Platform or communicated to you
        from time to time (collectively referred to as the “Agreement”), define
        the relationship and responsibilities between You and Creator (as
        defined herein) in using the Platform. Your access to the Platform is
        subject to Your acceptance of this Agreement. Hence, please take Your
        time to read this Agreement.
      </section>

      <section className="mt-[19px] lg:mt-[50px] ">
        When we speak of 
        <span className="font-[700]"> “Creator”, ‘we’, ‘us’</span>, and 
        <span className="font-[700]">‘our’</span>, we collectively mean RU
        Eduction Pvt. Ltd. being the creator of this Platform and the
        content/materials/services contained therein.
      </section>

      <section className="mt-5 lg:mt-11">
        By accessing this Platform, You are agreeing to be bound by the terms of
        this Agreement, all applicable laws and regulations. From time-to-time,
        versions of the above-mentioned policies and terms are made available on
        the Platform for Your reference and to understand how we handle Your
        personal information. By using or visiting the Platform and services
        provided to You on, from, or through the Platform, You are expressly
        agreeing to the terms of the Agreement and any other terms that are
        updated from time to time.
      </section>

      <section className="mt-3 lg:mt-8">
        If You disagree with any part of this Agreement or do not wish to be
        bound by the same, then please do not use the Platform in any manner.
      </section>

      <section className="mt-10 lg:mt-[50px] flex gap-2">
        <section className="font-[700]">1. </section>
        <section>
          <span className="font-[700]">Access and Registration:</span> If You’re
          an individual You must be at least 18 (eighteen) years of age, or, if
          You are between the ages of 13 and 18, You must have Your parent or
          legal guardian's permission to use the Platform. By using the
          Platform, You are, through Your actions, representing and warranting
          to us that You have obtained the appropriate consents/permissions to
          use the Platform. If You are under the age of 13 years or 16 years
          (depending on your country of residence), You may neither use our
          Platform in any manner nor may You register for any content or
          services offered therein.
        </section>
      </section>

      <section className="mt-9 lg:mt-[50px]">
        To access any Content (as defined below) offered on the Platform, we
        require You to register for the same by providing Your name and email
        address. Please read our Privacy Policy to understand how we handle Your
        information. Further, You may also be required to make payment of a fee
        to access the Content, if applicable. For more information, please read
        our ‘Payments & Refunds’ section below. You represent that the
        information indicated by You during Your enrolment or registration for
        any Content on the Platform, is true and complete, that You meet the
        eligibility requirements for use of the Platform and the Content offered
        therein, and You agree to update us upon any changes to the information
        by writing to us at the contact information provided in the ‘Contact Us’
        section below.
      </section>

      <section className="mt-4 lg:mt-8">
        For the purpose of this Agreement, 
        <span className="font-[700]">“Content” </span> shall mean and include
        any course or session (whether pre-recorded or live) published by the
        Creator on the Platform, including, but not limited to any reference
        materials and text files (if any) offered to You as part of the Content.
      </section>

      <section className="mt-8 lg:mt-[50px]">
        When You register or enrol for any Content on the Platform, You may also
        have access to discussion forums that enables You to exchange Your
        thoughts, knowledge in relation to the Content or its subject-matter,
        with us and other registrants to the Content 
        <span className="font-[700]">(“Public Forum”)</span>. Participating in
        the Public Forum is completely Your choice and by registering or
        enrolling to a Content on the Platform, You are not obligated to
        participate in such Public Forum.
      </section>

      <section className="mt-6 lg:mt-9">
        We maintain and reserve the right to refuse access to the Platform or
        remove content posted by You in the Public Forums, at any time without
        notice to You, if, in our opinion, You have violated any provision of
        this Agreement.
      </section>

      <section className="mt-8 lg:mt-11">
        Further, to access the Platform and/or view the content on the Platform,
        You will need to use a 
        <span className="font-[700]">“Supported/Compatible Device”</span>
         which means a personal computer, mobile phone, portable media player,
        or other electronic device that meets the system and compatibility
        requirements and on which You are authorized to operate the Platform.
        The Supported/Compatible Devices to access the Platform may change from
        time to time and, in some cases, whether a device is (or remains) a
        Supported/Compatible Device may depend on software or systems provided
        or maintained by the device manufacturer or other third parties.
        Accordingly, devices that are Supported/Compatible Devices at one time
        may cease to be Supported/Compatible Devices in the future. Thus, kindly
        make sure that the device that You use is compatible with any of the
        systems/software used on the Platform to access the content/material
        offered therein.
      </section>

      {/* Number - 2 */}
      <section className="mt-6 flex gap-2 lg:mt-10 ">
        <section className="font-[700]">2. </section>
        <section>
          <span className="font-[700]">License to Use:</span> You are granted a
          limited, non-exclusive license to access and view the Content on the
          Platform for Your own personal, non-commercial use only. Further, if
          so allowed on the Platform, You may temporarily download one copy of
          any downloadable Content [including Creator Content (defined below)]
          on the Platform for personal and non-commercial transitory viewing
          only.
        </section>
      </section>

      <section className="mt-[22px] grid gap-4 lg:mt-9">
        This license does not grant You the right to assign or sublicense the
        license granted under this Agreement to anyone else. Further, You may
        not-
        <section className="indent-2.5">
          a. modify, edit or copy the Content, Creator Content or any material
          made available on the Platform;
        </section>
        <section className="indent-2.5">
          b. create derivative works or exploit any material made available on
          the Platform (including the Content and Creator Content) or any
          portion thereof (including, but not limited to any copyrighted
          material, trademarks, or other proprietary information contained
          therein) in manner that is not permitted under this license granted to
          You;
        </section>
        <section className="indent-2.5">
          c. publicly display (commercially or non-commercially) the Content,
          Creator Content or any material made available on the Platform or
          otherwise use the same for any commercial purpose;
        </section>
        <section className="indent-2.5">
          d. attempt to decompile or reverse engineer any software contained in
          the Platform;
        </section>
        <section className="indent-2.5">
          e. remove any copyright or other proprietary notations from the
          Content, Creator Content or any material made available on the
          Platform; or
        </section>
        <section className="indent-2.5">
          f. transfer the any material made available on the Platform to another
          person or 'mirror' the same on any other server.
        </section>
      </section>

      <section className="mt-4 lg:mt-7">
        For the purpose of this Agreement, 
        <span className="font-[700]">“Creator Content”</span> shall mean and
        include any audio files, video files, audio-visual files, images, text
        materials (including .doc, .docx, and .pdfs) (other than the Content)
        uploaded or otherwise published on the Platform by the Creator to be
        accessed by You, including, but not limited to any such content/material
        posted by the Creator in any Public Forum (defined below).
      </section>

      <section className="mt-[23px] lg:mt-9">
        This license shall automatically terminate if You violate any of these
        restrictions and may be terminated by us at any time. Upon termination
        of this license granted to You or Your viewing of any material on the
        Platform (including Content and Creator Content), You must destroy any
        downloaded materials in Your possession (whether in electronic or
        printed format).
      </section>

      {/* Number - 3 */}
      <section className="mt-6 flex gap-2 lg:mt-9">
        <section className="font-[700]">3. </section>
        <section>
          <span className="font-[700] ">Communications:</span> The Platform
          includes provision and facilitation of Public Forums designed to
          enable You to communicate with us and other registrants to the Content
          You have registered for. As stated above, use of these Public Forums
          are completely your choice and by registering for a Content, you are
          not obligated to participate in the Public Forum. However, if You
          choose to participate, You agree to adhere to the terms specified in
          the 
          <span className="font-[700] ">‘Code of Conduct’</span> section
          hereinbelow and such other terms as may be published on our Platform.
          If it comes to our notice that Your conduct is in violation of the
          terms of this Agreement, then we may terminate or suspend Your access
          to any Public Forums at any time, without notice, for any reason. You
          represent and warrant that You own and control all rights in and to
          any content (including without limitation chats, postings, or
          materials) uploaded or posted by You on the Public Forums or anywhere
          on the Platform 
          <span className="font-[700] ">(“Learner Content”</span>), or that You
          are licensed to use and reproduce such Learner Content. We are not
          responsible for the information that You choose to share on the Public
          Forums, or for the actions of other users therein. You further
          understand and agree that You, shall be solely responsible for the
          Learner Content including its legality, reliability, accuracy, and
          appropriateness, and the consequences of its publication.
        </section>
      </section>

      <section className="mt-5 lg:mt-8">
        Further, if you do post content or submit any Learner Content on the
        Platform, and unless otherwise indicated by You in writing (emails
        included) to us, You hereby grant us a non-exclusive, royalty-free,
        irrevocable, perpetual and fully sublicensable rights to use, reproduce,
        modify, adapt, publish, translate, create derivative works from,
        distribute, and display such Learner Content throughout the world in any
        media.
      </section>

      {/* Number 4. */}
      <section className="mt-6 grid gap-4 lg:mt-9">
        <section className="flex gap-2">
          <section className="font-[700]">4. </section>
          <section>
            <span className="font-[700]">Code of Conduct:</span> You agree to
            the following:
          </section>
        </section>
        <section className="indent-2.5 ">
          a.
          <span className="font-[700] ">Legitimate usage of the Platform:</span>
           You agree to use the Platform only for lawful purposes and You are
          not allowed to use our Platform to engage in any kind of activity that
          violates any applicable central, state, local, federal or
          international law or regulation (including, without limitation, any
          laws regarding the export of data or software to and from the USA or
          other countries). Also, You agree that You will not use the Platform
          in any manner that would disrupt, damage or impair the Platform or
          access to it, in any manner, including promoting or encouraging
          illegal activity such as hacking, cracking or distribution of
          counterfeit software, compromised accounts, or cheats or hacks for the
          Platform and conduct of any form of fraudulent activity.
        </section>
        <section className="indent-2.5 ">
          b.
          <span className="font-[700] ">Legitimate usage of the Platform:</span>
           You agree to use the Platform only for lawful purposes and You are
          not allowed to use our Platform to engage in any kind of activity that
          violates any applicable central, state, local, federal or
          international law or regulation (including, without limitation, any
          laws regarding the export of data or software to and from the USA or
          other countries). Also, You agree that You will not use the Platform
          in any manner that would disrupt, damage or impair the Platform or
          access to it, in any manner, including promoting or encouraging
          illegal activity such as hacking, cracking or distribution of
          counterfeit software, compromised accounts, or cheats or hacks for the
          Platform and conduct of any form of fraudulent activity.
        </section>
        <section className="indent-2.5 ">
          b.
          <span className="font-[700] ">No harmful or dangerous content:</span>
           Any content which incites or promotes violence, that may cause
          physical or emotional harm or that may endanger the safety of any
          individual or is otherwise objectionable is expressly prohibited on
          the Platform. The Platform is to be used only for the permitted uses
          as detailed under this Agreement.
        </section>
        <section className="indent-2.5 ">
          c.
          <span className="font-[700] ">No hateful or defamatory content:</span>
           We realise that there may be instances when there are exchange of
          ideas and opinions which is essential in the learning process, while
          we agree that individuals have the right to voice their opinion, we do
          not encourage or tolerate any form of hate speech or statements that
          are libelous, slanderous, threatening, violent, predatory, defamatory,
          or any statement that incites hatred against specific individuals or
          groups with respect to but not limited to race or ethnic origin,
          country caste, religion, disability, gender, age, sexual
          orientation/gender identity etc.
        </section>
        <section className="indent-2.5 ">
          d. <span className="font-[700] ">Violent and graphic content:</span>
           Any content, the sole objective of which is to sensationalise, shock
          or disturb individuals is not allowed. We do not allow any content
          that promotes terrorist acts or incites violence, to be uploaded on
          the Platform in any manner.
        </section>
        <section className="indent-2.5 ">
          e. <span className="font-[700] ">Harassment and bullying:</span> We do
          not tolerate any form of harassment or bullying on the Platform and
          strive to keep the Platform a safe space to foster learning.
          Harassment in this case would include, without limitation, to abusive
          videos, comments, messages, revealing someone’s personal information,
          including sensitive personally identifiable information of
          individuals, content or comments uploaded in order to humiliate
          someone, sexual harassment or sexual bullying in any form.
        </section>
        <section className="indent-2.5 ">
          f. <span className="font-[700] ">Spam:</span> Posting untargeted,
          unwanted and repetitive content, comments or messages with an
          intention to spam a Public Forum or otherwise the Platform and to
          drive traffic from the Platform to other third-party sites is in
          direct violation of this Agreement. Posting links to external websites
          with malware and other prohibited sites is not allowed.
        </section>
        <section className="indent-2.5 ">
          g. <span className="font-[700] ">Scams:</span> Any content uploaded or
          posted in order to trick others for their own financial gain is not
          allowed and we do not tolerate any practices of extortion or
          blackmail, either.
        </section>
        <section className="indent-2.5 ">
          h. <span className="font-[700] ">Privacy violation:</span> Kindly
          refer to our Privacy Policy to know how to protect Your privacy and
          respect the privacy of other Users.
        </section>
        <section className="indent-2.5 ">
          i. <span className="font-[700] ">Impersonation:</span> Impersonating
          another person, including but not limited to, another learner, is not
          permitted while using our Platform. In this case impersonation would
          mean the intention to cause confusion regarding who the real person is
          by pretending to be them (such as using names, image, documents,
          certificates etc. not belonging to You or not used to identify You, or
          pretending to be a company, institute, group etc., by using their
          logo, brand name or any distinguishing mark).
        </section>
        <section className="indent-2.5 ">
          j.
          <span className="font-[700] ">
            Unauthorized Access or Disabling of Platform:
          </span>
           You agree not to (i) use the Platform in any manner that could
          disable, overburden, damage, or impair the Platform or interfere with
          any other user’s use of the Platform; (ii) not to use any manual
          process to monitor or copy any of the material on the Platform or for
          any unauthorized purpose; (iii) use any device, software, or routine
          that interferes with the proper working of the Platform; (iv) attack
          the Platform via a denial-of-service attack; (v) attempt to gain
          unauthorized access to, interfere with, or disrupt any parts of the
          Platform, the server on which the Platform is stored, or any server,
          computer, or database connected to or associated with the Platform;
          and (vi) introduce any viruses, trojan horses, worms, keystroke
          loggers, malware, or other material which is malicious or
          technologically harmful to the Platform.
        </section>
        <section className="indent-2.5 ">
          k. If any violation of the above rules of conduct comes to our notice,
          then, we reserve the right to refuse Your access to the Platform,
          terminate accounts or remove such violating content at any time
          without notice to You.
        </section>
      </section>

      <section className="mt-6 grid gap-5 lg:gap-8">
        {/* Number - 5 */}
        <section className="flex gap-2">
          <section className="font-[700]">5. </section>
          <section>
            <span className="font-[700] ">Intellectual Property:</span> We own
            all information and materials, including Content and Creator Content
            (in whatever form or media) provided or communicated to You by or on
            behalf of us including but not limited to, the Platform, trademarks,
            trade dress, logos, wordmarks, illustrations, letters, images,
            ideas, concepts, the layout, design, flow, look and feel of the
            Platform, logos, marks, graphics, audio files, video files, any
            software which is owned by or licensed to us, instructions embedded
            in any form of digital documents and other data, information, or
            material made available to You by us (“Creator’s Intellectual
            Property”). Creator’s Intellectual Property, including the
            copyrights and trademarks contained therein, may not be modified by
            You in any way. You acknowledge and agree that You do not acquire
            any ownership rights to Creator’s Intellectual Property by use of
            the Platform or any part thereof. You acknowledge and agree that the
            Creator’s Intellectual Property is protected by the applicable
            intellectual property laws, including international copyright,
            trademark, patent, trade secret and other intellectual property or
            proprietary rights laws and any unauthorized use, reproduction,
            modification, distribution, transmission, republication, display or
            performance of the Creator’s Intellectual Property or any component
            thereof is strictly prohibited.
          </section>
        </section>

        {/* Number - 6 */}
        <section className="flex gap-2">
          <section className="font-[700]">6. </section>
          <section>
            <span className="font-[700]">Feedback:</span>  If You submit
            suggestions, ideas, comments, or questions containing product
            feedback about any Content, the Platform or any part thereof, either
            through the Public Forum or otherwise (“Feedback”), then You grants
            to us a worldwide, non-exclusive, royalty-free, perpetual, and
            irrevocable right to use (and full right to sublicense), reproduce,
            modify, adapt, publish, translate, create derivative works from,
            distribute, transmit, and display such Feedback in any form. You
            shall have no intellectual property right in any Content, Platform
            or any part thereof, as a result of our incorporation of Feedback
            into any Content or the Platform.
          </section>
        </section>

        {/* Number - 7 */}
        <section className="flex gap-2">
          <section className="font-[700]">7. </section>
          <section>
            <span className="font-[700] ">Payments and Refunds:</span>  To
            register/enrol for any Content, You may need to pay a fee as may be
            applicable (“Content Fee”). Please refer to our Platform to know the
            pricing. Payment of such Content Fee shall be processed through
            third-party payment processors. Your payments may be subject to
            applicable taxes, so we suggest that You read terms and policies of
            of such third party payment processors to understand the same
            better. Once You purchase access to a Content on the Platform, the
            same cannot be cancelled and there shall be no refund of the Content
            Fee, unless otherwise stated in our Refund Policy.As stated above,
            we use third-party service providers to enable You to make payment
            for the purchases made on the Platform. Accordingly, it is hereby
            clarified that we do not capture and/or store any of your sensitive
            personal information. While making payments through such third-party
            payment gateways/service providers kindly ensure to read through
            their terms and conditions.
          </section>
        </section>

        {/* Number - 8 */}
        <section className="flex gap-2">
          <section className="font-[700]">8. </section>
          <section>
            <span className="font-[700] ">Disclaimer:</span>  THE PLATFORM IS
            PROVIDED TO YOU "AS IS" AND "AS AVAILABLE" AND WITH ALL FAULTS AND
            DEFECTS WITHOUT WARRANTY OF ANY KIND. TO THE MAXIMUM EXTENT
            PERMITTED UNDER APPLICABLE LAW, THE CREATOR, ON ITS OWN BEHALF AND
            ON BEHALF OF ITS AFFILIATES AND ITS AND THEIR RESPECTIVE LICENSORS
            AND SERVICE PROVIDERS, EXPRESSLY DISCLAIMS ALL WARRANTIES, WHETHER
            EXPRESS, IMPLIED, STATUTORY OR OTHERWISE, WITH RESPECT TO THE
            PLATFORM, INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY,
            FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT, AND
            WARRANTIES THAT MAY ARISE OUT OF COURSE OF DEALING, COURSE OF
            PERFORMANCE, USAGE OR TRADE PRACTICE. WITHOUT LIMITATION TO THE
            FOREGOING, THE CREATOR PROVIDES NO WARRANTY OR UNDERTAKING, AND
            MAKES NO REPRESENTATION OF ANY KIND THAT THE PLATFORM OR THE
            SERVICES OR PRODUCTS OFFERED THEREIN WILL MEET YOUR REQUIREMENTS,
            ACHIEVE ANY INTENDED RESULTS, BE COMPATIBLE OR WORK WITH ANY OTHER
            SOFTWARE, APPLICATIONS, SYSTEMS OR SERVICES, OPERATE WITHOUT
            INTERRUPTION, MEET ANY PERFORMANCE OR RELIABILITY STANDARDS OR BE
            ERROR FREE OR THAT ANY ERRORS OR DEFECTS CAN OR WILL BE
            CORRECTED.WITHOUT LIMITING THE FOREGOING, THE CREATOR MAKES NO
            REPRESENTATION OR WARRANTY OF ANY KIND, EXPRESS OR IMPLIED: (I) AS
            TO THE OPERATION OR AVAILABILITY OF THE PLATFORM, OR THE
            INFORMATION, CONTENT, AND MATERIALS OR PRODUCTS INCLUDED THEREON;
            (II) THAT THE PLATFORM WILL BE UNINTERRUPTED OR ERROR-FREE; (III) AS
            TO THE ACCURACY, RELIABILITY, OR CURRENCY OF ANY INFORMATION OR
            CONTENT PROVIDED THROUGH THE PLATFORM; OR (IV) THAT THE PLATFORM,
            ITS SERVERS, THE CONTENT, OR E-MAILS SENT FROM OR ON BEHALF OF THE
            CREATOR ARE FREE OF VIRUSES, SCRIPTS, TROJAN HORSES, WORMS, MALWARE,
            TIMEBOMBS OR OTHER HARMFUL COMPONENTS.SOME JURISDICTIONS DO NOT
            ALLOW THE EXCLUSION OF CERTAIN TYPES OF WARRANTIES OR LIMITATIONS ON
            APPLICABLE STATUTORY RIGHTS OF A CONSUMER, SO SOME OR ALL OF THE
            ABOVE EXCLUSIONS AND LIMITATIONS MAY NOT APPLY TO YOU. BUT IN SUCH A
            CASE THE EXCLUSIONS AND LIMITATIONS SET FORTH IN THIS SECTION SHALL
            BE APPLIED TO THE GREATEST EXTENT ENFORCEABLE UNDER APPLICABLE LAW.
          </section>
        </section>

        {/* Number - 9 */}
        <section className="flex gap-2">
          <section className="font-[700]">9. </section>
          <section>
            <span className="font-[700] ">Limitation of Liability:</span>  In no
            event shall the Creator be liable for any damages (including,
            without limitation, damages for loss of data or profit, or due to
            business interruption) arising out of the use or inability to use
            the Content or any other materials on the Platform, even if the
            Creator or any authorized personnel of the Creator has been notified
            orally or in writing of the possibility of such damage. Some
            jurisdictions do not allow limitations on implied warranties, or
            limitations of liability for consequential or incidental damages,
            so, some or all of these limitations may not apply to You.
          </section>
        </section>

        {/* Number - 10 */}
        <section className="flex gap-2">
          <section className="font-[700]">10. </section>
          <section>
            <span className="font-[700] ">Indemnity and Release:</span>  You
            shall indemnify and hold harmless the Creator and where applicable,
            its officers, directors, agents and employees, from any claim or
            demand, or actions including reasonable attorney's fees, made by any
            third party or penalty imposed due to or arising out of Your breach
            of this Agreement or any document incorporated by reference, or Your
            violation of any law, rules, regulations or the rights of a third
            party.
          </section>
        </section>

        {/* Number - 11 */}
        <section className="flex gap-2">
          <section className="font-[700]">11. </section>
          <section>
            <span className="font-[700] ">Links to Third Party Website:</span>{" "}
             Creator has not reviewed all of the sites linked to its Platform
            and is not responsible for the contents of any such linked site. The
            inclusion of any link does not imply endorsement by the Creator of
            such site. Use of any such linked website is at the Your own risk.
          </section>
        </section>

        {/* Number - 12 */}
        <section className="flex gap-2">
          <section className="font-[700]">12. </section>
          <section>
            <span className="font-[700] ">Governing Law and Jurisdiction:</span>
             Any claim relating to the Platform shall be governed by the laws of
            the Creator’s home jurisdiction (as provided on the Platform)
            without regard to its conflict of law provisions. You agree, as we
            do, to submit to the exclusive jurisdiction of the courts at
            Creator’s home jurisdiction.
          </section>
        </section>

        {/* Number - 13 */}
        <section className="flex gap-2">
          <section className="font-[700]">13. </section>
          <section>
            <span className="font-[700] ">Miscellaneous:</span>
          </section>
        </section>
        <section className="mt-6 grid gap-4 lg:mt-9">
          <section className="indent-2.5">
            <span className="font-[700] ">
              a. Alteration of Platform or Amendments to the Conditions:
            </span>
             We reserve the right to make changes to our Platform, policies, and
            this Agreement at any time. We will post the new terms with a
            revision date indicated at the top or if deemed practicable. You
            should check our Platform frequently to see recent changes. You will
            be subject to the Agreement and the policies in force at the time
            that You use the Platform or any part thereof, unless any change to
            those policies or these conditions is required to be made by law or
            government authority (in which case it will apply to orders
            previously placed by You). If any of these conditions is deemed
            invalid, void, or for any reason unenforceable, that condition will
            be deemed severable and will not affect the validity and
            enforceability of any remaining condition.
          </section>
          <section className="indent-2.5">
            <span className="font-[700] ">b. Waiver:</span> If You breach these
            conditions and we take no action, we will still be entitled to use
            our rights and remedies in any other situation where You breach
            these conditions.
          </section>
          <section className="indent-2.5">
            <span className="font-[700] ">c. Assignment:</span> You may not
            assign or transfer this Agreement, by operation or law or otherwise.
            Any attempt by You to assign or transfer this Agreement will be null
            and void.
          </section>
          <section className="indent-2.5">
            <span className="font-[700] ">d. Severability:</span> If any
            provision of this Agreement will be adjudged by any court of
            competent jurisdiction to be unenforceable or invalid, that
            provision will be limited to the minimum extent necessary so that
            this Agreement will otherwise remain in effect.
          </section>
          <section className="indent-2.5">
            <span className="font-[700] ">
              e. Events beyond our reasonable control:
            </span>
             We will not be held responsible for any delay or failure to comply
            with our obligations under these conditions if the delay or failure
            arises from any cause which is beyond our reasonable control. This
            condition does not affect Your statutory rights.
          </section>
          <section className="indent-2.5">
            <span className="font-[700] ">f. Contact Us:</span> If You’ve have
            concerns or queries regarding this Agreement, You may write to us by
            email at, 
            <span className="text-[#0051FF]">support@rueducation.in</span>.
          </section>
        </section>
      </section>
    </div>
  );
};

export default TermsOfUse;
