import Header from "../components/Navbar";
import { useStat,useEffect } from "react";
import Card from "../components/ResourceCard";

const resources = {

  Articles: [
    {
      category: "Stress Management",
      title: "Managing Academic Stress",
      description: "Evidence-based strategies for handling college pressures",
      time: "8 min read",
      level: "Beginner",
      Action: "📖 Read Article",
      rating: 4.8,
    },
    {
      category: "Sleep Health",
      title: "Building Healthy Sleep Habits",
      description: "The science of sleep and practical tips for better rest",
      time: "12 min read",
      Action: "📖 Read Article",
      level: "Intermediate",
      rating: 4.9,
    },
    {
      category: "Nutrition",
      title: "Mindful Eating Practices",
      description: "Developing a healthy relationship with food",
      time: "6 min read",
      level: "Beginner",
      Action: "📖 Read Article",
      rating: 4.7,
    },
  ],
  Videos: [
    {
      category: "Mindfulness",
      title: "Guided Meditation for Focus",
      description: "A short session to reduce stress and improve concentration",
      time: "15 min video",
      level: "Beginner",
      Action: "🎥 Watch Video",
      rating: 4.9,
    },
    {
      category: "Exercise",
      title: "Yoga for Better Sleep",
      description: "Relaxing poses to wind down before bed",
      time: "20 min video",
      level: "Intermediate",
      Action: "🎥 Watch Video",
      rating: 4.8,
    },
  ],
  Podcasts: [
    {
      category: "Mental Health",
      title: "Balancing College Life",
      description: "Students share their wellness journeys",
      time: "25 min",
      level: "Beginner",
      Action: "🎤 Listen Podcast",
      rating: 4.6,
    },
    {
      category: "Productivity",
      title: "Habits of Successful Students",
      description: "Tips to stay motivated and consistent",
      time: "30 min",
      level: "Intermediate",
      Action: "🎤 Listen Podcast",
      rating: 4.7,
    },
  ],
};

export default function WellnessResources() {
  useEffect(() => {
    window.scrollTo({
      top: 0
    })
  }, [])
  const [activeTab, setActiveTab] = useState("Articles");

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />
      <div className="text-center py-10">
        <h1 className="text-5xl font-bold text-blue-500">Wellness Resources</h1>
        <p className="text-gray-500 mt-2 text-xl">
          Discover evidence-based tools, guides, and content to support your mental health and academic success
        </p>
      </div>

      <div className="flex justify-center mt-4 w-full">
        <div className="flex justify-between items-center bg-gray-100 rounded-xl p-1 w-11/12 h-12">
          {Object.keys(resources).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-lg transition text-center flex justify-center items-center h-[90%] w-[23%] font-medium ${activeTab === tab
                ? "bg-white shadow text-gray-900"
                : "text-gray-500 hover:text-gray-700"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 px-6 md:px-20 mt-10">
        {resources[activeTab].map((item, i) => (
          <Card key={i} item={item} activeTab={activeTab} />
        ))}
      </div>

      <div className="mx-6 md:mx-20 my-16 p-10 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl text-center shadow-sm">
        <h2 className="text-xl font-semibold mb-2">Need Personalized Support?</h2>
        <p className="text-gray-600 mb-4">
          Connect with our wellness counselors for one-on-one guidance tailored to your specific needs and goals.
        </p>
        <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-400 to-blue-600 text-white hover:opacity-90">
          Schedule a Session
        </button>
      </div>
    </div>
  );
}
