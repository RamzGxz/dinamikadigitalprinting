import { Skeleton } from "@nextui-org/skeleton";


const SkeletonCard = ({ value }: { value: number }) => {
  return (
    <>
      {Array.from({ length: value }, (_, index) => (
        <div key={index} className="w-full p-3 lg:h-60 border rounded-md relative flex flex-col gap-3">
          <Skeleton className="w-full h-28 rounded-md dark:bg-gray-200" />
          <Skeleton className="w-32 h-2 mt-3 rounded-md dark:bg-gray-200" />
          <Skeleton className="w-20 h-2 rounded-md dark:bg-gray-200" />
          <Skeleton className="w-full h-8 rounded-md dark:bg-gray-200" />
        </div>
      ))}
    </>

  );
};

export default SkeletonCard;