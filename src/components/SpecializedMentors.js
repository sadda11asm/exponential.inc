import MentorCard from "./MentorCard";

const SpecializedMentors = ({ specializedMentors }) => (
    <div className="relative">
      <div className="container mx-auto">
        <h2 className="mb-12 mt-8 lg:text-3xl font-bold text-center">Specialized <span style={{ color: '#166EFF' }}>mentors</span></h2>
        <div
          className="flex overflow-x-scroll pb-2 hide-scroll-bar scrollbar-hide lg:mx-1"
        >
          <div
            className="flex flex-nowrap mx-6"
          >
            {specializedMentors.map(mentor => (
                <div
                  className="w-64 mx-3 max-w-xs rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                >
                  <MentorCard mentor={mentor} link={mentor.bioLink}/>
                </div>
            ))}
          </div>
        </div>
    </div>
    </div>
)

export default SpecializedMentors;