"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

import ListingFAQ from "@/app/components/ListingFAQ";

import MobileSearch from "./_sections/MobileSearch";
import SearchHeader from "./_sections/SearchHeader";

import generalInfo from "./_sections/general-info.svg";
import contentMarketing from "./_sections/content-marketing.svg";
import chatIcon from "./_sections/chat.svg";
import badgeIcon from "./_sections/badge.svg";
import creditCardIcon from "./_sections/credit-card.svg";

interface IData {
  q: string;
  ans: string | JSX.Element;
}

interface Props {
  [key: string]: IData[];
}

const faq: Props = {
  generalInfo: [
    {
      q: "4.	What is the Kaushalya Genius Kid Program (KGKP)?",
      ans: `The Kaushalya Genius Kid Program (KGKP) is a unique online program designed to make every child a genius. "Kaushalya" means an expert or genius whose body, mind, and spirit are perfectly aligned. The programme is inspired by the Bhagavad Gita's teaching that says “ yogah karmasu kaushalam ” implies "yoga is excellence in action," KGKP helps children achieve excellence by aligning their body, mind, and spirit with their actions.`,
    },
    {
      q: "5.	Who is the KGKP designed for?",
      ans: `The Kaushalya Genius Kid Program (KGKP) is designed for parents and children over a comprehensive 16-year period. The first year is for parents who are planning or expecting a child. The next six years are for infants, babies, toddlers, and preschoolers. The following nine years cater to children from primary school to high school, up to 15 years of age.`,
    },
    {
      q: "6.	What are the main goals of the KGKP?",
      ans: `The main goals of the Kaushalya Genius Kid Program (KGKP) are to contribute to creating an enlightened society and to become a world-class educational program.`,
    },
    {
      q: "7.	How does KGKP differ from other online learning programs?",
      ans: `The Kaushalya Genius Kid Program (KGKP) differs from other online learning programs by being both holistic and affordable. It is a home-schooling program that any parent anywhere in the world can use to help their child achieve the highest possible IQ (intelligence and physical fitness), EQ (mental faculties like thoughts, emotions, knowledge, and skills), and SQ (intent, values, and purpose).`,
    },
    {
      q: "8.	What is the duration of each course in the KGKP?",
      ans: `Each course in the Kaushalya Genius Kid Program (KGKP) lasts one month and includes daily activities to be done for 30 days.  The only exception is the high schooler's course, which has two sessions per week.`,
    },
    {
      q: "9.	What are the scientific principles behind the program?",
      ans: `KGKP uses cutting edge technologies such as Ridge Analysis, Brain Development Profile, Multiple Intelligences Theory, IQ, EQ, & SQ enhancement and so on. These principles are crucial in developing a child's overall brain to help them become a genius. To learn more about these principles, you can refer to our Method Page.`,
    },
    {
      q: "10.	What subjects are covered in the KGKP?",
      ans: (
        <>
          <div>
            The Kaushalya Genius Kid Program (KGKP) covers a wide range of
            subjects tailored to different age groups. The pre-pregnancy and
            pregnancy program focuses on parents, working on their relationship,
            preparing the would-be mother physically and mentally, and promoting
            the physical, mental, and intellectual growth of the foetus.
          </div>

          <div className="mt-5">
            For children aged 0-6 years, KGKP aims to dramatically raise their
            IQ while also sowing the seeds for EQ and SQ development through
            deep subconscious programming. This includes milestones
            acceleration, reading, maths, and encyclopaedic knowledge programs
            to achieve academic excellence.
          </div>

          <div className="mt-5">
            For primary to high schoolers (ages 6-15), the program shifts to
            include activities that continue to enhance IQ while placing a
            greater emphasis on EQ and SQ development through twice-weekly
            sessions. Subjects covered include emotional intelligence, culture,
            spirituality, values, patriotism, life lessons, storytelling, role
            models, history, heritage, health, communication, public speaking,
            encyclopaedic knowledge, time management, prioritisation, ethics,
            gender sensitization, handling relationships, lean life management,
            and so on. To learn more about the subjects, you can refer to our
            Courses.
          </div>
        </>
      ),
    },
    {
      q: "11.	What age groups is the KGKP suitable for?",
      ans: (
        <>
          <div>
            The Kaushalya Genius Kid Program (KGKP) is suitable for various age
            groups, starting with parents and extending to children up to 15
            years old.
          </div>

          <div className="mt-5">
            The first two programs are designed for parents. Thereafter, The
            program is divided into two segments for children. The first segment
            is for infants, babies, toddlers, and preschoolers aged 0-6 years.
            The second segment is for primary, middle, and high schoolers aged
            6-15 years.
          </div>
        </>
      ),
    },
    {
      q: "12.	Can KGKP be used as a supplementary education tool?",
      ans: `Yes, KGKP can be used as a supplementary education tool. It is a home-schooling program that covers all aspects of child development comprehensively.`,
    },
    {
      q: "13.	Are there any prerequisites for enrolling in KGKP courses?",
      ans: `Yes, there are a few prerequisites for enrolling in KGKP courses. The most important is a 100% commitment to creating a genius child. Additionally, as the program is currently in English, you should have a working knowledge of the English language. Also, you will need a good Wi-Fi connection and a smart TV or laptop.`,
    },
    {
      q: "14.	Should I start the program at birth, or wait until my baby is 6 months or 1 year old?",
      ans: `The earlier you start on the 16-year timeline, the more impactful results you will achieve. Beginning the program at birth maximises the benefits for your child's development. It will provide a stronger foundation for their future growth and learning. Starting early ensures your child gets the full advantage of the program's comprehensive approach to enhancing IQ, EQ, and SQ.`,
    },
    {
      q: "15.	What are the key benefits of the program for children?",
      ans: (
        <div>
          The key benefits of the KGKP program for children are:
          <ul className="list-disc list-inside pl-6">
            <li>Accelerates developmental milestones from an early age.</li>
            <li>
              Boosts academic excellence through programs in reading, maths, and
              encyclopaedic knowledge.
            </li>
            <li>
              Fosters early emotional and spiritual development through deep
              subconscious programming.
            </li>
            <li>
              Continues intellectual growth with tailored activities for older
              children.
            </li>
            <li>
              Enhances emotional intelligence, spirituality, culture, values,
              and traditions.
            </li>
            <li>
              Develops essential life skills such as communication, public
              speaking, time management, and teamwork.
            </li>
            <li>
              Covers holistic subjects including yoga, health, ethics, and
              heritage.
            </li>
            <li>
              Addresses important social topics like gender sensitization and
              handling relationships.
            </li>
            <li>
              Aims to create well-rounded individuals by enhancing their
              intellectual, emotional, and spiritual quotients.
            </li>
            <li>
              Sets a strong foundation for future success from an early age.
            </li>
          </ul>
        </div>
      ),
    },
    {
      q: "16.	How does the program support pregnant parents?",
      ans: (
        <>
          <div>
            The Kaushalya Genius Kid Program (KGKP) supports pregnant parents by
            helping them build a strong and supportive relationship to create a
            positive environment for the baby. It also prepares the expectant
            mother both physically and mentally for childbirth, ensuring she is
            in the best possible health and state of mind during pregnancy.
          </div>
          <div className="mt-5">
            KGKP also emphasises the physical, mental, and intellectual growth
            of the foetus, promoting overall well-being and development from the
            earliest stages of life. By addressing these critical aspects, KGKP
            ensures that both parents and their unborn children are
            well-prepared for the journey ahead.
          </div>
        </>
      ),
    },
    {
      q: "17.	Do I need any particular apps, devices, or technical skills to use the program effectively?",
      ans: `To use the Kaushalya Genius Kid Program (KGKP) effectively, you will need a smartphone, smart TV or a laptop and a good internet connection. No technical skills or additional apps are required.`,
    },
    {
      q: "18.	How much time do I need to commit to the courses each day?",
      ans: (
        <div>
          The time commitment for the Kaushalya Genius Kid Program (KGKP) varies
          by programs:
          <ul className="list-disc list-inside pl-6">
            <li>
              <strong>Pre-Pregnancy and Pregnancy Program: </strong>About 2
              hours each day.
            </li>
            <li>
              <strong>0-6 Years:</strong>
              <ul className="list-[circle] list-inside pl-6">
                <li>30-40 minutes per day for activities with your child.</li>
                <li>
                  About 10 minutes per day for the online reading, maths, and
                  encyclopaedic knowledge programs. This 10 minutes is divided
                  into several short sessions of about 20-60 seconds each.
                </li>
              </ul>
            </li>
            <li>
              <strong>6-15 Years: </strong>
              The sessions are pre-recorded and can be done at any time during
              the day or night, allowing for flexible scheduling.
            </li>
          </ul>
          This structure ensures that the program can fit into your daily
          routine effectively.
        </div>
      ),
    },
    {
      q: "19.	How can I find out which course to select next for my child?",
      ans: (
        <>
          <div>
            To select the next course for your child in the Kaushalya Genius Kid
            Program (KGKP), you can refer to the last page of your current
            course where there is a guide to the next course.
          </div>
          <div className="mt-5">
            Moreover, there are courses for children in the 0-6 years age group
            (phase 1- phase 7) and for children in the 6-15 years age group
            (phase 8 - phase 11). You choose course 1 in the appropriate phase
            depending on the age of the child while joining the program.
            Thereafter, the program structure guides you on the journey ahead.
          </div>
          <div className="mt-5">
            For instance, if your child joins KGKP at the age of three, he will
            be admitted to Phase 7 of the program and will continue accessing
            the course in this phase until he turns six. Upon reaching six years
            of age, your child will transition to Phase 8 (6 to 8 years) and
            will remain in this phase, accessing the courses until he turns 15.
          </div>
        </>
      ),
    },
    {
      q: "20.	Does KGKP offer content in multiple languages?",
      ans: "Currently, KGKP is offering content only in English language.",
    },
  ],
  courseStructureAndContent: [
    {
      q: "1.	What types of learning activities are included in the KGKP",
      ans: (
        <div>
          The Kaushalya Genius Kid Program (KGKP) includes a variety of learning
          activities designed to engage and educate children. These activities
          include:
          <ul className="list-inside list-disc pl-6 ">
            <li>Knowledge-sharing videos</li>
            <li>Lectures</li>
            <li>Links to relevant websites</li>
            <li>Guided activities</li>
            <li>Processes</li>
            <li>Assignments</li>
            <li>Flashcards</li>
          </ul>
          These resources work together to provide a comprehensive learning
          experience for children.
        </div>
      ),
    },
    {
      q: "2.	How are the courses structured?",
      ans: (
        <div>
          The KGKP is a 16-year program divided into 192 monthly courses,
          covering:
          <ol className="list-inside list-disc pl-6 ">
            <li>
              <strong>Pre-Pregnancy Program (Phase -1): </strong>
              This program helps enhance the quality of the couple’s
              relationship and preparation for conception. It is specially
              designed for couples planning to conceive. This course can be
              taken 3-5 months before conception containing a total of 5
              courses.
            </li>
            <li>
              <strong>Pregnancy Program (Phase 0): </strong>
              This program is crafted for expecting mothers covering 7 courses
              from 3rd to 9th month of pregnancy. It ensures the correct daily
              routine of the would-be mother for the best possible foundational
              programming in the growing foetus.
            </li>
            <li>
              <strong>Age 0 to 6 years (Phases 1-7): </strong>
              This program is for children aged 0-6 years where we focus on
              enhancing the IQ and sowing the seeds of EQ and SQ in the child.
              It covers phases 1-7 containing a total of 72 courses.
            </li>
            <li>
              <strong>Age 6 to 15 (Phases 8-11): </strong>
              This program is for children aged 6-15 years and aims to boost the
              IQ marginally and enhance the EQ and SQ significantly. It covers
              phases 8-11 containing a total of 108 courses.
            </li>
          </ol>
          The best results will be achieved if the parents join the
          Pre-pregnancy program, conceive, join the pregnancy program, have
          safe, natural confinement and put the child through the entire
          72-month program by joining phase 1 and follow it up by putting the
          child through the entire remaining 108 months courses. However,
          parents and children can join at any stage and benefit from structured
          monthly courses that support progressive growth and development.
        </div>
      ),
    },
    {
      q: "3.	How does the program enhance emotional (EQ), intellectual (IQ), and spiritual (SQ) quotients?",
      ans: (
        <>
          <div>
            For children aged 0-6 years, the KGKP primarily focuses on raising
            IQ through activities identified by a ridge analysis test that
            determines the unique talent profile of the child. It then deploys a
            4-pronged approach to raise the IQ and to create academic
            excellence. This includes milestones acceleration, reading, maths,
            and encyclopaedic knowledge programs.
          </div>
          <div className="mt-5">
            A booklet ‘Creating a Genius Child’ is made available at the start
            of this segment which explains the entire science, parenting
            guidelines, procedures and precautions to be taken during this
            critical segment for a clear understanding of the 4 pronged
            approach. Parents are advised to read this booklet to acquaint
            themselves with the course environment.
          </div>
          <div className="mt-5">
            Thereafter, about 20% of the focus is on developing EQ and SQ
            through parenting guidance and storytelling sessions.
          </div>
          <div className="mt-5">
            For children aged 6-15 years, 80% of the focus shifts to enhancing
            EQ and SQ with weekly sessions and assignments. The remaining 20% of
            the focus goes on raising the IQ. IQ development continues with
            tailored activities based on updated ridge analysis tests and
            counselling.
          </div>
          <div className="mt-5">
            Overall, the program uses structured activities and detailed
            guidance to support holistic development.
          </div>
        </>
      ),
    },
    {
      q: "4.	Are the courses interactive?",
      ans: "The courses in the KGKP are pre-recorded and can be completed at any time during the course period, allowing parents and children to learn at their convenience.",
    },
    {
      q: "5.	How often is new content added to the KGKP?",
      ans: (
        <>
          <div>
            The Pre-pregnancy and pregnancy segments of the KGKP course are
            mature and do not require new content to be added.
          </div>
          <div className="mt-5">
            The children’s courses, particularly in the areas of EQ and SQ
            enhancement, like storytelling and other subjects, keep evolving
            with new content added from time to time.
          </div>
        </>
      ),
    },
    {
      q: "6.	How will I know when new content is added?",
      ans: "New content in the KGKP is designed to enhance the program without altering its structure or impact. Since the updates do not require repeating completed courses, and they ensure the child receives the best content available at that time, no notifications are given for these additions or amendments.",
    },
    {
      q: "7.	Are there any assessments or quizzes included in the courses?",
      ans: `In the KGKP, the child is not to be tested or assessed during the 0-6 years segment of the program. The reasons for this are explained clearly in the booklet ‘Creating a Genius Child’ at the start of the 0-6 years segment. However, parents can assess the growth of the child from time to time by doing a ‘problem-solving’ activity with the child. Guidance for this activity is given at the appropriate stage in the program. For children aged 6-15 years, growth is typically observed by the behaviour and lifestyle of the child. Parents are also given guidance on how to notice specific improvements over time.`,
    },
    {
      q: "8.	Can children progress at their own pace?",
      ans: `The KGKP is designed to match the typical growth rate for most children, with each course lasting 30 days. However, parents can slow down the pace by requesting for extension in the course duration and extending the course duration beyond 30 days if needed. This allows their children to progress at a more comfortable pace. `,
    },
    {
      q: "9.	How do I evaluate my child’s progress?",
      ans: (
        <>
          <div>
            For children aged 0-6 years, you can evaluate your child's growth
            through problem-solving activities, with guidance provided at
            appropriate stages in the program.
          </div>
          <div className="mt-5">
            For children aged 6-15 years, progress is generally reflected in
            their behaviour and lifestyle. You also receive guidance on how to
            observe specific improvements over time.
          </div>
        </>
      ),
    },
    {
      q: "10.	Are there certificates or rewards for completing courses?",
      ans: `There are no certificates or rewards for completing the courses, however, a certificate will be shared after completing the entire program until the child is age 15.`,
    },
    {
      q: "11.	Why is the content similar and/or repetitive in every course?",
      ans: `The learning process in the KGKP is scientifically designed to reinforce knowledge through repeated exposure. While the videos may seem repetitive, each one includes subtle variations, such as shuffled content or the introduction of new information. This method ensures that your child receives the necessary repetitions to solidify their understanding, without simply watching the same video twice. This approach is carefully crafted to enhance learning effectiveness and is explained in more detail in the booklet ‘Creating a Genius Child.’`,
    },
    {
      q: "12.	Is it okay if my child does all the activities together every day?",
      ans: `No, it is not recommended. The KGKP is scientifically designed with a specific flow and pace to maximise learning outcomes. The procedure is clearly explained in the introductory slides and videos at the start of each course. Deviating from this flow by doing all activities together can dilute and compromise the effectiveness of the learning outcomes. `,
    },
  ],
  parentalInvolvementAndSupport: [
    {
      q: "1.	How involved do parents need to be in the learning process?",
      ans: (
        <>
          <div>
            Parental commitment is essential for the success of the KGKP.
          </div>
          <div className="mt-5">
            In the Pre-Pregnancy and Pregnancy Programs, parents prepare
            themselves and the would-be mother for conception and foetal growth.
            For the 0-6 Years Program, parents engage in daily activities with
            the child for 30-40 minutes and 10 minutes of online sessions
            covering reading, maths, and encyclopaedic knowledge. For the 6-15
            Years Program, parents support the child during two weekly sessions
            of 30-40 minutes, monitor assignments, and participate in 9 short
            daily sessions of 20 seconds for encyclopaedic knowledge.
          </div>
          <div className="mt-5">
            Overall, active and consistent parental involvement is crucial
            throughout the program.
          </div>
        </>
      ),
    },
    {
      q: "2.	Is it okay if I do the course with my kids only on weekends?",
      ans: "No, doing the course only on weekends would significantly dilute the results. Each KGKP course is designed as a one-month program with daily schedules from day 1 to day 30. You can achieve the best results only when the schedule is followed consistently. While small deviations and extensions are acceptable, major disruptions in the schedule can drastically affect the learning outcomes.",
    },
    {
      q: "3.	Are there resources available for parents to support their child’s learning?",
      ans: "Yes, necessary guidance and resources are available for parents to support their child's learning throughout the KGKP program.",
    },
    {
      q: "4.	How does KGKP communicate progress to parents?",
      ans: (
        <>
          <div>
            In the 0-6 years segment, children are not formally tested. Instead,
            parents are guided to conduct ‘problem solving’ sessions to gauge
            their child's learning outcomes.
          </div>
          <div className="mt-5">
            For the 6-15 years segment, parents are advised to monitor their
            child's progress by observing changes in thinking, behavioural
            choices, and lifestyle.
          </div>
        </>
      ),
    },
    {
      q: "5.	Are there any parent-expert conferences or feedback sessions?",
      ans: "Yes, the experts conduct an annual review session for each child with their parents. This review assesses the implementation of the KGKP, evaluates the program's impact, and provides parents with advice on how to achieve improved results moving forward.",
    },
    {
      q: "6.	What kind of support is available if my child struggles with the content?",
      ans: (
        <>
          <div>
            If your child struggles with certain aspects of the program, we
            provide additional support. As per our experience, for kids stuck in
            mobility milestones in phases 1-4, KGKP provides add-on assistance.
            This includes aids like crawling tracks, available at a small
            additional cost.{" "}
          </div>
          <div className="mt-5">
            For milestones acceleration in phases 2 and 3, we also supply
            printed flex sheets to help parents who are unable to arrange these
            themselves. These resources ensure that your child can progress at
            the desired pace.
          </div>
          <div className="mt-5">
            For any other support, our support team is available to discuss
            solutions.
          </div>
        </>
      ),
    },
    {
      q: "7.	How can I contact customer support?",
      ans: "You can contact customer support by calling the helpline at +91 9394360040. The helpline is available from 11 am to 5 pm IST on all working days.",
    },
    {
      q: "8.	Are there any live sessions or webinars for parents?",
      ans: "Yes, interactive live sessions and webinars are conducted periodically on specific subjects to help parents resolve their queries and enhance their understanding.",
    },
    {
      q: "9.	Can I contact the course experts for personalised guidance?",
      ans: "Yes, you can arrange personalised guidance from course experts by scheduling an appointment at a mutually convenient date and time.	",
    },
  ],
  outcomesAndBenefits: [
    {
      q: "1.	What are the expected outcomes for children who complete the KGKP?",
      ans: (
        <div>
          Children who complete the KGKP as prescribed can achieve remarkable
          developmental milestones and skills.
          <br />
          <br />
          <strong>Pre-Pregnancy segment: </strong>
          <br />
          The would-be parents can elevate their relationship on the Kama sutra
          matrix to prepare themselves in body, mind and spirit for a perfect
          event of conception.
          <br />
          <br />
          <strong>Pregnancy segment: </strong>
          <br />
          Post conception, the parents can have perfect natural confinement
          after getting the perfect environment for the cellular, foundational,
          subconscious programming and nourishment of the growing foetus through
          all the activities of the KGKP throughout the pregnancy phase. This
          foundational phase sets the stage for the child's future growth.
          <br />
          <br />
          <strong>0-6 Years Segment </strong>(By strictly following the
          program):
          <ul className="list-inside list-disc pl-6">
            <li>
              By the first birthday, the child should achieve early
              developmental milestones, begin reading simple books, perform
              basic maths, and recognize many world flags.
            </li>
            <li>
              By age 6, the child should be physically superb, read multiple
              books and newspapers, perform elementary maths, and possess
              encyclopaedic knowledge similar to that of a high school graduate.
            </li>
          </ul>
          <br />
          <strong>6-15 Years Segment: </strong>
          <br />
          By systematically completing the courses, the child should develop
          into a true genius with the highest possible IQ, EQ, and SQ.
          <div className="mt-5">
            Joining the KGKP at a later stage or not completing all courses as
            directed may result in proportionately reduced benefits.
          </div>
        </div>
      ),
    },
    {
      q: "2.	How does KGKP help in the overall development of a child?",
      ans: (
        <>
          <div>
            The KGKP supports a child's overall development in the pre-pregnancy
            and Pregnancy segment by preparing their body, mind, and spirit from
            conception through adolescence.{" "}
          </div>
          <div className="mt-5">
            Further, in the 0-6 years segment, KGKP creates the highest possible
            IQ and sows the seeds of high EQ and SQ in the subconscious program
            of the child. This segment also creates very high levels of fitness
            and makes the baby physically superb.
          </div>
          <div className="mt-5">
            Thereafter, in the 6-15 years segment, KGKP enhances the EQ and SQ
            of the child to very high levels and completes the IQ enhancement
            process. It equips the child with 360 degrees of personality
            development benefits, creating a true GENIUS with the highest
            possible IQ, highest possible EQ and highest possible SQ.
          </div>
        </>
      ),
    },
    {
      q: "3.	Are there any success stories or testimonials from other parents?",
      ans: (
        <>
          <div>
            Yes, one of the most notable success stories is that of Mitra
            Malani, who joined the KGKP at 16 months old in 2008. He completed
            the program with high accuracy and has shown remarkable development.
            At 17 years old, Mitra was invited as a chief guest at the school's
            annual day function in February 2024. You can watch his speech on
            the home (main) page of our website.
          </div>
          <div className="mt-5">
            There are also many other videos of younger children who have gone
            through different segments of the KGKP, showing significant growth
            in various areas.
          </div>
        </>
      ),
    },
    {
      q: "4.	What evidence is there to show that KGKP improves academic performance?",
      ans: (
        <>
          <div>
            The KGKP's effectiveness in improving academic performance is
            evident from success stories like that of Mitra Malani. After
            completing the 0-6 years segment of the KGKP, Mitra demonstrated
            exceptional academic abilities, skipping from 7th to 10th grade due
            to finding the academic challenge too easy.
          </div>
          <div className="mt-5">
            Additionally, many children at Kaushalya Global School who
            participate in a simpler version of the KGKP in preschool, starting
            at age 3, also show high academic standards. This further
            demonstrates the positive impact of the program on academic
            performance.
          </div>
        </>
      ),
    },
    {
      q: "5.	What kind of skills, apart from academics, does KGKP focus on?",
      ans: (
        <>
          <div>
            The KGKP focuses on developing a child's IQ, EQ, and SQ to foster
            overall personal growth and success.
          </div>
          <div className="mt-5">
            A very high IQ not only leads to academic excellence but also helps
            a child realise their innate talents, leading to success in specific
            areas of interest. A high EQ enables the child to manage emotions
            intelligently, handle anger, failures, ego, jealousy, and
            relationships effectively, and live a balanced life. A high SQ
            instils the right values, world view, and lifestyle, promoting a
            healthy and peaceful life.
          </div>
          <div className="mt-5">
            This combination equips children with the skills to handle all life
            situations intelligently apart from having academic intelligence.
          </div>
        </>
      ),
    },
  ],
  paymentAccess: [
    {
      q: "1. How do I enrol my child in the program?",
      ans: "To enrol your child in the program you have to select the first course of the current age of your child. After selecting the course, you have to make the payment and get enrolled. ",
    },
    {
      q: "2. Are there different levels of the program?",
      ans: (
        <>
          <div>
            Yes, in KGKP, there are different levels of the program in a journey
            of 16 years spanning the following stages:
          </div>
          <div className="mt-5">Pre pregnancy stage - </div>
          <div className="mt-5">
            Parents enrol in this stage before conception. This segment lasts
            for 3 months and is divided into 3 monthly courses. In this segment,
            KGKP works on the couple’s relationship and prepares them for
            conception.
          </div>
          <div className="mt-5">Pregnancy stage - </div>
          <div className="mt-5">
            Parents enrol in this stage after conception. This segment lasts for
            7 months and is divided into 7 monthly courses. In this segment,
            KGKP works on creating an ideal environment for the growing foetus
            to support brain development and appropriate subconscious
            programming.
          </div>
          <div className="mt-5"> 0-6 years stage -</div>
          <div className="mt-5">
            Children enrol in this stage at the earliest possible time after
            birth. This segment of the program is 6 years long and is divided
            into 72 monthly courses to create the highest possible IQ and also
            to sow the seeds of high EQ and high SQ in the child.
          </div>
          <div className="mt-5">6-15 years stage -</div>
          <div className="mt-5">
            Children join in this stage at the earliest possible time after 6
            years of age. This segment is 9 years long and divided into 108
            monthly courses to create very high levels of EQ and SQ in the
            child, several personality development skills and raising the IQ to
            some extent.
          </div>
          <div className="mt-5">
            Overall, KGKP offers four levels of programs that empower parents to
            develop their child into a true genius.
          </div>
        </>
      ),
    },
    {
      q: "3. How long does each program level last?",
      ans: (
        <>
          <div>The program duration is as follows for different segments:</div>

          <ul className="list-inside list-lowerAlpha pl-6">
            <li>Pre pregnancy Segment: 3 months.</li>
            <li>Pregnancy Segment: 7 months.</li>
            <li>0-6 years Segment: 6 years.</li>
            <li>6-15 years Segment: 9 years.</li>
          </ul>

          <div className="mt-5">
            These durations are applicable for the parents/children joining
            right at the beginning of each segment of the program.
          </div>
          <div className="mt-5">
            Otherwise, these 4 segments of the KGKP are divided into several
            phases for Parents/ children to join anytime or at any age in the
            middle of the relevant phase of any segment, in which case, the
            duration of the program will be reduced accordingly.
          </div>
          <div className="mt-5">
            In the 0-6 years program, there are seven phases. Children can join
            in course 1 of the relevant phase depending on the age of the child
            at the time of joining and continue in the subsequent monthly
            courses of the same phase until the child reaches 6 years of age.
          </div>
          <div className="mt-5">
            After this, the child can join course 1 of phase 8 of the 6-15 years
            Segment, and continue in the subsequent monthly courses in the same
            phase until the child reaches the age of 15 years.
          </div>
          <div className="mt-5">
            Moreover, Children can also join course 1 of the relevant phase
            depending on the age of the child at the time of joining and
            continue in the subsequent monthly courses of the same phase until
            the child reaches the age of 15 years.
          </div>
        </>
      ),
    },
    {
      q: "4. What is the refund policy if I am not satisfied with the program?",
      ans: "The KGKP program is divided into several monthly courses. You have to make the payments every month for the purchase of the courses. KGKP does not ask for a long-term financial commitment at any stage of the program. As such, there is no refund policy. The parents can discontinue the program at any time after joining if they are not satisfied with the results.",
    },
    {
      q: "5. How can I make a payment for the program?",
      ans: "The initial registration fees for the course can be transferred to the bank account of the company through banking channels or Gpay. All other subsequent payments for buying the monthly courses are submitted online through the payment gateway of KGKP.",
    },
    {
      q: "6. Are there any discounts or special offers available?",
      ans: "The discounts / promotional offers are given for community groups, schools, defence personnel, etc. after the contract is finalised. ",
    },
    {
      q: "7.How do I access the course after enrolment?",
      ans: "Once you successfully register for the course with KGKP, ⁠you will be able to access the course in your login dashboard on the website directly. Additionally, a step-by-step guidance for accessing the course will be provided via WhatsApp.",
    },
    {
      q: "8. Can multiple children use the same account?",
      ans: "Yes, the course can be accessed through any two devices from the same IP address. If multiple children at the same location are in the same phase of the course, they can use the same account to go through the course.",
    },
    {
      q: "9. Is the KGKP available on mobile devices?",
      ans: (
        <>
          <div>
            Yes, the KGKP courses can be accessed through mobile devices.
            However, for the 0-6 years segment, the child has to watch the
            videos only on a laptop screen from a distance of about 18’’ or on a
            smart TV screen from a distance of about 8-10’.
          </div>
          <div className="mt-5">
            Even for the 6-15 years segment, the TV/laptop screen would be more
            effective than the mobile screen, due to the larger screen size.
          </div>
        </>
      ),
    },
    {
      q: "10. Is internet access required to use KGKP?",
      ans: "As KGKP is an online digital brain development program, you will require internet access to conveniently explore the program at each stage.",
    },
    {
      q: "11. Is there a customer support team I can contact for help?",
      ans: " ⁠Yes, customer support is available from 11 am to 5 pm IST, Monday to Friday. You can reach us by calling +91 9394360040. Outside of these hours, you can leave a WhatsApp or text message, and our support team will respond as soon as possible.",
    },
  ],
};

