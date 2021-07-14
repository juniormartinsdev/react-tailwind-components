const ProgressBar = ({ progress }): JSX.Element => {
  return (
    <div className="w-full">
      <div className="shadow w-full bg-grey-light mt-2 rounded-full">
        <div
          className={`transition duration-500 ease-in-out h-full text-center font-semibold rounded-full ${
            progress < 70
              ? 'bg-red-500 text-red-200'
              : 'bg-green-400 text-green-600'
          }`}
          style={{ width: `${progress}%` }}
        >
          {progress + '%'}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
