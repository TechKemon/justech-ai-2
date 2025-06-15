
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, ExternalLink, Calendar, Users, Target, TrendingUp } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Healthcare AI Assistant",
      category: "Healthcare",
      description: "Revolutionizing patient care with intelligent diagnostic support and treatment recommendations for a major hospital network.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
      metrics: {
        users: "50K+",
        accuracy: "94%",
        timeReduced: "60%"
      },
      technologies: ["Machine Learning", "Natural Language Processing", "Data Analytics"],
      year: "2024"
    },
    {
      id: 2,
      title: "Education Platform AI",
      category: "Education",
      description: "Personalized learning experiences powered by AI for a nationwide education initiative serving underserved communities.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop",
      metrics: {
        students: "100K+",
        improvement: "85%",
        retention: "92%"
      },
      technologies: ["Adaptive Learning", "Computer Vision", "Predictive Analytics"],
      year: "2024"
    },
    {
      id: 3,
      title: "Smart City Governance",
      category: "Government",
      description: "AI-powered urban planning and resource optimization system for efficient city management and citizen services.",
      image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?w=800&h=600&fit=crop",
      metrics: {
        efficiency: "+40%",
        cost_savings: "$2M+",
        satisfaction: "89%"
      },
      technologies: ["IoT Integration", "Predictive Modeling", "Real-time Analytics"],
      year: "2023"
    },
    {
      id: 4,
      title: "Crisis Response System",
      category: "Emergency Services",
      description: "Intelligent emergency response coordination platform that optimizes resource allocation during natural disasters.",
      image: "https://images.unsplash.com/photo-1551731409-43eb3e517a1a?w=800&h=600&fit=crop",
      metrics: {
        response_time: "-45%",
        coordination: "+70%",
        lives_saved: "500+"
      },
      technologies: ["Real-time Processing", "Geographic AI", "Communication Networks"],
      year: "2023"
    },
    {
      id: 5,
      title: "Agricultural Optimization",
      category: "Agriculture",
      description: "AI-driven crop management and yield prediction system supporting small-scale farmers in developing regions.",
      image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&h=600&fit=crop",
      metrics: {
        yield_increase: "+35%",
        water_savings: "25%",
        farmers: "25K+"
      },
      technologies: ["Satellite Imagery", "Weather Prediction", "Soil Analysis"],
      year: "2023"
    },
    {
      id: 6,
      title: "Financial Inclusion Platform",
      category: "Fintech",
      description: "AI-powered microfinance platform enabling financial services access for unbanked populations globally.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
      metrics: {
        loans_processed: "1M+",
        approval_rate: "78%",
        default_reduction: "-60%"
      },
      technologies: ["Risk Assessment", "Behavioral Analytics", "Mobile Integration"],
      year: "2024"
    }
  ];

  const categories = ["All", "Healthcare", "Education", "Government", "Emergency Services", "Agriculture", "Fintech"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6">
              Our <span className="text-pulse-500">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Transforming organizations across sectors with cutting-edge AI solutions that create measurable impact and lasting change.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-pulse-500" />
                <span>500K+ Lives Impacted</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-pulse-500" />
                <span>50+ Projects Delivered</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-pulse-500" />
                <span>Average 65% Efficiency Gain</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-pulse-500 text-white shadow-lg shadow-pulse-500/25'
                    : 'bg-white text-gray-600 hover:bg-pulse-50 hover:text-pulse-600 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card key={project.id} className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border-0 shadow-elegant animate-fade-in stagger-${index % 3 + 1}`}>
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-pulse-500 text-white text-xs font-semibold rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-1 text-white text-xs bg-black/50 rounded-full px-2 py-1">
                      <Calendar className="w-3 h-3" />
                      {project.year}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-pulse-600 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Key Metrics */}
                  <div className="grid grid-cols-3 gap-2 text-center">
                    {Object.entries(project.metrics).map(([key, value], idx) => (
                      <div key={idx} className="bg-gray-50 rounded-lg p-2">
                        <div className="font-bold text-pulse-600 text-sm">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key.replace('_', ' ')}</div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="text-xs bg-pulse-50 text-pulse-700 px-2 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Learn More Button */}
                  <button className="w-full flex items-center justify-center gap-2 py-3 text-pulse-600 hover:text-pulse-700 hover:bg-pulse-50 rounded-lg transition-all duration-300 font-medium">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pulse-500 to-pulse-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Organization?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join the organizations already leveraging AI to amplify their impact and create lasting change.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white text-pulse-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Start Your Project
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