const FaqContainer = () => {
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const [category, setCategory] = useState(Object.keys(faq)[0]);
  const [data, setData] = useState<IData[] | []>([]);

  const [isScrollable, setIsScrollable] = useState(false);
  const [isScrolledToEnd, setIsScrolledToEnd] = useState(false);
  const [arrowPosition, setArrowPosition] = useState(0);
  const scrollContainerRef = useRef<any>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const checkScrollable = () => {
      if (scrollContainer.scrollWidth > scrollContainer.clientWidth) {
        setIsScrollable(true);
      } else {
        setIsScrollable(false);
      }
    };

    const handleScroll = () => {
      const maxScrollLeft =
        scrollContainer.scrollWidth - scrollContainer.clientWidth;
      if (
        scrollContainer.scrollLeft + scrollContainer.clientWidth >=
        scrollContainer.scrollWidth - 1
      ) {
        setIsScrolledToEnd(true);
      } else {
        setIsScrolledToEnd(false);
      }

      setArrowPosition(scrollContainer.scrollLeft);
    };

    checkScrollable();
    scrollContainer.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkScrollable);

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkScrollable);
    };
  }, []);

  useEffect(() => {
    if (search.length) {
      const filteredData = Object.keys(faq)
        .map((ele) => faq[ele])
        .flat()
        .filter((ele) => ele.q.toLowerCase().includes(search.toLowerCase()));

      setData([...filteredData]);
    } else {
      setData([...faq[category]]);
    }
  }, [search, category]);

  const toggleCategory = (category: string) => {
    setSearch("");
    setCategory(category);
  };

  const handleModal = () => setShowModal(!showModal);

  const clearSearch = () => setSearch("");

  const handleSearch = (value: string) => setSearch(value);

  return (
    <div>
      <SearchHeader
        value={search}
        handleSearch={handleSearch}
        isMobile={isMobile}
        handleModal={handleModal}
        clearSearch={clearSearch}
      />

      <section
        ref={scrollContainerRef}
        className="mt-6 px-4 mx-auto flex justify-between gap-6 pb-2 relative overflow-x-auto h-20 md:h-[130px] md:gap-16 md:mt-[57px] lg:justify-start xl:gap-[96px] xl:justify-center"
      >
        {/* Category 1 */}
        <section
          onClick={() => toggleCategory(Object.keys(faq)[0])}
          className={`pb-2 grid gap-2 cursor-pointer ${
            category === "generalInfo" ? "border-b-[4px] border-[#4D1435]" : ""
          } w-[80px] shrink-0 md:gap-4 md:basis-[158px]`}
        >
          <Image
            src={generalInfo}
            alt="General Info icon"
            className="w-6 h-6 justify-self-center md:w-14 md:h-14 lg:w-[60px] lg:h-[60px]"
          />
          <section
            className={`${
              category === "generalInfo"
                ? "text-[#4D1435] font-[600]"
                : "text-[#3C4553] font-[500]"
            } text-[12px] leading-[14.4px] text-center md:text-[18px] md:leading-[21.6px]`}
          >
            General Information
          </section>
        </section>

        {/* Category 2 */}
        <section
          onClick={() => toggleCategory(Object.keys(faq)[1])}
          className={`pb-2 grid gap-2 cursor-pointer ${
            category === "courseStructureAndContent"
              ? "border-b-[4px] border-[#4D1435]"
              : ""
          } w-[121px] shrink-0 md:gap-4 md:basis-[179px]`}
        >
          <Image
            src={contentMarketing}
            alt="General Info icon"
            className="w-6 h-6 justify-self-center md:w-14 md:h-14 lg:w-[60px] lg:h-[60px]"
          />
          <section
            className={`${
              category === "courseStructureAndContent"
                ? "text-[#4D1435] font-[600]"
                : "text-[#3C4553] font-[500]"
            } text-[12px] leading-[14.4px] text-center md:text-[18px] md:leading-[21.6px]`}
          >
            Course Structure and Content
          </section>
        </section>

        {/* Category 3 */}
        <section
          onClick={() => toggleCategory(Object.keys(faq)[2])}
          className={`pb-2 grid gap-2 cursor-pointer ${
            category === "parentalInvolvementAndSupport"
              ? "border-b-[4px] border-[#4D1435]"
              : ""
          } shrink-0 w-[122px] md:gap-4 md:basis-[206px]`}
        >
          <Image
            src={chatIcon}
            alt="General Info icon"
            className="w-6 h-6 justify-self-center md:w-14 md:h-14 lg:w-[60px] lg:h-[60px]"
          />
          <section
            className={`${
              category === "parentalInvolvementAndSupport"
                ? "text-[#4D1435] font-[600]"
                : "text-[#3C4553] font-[500]"
            } text-[12px] leading-[14.4px] text-center md:text-[18px] md:leading-[21.6px]`}
          >
            Parental Involvement and Support
          </section>
        </section>

        {/* Category 4 */}
        <section
          onClick={() => toggleCategory(Object.keys(faq)[3])}
          className={`pb-2 grid gap-2 cursor-pointer ${
            category === "outcomesAndBenefits"
              ? "border-b-[4px] border-[#4D1435]"
              : ""
          } shrink-0 w-[122px] md:gap-4 md:basis-[153px]`}
        >
          <Image
            src={badgeIcon}
            alt="General Info icon"
            className="w-6 h-6 justify-self-center md:w-14 md:h-14 lg:w-[60px] lg:h-[60px]"
          />
          <section
            className={`${
              category === "outcomesAndBenefits"
                ? "text-[#4D1435] font-[600]"
                : "text-[#3C4553] font-[500]"
            } text-[12px] leading-[14.4px] text-center md:text-[18px] md:leading-[21.6px]`}
          >
            Outcomes and Benefits
          </section>
        </section>

        {/* Category 5 */}
        <section
          onClick={() => toggleCategory(Object.keys(faq)[4])}
          className={`pb-2 grid gap-2 cursor-pointer ${
            category === "paymentAccess"
              ? "border-b-[4px] border-[#4D1435]"
              : ""
          } shrink-0 w-[122px] md:gap-4 md:basis-[208px]`}
        >
          <Image
            src={creditCardIcon}
            alt="General Info icon"
            className="w-6 h-6 justify-self-center md:w-14 md:h-14 lg:w-[60px] lg:h-[60px]"
          />
          <section
            className={`${
              category === "paymentAccess"
                ? "text-[#4D1435] font-[600]"
                : "text-[#3C4553] font-[500]"
            } text-[12px] leading-[14.4px] text-center md:text-[18px] md:leading-[21.6px]`}
          >
            Enrolment, Payment and Access
          </section>
        </section>

        {isScrollable && !isScrolledToEnd && (
          <div
            className="absolute top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2"
            style={{ right: `calc(${-arrowPosition}px + 5%)` }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        )}
      </section>

      {(!isMobile || !showModal) && (
        <section className="w-[90%] mt-6 mb-[52px] mx-auto grid gap-4 lg:my-[52px] xl:w-[1280px]">
          {data.length > 0 ? (
            <>
              <ListingFAQ data={data} />
            </>
          ) : (
            <section className="mt-6 grid gap-4 mx-auto w-auto">
              <div className="text-[18px] font-[600] leading-[21.6px] text-center text-[#1A2434]">
                We couldn’t find anything related to {search}
              </div>
              <div className="text-[16px] font-[400] leading-[19.2px] text-[#1A2434] text-center">
                Please check the spelling or try another word
              </div>
            </section>
          )}
        </section>
      )}

      {isMobile && showModal && (
        <MobileSearch
          clearSearch={clearSearch}
          data={data}
          handleModal={handleModal}
          handleSearch={handleSearch}
          value={search}
        />
      )}
    </div>
  );
};

export default FaqContainer;
