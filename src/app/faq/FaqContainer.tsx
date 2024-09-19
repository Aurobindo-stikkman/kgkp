"use client";
import { useState, useEffect, useRef } from "react";

import ListingFAQ from "@/app/components/ListingFAQ";

import MobileSearch from "./_sections/MobileSearch";
import SearchHeader from "./_sections/SearchHeader";

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
      q: "What is the Kaushalya Genius Kid Program (KGKP)?",
      ans: `The Kaushalya Genius Kid Program (KGKP) is a unique online program designed to make every child a genius. "Kaushalya" means an expert or genius whose body, mind, and spirit are perfectly aligned. The programme is inspired by the Bhagavad Gita's teaching that says “ yogah karmasu kaushalam ” implies "yoga is excellence in action," KGKP helps children achieve excellence by aligning their body, mind, and spirit with their actions.`,
    },
    {
      q: "Who is the KGKP designed for?",
      ans: `The Kaushalya Genius Kid Program (KGKP) is designed for parents and children over a comprehensive 16-year period. The first year is for parents who are planning or expecting a child. The next six years are for infants, babies, toddlers, and preschoolers. The following nine years cater to children from primary school to high school, up to 15 years of age.`,
    },
    {
      q: "What are the main goals of the KGKP?",
      ans: `The main goals of the Kaushalya Genius Kid Program (KGKP) are to contribute to creating an enlightened society and to become a world-class educational program.`,
    },
    {
      q: "How does KGKP differ from other online learning programs?",
      ans: `The Kaushalya Genius Kid Program (KGKP) differs from other online learning programs by being both holistic and affordable. It is a home-schooling program that any parent anywhere in the world can use to help their child achieve the highest possible IQ (intelligence and physical fitness), EQ (mental faculties like thoughts, emotions, knowledge, and skills), and SQ (intent, values, and purpose).`,
    },
    {
      q: "What is the duration of each course in the KGKP?",
      ans: `Each course in the Kaushalya Genius Kid Program (KGKP) lasts one month and includes daily activities to be done for 30 days.  The only exception is the high schooler's course, which has two sessions per week.`,
    },
    {
      q: "What are the scientific principles behind the program?",
      ans: `KGKP uses cutting edge technologies such as Ridge Analysis, Brain Development Profile, Multiple Intelligences Theory, IQ, EQ, & SQ enhancement and so on. These principles are crucial in developing a child's overall brain to help them become a genius. To learn more about these principles, you can refer to our Method Page.`,
    },
    {
      q: "What subjects are covered in the KGKP?",
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
      q: "What age groups is the KGKP suitable for?",
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
      q: "Can KGKP be used as a supplementary education tool?",
      ans: `Yes, KGKP can be used as a supplementary education tool. It is a home-schooling program that covers all aspects of child development comprehensively.`,
    },
    {
      q: "Are there any prerequisites for enrolling in KGKP courses?",
      ans: `Yes, there are a few prerequisites for enrolling in KGKP courses. The most important is a 100% commitment to creating a genius child. Additionally, as the program is currently in English, you should have a working knowledge of the English language. Also, you will need a good Wi-Fi connection and a smart TV or laptop.`,
    },
    {
      q: "Should I start the program at birth, or wait until my baby is 6 months or 1 year old?",
      ans: `The earlier you start on the 16-year timeline, the more impactful results you will achieve. Beginning the program at birth maximises the benefits for your child's development. It will provide a stronger foundation for their future growth and learning. Starting early ensures your child gets the full advantage of the program's comprehensive approach to enhancing IQ, EQ, and SQ.`,
    },
    {
      q: "What are the key benefits of the program for children?",
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
      q: "How does the program support pregnant parents?",
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
      q: "Do I need any particular apps, devices, or technical skills to use the program effectively?",
      ans: `To use the Kaushalya Genius Kid Program (KGKP) effectively, you will need a smartphone, smart TV or a laptop and a good internet connection. No technical skills or additional apps are required.`,
    },
    {
      q: "How much time do I need to commit to the courses each day?",
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
      q: "How can I find out which course to select next for my child?",
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
      q: "Does KGKP offer content in multiple languages?",
      ans: "Currently, KGKP is offering content only in English language.",
    },
  ],
  courseStructureAndContent: [
    {
      q: "What types of learning activities are included in the KGKP",
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
      q: "How are the courses structured?",
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
      q: "How does the program enhance emotional (EQ), intellectual (IQ), and spiritual (SQ) quotients?",
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
      q: "Are the courses interactive?",
      ans: "The courses in the KGKP are pre-recorded and can be completed at any time during the course period, allowing parents and children to learn at their convenience.",
    },
    {
      q: "How often is new content added to the KGKP?",
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
      q: "How will I know when new content is added?",
      ans: "New content in the KGKP is designed to enhance the program without altering its structure or impact. Since the updates do not require repeating completed courses, and they ensure the child receives the best content available at that time, no notifications are given for these additions or amendments.",
    },
    {
      q: "Are there any assessments or quizzes included in the courses?",
      ans: `In the KGKP, the child is not to be tested or assessed during the 0-6 years segment of the program. The reasons for this are explained clearly in the booklet ‘Creating a Genius Child’ at the start of the 0-6 years segment. However, parents can assess the growth of the child from time to time by doing a ‘problem-solving’ activity with the child. Guidance for this activity is given at the appropriate stage in the program. For children aged 6-15 years, growth is typically observed by the behaviour and lifestyle of the child. Parents are also given guidance on how to notice specific improvements over time.`,
    },
    {
      q: "Can children progress at their own pace?",
      ans: `The KGKP is designed to match the typical growth rate for most children, with each course lasting 30 days. However, parents can slow down the pace by requesting for extension in the course duration and extending the course duration beyond 30 days if needed. This allows their children to progress at a more comfortable pace. `,
    },
    {
      q: "How do I evaluate my child’s progress?",
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
      q: "Are there certificates or rewards for completing courses?",
      ans: `There are no certificates or rewards for completing the courses, however, a certificate will be shared after completing the entire program until the child is age 15.`,
    },
    {
      q: "Why is the content similar and/or repetitive in every course?",
      ans: `The learning process in the KGKP is scientifically designed to reinforce knowledge through repeated exposure. While the videos may seem repetitive, each one includes subtle variations, such as shuffled content or the introduction of new information. This method ensures that your child receives the necessary repetitions to solidify their understanding, without simply watching the same video twice. This approach is carefully crafted to enhance learning effectiveness and is explained in more detail in the booklet ‘Creating a Genius Child.’`,
    },
    {
      q: "Is it okay if my child does all the activities together every day?",
      ans: `No, it is not recommended. The KGKP is scientifically designed with a specific flow and pace to maximise learning outcomes. The procedure is clearly explained in the introductory slides and videos at the start of each course. Deviating from this flow by doing all activities together can dilute and compromise the effectiveness of the learning outcomes. `,
    },
  ],
  parentalInvolvementAndSupport: [
    {
      q: "How involved do parents need to be in the learning process?",
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
      q: "Is it okay if I do the course with my kids only on weekends?",
      ans: "No, doing the course only on weekends would significantly dilute the results. Each KGKP course is designed as a one-month program with daily schedules from day 1 to day 30. You can achieve the best results only when the schedule is followed consistently. While small deviations and extensions are acceptable, major disruptions in the schedule can drastically affect the learning outcomes.",
    },
    {
      q: "Are there resources available for parents to support their child’s learning?",
      ans: "Yes, necessary guidance and resources are available for parents to support their child's learning throughout the KGKP program.",
    },
    {
      q: "How does KGKP communicate progress to parents?",
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
      q: "Are there any parent-expert conferences or feedback sessions?",
      ans: "Yes, the experts conduct an annual review session for each child with their parents. This review assesses the implementation of the KGKP, evaluates the program's impact, and provides parents with advice on how to achieve improved results moving forward.",
    },
    {
      q: "What kind of support is available if my child struggles with the content?",
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
      q: "How can I contact customer support?",
      ans: "You can contact customer support by calling the helpline at +91 9394360040. The helpline is available from 11 am to 5 pm IST on all working days.",
    },
    {
      q: "Are there any live sessions or webinars for parents?",
      ans: "Yes, interactive live sessions and webinars are conducted periodically on specific subjects to help parents resolve their queries and enhance their understanding.",
    },
    {
      q: "Can I contact the course experts for personalised guidance?",
      ans: "Yes, you can arrange personalised guidance from course experts by scheduling an appointment at a mutually convenient date and time.	",
    },
  ],
  outcomesAndBenefits: [
    {
      q: "What are the expected outcomes for children who complete the KGKP?",
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
      q: "How does KGKP help in the overall development of a child?",
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
      q: "Are there any success stories or testimonials from other parents?",
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
      q: "What evidence is there to show that KGKP improves academic performance?",
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
      q: "What kind of skills, apart from academics, does KGKP focus on?",
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
      q: "How do I enrol my child in the program?",
      ans: "To enrol your child in the program you have to select the first course of the current age of your child. After selecting the course, you have to make the payment and get enrolled. ",
    },
    {
      q: "Are there different levels of the program?",
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
      q: "How long does each program level last?",
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
      q: "What is the refund policy if I am not satisfied with the program?",
      ans: "The KGKP program is divided into several monthly courses. You have to make the payments every month for the purchase of the courses. KGKP does not ask for a long-term financial commitment at any stage of the program. As such, there is no refund policy. The parents can discontinue the program at any time after joining if they are not satisfied with the results.",
    },
    {
      q: "How can I make a payment for the program?",
      ans: "The initial registration fees for the course can be transferred to the bank account of the company through banking channels or Gpay. All other subsequent payments for buying the monthly courses are submitted online through the payment gateway of KGKP.",
    },
    {
      q: "Are there any discounts or special offers available?",
      ans: "The discounts / promotional offers are given for community groups, schools, defence personnel, etc. after the contract is finalised. ",
    },
    {
      q: "How do I access the course after enrolment?",
      ans: "Once you successfully register for the course with KGKP, ⁠you will be able to access the course in your login dashboard on the website directly. Additionally, a step-by-step guidance for accessing the course will be provided via WhatsApp.",
    },
    {
      q: "Can multiple children use the same account?",
      ans: "Yes, the course can be accessed through any two devices from the same IP address. If multiple children at the same location are in the same phase of the course, they can use the same account to go through the course.",
    },
    {
      q: "Is the KGKP available on mobile devices?",
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
      q: "Is internet access required to use KGKP?",
      ans: "As KGKP is an online digital brain development program, you will require internet access to conveniently explore the program at each stage.",
    },
    {
      q: "Is there a customer support team I can contact for help?",
      ans: " ⁠Yes, customer support is available from 11 am to 5 pm IST, Monday to Friday. You can reach us by calling +91 9394360040. Outside of these hours, you can leave a WhatsApp or text message, and our support team will respond as soon as possible.",
    },
  ],
};

