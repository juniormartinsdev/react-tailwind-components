export function ProgressBar({
  progress,
  bgColorStart = 'red-500',
  txtColorStart = 'red-200',
  bgColorEnd = 'green-400',
  txtColorEnd = 'green-200'
}): JSX.Element {
  return (
    <div className="w-full">
      <div className="shadow w-full bg-grey-light mt-2 rounded-full">
        <div
          className={`transition duration-500 ease-in-out h-full text-center font-semibold rounded-full ${
            progress < 70
              ? `bg-${bgColorStart} text-${txtColorStart}`
              : `bg-${bgColorEnd} text-${txtColorEnd}`
          }`}
          style={{ width: `${progress}%` }}
        >
          {progress + '%'}
        </div>
      </div>
    </div>
  );
}
