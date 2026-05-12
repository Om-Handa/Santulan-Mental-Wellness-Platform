import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { NavLink } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const systemInstructionText = `
You are a Mental Health support chatting platform for college students. you will help them to reduce their stress, anxiety or anything else. You will not talk about anything else.You wil chat with them and listen to their talks and support them.nly. if a person talks in any other language reply in that way mix that language with english dont use pure. Give them tips to reduce their problems. give short answers.
`;

export default function MentalHealthChatbot() {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text:
        "Hi! 👋 How are you feeling today? 💙",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const heartsContainer = document.getElementById("floatingCircles");
    if (!heartsContainer) return;
    for (let i = 0; i < 15; i++) {
      const div = document.createElement("div");
      div.className =
        "absolute text-blue-300 opacity-20 animate-[float_15s_linear_infinite]";
      div.style.left = `${Math.random() * 100}%`;
      div.style.animationDelay = `${Math.random() * 15}s`;
      div.style.fontSize = `${10 + Math.random() * 20}px`;
      div.innerHTML = "●";
      heartsContainer.appendChild(div);
    }
  }, []);

  async function handleSend() {
    if (!input.trim()) return;

    const now = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    const newMessages = [
      ...messages,
      { sender: "user", text: input, time: now },
    ];
    setMessages(newMessages);

    const newHistory = [
      ...history,
      { role: "user", parts: [{ text: input }] },
    ];
    setHistory(newHistory);
    setInput("");

    const typingMsg = { sender: "bot", text: "typing", time: now, typing: true };
    setMessages([...newMessages, typingMsg]);

    const botReply = await chatWithGemini(newHistory);

    setMessages([
      ...newMessages,
      {
        sender: "bot",
        text: botReply,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);
  }

  async function chatWithGemini(currentHistory) {
    if (!GEMINI_API_KEY) {
      return "Please set your Gemini API key first 🙏";
    }

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;

    const body = {
      contents: currentHistory,
      systemInstruction: {
        parts: [{ text: systemInstructionText }],
      },
      generationConfig: {
        temperature: 0.8,
        maxOutputTokens: 400,
      },
    };

    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (!res.ok) {
        const msg = data.error?.message || `Status ${res.status}`;
        return `Oops, API error: ${msg}`;
      }

      if (
        data.candidates &&
        data.candidates[0]?.content?.parts?.[0]?.text
      ) {
        const reply = data.candidates[0].content.parts[0].text;
        setHistory((prev) => [
          ...prev,
          { role: "model", parts: [{ text: reply }] },
        ]);
        return reply;
      }
      return "Hmm... I’m not sure what to say, but I’m here for you 💙";
    } catch (err) {
      return `Network error: ${err.message}`;
    }
  }

  return (
    <>

      <div className="p-2 flex items-center space-x-4">
        <NavLink to="/community" className="flex items-center text-blue-600 hover:text-blue-800 transition">
          <ArrowLeft size={22} className="mr-1" />
          Back
        </NavLink>
        <div className="flex items-center space-x-3 ml-3 md:ml-10">
          <div className="flex items-center justify-center md:w-10 md:h-10 w-8 h-8 border-black border-2 rounded-xl ">
            <img src="/logo.png" alt="" />
          </div>
          <div>
            <h1 className="md:text-xl font-bold text-gray-900">SANTULAN</h1>
            <p className="text-xs text-gray-500">Your Mind, Your Strength</p>
          </div>
        </div>
      </div>
      <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
        <div
          id="floatingCircles"
          className="absolute inset-0 pointer-events-none"
        ></div>

        <div className="flex flex-col w-full max-w-3xl h-screen md:h-[90vh] bg-white shadow-xl rounded-lg overflow-hidden relative border border-blue-200">
          <div className="flex items-center bg-gradient-to-r from-blue-500 to-blue-400 text-white p-4 shadow">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-3">
              <span className="text-blue-500 text-lg">💙</span>
            </div>
            <div>
              <h1 className="font-semibold text-lg">Mental Health Support Bot</h1>
              <p className="text-xs opacity-90">Online</p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) =>
              msg.typing ? (
                <div
                  key={idx}
                  className="flex items-center space-x-2 text-blue-400"
                >
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-150"></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-300"></div>
                </div>
              ) : (
                <div
                  key={idx}
                  className={`max-w-[80%] p-3 rounded-2xl text-sm shadow 
                ${msg.sender === "user"
                      ? "bg-blue-500 text-white ml-auto rounded-br-md"
                      : "bg-blue-100 text-blue-900 mr-auto rounded-bl-md"
                    }`}
                >
                  <div>{msg.text}</div>
                  <div className="text-[10px] opacity-60 text-right mt-1">
                    {msg.time}
                  </div>
                </div>
              )
            )}
          </div>

          <div className="flex items-center p-3 bg-blue-50 border-t border-blue-100">
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-1 px-4 py-3 rounded-full bg-white border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm"
            />
            <button
              onClick={handleSend}
              className="ml-3 w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow transition"
            >
              ➤
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
