import React, { useState } from 'react';
import {
  ArrowRight,
  BarChart3,
  Calendar,
  CheckCircle2,
  ChevronDown,
  Globe2,
  LayoutDashboard,
  PlayCircle,
  Rocket,
  Settings,
  Shield,
  Target,
  Users2,
  Zap
} from 'lucide-react';
import LeadCapturePage from './LeadCapturePage';

function App() {
  const [showLeadCapture, setShowLeadCapture] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    adSpend: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (showLeadCapture) {
    return <LeadCapturePage onBack={() => setShowLeadCapture(false)} />;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557264337-b9715a4ecc2f?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-indigo-900/90 to-purple-900/90" />
        
        <nav className="relative container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Target className="h-8 w-8" />
              <span className="text-2xl font-bold">AdMotive</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="hover:text-blue-200 transition-colors">Features</a>
              <a href="#pricing" className="hover:text-blue-200 transition-colors">Pricing</a>
              <a href="#faq" className="hover:text-blue-200 transition-colors">FAQ</a>
            </div>
            <button 
              onClick={() => setShowLeadCapture(true)}
              className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg font-semibold flex items-center space-x-2 transition-all transform hover:scale-105"
            >
              <Calendar className="h-5 w-5" />
              <span>Book Demo</span>
            </button>
          </div>
        </nav>

        <div className="relative container mx-auto px-6 py-24 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-200">
              Your Private DSP for Performance-Obsessed Media Buyers
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
              Run high-ROAS campaigns across native, display, in-app, and CTV with full control and clean attribution.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
              <button 
                onClick={() => setShowLeadCapture(true)}
                className="group bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 px-8 py-4 rounded-lg font-semibold flex items-center space-x-2 w-64 justify-center transform transition-all hover:scale-105"
              >
                <Rocket className="h-5 w-5 group-hover:animate-bounce" />
                <span>Book a Demo</span>
              </button>
              <button className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 px-8 py-4 rounded-lg font-semibold flex items-center space-x-2 w-64 justify-center transition-all transform hover:scale-105">
                <PlayCircle className="h-5 w-5" />
                <span>See How It Works</span>
              </button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "10x", text: "Average ROAS Improvement" },
              { number: "$500M+", text: "Ad Spend Managed" },
              { number: "24/7", text: "Campaign Optimization" }
            ].map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-all">
                <div className="text-3xl font-bold text-blue-300">{stat.number}</div>
                <div className="text-blue-100">{stat.text}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 30L48 35C96 40 192 50 288 55C384 60 480 60 576 55C672 50 768 40 864 45C960 50 1056 70 1152 75C1248 80 1344 70 1392 65L1440 60V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V30Z" fill="white"/>
          </svg>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-br from-white to-blue-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Everything You Need to Scale Your Ad Campaigns
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <LayoutDashboard className="h-8 w-8 text-blue-500" />,
                title: "Self-serve DSP Access",
                description: "Full control over your campaigns with intuitive interface"
              },
              {
                icon: <Settings className="h-8 w-8 text-blue-500" />,
                title: "Campaign Automation",
                description: "AI-powered optimization for maximum ROAS"
              },
              {
                icon: <Shield className="h-8 w-8 text-blue-500" />,
                title: "Whitelisted Traffic",
                description: "Premium inventory across all major channels"
              },
              {
                icon: <BarChart3 className="h-8 w-8 text-blue-500" />,
                title: "Transparent Reporting",
                description: "Real-time analytics and attribution dashboard"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                <div className="bg-blue-100 rounded-lg p-3 w-fit mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Built for Growth-Focused Teams
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Target className="h-12 w-12 text-blue-500" />,
                title: "Media Buyers",
                description: "Scale your campaigns beyond traditional platforms with advanced targeting"
              },
              {
                icon: <BarChart3 className="h-12 w-12 text-blue-500" />,
                title: "Performance Marketers",
                description: "Optimize for ROAS with granular control and real-time data"
              },
              {
                icon: <Users2 className="h-12 w-12 text-blue-500" />,
                title: "Agencies",
                description: "Manage multiple clients with white-label solutions"
              }
            ].map((role, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-6">
                  <div className="bg-blue-100 rounded-full p-4 transform group-hover:scale-110 transition-transform">
                    {role.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{role.title}</h3>
                <p className="text-gray-600">{role.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Transparent Pricing for Every Scale
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Starter Plan",
                price: "$1,000",
                percentage: "10%",
                features: [
                  "Self-serve DSP access",
                  "Basic automation tools",
                  "Standard support",
                  "Basic reporting"
                ]
              },
              {
                name: "Pro Plan",
                price: "$2,500",
                percentage: "7%",
                features: [
                  "Everything in Starter",
                  "Advanced automation",
                  "Dedicated strategist",
                  "Premium reporting",
                  "Priority support"
                ]
              }
            ].map((plan, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-1 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                    Popular
                  </div>
                </div>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-600 ml-2">/month</span>
                </div>
                <p className="text-gray-600 mb-6">+{plan.percentage} of ad spend</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => setShowLeadCapture(true)}
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white py-3 rounded-lg font-semibold transition-all"
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Powerful Platform, Intuitive Interface
          </h2>
          <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-xl p-8 shadow-2xl transform hover:scale-[1.02] transition-all">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=80"
              alt="AdMotive Dashboard"
              className="rounded-lg w-full shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "What is a DSP?",
                answer: "A Demand-Side Platform (DSP) is a software system that allows advertisers to automatically purchase and optimize programmatic ad inventory from multiple sources through a single interface."
              },
              {
                question: "Can I track postbacks?",
                answer: "Yes, AdMotive supports server-side postback tracking with major attribution platforms and custom integration options."
              },
              {
                question: "Do you support custom audiences?",
                answer: "Yes, you can upload custom audiences, create lookalike audiences, and use first-party data for targeting."
              }
            ].map((faq, index) => (
              <details key={index} className="bg-white rounded-lg p-6 cursor-pointer shadow-md hover:shadow-lg transition-shadow group">
                <summary className="text-lg font-semibold flex items-center justify-between">
                  {faq.question}
                  <ChevronDown className="h-5 w-5 transform group-open:rotate-180 transition-transform" />
                </summary>
                <p className="mt-4 text-gray-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Target className="h-8 w-8" />
              <span className="text-2xl font-bold">AdMotive</span>
            </div>
            <div className="flex items-center space-x-6">
              <Globe2 className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Users2 className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Calendar className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            © 2025 AdMotive. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;