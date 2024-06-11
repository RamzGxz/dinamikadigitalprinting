import { cardType } from "@/components/types/keutunganCardType";


const KeuntunganCard = ({title, content, icon}: cardType) => {
  return (
    <div className="w-full border border-primary p-2 rounded-md flex flex-col items-center gap-1">
      {icon}
      <p className="text-center w-full font-medium">{title}</p>
      
    </div>
  );
};

export default KeuntunganCard;