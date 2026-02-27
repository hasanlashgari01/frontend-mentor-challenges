const Status = () => {
  return (
    <div className="mt-8 flex justify-around divide-x-2 divide-neutral-800">
      <div className="flex flex-1 flex-col text-center">
        <span className="text-neutral-400">WPM:</span>
        <span className="mt-1 font-bold">0</span>
      </div>
      <div className="flex flex-1 flex-col text-center">
        <span className="text-neutral-400">Accuracy:</span>
        <span className="mt-1 font-bold">100%</span>
      </div>
      <div className="flex flex-1 flex-col text-center">
        <span className="text-neutral-400">Time:</span>
        <span className="mt-1 font-bold">00:60</span>
      </div>
    </div>
  );
};

export default Status;
