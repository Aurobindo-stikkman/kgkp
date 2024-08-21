import FAQ from "./Faq";

interface IData {
  q: string;
  ans: string;
}

interface Props {
  data: IData[];
}

const ListingFAQ: React.FC<Props> = ({ data }) => {
  return (
    <div className="grid gap-4 md:gap-5 lg:gap-6">
      {data.map((ele: IData) => {
        return (
          <div key={ele.q}>
            <FAQ data={ele} />
          </div>
        );
      })}
    </div>
  );
};

export default ListingFAQ;
