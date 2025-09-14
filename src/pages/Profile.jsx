import { useState,useEffect } from "react";
import Header from "../components/Navbar";
import Button from "../components/Button";
import { NavLink } from "react-router-dom";
import StatsCard from "../components/StatsCard";
import ProgressBar from "../components/ProgressBar";
import Card from "../components/Card";
import SectionHeader from "../components/SectionHeader";

const Profile = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0
    })
  }, [])
  const [activeTab, setActiveTab] = useState("overview");

  const userStats = {
    level: 12,
    xp: 650,
    nextLevelXp: 1000,
    streak: 7,
    totalQuests: 89,
    achievements: 12,
    joinDate: "August, 2025"
  };

  const badges = [
    { name: "Zen Master", unlocked: true, color: "purple" },
    { name: "Gratitude Guru", unlocked: true, color: "orange" },
    { name: "Active Adventurer", unlocked: true, color: "green" },
    { name: "Locked", unlocked: false, color: "gray" },
    { name: "Locked", unlocked: false, color: "gray" }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-card rounded-2xl p-6 border sticky top-24">
              <div className="text-center mb-6">
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-card flex items-center justify-center text-4xl mb-4">
                  H
                </div>
                <h1 className="text-2xl font-bold mb-1">Harry</h1>
                <p className="text-muted-foreground mb-2">Level {userStats.level} • Mindful Explorer</p>
                <p className="text-sm text-muted-foreground">Member since {userStats.joinDate}</p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span>Level {userStats.level}</span>
                  <span>{userStats.xp}/{userStats.nextLevelXp} XP</span>
                </div>
                <ProgressBar
                  current={userStats.xp}
                  target={userStats.nextLevelXp}
                  label={`Level ${userStats.level}`}
                  showText={false}
                  height="h-3"
                />
                <div className="text-center text-sm text-muted-foreground mt-2">
                  350 XP to next level
                </div>
              </div>

              <div className="flex  gap-4 mb-6">
                <StatsCard number={userStats.streak} label="Day Streak" />
                <StatsCard number={userStats.totalQuests} label="Quests Done" className="text-accent" />
              </div>

              <div className="flex flex-col gap-2">
                <Button className="w-full" >Edit Profile</Button>
                <Button className="w-full" >Settings</Button>
                <NavLink to="/" className=" rounded-xl bg-red-600 font-semibold transition-all duration-300 px-6 py-3 border border-red-600  text-white hover:bg-red-500 hover-shadow-xl shadow-lg hover:scale-105 text-center">Sign Out</NavLink>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">

            <div className="space-y-8">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <Card>
                  <StatsCard number={userStats.xp} label="Total XP Earned" />
                </Card>
                <Card>
                  <StatsCard number={userStats.achievements} label="Achievements Unlocked" className="text-accent" />
                </Card>
                <Card className="col-span-2 md:col-span-1 flex justify-center">
                  <StatsCard number={userStats.totalQuests} label="Quests Completed" className="text-green-500 " />
                </Card>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6 text-center">Your Badge Collection</h2>
                <div className="flex justify-center space-x-6 flex-wrap md:flex-nowrap gap-y-5 md:gap-y-0">
                  {badges.map((badge, index) => (
                    <div key={index} className="text-center">
                      <div className={`w-16 h-16 rounded-full mx-auto hover:shadow-2xl hover:scale-105 mb-2 flex items-center justify-center ${badge.unlocked
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

              <Card>
                <SectionHeader title="This Week's Progress" />
                <div className="space-y-4">
                  <ProgressBar current={5} target={7} label="Meditation Sessions" />
                  <ProgressBar current={8} target={10} label="Community Interactions" />
                  <ProgressBar current={14} target={21} label="Daily Quests" />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;