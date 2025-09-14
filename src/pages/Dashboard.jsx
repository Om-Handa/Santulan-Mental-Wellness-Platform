import Navbar from "../components/Navbar"
import Button from "../components/Button";
import { useEffect } from "react";

const Dashboard = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0
    })
  }, [])
  const dailyQuests = [
    {
      id: 1,
      title: "Mindful Moment",
      description: "10 min meditation",
      completed: false,
      xp: 50,
      color: "green",
      icon: "💚"
    },
    {
      id: 2,
      title: "Gratitude Log",
      description: "3 things you're grateful for",
      completed: false,
      xp: 30,
      color: "orange",
      icon: "📖"
    },
    {
      id: 3,
      title: "Energy Boost",
      description: "30 min physical activity",
      completed: false,
      xp: 80,
      color: "red",
      icon: "⚡"
    }
  ];

  const badges = [
    { name: "Zen Master", unlocked: true, color: "purple" },
    { name: "Gratitude Guru", unlocked: true, color: "orange" },
    { name: "Active Adventurer", unlocked: true, color: "green" },
    { name: "Locked", unlocked: false, color: "gray" },
    { name: "Locked", unlocked: false, color: "gray" }
  ];

  const stats = [
    { label: "Current Streak", value: "7 days", change: "+2 from yesterday", color: "cyan", icon: "🎯" },
    { label: "Quests Completed", value: "24", change: "This week", color: "green", icon: "✅" },
    { label: "Wellness Score", value: "85%", change: "+12% this month", color: "purple", icon: "📈" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="bg-gradient-to-r from-primary/10 to-accent/10 border-b ">
        <div className="container mx-auto px-6 py-12">
          <div className="flex items-center md:justify-between justify-center mb-8 md:flex-row flex-col gap-10 md:gap-0">
            <div className="flex items-center md:justify-between justify-center flex-col md:inline">
              <div className="inline-block bg-primary/10 text-primary  px-4 py-2 rounded-full text-sm font-medium mb-4">
                🎯 Your Wellness Journey Starts Here
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center md:text-start">
                Welcome back, <span className="gradient-text">Harry!</span>
              </h1>
              <p className="text-xl text-muted-foreground text-center md:text-start">
                Ready to continue your wellness adventure and level up your mental health?
              </p>
            </div>
            <div className="text-right w-full md:w-auto flex justify-center align-center">
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border md:w-auto md:h-auto w-3/4 h-3/4 flex flex-col justify-center align-center">
                <div className="text-3xl font-bold text-center text-primary mb-1 ">Level 12</div>
                <div className="text-sm text-muted-foreground text-center mb-3">Mindful Explorer</div>
                <div className="w-full flex justify-center align-center">
                  <div className="w-24 h-2 bg-border rounded-full overflow-hidden flex">
                    <div className="w-3/5 h-full bg-gradient-to-r from-primary to-accent"></div>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground mt-1 text-center">350 XP to Level 13</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8 max-w-6xl">
        <div className="mb-8">
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 rounded-2xl p-6 border">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                  Level 1: The Journey Begins
                </h2>
              </div>
              <div className="bg-orange-100 dark:bg-orange-900/20 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
                ⭐ 500 XP
              </div>
            </div>
            <div className="mb-2">
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-cyan-400 to-blue-500 h-3 rounded-full transition-all duration-500"
                  style={{ width: '65%' }}
                ></div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground text-center">650 / 1000 XP to next level</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-card rounded-xl p-6 border hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-muted-foreground">{stat.label}</h3>
                <span className="text-2xl">{stat.icon}</span>
              </div>
              <div className="mb-1">
                <span className={`text-2xl font-bold ${stat.color === 'cyan' ? 'text-cyan-500' :
                    stat.color === 'green' ? 'text-green-500' :
                      'text-purple-500'
                  }`}>
                  {stat.value}
                </span>
              </div>
              <p className={`text-sm ${stat.color === 'cyan' ? 'text-cyan-600 dark:text-cyan-400' :
                  stat.color === 'green' ? 'text-green-600 dark:text-green-400' :
                    'text-purple-600 dark:text-purple-400'
                }`}>
                {stat.change}
              </p>
            </div>
          ))}
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Today's Quests</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {dailyQuests.map((quest) => (
              <div key={quest.id} className="bg-card rounded-xl border overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                <div className={`h-2 ${quest.color === 'green' ? 'bg-green-500' :
                    quest.color === 'orange' ? 'bg-orange-500' :
                      'bg-red-500'
                  }`}></div>
                <div className="p-6 text-center">
                  <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${quest.color === 'green' ? 'bg-green-100 dark:bg-green-900/20' :
                      quest.color === 'orange' ? 'bg-orange-100 dark:bg-orange-900/20' :
                        'bg-red-100 dark:bg-red-900/20'
                    }`}>
                    <span className="text-2xl">{quest.icon}</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{quest.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{quest.description}</p>
                  <Button
                    className={`w-full ${quest.color === 'green' ? 'bg-green-500 hover:bg-green-600' :
                        quest.color === 'orange' ? 'bg-orange-500 hover:bg-orange-600' :
                          'bg-red-500 hover:bg-red-600'
                      } text-white`}
                  >
                    Complete
                  </Button>
                  <p className="text-xs text-muted-foreground mt-2">+{quest.xp} XP</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Your Badge Collection</h2>
          <div className="flex justify-center space-x-6 flex-wrap md:flex-nowrap gap-y-5 md:gap-y-0">
            {badges.map((badge, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 rounded-full mx-auto mb-2 flex items-center justify-center ${badge.unlocked
                    ? badge.color === 'purple' ? 'bg-purple-500' :
                      badge.color === 'orange' ? 'bg-orange-500' :
                        'bg-green-500'
                    : 'bg-gray-300 dark:bg-gray-600'
                  } ${badge.unlocked ? 'text-white' : 'text-gray-500'}`}>
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <p className="text-xs font-medium">{badge.name}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;