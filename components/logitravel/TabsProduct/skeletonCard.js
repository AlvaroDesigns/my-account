const SkeletonCard = ({ number = 1 }) => {
 
  return (
    <>
      {[...Array(number)].map((__, indx) => (
        <div
          className="flex items-center justify-center bg-gradient-to-br w-full"
          key={indx}
        >
          <div className="w-64 bg-white rounded shadow hover:shadow-lg">
            <div className="p-5">
              <div className="h-36 bg-gray-200 rounded-tr rounded-tl animate-pulse"></div>
            </div>

            <div className="p-5">
              <div className="h-6 rounded-sm bg-gray-200 animate-pulse mb-4"></div>

              <div className="grid grid-cols-4 gap-1">
                <div className="col-span-3 h-4 rounded-sm bg-gray-200 animate-pulse"></div>
                <div className="h-4 rounded-sm bg-gray-200 animate-pulse"></div>

                <div className="col-span-2 h-4 rounded-sm bg-gray-200 animate-pulse"></div>
                <div className="col-span-2 h-4 rounded-sm bg-gray-200 animate-pulse"></div>

                <div className="h-4 rounded-sm bg-gray-200 animate-pulse"></div>
                <div className="col-span-3 h-4 rounded-sm bg-gray-200 animate-pulse"></div>
                <div className="col-span-2 h-4 rounded-sm bg-gray-200 animate-pulse"></div>
                <div className="h-4 rounded-sm bg-gray-200 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SkeletonCard;
