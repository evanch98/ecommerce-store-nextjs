import { Product } from "@/types";

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  return <div>Info</div>;
};

export default Info;
