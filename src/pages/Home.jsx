import { Link, NavLink } from "react-router-dom";
import Button from "../components/Button";
import StatsCard from "../components/StatsCard";
import { Heart, Users, BookOpen, Trophy } from "lucide-react"
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0
    })
  }, [])
  const stats = [
    { number: "1,500+", label: "Active Students" },
    { number: "10,000+", label: "Quests Completed" },
    { number: "95%", label: "Improved Wellbeing" },
    { number: "24/7", label: "Peer Support" }
  ];

  const features = [
    {
      icon: Heart,
      title: "Daily Wellness Quests",
      description: "Gamified activities to boost your mental health and academic success",
      color: "text-blue-600",
      bgColor: "bg-blue-600/10"
    },
    {
      icon: Users,
      title: "Peer Support Community",
      description: "Connect with fellow students on similar wellness journeys",
      color: "text-purple-500",
      bgColor: "bg-purple-100"
    },
    {
      icon: BookOpen,
      title: "Evidence-Based Resources",
      description: "Access expert-curated content on mental health and academic success",
      color: "text-[#16a249]",
      bgColor: "bg-[#e7f5ec]"
    },
    {
      icon: Trophy,
      title: "Achievement System",
      description: "Earn badges and level up as you progress in your wellness journey",
      color: "text-[#f59f0a]",
      bgColor: "bg-[#fdf5e6]"
    }
  ];

  const gamificationFeatures = [
    "Daily wellness quests tailored to your needs",
    "Level progression system with meaningful rewards",
    "Achievement badges for milestone celebrations",
    "Real-time progress tracking and insights"
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      <nav className="h-16 w-full flex justify-between border-b-2">
        <div className="flex items-center space-x-3 ml-3 md:ml-10">
          <div className="flex items-center justify-center md:w-10 md:h-10 w-8 h-8 border-black border-2 rounded-xl ">
            <img src="/logo.png" alt="" />
          </div>
          <div>
            <h1 className="md:text-xl font-bold text-gray-900">SANTULAN</h1>
            <p className="text-xs text-gray-500">Your Mind, Your Strength</p>
          </div>
        </div>
        <NavLink to="/login" className=" justify-center md:h-3/4 md:px-5 px-3 bg-[#2addf8] m-1.5 mr-3 md:mr-10 flex items-center rounded-2xl text-white font-semibold ">Login</NavLink>
      </nav>

      <section className="relative overflow-hidden py-10 ">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 hover:opacity-90 transition px-4 py-2 text-md text-white font-medium mb-8">
            🎯 Your Wellness Journey Starts Here
          </div>

          <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight lg:text-7xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500">
            <p>Level Up Your</p>
            <p className=" md:pt-5 pt-2 ">
              Mental Wellness
            </p>
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-gray-500 mb-10 lg:text-xl">
            Join thousands of students transforming their college experience through
            gamified wellness activities, peer support, and evidence-based mental health resources.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/login">
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-cyan-400 to-purple-500 hover:opacity-90 transition">
                Start Your Quest →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-16  bg-white/5 backdrop-blur-sm w-full">
        <div className="container mx-auto px-4 md:w-3/4 w-full flex justify-center">
          <div className="flex w-full justify-around flex-wrap">
            <StatsCard number="1,500+" label="Active Students" />
            <StatsCard number="10,000+" label="Quests Completed" />
            <StatsCard number="95%" label="Improved Wellbeing" />
            <StatsCard number="24/7" label="Peer Support" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f7f8f9]">
        <div className="container mx-auto px-4 w-11/12">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold mb-3">
              How Santulan Works
            </h2>

            <p className="text-gray-500 max-w-3xl mx-auto">
              Our platform provides a gamified platform with evidence-based wellness practices to make mental health engaging and achievable.
            </p>
          </div>

          <div className="flex md:flex-row gap-8 justify-between flex-col">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center hover:shadow-xl border-l-[#2addf8] border-l-4 border-y-2 border-r-2 p-5 rounded-xl md:w-[25%] ">
                  <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-500 text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your College Experience?
          </h2>
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
            Join thousands of students who've already started their wellness journey.
            It's free, fun, and scientifically-backed.
          </p>
          <Link to="/login">
            <Button size="lg" className="bg-gradient-to-r from-cyan-400 to-purple-500 hover:opacity-90 transition">Begin Your Journey</Button>
          </Link>
        </div>
      </section>

      <footer className="border-t border-gray-200 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="flex items-center justify-center md:w-10 md:h-10 w-8 h-8 border-black border-2 rounded-xl ">
                <img src="/logo.png" alt="" />
              </div>
              <div>
                <div className="font-bold">SANTULAN</div>
                <div className="text-xs text-gray-500">Your Mind, Your Strength</div>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              © Santulan. Empowering student wellness.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;