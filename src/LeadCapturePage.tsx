import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Globe2,
  LayoutDashboard,
  MessageSquare,
  Shield,
  Target,
  Zap
} from 'lucide-react';

interface LeadCapturePageProps {
  onBack: () => void;
}

function LeadCapturePage({ onBack }: LeadCapturePageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    adSpend: '',
    message: '',
    channels: [] as string[]
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleChannelToggle = (channel: string) => {
    setFormData(prev => ({
      ...prev,
      channels: prev.channels.includes(channel)
        ? prev.channels.filter(c => c !== channel)
        : [...prev.channels, channel]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </button>
            <div className="flex items-center space-x-2">
              <Target className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">AdMotive</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Form Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Zap className="h-6 w-6 text-blue-500" />
              <h1 className="text-3xl font-bold">Book Your Demo</h1>
            </div>
            <p className="text-gray-600 mb-8">
              See how AdMotive can transform your ad campaigns with our powerful DSP platform.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Work Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                />
              </div>

              <div>
                <label htmlFor="adSpend" className="block text-sm font-medium text-gray-700 mb-1">
                  Monthly Ad Spend
                </label>
                <select
                  id="adSpend"
                  name="adSpend"
                  value={formData.adSpend}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                >
                  <option value="">Select monthly ad spend</option>
                  <option value="10k-50k">$10K - $50K</option>
                  <option value="50k-100k">$50K - $100K</option>
                  <option value="100k-500k">$100K - $500K</option>
                  <option value="500k+">$500K+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Ad Channels
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {['Meta Ads', 'Google Ads', 'TikTok', 'Native Ads'].map((channel) => (
                    <button
                      key={channel}
                      type="button"
                      onClick={() => handleChannelToggle(channel)}
                      className={`px-4 py-2 rounded-lg border transition-all ${
                        formData.channels.includes(channel)
                          ? 'bg-blue-50 border-blue-500 text-blue-700'
                          : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {channel}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  <div className="flex items-center space-x-2">
                    <MessageSquare className="h-4 w-4" />
                    <span>Additional Information</span>
                  </div>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Tell us about your campaign goals, challenges, or any specific questions..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transform transition-all hover:scale-105"
              >
                <span>Schedule Demo</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>
          </div>

          {/* Info Section */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Why Choose AdMotive?</h2>
              <div className="space-y-6">
                {[
                  {
                    icon: <LayoutDashboard className="h-6 w-6 text-blue-500" />,
                    title: "Self-serve Platform",
                    description: "Full control over your campaigns with our intuitive DSP interface"
                  },
                  {
                    icon: <Shield className="h-6 w-6 text-blue-500" />,
                    title: "Premium Inventory",
                    description: "Access to high-quality, brand-safe traffic sources across all channels"
                  },
                  {
                    icon: <BarChart3 className="h-6 w-6 text-blue-500" />,
                    title: "Advanced Analytics",
                    description: "Real-time reporting and attribution for data-driven decisions"
                  },
                  {
                    icon: <Globe2 className="h-6 w-6 text-blue-500" />,
                    title: "Global Scale",
                    description: "Reach audiences worldwide through our extensive network"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="bg-blue-100 rounded-lg p-2 transform group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-6">What Happens Next?</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Book Your Demo",
                    description: "Fill out the form and select your preferred time slot"
                  },
                  {
                    title: "Strategy Session",
                    description: "Our experts will analyze your needs and create a custom plan"
                  },
                  {
                    title: "Platform Setup",
                    description: "Quick onboarding and campaign setup with our team"
                  }
                ].map((step, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <CheckCircle2 className="h-6 w-6 text-green-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeadCapturePage;