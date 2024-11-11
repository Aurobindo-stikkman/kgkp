import CallbackContainer from "../components/RequestCallback/CallbackContainer";

const AffiliateLayout = ({
  children,
  statsSection,
  methodSection,
  empoweringEducatiors,
  resultsSection,
  promiseSection,
  bannerSection,
  faqSection,
}: Readonly<{
  children: React.ReactNode;
  statsSection: React.ReactNode;
  methodSection: React.ReactNode;
  empoweringEducatiors: React.ReactNode;
  resultsSection: React.ReactNode;
  promiseSection: React.ReactNode;
  bannerSection: React.ReactNode;
  faqSection: React.ReactNode;
}>) => {
  return (
    <>
      {children}
      {statsSection}
      {methodSection}
      {empoweringEducatiors}
      <CallbackContainer hideAgeField={true} />
      {resultsSection}
      {promiseSection}
      {bannerSection}
      {faqSection}
    </>
  );
};

export default AffiliateLayout;
