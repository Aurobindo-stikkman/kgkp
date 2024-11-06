import CallbackContainer from "../components/RequestCallback/CallbackContainer";

const AffiliateLayout = ({
  children,
  cardsSection,
  detailsSection,
  incomeDistribution,
  successStory,
  enrollSection,
  faqSection,
}: Readonly<{
  children: React.ReactNode;
  cardsSection: React.ReactNode;
  detailsSection: React.ReactNode;
  incomeDistribution: React.ReactNode;
  successStory: React.ReactNode;
  enrollSection: React.ReactNode;
  faqSection: React.ReactNode;
}>) => {
  return (
    <>
      {children}
      {cardsSection}
      {detailsSection}
      {incomeDistribution}
      <div className="pb-[52px] xl:pb-[124px] ">
        <CallbackContainer hideAgeField={true} />
      </div>
      {successStory}
      {enrollSection}
      {faqSection}
    </>
  );
};

export default AffiliateLayout;
