import ListingFAQ from "@/app/components/ListingFAQ";
import Link from "next/link";

interface IData {
  q: string;
  ans: string | JSX.Element;
}

interface IFaq {
  [key: string]: IData[];
}

const FaqSection = () => {
  const obj: IFaq = {
    generalInfo: [
      {
        q: "How does KGKP customize the learning experience for each student?",
        ans: (
          <>
            <div>
              Every child , at the moment of birth, has a potential to become a
              genius in some area or the other. The earlier the child joins the
              program, the more is the possibility of enhancement of his IQ.{" "}
            </div>
            <div className="mt-5">
              The first step is to understand every child’s unique talent
              profile. This is done by conducting the ridge analysis test for
              the children. The report of this test gives clear information
              about the innate talent profile of the child with assessment of
              everyone of the 8 different intelligences. Based on this , the
              children are grouped into different Co curricular activities
              available in the school, thus providing for customised exposure to
              everyone of the children .
            </div>
          </>
        ),
      },
      {
        q: "What training do teachers receive as part of the KGKP implementation in our school?",
        ans: (
          <>
            <div>
              Pre school teachers are trained in the entire 7 stage brain
              development process in the first 6 years of age. They are also
              trained in handling the access and delivery of reading, math and
              encyclopaedic knowledge programs of the KGKP course using the
              online learning management system.
            </div>
            <div className="mt-5">
              Nursery to Xth class teachers are trained on understanding the
              ridge analysis reports and planning out customised activity plan
              for the children based on the multiple intelligence matrix. This
              plan when executed well, results in enhancement of the IQ. They
              are also trained on accessing , delivering and monitoring the EQ
              and SQ enhancement program by using the online KGKP learning
              management system.
            </div>
          </>
        ),
      },
      {
        q: "How does KGKP help in improving our school students' IQ, EQ, and SQ?",
        ans: (
          <>
            <div>
              KGK program has two distinct parts. One part is for the preschool
              level from 0-6 years age group wherein 80% focus is on enhancing
              the IQ of the children and 20% focus is on sowing the seeds of EQ
              and SQ at the sub conscious level.
              <span className="block">
                IQ is enhanced by specific activities to accelerate the
                milestones of brain development. Also, the children are exposed
                to scientific, well designed reading, math and encyclopaedic
                knowledge programs. This results into high academic excellence
                in the children in the medium term. Additionally, the children
                are put through the ridge analysis test to determine their
                unique talent profile, based on which they grouped into
                different activities for planned and targeted IQ enhancement.
              </span>
            </div>
            <div className="mt-5">
              The second part is for children between 6-15 years age. This
              program also includes the ridge analysis test for every child
              followed by specific, customised activity plan for IQ enhancement.
              EQ and SQ enhancement is achieved by delivery of very high quality
              video content @ two periods per week through the online KGKP
              learning management system. Hundreds of these videos on a wide
              range of subjects impart deep lessons which are further
              internalised through assignments and closely monitored
              teacher-parents support.
            </div>
          </>
        ),
      },
      {
        q: "What role do parents play in the KGKP implementation in our school?",
        ans: `Parents are given a monthly brief of the EQ and SQ enhancement program delivered at the school , the follow up internalisation assignments and the expected behavioural improvement in the children. Their role is to monitor and support the growth in the child at home.`,
      },
      {
        q: "How can we measure student progress and outcomes from the KGKP implementation?",
        ans: (
          <>
            <div>
              IQ enhancement at the preschool level is very high and can be seen
              in a few months in the areas of reading, math and encyclopaedic
              knowledge. Brachiation and other milestones acceleration
              activities also improve physical and mental fitness. Accelerated
              milestones can be measured in related performance tests.
              <span className="block">
                EQ and SQ enhancement shows up in behavioural improvement ,
                lifestyle choices and personality development.
              </span>
            </div>
          </>
        ),
      },
      {
        q: "How long does it take to see results from the KGKP implementation?",
        ans: (
          <>
            <div>
              At the preschool level, initial results can be seen in about 6
              months, if the KGK program is used consistently. Further
              enhancement can be seen gradually.
              <span className="block">
                At the primary level and above, year on year improvement can be
                plotted in academic , multiple intelligence as well as
                behavioural areas.
              </span>
            </div>
          </>
        ),
      },
      {
        q: "What resources are provided to teachers and schools as part of the KGKP partnership?",
        ans: (
          <>
            <div>
              Ridge analysis test is administered for every child to begin with.
              Reports are generated and delivered to the school for their record
              and follow up action. The preschool online KGK program resources
              include daily videos on reading, math , encyclopaedic knowledge
              and milestones acceleration.
              <span className="block mt-5">
                1st to 10th class KGK program resources include 2 videos per
                week on a wide range of subjects like health, life style,
                communication, ashtanga yoga, emotional intelligence, values,
                life lessons, patriotism, Indian culture, spirituality,
                relationships, shlokas, gender sensitisation, generation gap,
                time management, public speaking , prioritisation and many other
                subjects.
              </span>
            </div>
          </>
        ),
      },
      {
        q: "What does the course curriculum include once the Ridge Analysis is complete?",
        ans: (
          <>
            <div>
              The report of the ridge analysis test gives a clear understanding
              of the multiple intelligence profile of every child. Teachers
              trained by us use this information to form groups of children for
              exposing them in various activities to enhance specific
              intelligences.
              <span className="block ">
                Other IQ, EQ and SQ enhancement programs are delivered by
                trained teachers by accessing online content on the KGKP
                learning management system.
              </span>
            </div>
          </>
        ),
      },
      {
        q: "What kind of ongoing support does KGKP provide after the program is implemented?",
        ans: `Online content is regularly updated to keep it relevant to the latest trends in education. Webinars are conducted from time to time as and when required. The teachers can ask clarifications in the WhatsApp groups created for continuous guidance.`,
      },
      {
        q: "Is the KGKP adaptable for different school sizes and educational environments?",
        ans: `KGKP program can be effectively delivered in any size and environment of the school. The only requirement is good internet connectivity, av equipment and brachiation ladder (optional). All other resources are made available online.`,
      },
      {
        q: "What is the role of KGKP in guiding students' future career choices?",
        ans: `One of the pages in the ridge analysis report gives the possible higher education and career choices based on the talent profile of the child. Teachers are also trained on suggesting career choices based on the improvements achieved consequent to the exposure to the KGK program.`,
      },
      {
        q: "How can schools get started with the KGKP?",
        ans: (
          <>
            <div>
              The implementation of the KGK program at the school involves the
              following steps:
              <ul className="ml-4">
                <li>a. Initial enquiry and proposal submission </li>
                <li>b. Signing of contract </li>
                <li>c. Payment </li>
                <li>d. Ridge analysis test on a mutually convenient date </li>
                <li>e. Multiple intelligence activities </li>
                <li>f. Online KGKP content delivery. </li>
                <li>g. Plotting the results </li>
              </ul>
            </div>
          </>
        ),
      },
      {
        q: "What is the time commitment for implementing the KGKP in a school?",
        ans: (
          <>
            <div>
              Time commitment needed for effective implementation of the KGKP at
              school is as follows:
              <ul className="ml-4">
                <li>a. Teachers training:- 1 day</li>
                <li>b. Ridge analysis:- 100 children per day</li>
                <li>
                  c. Preschool course:- Reading, math, encyclopaedic knowledge
                  courses - 20 minutes/ day
                </li>
                <li>d. Brachiation:- 1 minute/ child.</li>
                <li>e. 1st - 10th standard:- 2 periods/ week.</li>
              </ul>
            </div>
          </>
        ),
      },
      {
        q: "What is the Kaushalya Genius Kid Program (KGKP)?",
        ans: `The Kaushalya Genius Kid Program (KGKP) is a unique online program designed to make every child a genius. "Kaushalya" means an expert or genius whose body, mind, and spirit are perfectly aligned. The programme is inspired by the Bhagavad Gita's teaching that says “ yogah karmasu kaushalam ” implies "yoga is excellence in action," KGKP helps children achieve excellence by aligning their body, mind, and spirit with their actions.`,
      },
      {
        q: "How does the Ridge Analysis Test work, and what information does it provide?",
        ans: `Ridge Analysis is a scientific method that helps to understand the inborn intelligences and learning styles by analysing fingerprints. This report gives clear information about the child’s strengths & weaknesses, growth rate of every brain lobe, and learning style of the child. This report is then used to identify where the highest potential genius of the child lies and create a unique activity plan that parents can use to help their child actualise their potential genius.`,
      },
      {
        q: "What are Howard Gardner’s 8 Multiple Intelligences, and how does KGKP address them?",
        ans: (
          <>
            <div>
              The concept of multiple intelligences is a theory proposed by
              Howard Gardner, a psychologist and a professor of education to
              propose that human brain is capable of different types of
              intelligences. These multiple intelligences include logical,
              linguistic, spatial, kinesthetic, interpersonal, intrapersonal,
              musical and naturalistic intelligences. Every child at the moment
              of birth has the potential intelligence to become a genius in onr
              or more of these intelligences.
              <span className="block mt-5">
                These intelligences are functions of different lobes in the
                brain and our Ridge Analysis report mentions critical
                information about the intelligence profile of the child. This
                information is used in our age appropriate activity plan for the
                child and parents are also counselled to practise some
                activities at home or through other available resources.
              </span>
            </div>
          </>
        ),
      },
    ],
  };

  return (
    <>
      <div className="pt-[72px] pb-[52px] lg:pt-[174px] lg:pb-[124px] lg:relative">
        <section className="text-[20px] font-[700] leading-[24px] mx-auto text-[#1A2434] text-center lg:text-[32px] lg:leading-[38.4px]">
          <span className="relative">
            <span className="z-10 relative">
              Frequently Asked Questions{" "}
              <span className="hidden lg:inline">(FAQs)</span>
            </span>
            <svg
              className="absolute w-[176.08px] h-5 right-[-93px] bottom-[-14px] translate-x-[-50%] z-0 lg:-bottom-5 lg:right-[-4rem] lg:w-[303.4px] lg:rotate-1 lg:h-[34.76px]"
              viewBox="0 0 345 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#FFB31F"
                d="M337.13 14.89C336.3 15.53 326.72 14.27 325.18 13.31C323.41 12.21 318.84 11.39 317.8 11.98C317.03 12.42 316.66 12.27 316.74 11.56C316.86 10.44 313.9 9.87001 312.76 10.8C312.42 11.08 311.03 10.8 309.67 10.17C307.85 9.33001 306.83 9.44001 305.76 10.61C304.74 11.72 304.15 11.81 303.77 10.91C302.96 8.98001 299.01 7.81001 297.23 8.97001C296.32 9.57001 295.71 9.56001 295.78 8.96001C295.94 7.53001 279.53 4.64001 265.83 3.69001C264.38 3.59001 260.72 3.16001 257.69 2.74001C248.78 1.50001 246.18 1.69001 246.57 3.55001C246.86 4.95001 246.64 4.89001 244.94 3.08001C243.86 1.93001 242.78 1.15001 242.54 1.34001C242.3 1.54001 239.36 1.37001 236.01 0.980012C232.66 0.590012 228.99 0.700012 227.86 1.23001C226.5 1.87001 225.66 1.80001 225.37 1.04001C225.07 0.250013 224.56 0.140012 223.75 0.670012C223.1 1.10001 221.75 1.07001 220.74 0.610013C219.54 0.0600126 218.85 0.270013 218.75 1.20001C218.6 2.59001 216.72 2.63001 212.68 1.33001C210.95 0.770012 210.73 1.02001 211.05 3.13001C211.41 5.49001 211.37 5.50001 209.93 3.49001C208.87 2.00001 208.14 1.64001 207.39 2.25001C206.65 2.86001 206.21 2.76001 205.89 1.90001C205.57 1.07001 204.55 1.00001 202.59 1.68001C200.89 2.27001 198.79 2.21001 197.35 1.54001C195.56 0.710013 194.9 0.800012 194.78 1.90001C194.67 2.87001 193.8 3.17001 192.25 2.77001C190.02 2.20001 188.58 2.21001 178.75 2.83001C176.54 2.97001 173.75 3.02001 172.54 2.94001C169.38 2.73001 167.18 3.34001 167.06 4.45001C167 4.98001 165.92 4.91001 164.64 4.30001C162.1 3.08001 156.36 2.81001 145.49 3.39001C132.38 4.10001 128.58 4.53001 123.98 5.82001C121.47 6.53001 119.13 6.97001 118.78 6.80001C118.43 6.63001 118.1 6.94001 118.04 7.48001C117.98 8.02001 117.17 8.30001 116.24 8.09001C115.31 7.88001 111.96 8.48001 108.79 9.41001C105.62 10.34 98.19 11.67 92.27 12.35C75.84 14.25 60.05 16.75 59.43 17.54C59.12 17.93 57.77 18.31 56.42 18.38C54.33 18.49 53.91 19.02 53.59 21.96C53.38 23.85 52.81 25.31 52.33 25.2C51.82 25.09 51.8 24.01 52.27 22.64C53.06 20.37 52.99 20.29 50.5 20.79C49.07 21.08 47.26 21.76 46.47 22.31C45.68 22.86 43.41 23.51 41.44 23.76C39.47 24.01 36.04 24.89 33.82 25.72C31.6 26.55 28.66 27.08 27.27 26.89C25.89 26.7 24.72 26.89 24.67 27.3C24.62 27.71 24.03 27.66 23.35 27.19C22.56 26.64 22.05 26.92 21.94 27.96C21.84 28.86 21.28 29.39 20.7 29.15C19.52 28.66 16.75 29.05 14.63 30.01C13.86 30.36 12.62 30.8 11.87 30.99C11.12 31.18 8.27003 32.6 5.54003 34.16C0.930031 36.79 -0.619969 38.87 0.900031 40.41C2.07003 41.59 7.57003 39.18 8.60003 37.03C9.16003 35.86 9.81003 34.94 10.05 34.99C10.28 35.04 10.18 35.7 9.81003 36.46C8.92003 38.31 10.07 38.42 13.38 36.8C14.89 36.06 16.42 35.75 16.78 36.11C17.13 36.47 17.47 36.34 17.53 35.83C17.59 35.32 20.73 34.78 24.52 34.64C28.31 34.5 31.86 34.11 32.42 33.79C32.98 33.46 34.77 33.4 36.42 33.65C38.06 33.9 39.92 33.81 40.55 33.45C41.18 33.09 42.5 33.28 43.49 33.89C44.64 34.59 45.61 34.56 46.17 33.81C46.88 32.86 47.35 32.94 48.64 34.24C50 35.61 50.53 35.59 52.22 34.09C53.92 32.59 54.18 32.58 54.02 34.02C53.87 35.36 54.33 35.68 56.28 35.57C57.63 35.5 58.96 35.18 59.23 34.87C60.45 33.51 62.89 33.75 62.73 35.21C62.63 36.08 63.01 36.52 63.62 36.25C64.2 35.99 65.98 35.98 67.57 36.22C69.16 36.46 71.09 36.26 71.84 35.76C72.92 35.05 73.28 35.15 73.52 36.23C73.7 37.06 73.93 36.88 74.1 35.78C74.3 34.45 74.83 34.2 76.04 34.85C77.09 35.42 77.54 35.32 77.26 34.57C76.97 33.82 77.45 33.74 78.58 34.35C79.84 35.03 80.56 34.8 81.08 33.54C81.48 32.56 82.17 32.13 82.61 32.57C83.04 33.01 84.04 32.67 84.81 31.81C86.12 30.37 86.21 30.38 86.06 31.99C85.97 32.95 86.28 33.81 86.76 33.92C87.23 34.03 87.61 33.77 87.6 33.35C87.59 32.93 87.72 31.73 87.9 30.69C88.21 28.81 88.23 28.82 89.27 31C89.93 32.37 90.39 32.72 90.5 31.91C90.61 31.1 91.25 30.97 92.21 31.56C93.1 32.1 94.28 31.97 95.01 31.24C95.7 30.55 96.83 30.1 97.51 30.26C98.22 30.42 98.55 30 98.27 29.27C97.93 28.37 98.46 28.36 100.1 29.23C102.02 30.24 102.36 30.16 102.06 28.74C101.79 27.43 102.06 27.25 103.24 27.96C104.12 28.5 105.31 28.36 106.03 27.64C106.72 26.95 108.02 26.54 108.91 26.74C109.8 26.94 110.58 26.66 110.64 26.11C110.7 25.57 111.55 25.3 112.53 25.52C113.54 25.75 114.12 25.42 113.87 24.77C113.58 24.02 114.19 24.02 115.59 24.76C116.86 25.43 117.8 25.48 117.86 24.89C117.92 24.34 118.93 24.22 120.1 24.64C121.27 25.05 122.27 24.99 122.33 24.5C122.38 24.01 122.91 23.81 123.49 24.06C124.56 24.52 127.83 23.9 132.6 22.34C134.03 21.87 135.74 21.61 136.4 21.76C137.06 21.91 138.35 20.83 139.27 19.36C140.27 17.76 141.62 16.85 142.64 17.08C143.58 17.29 144.39 17.06 144.44 16.57C144.59 15.25 150.17 14.53 150.94 15.73C152 17.4 156.11 16.91 156.78 15.04C157.29 13.62 158.2 13.5 161.83 14.39C164.26 14.99 167.33 15.24 168.64 14.96C171.18 14.42 183.75 14.86 186.56 15.6C187.49 15.84 188.78 15.68 189.45 15.25C190.11 14.81 191.13 14.76 191.72 15.13C192.3 15.5 194.1 15.49 195.71 15.1C197.32 14.71 200.18 14.74 202.07 15.17C204.63 15.74 205.9 15.46 207.08 14.06C208.63 12.2 208.67 12.21 209.69 14.39C210.59 16.3 211 16.49 212.68 15.74C213.76 15.27 215 15.24 215.43 15.68C215.87 16.12 216.85 16.08 217.61 15.58C218.37 15.08 219.51 15.04 220.15 15.48C220.87 15.98 221.61 15.51 222.08 14.25C222.84 12.25 222.87 12.25 223.92 14.42C224.85 16.35 225.01 16.41 225.17 14.95C225.35 13.34 226.7 13.14 229.9 14.24C230.72 14.52 231.44 14.28 231.51 13.7C231.57 13.12 232.57 12.86 233.73 13.12C234.89 13.38 236.16 13.16 236.55 12.63C237.07 11.93 237.4 12.02 237.75 12.93C238.02 13.62 238.89 14.06 239.69 13.89C241.45 13.53 241.07 10.93 238.83 7.95001C237.96 6.80001 237.64 5.94001 238.11 6.05001C239.34 6.33001 242.47 10.63 242.33 11.86C242.26 12.49 243.52 12.99 245.51 13.13C247.32 13.26 250.45 13.77 252.46 14.26C254.47 14.76 256.17 14.73 256.23 14.2C256.29 13.67 258.86 13.8 261.95 14.49C265.03 15.18 267.95 15.57 268.42 15.36C268.89 15.15 271.18 15.17 273.51 15.41C280.86 16.17 282.77 16.16 283.77 15.34C284.36 14.86 285.47 15.05 286.61 15.84C287.64 16.55 288.75 16.91 289.09 16.63C289.43 16.36 291.55 16.39 293.82 16.71C303.91 18.12 313.52 18.81 314.52 18.19C315.12 17.82 316.37 17.89 317.29 18.35C320.87 20.13 338.05 24.15 341.1 23.92C343.81 23.71 344.37 23.24 344.69 20.87C345.02 18.47 344.78 18.07 343.06 18.06C341.94 18.06 340.52 17.22 339.85 16.17C338.46 13.98 338.31 13.92 337.09 14.87L337.13 14.89ZM233.06 7.92001C233 8.46001 232.54 8.82001 232.04 8.70001C231.54 8.59001 231.41 8.10001 231.77 7.63001C232.12 7.15001 232.58 6.80001 232.79 6.85001C233 6.90001 233.12 7.38001 233.06 7.92001ZM235.01 11.12C234.02 11.93 233.46 10.25 234.33 9.08001C234.99 8.19001 235.19 8.24001 235.37 9.31001C235.49 10.04 235.33 10.86 235.01 11.12ZM195.15 6.53001C195.09 7.07001 194.63 7.43001 194.13 7.31001C193.63 7.20001 193.5 6.71001 193.86 6.24001C194.21 5.76001 194.67 5.41001 194.88 5.46001C195.09 5.51001 195.21 5.99001 195.15 6.53001ZM139.19 16.3C139.13 16.84 138.67 17.2 138.17 17.08C137.67 16.97 137.54 16.48 137.9 16.01C138.25 15.53 138.71 15.18 138.92 15.23C139.13 15.28 139.25 15.76 139.19 16.3ZM137.89 20.06C137.83 20.6 137.39 20.96 136.92 20.86C136.45 20.75 136.11 20.22 136.17 19.68C136.23 19.14 136.67 18.78 137.14 18.88C137.61 18.99 137.95 19.52 137.89 20.06ZM128.01 21.34C127.89 22.38 126.19 22.45 125.8 21.43C125.56 20.81 125.98 20.44 126.72 20.61C127.46 20.78 128.04 21.11 128.02 21.35L128.01 21.34ZM63.7 26.6C63.56 27.89 62.44 28.51 61.67 27.74C60.85 26.91 61.81 25.34 62.98 25.6C63.43 25.7 63.75 26.15 63.7 26.61V26.6ZM78.69 31.13C78.34 31.61 78.72 32.15 79.54 32.33C81.69 32.81 80.68 33.21 77.36 33.19C74.06 33.17 73.69 31.85 76.73 30.91C79.39 30.09 79.46 30.1 78.7 31.13H78.69ZM54.39 30.76C54.33 31.3 54.11 31.71 53.9 31.66C53.69 31.61 53.33 31.08 53.09 30.47C52.85 29.86 53.08 29.45 53.58 29.57C54.08 29.68 54.45 30.22 54.39 30.76Z"
              />
            </svg>
          </span>
        </section>

        <section className="relative mt-8 px-4 h-auto mx-auto lg:mt-[52px] xl:mx-20">
          <ListingFAQ data={obj[Object.keys(obj)[0]]} />
          <svg
            className="hidden lg:block absolute left-[-128px] top-[-206px] w-[240px] h-[248px] "
            viewBox="0 0 263 263"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_3870_5205)">
              <path
                d="M117.464 187.817C113.798 192.269 107.216 192.906 102.764 189.239L99.3442 186.423C91.3873 179.87 88.3964 168.998 91.9016 159.368C94.5378 152.125 91.9677 143.941 85.6501 139.468C78.7325 134.569 69.1379 135.534 63.3318 141.712C57.1864 148.244 57.1066 158.507 63.1392 165.071C63.6786 165.658 64.2675 166.215 64.8896 166.728C69.3415 170.394 69.9786 176.976 66.3116 181.428C62.645 185.88 56.0631 186.517 51.611 182.85C50.246 181.726 48.9505 180.5 47.7601 179.204C34.3629 164.625 34.5147 141.872 48.1109 127.409C61.0163 113.676 82.344 111.532 97.7211 122.422C111.697 132.32 117.375 150.45 111.528 166.513C111.044 167.841 111.484 169.363 112.622 170.301L116.041 173.117C120.494 176.783 121.131 183.365 117.464 187.817Z"
                fill="#FFD15B"
              />
              <path
                d="M141.451 207.572C137.784 212.024 131.202 212.661 126.75 208.994L126.683 208.939C122.232 205.273 121.594 198.691 125.261 194.239C128.928 189.787 135.51 189.15 139.962 192.817L140.029 192.871C144.481 196.538 145.117 203.12 141.451 207.572Z"
                fill="#FFD15B"
              />
              <path
                d="M53.6304 172.079C54.8193 173.376 56.1161 174.599 57.4811 175.723C60.6538 178.336 64.909 178.766 68.417 177.182C68.0631 178.694 67.3661 180.148 66.3118 181.428C62.6474 185.878 56.065 186.518 51.6117 182.85C50.2466 181.726 48.9533 180.499 47.764 179.202C34.3621 164.623 34.5176 141.869 48.1118 127.407C48.5989 126.889 49.0991 126.388 49.6118 125.905C40.5449 140.164 41.8634 159.272 53.6304 172.079Z"
                fill="#FFC344"
              />
              <path
                d="M97.7699 152.241C94.2655 161.87 97.2557 172.746 105.212 179.299L108.631 182.115C111.804 184.728 116.062 185.154 119.57 183.569C119.216 185.082 118.519 186.535 117.465 187.816C113.797 192.269 107.218 192.905 102.765 189.238L99.3464 186.422C91.3901 179.869 88.3965 168.997 91.9039 159.364C94.5381 152.12 91.9682 143.942 85.6508 139.469C79.7109 135.259 71.7955 135.376 66.005 139.412C66.7704 137.671 67.8387 136.037 69.203 134.586C75.0086 128.407 84.6023 127.441 91.5207 132.342C97.8378 136.815 100.405 144.997 97.7699 152.241Z"
                fill="#FFC344"
              />
              <path
                d="M143.556 203.324C143.202 204.837 142.505 206.29 141.451 207.571C137.784 212.024 131.204 212.66 126.751 208.993L126.683 208.936C122.233 205.272 121.593 198.689 125.26 194.236C126.315 192.956 127.608 191.993 129.025 191.356C128.146 195.106 129.38 199.204 132.549 201.814L132.617 201.87C135.79 204.483 140.049 204.908 143.556 203.324Z"
                fill="#FFC344"
              />
              <path
                d="M191.251 149.142C185.609 150.337 180.065 146.732 178.87 141.09L177.952 136.756C175.816 126.672 180.255 116.306 188.999 110.962C195.575 106.942 198.667 98.9404 196.516 91.5042C194.161 83.3615 186.057 78.135 177.666 79.3465C168.789 80.6226 162.329 88.5974 162.954 97.4909C163.01 98.2856 163.123 99.0888 163.29 99.8772C164.485 105.519 160.88 111.063 155.238 112.258C149.596 113.454 144.052 109.849 142.857 104.206C142.49 102.477 142.242 100.71 142.119 98.9546C140.732 79.2037 155.034 61.5077 174.682 58.6741C193.334 55.9816 211.346 67.6009 216.582 85.7015C221.339 102.153 214.476 119.869 199.892 128.784C198.685 129.521 198.08 130.985 198.386 132.427L199.304 136.761C200.499 142.403 196.893 147.946 191.251 149.142Z"
                fill="#6FD7A3"
              />
              <path
                d="M197.691 179.541C192.049 180.737 186.505 177.131 185.31 171.489L185.292 171.404C184.097 165.762 187.702 160.219 193.344 159.023C198.986 157.828 204.53 161.433 205.725 167.075L205.743 167.16C206.939 172.803 203.334 178.346 197.691 179.541Z"
                fill="#6FD7A3"
              />
              <path
                d="M151.15 97.0422C151.272 98.7974 151.523 100.562 151.889 102.292C152.741 106.314 155.801 109.302 159.531 110.25C158.311 111.212 156.86 111.915 155.238 112.258C149.599 113.453 144.053 109.85 142.857 104.206C142.49 102.476 142.244 100.71 142.123 98.9546C140.732 79.2005 155.038 61.5062 174.684 58.672C175.388 58.5707 176.091 58.4911 176.793 58.433C160.814 63.9299 149.933 79.6934 151.15 97.0422Z"
                fill="#3EC3A4"
              />
              <path
                d="M198.03 109.047C189.288 114.392 184.845 124.76 186.982 134.844L187.899 139.176C188.751 143.197 191.816 146.185 195.546 147.132C194.326 148.095 192.875 148.797 191.253 149.14C185.609 150.336 180.068 146.732 178.872 141.088L177.954 136.756C175.818 126.672 180.255 116.305 189.003 110.959C195.578 106.937 198.667 98.9406 196.516 91.5049C194.496 84.5105 188.233 79.668 181.19 79.2141C182.874 78.3297 184.728 77.7181 186.699 77.4337C195.091 76.221 203.194 81.4468 205.548 89.5914C207.7 97.0274 204.606 105.025 198.03 109.047Z"
                fill="#3EC3A4"
              />
              <path
                d="M201.986 177.532C200.766 178.494 199.315 179.196 197.693 179.54C192.049 180.736 186.508 177.132 185.312 171.488L185.294 171.401C184.099 165.763 187.702 160.216 193.346 159.021C194.968 158.677 196.579 158.73 198.084 159.115C195.06 161.5 193.47 165.473 194.321 169.489L194.339 169.576C195.191 173.597 198.256 176.584 201.986 177.532Z"
                fill="#3EC3A4"
              />
              <path
                d="M148.623 155.257C142.852 158.193 135.792 155.894 132.856 150.122L130.601 145.689C125.354 135.374 127.156 122.842 135.086 114.506C141.05 108.235 142.078 98.6594 137.584 91.2201C132.664 83.0741 122.357 79.7608 113.608 83.5128C104.353 87.4767 99.6639 98.0021 102.926 107.465C103.217 108.311 103.574 109.149 103.984 109.956C106.92 115.727 104.621 122.787 98.8493 125.723C93.0776 128.659 86.0184 126.36 83.0824 120.588C82.1824 118.819 81.3997 116.974 80.7559 115.107C73.5121 94.0903 83.8807 70.7432 104.364 61.9607C123.809 53.6206 146.721 60.987 157.658 79.0957C167.598 95.5546 165.304 116.761 152.078 130.667C150.984 131.818 150.753 133.581 151.503 135.057L153.758 139.49C156.694 145.262 154.395 152.321 148.623 155.257Z"
                fill="#F8AC19"
              />
              <path
                d="M164.441 186.353C158.67 189.289 151.61 186.99 148.674 181.218L148.63 181.132C145.694 175.36 147.993 168.301 153.765 165.365C159.537 162.429 166.596 164.728 169.532 170.5L169.576 170.586C172.512 176.358 170.213 183.417 164.441 186.353Z"
                fill="#F8AC19"
              />
              <path
                d="M89.9941 110.409C90.6356 112.277 91.421 114.118 92.3212 115.888C94.4136 120.001 98.5995 122.353 102.921 122.297C101.878 123.695 100.508 124.878 98.8483 125.722C93.08 128.657 86.0187 126.361 83.0819 120.588C82.1817 118.818 81.4014 116.975 80.7598 115.106C73.511 94.0875 83.8837 70.741 104.365 61.9586C105.099 61.6443 105.838 61.3536 106.583 61.0868C90.8523 71.691 83.6327 91.9484 89.9941 110.409Z"
                fill="#FFB31F"
              />
              <path
                d="M144.324 109.805C136.395 118.142 134.591 130.677 139.838 140.992L142.092 145.423C144.185 149.537 148.376 151.886 152.698 151.83C151.655 153.228 150.285 154.411 148.625 155.255C142.852 158.192 135.795 155.894 132.858 150.121L130.604 145.689C125.357 135.374 127.156 122.842 135.09 114.502C141.052 108.23 142.078 98.6599 137.584 91.2212C133.361 84.223 125.162 80.7911 117.391 82.3458C118.961 80.8968 120.794 79.695 122.849 78.814C131.597 75.0604 141.903 78.373 146.824 86.5213C151.317 93.9602 150.286 103.532 144.324 109.805Z"
                fill="#FFB31F"
              />
              <path
                d="M168.515 182.926C167.472 184.324 166.103 185.507 164.443 186.351C158.669 189.288 151.613 186.99 148.676 181.217L148.631 181.128C145.697 175.36 147.992 168.298 153.765 165.362C155.425 164.517 157.188 164.107 158.932 164.087C156.345 167.552 155.775 172.323 157.865 176.431L157.91 176.52C160.002 180.633 164.194 182.982 168.515 182.926Z"
                fill="#FFB31F"
              />
            </g>
            <defs>
              <clipPath id="clip0_3870_5205">
                <rect
                  width="194.925"
                  height="194.925"
                  fill="white"
                  transform="translate(0 88.3782) rotate(-26.9618)"
                />
              </clipPath>
            </defs>
          </svg>
        </section>

        <section className="w-[189px] h-[51px] mt-6 rounded-[50px] bg-[#4D1435] mx-auto lg:w-[387px] lg:h-[77px] lg:mt-[60px] cursor-pointer custom-black-button">
          <Link
            className="w-full h-full px-7 py-4 flex gap-[14px] items-center justify-center lg:px-20 lg:py-6"
            href="/faq"
          >
            <section className=" text-white text-[16px] font-[700] leading-[19.2px] lg:text-[24px] lg:leading-[28.8px] custom-button-icon">
              See All FAQs
            </section>
            <svg
              className="w-4 h-4 lg:w-6 lg:h-6 custom-button-icon"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="icon-arrow-right">
                <path
                  id="Shape"
                  d="M8.02843 3.36177C8.28878 3.10142 8.71089 3.10142 8.97124 3.36177L13.6379 8.02843C13.8983 8.28878 13.8983 8.71089 13.6379 8.97124L8.97124 13.6379C8.71089 13.8983 8.28878 13.8983 8.02843 13.6379C7.76808 13.3776 7.76808 12.9554 8.02843 12.6951L11.557 9.1665H3.83317C3.46498 9.1665 3.1665 8.86803 3.1665 8.49984C3.1665 8.13165 3.46498 7.83317 3.83317 7.83317H11.557L8.02843 4.30457C7.76808 4.04423 7.76808 3.62212 8.02843 3.36177Z"
                  className="fill-current text-white"
                />
              </g>
            </svg>
          </Link>
        </section>
      </div>
    </>
  );
};

export default FaqSection;
