const Status = () => {
  return (
    <div className="mt-8 flex flex-1 gap-x-4 divide-x-2 divide-neutral-800 max-lg:justify-around lg:*:not-last:pr-4">
      <div className="flex items-center text-center max-lg:flex-1 max-lg:flex-col">
        <span className="text-neutral-400">WPM:</span>
        <span className="font-bold max-lg:mt-1 lg:ml-2">0</span>
      </div>
      <div className="flex items-center text-center max-lg:flex-1 max-lg:flex-col">
        <span className="text-neutral-400">Accuracy:</span>
        <span className="font-bold max-lg:mt-1 lg:ml-2">100%</span>
      </div>
      <div className="flex items-center text-center max-lg:flex-1 max-lg:flex-col">
        <span className="text-neutral-400">Time:</span>
        <span className="font-bold max-lg:mt-1 lg:ml-2">00:60</span>
      </div>
    </div>
  );
};

export default Status;
