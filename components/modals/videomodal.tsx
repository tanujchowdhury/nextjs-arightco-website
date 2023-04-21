import Backdrop from "./backdrop";

export default function VideoModal({
  handleClose,
}: {
  handleClose: React.MouseEventHandler;
}) {
  return (
    <Backdrop onClick={handleClose}>
      <div className="absolute top-10 right-0 pr-8 text-white">
        <button onClick={handleClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 hover:text-orange-dark"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="w-3/5 h-3/4">
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/f_i_1Stcocs"
            title="ArightCo Welcome Video"
            className="responsive-iframe"
          ></iframe>
        </div>
      </div>
    </Backdrop>
  );
}
