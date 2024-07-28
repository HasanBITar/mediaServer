import { Link } from "react-router-dom";
import { formatString, formatDuration, formatDate } from "../../utils/helpers";

const VideoCard = ({ id, thumbnail, title, duration, durationWatched, createDate }) => {
    const progress = durationWatched / duration * 100;
    const formatedTitle = formatString(title);
    const formatedDuration = formatDuration(duration);
    const formatedDate = formatDate(createDate);
    return (
        <Link to={`/view/${id}`} className="inline-block w-full rounded-xl md:w-80 lg:w-96 md:flex-auto flex-none ">
            <div className="relative w-full overflow-hidden rounded-xl shadow-md bg-gray-800">
                {/* Thumbnail */}
                <div className="w-full h-0" style={{ paddingBottom: '56.25%' }}>
                    <img
                        src={thumbnail}
                        alt={formatedTitle}
                        className="absolute inset-0 object-cover w-full h-full transition-transform duration-300 transform hover:scale-110 ease-in-out"
                    />
                    {/* Video Duration */}
                    <span className="absolute bottom-3 right-2 px-2 py-1 text-xs font-semibold text-white bg-black bg-opacity-75 rounded">
                        {formatedDuration}
                    </span>
                    {/* Watched Line Progress */}
                    <div className={`w-full h-1 bg-gray-300 rounded-full absolute bottom-0 ${progress < 3? 'invisible' : ''}`}>
                        <div
                            className="h-full bg-blue-700 rounded-full"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                </div>
            </div>
            {/* Video Info */}
            <div className="mt-2">
                <h3 className="text-lg font-medium text-white">{formatedTitle}</h3>
                <p className="text-sm text-gray-600">{formatedDate}</p>
            </div>
        </Link>
    );
}

export default VideoCard;

