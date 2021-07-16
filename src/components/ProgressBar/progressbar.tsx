type Colors = {
  bgColorStart: string;
  txtColorStart: string;
  bgColorMid: string;
  txtColorMid: string;
  bgColorEnd: string;
  txtColorEnd: string;
};

export function ProgressBar({
  progress,
  status,
  bgColorStart = 'red-500',
  txtColorStart = 'red-200',
  bgColorMid = 'yellow-500',
  txtColorMid = 'yellow-200',
  bgColorEnd = 'green-500',
  txtColorEnd = 'green-200'
}: Colors): JSX.Element {
  return (
    <div className={`w-full ${status !== 'show' ? 'hidden' : ''}`}>
      <div className="shadow w-full bg-grey-light mt-2 rounded-full">
        <div
          className={`transition duration-500 ease-in-out h-full text-center font-semibold rounded-full ${
            progress < 33
              ? `bg-${bgColorStart} text-${txtColorStart}`
              : progress < 66
              ? `bg-${bgColorMid} text-${txtColorMid}`
              : `bg-${bgColorEnd} text-${txtColorEnd}`
          }
        }`}
          style={{ width: `${progress}%` }}
        >
          {progress + '%'}
        </div>
      </div>
    </div>
  );
}
