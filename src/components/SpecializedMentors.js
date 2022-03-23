import MentorCard from "./MentorCard";

const SpecializedMentors = ({ specializedMentors }) => (
    <div className="relative">
      <div className="absolute bg-black h-10 w-10 inset-0">L</div>
      <div className="container mx-auto">
        <h2 className="mb-12 mt-8 lg:text-3xl font-bold text-center">Специализированные <span style={{ color: '#166EFF' }}>ментора</span></h2>
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
                  <MentorCard mentor={mentor}/>
                </div>
            ))}
          </div>
        </div>
      <div className="absolute bg-red-400 h-10 w-10 inset-0" style={{ top: '100px', left: '10px', right: '10px' }}>R</div>
    </div>
    </div>
)

export default SpecializedMentors;