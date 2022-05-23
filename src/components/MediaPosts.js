import NewsPost from "./NewsPost";

const MediaPosts = ({ mediaPostsInfo }) => (
    <div className="relative">
      <div className="container mx-auto">
        <div
          className="flex pt-10 overflow-x-scroll pb-2 hide-scroll-bar scrollbar-hide lg:mx-1"
        >
          <div
            className="flex flex-nowrap mx-6"
          >
            {mediaPostsInfo.map(media => (
                <div
                  className="w-96 mx-3 max-w-lg rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                >
                  <NewsPost media={media} link={media.postLink}/>
                </div>
            ))}
          </div>
        </div>
    </div>
    </div>
)

export default MediaPosts;