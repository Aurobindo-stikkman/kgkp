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
    <div className="grid gap-4 ">
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
