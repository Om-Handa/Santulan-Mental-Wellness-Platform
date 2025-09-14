import { useState } from "react";
import Header from "../components/Navbar";
import Button from "../components/Button";
import { Pin } from "lucide-react";

const Community = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const chats = [
    {
      id: 1,
      name: "Dr. Divya",
      message: "CGC Landran, Counsellor",
      time: "📌",
      avatar: "",
      isOnline: true
    },
    {
      id: 2,
      name: "Ashok",
      message: "Hey, how are you doing?",
      time: "2h",
      avatar: "",
      isOnline: true
    },
    {
      id: 3,
      name: "Rohan",
      message: "Anyone else feeling overwhelmed?",
      time: "4h",
      avatar: "",
      isOnline: true
    },
    {
      id: 4,
      name: "Study Group",
      message: "Let's plan a study group!",
      time: "1d",
      avatar: "",
      isGroup: true,
      members: 12
    },
    {
      id: 5,
      name: "Ishita",
      message: "Just finished a great meditation session.",
      time: "2d",
      avatar: "",
      isOnline: false
    }
  ];

  const supportGroups = [
    {
      name: "Mindfulness Circle",
      description: "Daily meditation and mindfulness practices",
      members: 45,
      status: "Active",
      color: "bg-cyan-500"
    },
    {
      name: "Study Support",
      description: "Academic stress and study strategies",
      members: 32,
      status: "Very Active",
      color: "bg-green-500"
    },
    {
      name: "Self-Care Squad",
      description: "Sharing self-care tips and experiences",
      members: 28,
      status: "Active",
      color: "bg-purple-500"
    }
  ];

  const quickActions = [
    { name: "Find Study Partner", icon: "🎓" },
    { name: "Join Group Chat", icon: "👥" },
    { name: "Schedule Session", icon: "⏰" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-6 py-8 max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-primary mb-2">Peer Chat Forum</h1>
          <p className="text-muted-foreground mb-6 text-xl">Connect with others on your wellness journey</p>

          <div className="max-w-md mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search for peers or groups"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-card focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        <div className="mb-8">
          <div className="flex justify-center items-center space-x-8 border-b border-border bg-gray-100 rounded-xl">
            {[
              { id: "all", label: "All Chats" },
              { id: "private", label: "Private Chats" },
              { id: "group", label: "Group Chats" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-3 px-1 pt-2 w-[30%] font-medium border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2">
            <div className="bg-card rounded-xl border">
              <div className="space-y-0">
                {chats.map((chat) => (
                  <div key={chat.id} className="p-4 border-b last:border-b-0 hover:bg-muted/50 cursor-pointer transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                          <span className="text-lg font-medium">
                            {chat.name.charAt(0)}
                          </span>
                        </div>
                        {chat.isOnline && (
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background"></div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="font-medium text-foreground truncate">
                            {chat.name}
                          </h3>
                          {chat.isGroup && (
                            <span className="text-xs text-muted-foreground">
                              {chat.members} members
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground truncate">
                          {chat.message}
                        </p>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {chat.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="p-8 text-center border-t">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-cyan-400 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Start a New Conversation</h3>
                <p className="text-muted-foreground mb-4">Connect with peers or create a support group</p>
                <Button className="bg-gradient-to-r from-primary to-cyan-400">
                  Start a Chat
                </Button>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card rounded-xl border p-6">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold">Support Groups</h3>
              </div>
              
              <div className="space-y-4">
                {supportGroups.map((group, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${group.color}`}></div>
                      <div className="flex-1">
                        <div className="font-medium text-lg">{group.name}</div>
                        <div className="text-sm text-muted-foreground">{group.description}</div>
                        <div className="text-sm text-muted-foreground mt-1">
                          {group.members} members
                        </div>
                      </div>
                      <div className="text-xs font-medium">{group.status}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button variant="outline" className="w-full mt-4 text-sm">
                View All Groups
              </Button>
            </div>

            <div className="bg-card rounded-xl border p-6">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold">Quick Actions</h3>
              </div>
              
              <div className="space-y-3">
                {quickActions.map((action, index) => (
                  <Button 
                    key={index}
                    variant="outline" 
                    className="w-full justify-start"
                  >
                    <span className="mr-2">{action.icon}</span>
                    {action.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;