const FaqContainer = () => {
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
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
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!scrollContainerRef.current) return;

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
  }, [scrollContainerRef.current]);

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

      {(!isMobile || !showModal) && data.length ? (
        <section
          ref={scrollContainerRef}
          className="mt-6 px-4 mx-auto flex justify-between gap-6 pb-2 relative overflow-x-auto h-20 md:h-[130px] md:gap-16 md:mt-[57px] lg:justify-start xl:gap-[96px] xl:justify-center"
        >
          {/* Category 1 */}
          <section
            onClick={() => toggleCategory(Object.keys(faq)[0])}
            className={`pb-2 grid gap-2 cursor-pointer ${
              category === "generalInfo"
                ? "border-b-[4px] border-[#4D1435]"
                : ""
            } w-[80px] shrink-0 md:gap-4 md:basis-[158px]`}
          >
            <svg
              className="w-6 h-6 justify-self-center md:w-14 md:h-14 lg:w-[60px] lg:h-[60px]"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="about-us 2" clip-path="url(#clip0_1762_2787)">
                <g id="Layer 2">
                  <path
                    id="Vector"
                    fill={category === "generalInfo" ? "#4D1435" : "#3C4553"}
                    d="M20.4523 24H12C5.38286 24 0 18.6166 0 12C0 5.38337 5.38286 0 12 0C18.6171 0 24 5.38337 24 12C23.9976 14.8622 22.9851 17.6223 21.1577 19.7483L21.8434 20.4674C22.1191 20.7566 22.3068 21.125 22.3827 21.526C22.4587 21.9271 22.4196 22.3428 22.2704 22.7205C22.1211 23.0982 21.8684 23.421 21.5441 23.6482C21.2199 23.8753 20.8388 23.9965 20.4489 23.9964L20.4523 24ZM12 1.79775C6.32829 1.79775 1.71429 6.37483 1.71429 12C1.71429 17.6252 6.32829 22.2022 12 22.2022H20.4523C20.5032 22.2024 20.553 22.1867 20.5954 22.1571C20.6377 22.1275 20.6708 22.0854 20.6903 22.0362C20.7099 21.9869 20.715 21.9326 20.7052 21.8803C20.6953 21.8279 20.6708 21.7798 20.6349 21.742L19.3491 20.3937C19.2688 20.3094 19.2052 20.2092 19.1621 20.0989C19.119 19.9886 19.0973 19.8704 19.0981 19.7512C19.099 19.632 19.1225 19.5142 19.1672 19.4046C19.2119 19.295 19.277 19.1958 19.3586 19.1128C20.2788 18.1956 21.0125 17.0926 21.5156 15.8702C22.0186 14.6478 22.2806 13.3314 22.2857 12C22.2857 6.37483 17.6717 1.79775 12 1.79775Z"
                  />
                  <path
                    id="Vector_2"
                    fill={category === "generalInfo" ? "#4D1435" : "#3C4553"}
                    d="M13.125 18.0001H10.875C10.6761 18.0001 10.4853 17.9139 10.3447 17.7605C10.204 17.6071 10.125 17.3989 10.125 17.182C10.125 16.965 10.204 16.7568 10.3447 16.6034C10.4853 16.45 10.6761 16.3638 10.875 16.3638H13.125C13.3239 16.3638 13.5147 16.45 13.6553 16.6034C13.796 16.7568 13.875 16.965 13.875 17.182C13.875 17.3989 13.796 17.6071 13.6553 17.7605C13.5147 17.9139 13.3239 18.0001 13.125 18.0001Z"
                  />
                  <path
                    id="Vector_3"
                    fill={category === "generalInfo" ? "#4D1435" : "#3C4553"}
                    d="M12 17.9999C11.8011 17.9999 11.6103 17.9137 11.4696 17.7602C11.329 17.6068 11.25 17.3987 11.25 17.1817V12.163C11.107 12.0729 10.9953 11.9339 10.9321 11.7675C10.8689 11.6011 10.8578 11.4166 10.9006 11.2426C10.9433 11.0687 11.0374 10.915 11.1684 10.8053C11.2994 10.6957 11.4599 10.6362 11.625 10.6362H12C12.1989 10.6362 12.3896 10.7224 12.5303 10.8759C12.671 11.0293 12.75 11.2374 12.75 11.4544V17.1817C12.75 17.3987 12.671 17.6068 12.5303 17.7602C12.3896 17.9137 12.1989 17.9999 12 17.9999Z"
                  />
                  <path
                    id="Vector_4"
                    fill={category === "generalInfo" ? "#4D1435" : "#3C4553"}
                    d="M12 9.40914C12.6213 9.40914 13.125 8.85967 13.125 8.18186C13.125 7.50406 12.6213 6.95459 12 6.95459C11.3787 6.95459 10.875 7.50406 10.875 8.18186C10.875 8.85967 11.3787 9.40914 12 9.40914Z"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_1762_2787">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>

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
            <svg
              className="w-6 h-6 justify-self-center md:w-14 md:h-14 lg:w-[60px] lg:h-[60px]"
              viewBox="0 0 61 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="content-marketing 1" clip-path="url(#clip0_1762_2739)">
                <path
                  id="Vector"
                  fill={
                    category === "courseStructureAndContent"
                      ? "#4D1435"
                      : "#3C4553"
                  }
                  d="M36.8281 60H14.5625C6.80844 60 0.5 53.6916 0.5 45.9375V14.0625C0.5 6.30844 6.80844 0 14.5625 0H46.4375C54.1916 0 60.5 6.30844 60.5 14.0625V36.5039C60.5 37.7984 59.4507 38.8477 58.1562 38.8477C56.8618 38.8477 55.8125 37.7984 55.8125 36.5039V14.0625C55.8125 8.89313 51.6069 4.6875 46.4375 4.6875H14.5625C9.39313 4.6875 5.1875 8.89313 5.1875 14.0625V45.9375C5.1875 51.1069 9.39313 55.3125 14.5625 55.3125H36.8281C38.1226 55.3125 39.1719 56.3618 39.1719 57.6562C39.1719 58.9507 38.1226 60 36.8281 60ZM48.7812 14.7656C48.7812 13.4712 47.732 12.4219 46.4375 12.4219H24.9922C23.6977 12.4219 22.6484 13.4712 22.6484 14.7656C22.6484 16.0601 23.6977 17.1094 24.9922 17.1094H46.4375C47.732 17.1094 48.7812 16.0601 48.7812 14.7656ZM48.7812 24.1406C48.7812 22.8462 47.732 21.7969 46.4375 21.7969H14.5625C13.268 21.7969 12.2188 22.8462 12.2188 24.1406C12.2188 25.4351 13.268 26.4844 14.5625 26.4844H46.4375C47.732 26.4844 48.7812 25.4351 48.7812 24.1406ZM25.3438 33.5156C25.3438 32.2212 24.2945 31.1719 23 31.1719H14.5625C13.268 31.1719 12.2188 32.2212 12.2188 33.5156C12.2188 34.8101 13.268 35.8594 14.5625 35.8594H23C24.2945 35.8594 25.3438 34.8101 25.3438 33.5156ZM12.2188 14.5312C12.2188 16.1493 13.5304 17.4609 15.1484 17.4609C16.7664 17.4609 18.0781 16.1493 18.0781 14.5312C18.0781 12.9132 16.7664 11.6016 15.1484 11.6016C13.5304 11.6016 12.2188 12.9132 12.2188 14.5312ZM57.9944 57.4943C61.3298 54.1589 61.3298 48.7317 57.9944 45.3962L49.7785 37.1804C47.4039 34.8057 44.4082 33.2029 41.1153 32.5446L34.475 31.2173C33.707 31.0635 32.9124 31.3043 32.3584 31.8584C31.8043 32.4125 31.5638 33.2067 31.7173 33.9751L33.0446 40.6154C33.7029 43.9084 35.3059 46.9039 37.6803 49.2786L45.8962 57.4944C47.512 59.1101 49.6603 60 51.9453 60C54.2304 60 56.3786 59.1101 57.9944 57.4943ZM40.1966 37.1412C42.5789 37.6173 44.746 38.7769 46.4639 40.4948L54.6798 48.7106C56.1876 50.2185 56.1876 52.6719 54.6798 54.1798C53.9495 54.9102 52.9782 55.3125 51.9453 55.3125C50.9124 55.3125 49.9412 54.9102 49.2109 54.1798L40.995 45.964C39.2771 44.246 38.1174 42.0789 37.6413 39.6967L37.003 36.503L40.1966 37.1412Z"
                />
              </g>
              <defs>
                <clipPath id="clip0_1762_2739">
                  <rect
                    width="60"
                    height="60"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>

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
            <svg
              className="w-6 h-6 justify-self-center md:w-14 md:h-14 lg:w-[60px] lg:h-[60px]"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="chat 1" clip-path="url(#clip0_1762_2744)">
                <g id="Group">
                  <g id="Group_2">
                    <path
                      id="Vector"
                      fill={
                        category === "parentalInvolvementAndSupport"
                          ? "#4D1435"
                          : "#3C4553"
                      }
                      d="M41.25 0H7.5C3.36375 0 0 3.36375 0 7.5V30C0 34.1362 3.36375 37.5 7.5 37.5V46.875C7.5 47.6063 7.9275 48.2738 8.59125 48.5775C8.8425 48.6938 9.10875 48.75 9.375 48.75C9.81375 48.75 10.2487 48.5962 10.5938 48.2962L23.1938 37.5H41.25C45.3862 37.5 48.75 34.1362 48.75 30V7.5C48.75 3.36375 45.3862 0 41.25 0ZM45 30C45 32.0662 43.3162 33.75 41.25 33.75H22.5C22.0537 33.75 21.6188 33.9075 21.2812 34.2038L11.25 42.7988V35.625C11.25 34.59 10.41 33.75 9.375 33.75H7.5C5.43375 33.75 3.75 32.0662 3.75 30V7.5C3.75 5.43375 5.43375 3.75 7.5 3.75H41.25C43.3162 3.75 45 5.43375 45 7.5V30Z"
                    />
                  </g>
                </g>
                <g id="Group_3">
                  <g id="Group_4">
                    <path
                      id="Vector_2"
                      fill={
                        category === "parentalInvolvementAndSupport"
                          ? "#4D1435"
                          : "#3C4553"
                      }
                      d="M54.9855 11.6886C54.003 11.3511 52.9417 11.8686 52.6005 12.8511C52.263 13.8298 52.7805 14.8948 53.763 15.2361C55.248 15.7461 56.2492 17.1598 56.2492 18.7498V41.2498C56.2492 43.3161 54.5655 44.9998 52.4992 44.9998H50.6242C49.5892 44.9998 48.7492 45.8398 48.7492 46.8748V54.0486L38.718 45.4536C38.3805 45.1573 37.9455 44.9998 37.4992 44.9998H20.8867C19.8517 44.9998 19.0117 45.8398 19.0117 46.8748C19.0117 47.9098 19.848 48.7498 20.8867 48.7498H36.8055L49.4055 59.5461C49.7505 59.8461 50.1855 59.9998 50.6242 59.9998C50.8905 59.9998 51.1567 59.9436 51.408 59.8273C52.0717 59.5236 52.4992 58.8561 52.4992 58.1248V48.7498C56.6355 48.7498 59.9992 45.3861 59.9992 41.2498V18.7498C59.9992 15.5623 57.9855 12.7236 54.9855 11.6886Z"
                    />
                  </g>
                </g>
                <g id="Group_5">
                  <g id="Group_6">
                    <path
                      id="Vector_3"
                      fill={
                        category === "parentalInvolvementAndSupport"
                          ? "#4D1435"
                          : "#3C4553"
                      }
                      d="M35.625 11.25H13.125C12.09 11.25 11.25 12.09 11.25 13.125C11.25 14.16 12.09 15 13.125 15H35.625C36.66 15 37.5 14.16 37.5 13.125C37.5 12.09 36.66 11.25 35.625 11.25Z"
                    />
                  </g>
                </g>
                <g id="Group_7">
                  <g id="Group_8">
                    <path
                      id="Vector_4"
                      fill={
                        category === "parentalInvolvementAndSupport"
                          ? "#4D1435"
                          : "#3C4553"
                      }
                      d="M28.125 18.75H13.125C12.09 18.75 11.25 19.59 11.25 20.625C11.25 21.66 12.09 22.5 13.125 22.5H28.125C29.16 22.5 30 21.66 30 20.625C30 19.59 29.16 18.75 28.125 18.75Z"
                    />
                  </g>
                </g>
              </g>
              <defs>
                <clipPath id="clip0_1762_2744">
                  <rect width="60" height="60" fill="white" />
                </clipPath>
              </defs>
            </svg>

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
            <svg
              className="w-6 h-6 justify-self-center md:w-14 md:h-14 lg:w-[60px] lg:h-[60px]"
              viewBox="0 0 61 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="badge 1" clip-path="url(#clip0_1762_2760)">
                <path
                  id="Vector"
                  fill={
                    category === "outcomesAndBenefits" ? "#4D1435" : "#3C4553"
                  }
                  d="M56.6503 49.9246L49.2116 35.0459C51.6465 31.4548 53.0706 27.1252 53.0706 22.4689C53.0706 10.0795 42.9911 0 30.6017 0C18.2123 0 8.13282 10.0795 8.13282 22.4689C8.13282 27.1252 9.55692 31.4552 11.9922 35.0468L4.55265 49.9246C4.28028 50.4698 4.30958 51.1166 4.62955 51.6348C4.94999 52.153 5.51578 52.4689 6.12507 52.4689H14.6601L19.7811 59.2969C20.1152 59.7418 20.6371 60 21.1873 60C21.9165 60 22.491 59.5651 22.7597 59.0282L29.813 44.9222C30.0748 44.9313 30.3376 44.9377 30.6017 44.9377C30.8658 44.9377 31.1286 44.9313 31.3904 44.9222L38.4436 59.0282C38.7114 59.5642 39.2864 60 40.0161 60C40.5658 60 41.0881 59.7418 41.4218 59.2969L46.5433 52.4689H55.0783C55.6876 52.4689 56.2534 52.153 56.5734 51.6348C56.8938 51.1166 56.9231 50.4698 56.6503 49.9246ZM20.8875 54.912L16.9452 49.6564C16.6133 49.2137 16.0924 48.9532 15.539 48.9532H8.96915L14.4239 38.0447C17.5211 41.2601 21.5641 43.5585 26.101 44.4846L20.8875 54.912ZM11.6484 22.4689C11.6484 12.0181 20.1509 3.51562 30.6017 3.51562C41.0524 3.51562 49.5549 12.0181 49.5549 22.4689C49.5549 32.9196 41.0524 41.4221 30.6017 41.4221C20.1509 41.4221 11.6484 32.9196 11.6484 22.4689ZM45.6639 48.9532C45.111 48.9532 44.59 49.2137 44.2577 49.6564L40.3159 54.912L35.102 44.4846C39.6393 43.558 43.6827 41.2601 46.78 38.0438L52.2338 48.9528H45.6639V48.9532Z"
                />
                <path
                  id="Vector_2"
                  fill={
                    category === "outcomesAndBenefits" ? "#4D1435" : "#3C4553"
                  }
                  d="M39.5753 25.3845L44.4843 19.5251C44.8734 19.0609 44.9961 18.4292 44.8089 17.8534C44.6217 17.277 44.1511 16.838 43.5638 16.6911L36.1485 14.8362L32.0922 8.3566C31.7709 7.84299 31.2078 7.53125 30.6022 7.53125C29.9966 7.53125 29.4335 7.84299 29.1122 8.3566L25.0568 14.8362L17.642 16.6911C17.0542 16.838 16.5836 17.277 16.3964 17.8529C16.2096 18.4292 16.3319 19.0609 16.721 19.5251L21.63 25.3845L21.1018 33.0095C21.0601 33.6137 21.332 34.1969 21.8218 34.553C22.5657 35.0937 23.3224 34.8378 23.5124 34.7613L30.6022 31.904L37.692 34.7618C38.2537 34.9879 38.8923 34.9092 39.3821 34.5535C39.8724 34.1974 40.1443 33.6142 40.1026 33.0099L39.5753 25.3845ZM36.4254 23.6697C36.1334 24.0185 35.9878 24.4662 36.0194 24.9199L36.4016 30.451L31.2595 28.3783C30.6896 28.1485 30.1897 28.2794 29.9453 28.3783L24.8032 30.451L25.1864 24.9203C25.2175 24.4667 25.072 24.0185 24.7799 23.6697L21.2194 19.4203L26.5977 18.0749C27.039 17.9646 27.4198 17.6877 27.6611 17.3022L30.6027 12.6024L33.5447 17.3022C33.7859 17.6877 34.1668 17.9646 34.6081 18.0749L39.9864 19.4203L36.4254 23.6697Z"
                />
              </g>
              <defs>
                <clipPath id="clip0_1762_2760">
                  <rect
                    width="60"
                    height="60"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
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
            {/* <Image
            src={creditCardIcon}
            alt="General Info icon"
            className="w-6 h-6 justify-self-center md:w-14 md:h-14 lg:w-[60px] lg:h-[60px]"
            /> */}

            <svg
              className="w-6 h-6 justify-self-center md:w-14 md:h-14 lg:w-[60px] lg:h-[60px]"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="credit-card 1">
                <g id="Group">
                  <g id="Group_2">
                    <path
                      id="Vector"
                      fill={
                        category === "paymentAccess" ? "#4D1435" : "#3C4553"
                      }
                      d="M58.125 37.4995C57.09 37.4995 56.25 38.3395 56.25 39.3745V52.4995H3.75V29.9995H24.375C25.41 29.9995 26.25 29.1595 26.25 28.1245C26.25 27.0895 25.41 26.2495 24.375 26.2495H3.75V18.7495H24.375C25.41 18.7495 26.25 17.9095 26.25 16.8745C26.25 15.8395 25.41 14.9995 24.375 14.9995H3.75C1.68 14.9995 0 16.6795 0 18.7495V52.4995C0 54.5695 1.68 56.2495 3.75 56.2495H56.25C58.32 56.2495 60 54.5695 60 52.4995V39.3745C60 38.3395 59.16 37.4995 58.125 37.4995Z"
                    />
                  </g>
                </g>
                <g id="Group_3">
                  <g id="Group_4">
                    <path
                      id="Vector_2"
                      fill={
                        category === "paymentAccess" ? "#4D1435" : "#3C4553"
                      }
                      d="M16.875 37.4995H9.375C8.34 37.4995 7.5 38.3395 7.5 39.3745C7.5 40.4095 8.34 41.2495 9.375 41.2495H16.875C17.91 41.2495 18.75 40.4095 18.75 39.3745C18.75 38.3395 17.91 37.4995 16.875 37.4995Z"
                    />
                  </g>
                </g>
                <g id="Group_5">
                  <g id="Group_6">
                    <path
                      id="Vector_3"
                      fill={
                        category === "paymentAccess" ? "#4D1435" : "#3C4553"
                      }
                      d="M58.8637 9.52455L45.7387 3.89955C45.2625 3.7008 44.7338 3.7008 44.2575 3.89955L31.1325 9.52455C30.4463 9.8208 30 10.4996 30 11.2496V18.7496C30 29.0658 33.8138 35.0958 44.0663 41.002C44.355 41.167 44.6775 41.2495 45 41.2495C45.3225 41.2495 45.645 41.167 45.9337 41.002C56.1862 35.1108 60 29.0808 60 18.7496V11.2496C60 10.4996 59.5537 9.8208 58.8637 9.52455ZM56.25 18.7496C56.25 27.4083 53.385 32.1745 45 37.1996C36.615 32.1633 33.75 27.397 33.75 18.7496V12.4871L45 7.66455L56.25 12.4871V18.7496Z"
                    />
                  </g>
                </g>
                <g id="Group_7">
                  <g id="Group_8">
                    <path
                      id="Vector_4"
                      fill={
                        category === "paymentAccess" ? "#4D1435" : "#3C4553"
                      }
                      d="M51.7994 15.4083C50.9931 14.7708 49.8156 14.8946 49.1631 15.7008L43.2681 23.0733L40.9356 19.5858C40.3544 18.7233 39.1881 18.4946 38.3369 19.0646C37.4781 19.6383 37.2419 20.8046 37.8156 21.6633L41.5656 27.2883C41.8994 27.7871 42.4469 28.0946 43.0469 28.1246C43.0731 28.1246 43.1031 28.1246 43.1256 28.1246C43.6919 28.1246 44.2319 27.8696 44.5919 27.4196L52.0919 18.0446C52.7369 17.2346 52.6094 16.0571 51.7994 15.4083Z"
                    />
                  </g>
                </g>
              </g>
            </svg>

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
              className="shadow-md h-7 w-7 flex justify-center items-center absolute top-1/2 transform -translate-y-1/2 bg-white rounded-full lg:hidden"
              style={{ right: `calc(${-arrowPosition}px + 10%)` }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="icon-chevron-right">
                  <path
                    id="Shape"
                    d="M6.47157 3.52851C6.21122 3.26816 5.78911 3.26816 5.52876 3.52851C5.26841 3.78886 5.26841 4.21097 5.52876 4.47132L9.05735 7.99992L5.52876 11.5285C5.26841 11.7889 5.26841 12.211 5.52876 12.4713C5.78911 12.7317 6.21122 12.7317 6.47157 12.4713L10.4716 8.47132C10.7319 8.21097 10.7319 7.78886 10.4716 7.52851L6.47157 3.52851Z"
                    fill="#460C04"
                  />
                </g>
              </svg>
            </div>
          )}
        </section>
      ) : null}

      {(!isMobile || !showModal) && (
        <section className="w-[90%] mt-6 mb-[52px] mx-auto grid gap-4 lg:my-[52px] xl:w-[1280px]">
          {data.length > 0 ? (
            <>
              <ListingFAQ data={data} />
            </>
          ) : (
            <section className="my-[77px] grid gap-4 mx-auto w-auto">
              <div className="text-[18px] font-[600] leading-[21.6px] text-center text-[#1A2434]">
                We couldn’t find anything related to "{search}"
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
