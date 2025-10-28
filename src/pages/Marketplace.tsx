
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Search, 
  BookOpen,
  Code,
  PenTool,
  FileText,
  BarChart,
  Camera,
  Music,
  Languages,
  Briefcase,
  Sliders,
  Star,
  MapPin,
  Clock,
  Filter,
  Heart,
  Share2
} from "lucide-react";

const categories = [
  { id: "all", name: "All Categories", icon: BookOpen },
  { id: "programming", name: "Programming & Tech", icon: Code },
  { id: "design", name: "Design & Creative", icon: PenTool },
  { id: "writing", name: "Writing & Translation", icon: FileText },
  { id: "marketing", name: "Marketing", icon: BarChart },
  { id: "video", name: "Video & Animation", icon: Camera },
  { id: "music", name: "Music & Audio", icon: Music },
  { id: "tutoring", name: "Tutoring", icon: Languages },
  { id: "business", name: "Business", icon: Briefcase }
];

const academicLevels = [
  { id: "all", name: "All Levels" },
  { id: "high-school", name: "High School" },
  { id: "undergraduate", name: "Undergraduate" },
  { id: "graduate", name: "Graduate" },
  { id: "phd", name: "PhD" }
];

// Enhanced gigs data with more student services
const gigs = [
  {
    id: 1,
    title: "Full-Stack Web Development for Student Projects",
    description: "I'll build responsive web applications using React, Node.js, and modern databases. Perfect for capstone projects, portfolios, or startup MVPs.",
    category: "programming",
    price: 25,
    priceType: "hourly",
    deliveryTime: "3-7 days",
    featured: true,
    freelancer: {
      name: "Alex Chen",
      school: "MIT",
      rating: 4.9,
      reviewCount: 47,
      level: "undergraduate",
      major: "Computer Science",
      profilePic: "AC"
    },
    tags: ["React", "Node.js", "Full-Stack", "Database"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    title: "Professional Logo & Brand Identity Design",
    description: "Custom logo design and complete brand identity packages for student organizations, startups, and personal brands. Includes multiple concepts and revisions.",
    category: "design",
    price: 80,
    priceType: "fixed",
    deliveryTime: "2-4 days",
    featured: false,
    freelancer: {
      name: "Maya Rodriguez",
      school: "RISD",
      rating: 4.8,
      reviewCount: 32,
      level: "undergraduate",
      major: "Graphic Design",
      profilePic: "MR"
    },
    tags: ["Logo Design", "Branding", "Adobe Creative", "Identity"],
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    title: "Academic Essay Editing & Proofreading",
    description: "Professional editing and proofreading for essays, research papers, and personal statements. English Literature major with 3+ years of tutoring experience.",
    category: "writing",
    price: 15,
    priceType: "hourly",
    deliveryTime: "1-2 days",
    featured: true,
    freelancer: {
      name: "James Liu",
      school: "Stanford",
      rating: 4.7,
      reviewCount: 89,
      level: "graduate",
      major: "English Literature",
      profilePic: "JL"
    },
    tags: ["Editing", "Proofreading", "Academic Writing", "Essays"],
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    title: "Social Media Strategy & Content Creation",
    description: "Complete social media marketing packages including strategy, content calendars, and growth tactics for student businesses and organizations.",
    category: "marketing",
    price: 20,
    priceType: "hourly",
    deliveryTime: "3-5 days",
    featured: false,
    freelancer: {
      name: "Sophia Wang",
      school: "NYU Stern",
      rating: 4.9,
      reviewCount: 56,
      level: "undergraduate",
      major: "Marketing",
      profilePic: "SW"
    },
    tags: ["Social Media", "Content Strategy", "Marketing", "Growth"],
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    title: "Professional Video Editing & Motion Graphics",
    description: "High-quality video editing for student films, promotional content, and social media. Includes color grading, audio enhancement, and motion graphics.",
    category: "video",
    price: 30,
    priceType: "hourly",
    deliveryTime: "2-5 days",
    featured: true,
    freelancer: {
      name: "Daniel Park",
      school: "USC Film School",
      rating: 4.6,
      reviewCount: 23,
      level: "undergraduate",
      major: "Film Production",
      profilePic: "DP"
    },
    tags: ["Video Editing", "Motion Graphics", "Color Grading", "Adobe Premiere"],
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    title: "Advanced Math & Statistics Tutoring",
    description: "One-on-one tutoring for calculus, linear algebra, discrete math, and statistics. Flexible scheduling around your class times.",
    category: "tutoring",
    price: 22,
    priceType: "hourly",
    deliveryTime: "Same day",
    featured: false,
    freelancer: {
      name: "Emma Thompson",
      school: "Caltech",
      rating: 5.0,
      reviewCount: 67,
      level: "graduate",
      major: "Applied Mathematics",
      profilePic: "ET"
    },
    tags: ["Math Tutoring", "Statistics", "Calculus", "One-on-One"],
    image: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 7,
    title: "Mobile App Development (iOS & Android)",
    description: "Native and cross-platform mobile app development using React Native and Flutter. Perfect for student entrepreneurship projects.",
    category: "programming",
    price: 35,
    priceType: "hourly",
    deliveryTime: "1-2 weeks",
    featured: true,
    freelancer: {
      name: "Raj Patel",
      school: "UC Berkeley",
      rating: 4.8,
      reviewCount: 29,
      level: "graduate",
      major: "Computer Engineering",
      profilePic: "RP"
    },
    tags: ["Mobile Development", "React Native", "Flutter", "iOS", "Android"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 8,
    title: "UI/UX Design for Web & Mobile Apps",
    description: "User-centered design solutions including wireframes, prototypes, and high-fidelity mockups. Experienced with Figma and Adobe XD.",
    category: "design",
    price: 28,
    priceType: "hourly",
    deliveryTime: "3-7 days",
    featured: false,
    freelancer: {
      name: "Isabella Garcia",
      school: "Parsons",
      rating: 4.9,
      reviewCount: 41,
      level: "undergraduate",
      major: "Design & Technology",
      profilePic: "IG"
    },
    tags: ["UI/UX Design", "Figma", "Prototyping", "User Research"],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 9,
    title: "Research Paper Writing & Data Analysis",
    description: "Comprehensive research support including literature reviews, data analysis, and academic writing for various disciplines.",
    category: "writing",
    price: 25,
    priceType: "hourly",
    deliveryTime: "5-10 days",
    featured: false,
    freelancer: {
      name: "Michael Johnson",
      school: "Harvard",
      rating: 4.7,
      reviewCount: 38,
      level: "phd",
      major: "Political Science",
      profilePic: "MJ"
    },
    tags: ["Research Writing", "Data Analysis", "Academic Research", "Citations"],
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 10,
    title: "Music Production & Audio Engineering",
    description: "Professional music production, mixing, and mastering services. Specializing in indie, electronic, and podcast audio.",
    category: "music",
    price: 40,
    priceType: "hourly",
    deliveryTime: "3-7 days",
    featured: true,
    freelancer: {
      name: "Tyler Brown",
      school: "Berklee",
      rating: 4.8,
      reviewCount: 25,
      level: "undergraduate",
      major: "Music Production",
      profilePic: "TB"
    },
    tags: ["Music Production", "Audio Engineering", "Mixing", "Mastering"],
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 11,
    title: "Business Plan Development & Market Research",
    description: "Comprehensive business planning services for student entrepreneurs including market research, financial projections, and pitch decks.",
    category: "business",
    price: 50,
    priceType: "fixed",
    deliveryTime: "1-2 weeks",
    featured: false,
    freelancer: {
      name: "Sarah Kim",
      school: "Wharton",
      rating: 4.9,
      reviewCount: 19,
      level: "graduate",
      major: "Business Administration",
      profilePic: "SK"
    },
    tags: ["Business Planning", "Market Research", "Financial Modeling", "Pitch Decks"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 12,
    title: "Language Translation & Localization",
    description: "Professional translation services for Spanish, French, and Mandarin. Native speaker with cultural expertise.",
    category: "writing",
    price: 20,
    priceType: "hourly",
    deliveryTime: "2-5 days",
    featured: false,
    freelancer: {
      name: "Carlos Mendez",
      school: "Georgetown",
      rating: 4.8,
      reviewCount: 34,
      level: "undergraduate",
      major: "International Relations",
      profilePic: "CM"
    },
    tags: ["Translation", "Spanish", "French", "Mandarin", "Localization"],
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
  }
];

const Marketplace = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const filteredGigs = gigs.filter(gig => {
    const matchesCategory = selectedCategory === "all" || gig.category === selectedCategory;
    const matchesLevel = selectedLevel === "all" || gig.freelancer.level === selectedLevel;
    const matchesSearch = searchQuery === "" || 
      gig.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      gig.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      gig.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesLevel && matchesSearch;
  });

  const featuredGigs = filteredGigs.filter(gig => gig.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Find Talented Student Freelancers
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Connect with verified students offering professional services at student-friendly rates
            </p>
            
            {/* Enhanced Search Bar */}
            <div className="relative max-w-3xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-6 w-6" />
                <Input
                  type="text"
                  placeholder="Search for skills, services, or keywords..."
                  className="pl-12 py-4 text-lg rounded-xl border-0 focus:ring-2 focus:ring-white/20 w-full bg-white/95 backdrop-blur-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 rounded-lg px-6"
                >
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Gigs Section */}
      {featuredGigs.length > 0 && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Featured Services</h2>
              <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 px-3 py-1">
                ⭐ Top Picks
              </Badge>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredGigs.slice(0, 3).map((gig) => (
                <Card key={gig.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                  <div className="relative">
                    <img 
                      src={gig.image} 
                      alt={gig.title} 
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-yellow-500 text-white">Featured</Badge>
                    </div>
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <Button size="sm" variant="secondary" className="w-8 h-8 p-0 bg-white/80 hover:bg-white">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="w-8 h-8 p-0 bg-white/80 hover:bg-white">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="outline" className="text-xs">
                        {categories.find(c => c.id === gig.category)?.name}
                      </Badge>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium ml-1">{gig.freelancer.rating}</span>
                        <span className="text-xs text-gray-500 ml-1">({gig.freelancer.reviewCount})</span>
                      </div>
                    </div>
                    <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {gig.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{gig.description}</p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {gig.tags.slice(0, 3).map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between mt-4 pt-4 border-t">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white text-sm font-medium">
                          {gig.freelancer.profilePic}
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium">{gig.freelancer.name}</p>
                          <p className="text-xs text-gray-500">{gig.freelancer.school}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-blue-600">
                          ${gig.price}{gig.priceType === 'hourly' ? '/hr' : ''}
                        </p>
                        <p className="text-xs text-gray-500">{gig.deliveryTime}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Enhanced Filters Sidebar */}
          <div className="lg:w-1/4">
            <Card className="border-0 shadow-lg sticky top-6">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Filters</CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowFilters(!showFilters)}
                    className="lg:hidden"
                  >
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className={`${showFilters ? 'block' : 'hidden lg:block'}`}>
                {/* Category Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-700 mb-3">Categories</h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div 
                        key={category.id}
                        className={`flex items-center px-3 py-2 rounded-lg cursor-pointer transition-all ${
                          selectedCategory === category.id 
                            ? 'bg-blue-50 text-blue-600 border border-blue-200' 
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                        onClick={() => setSelectedCategory(category.id)}
                      >
                        <category.icon className={`h-4 w-4 mr-3 ${selectedCategory === category.id ? 'text-blue-600' : 'text-gray-500'}`} />
                        <span className="text-sm font-medium">{category.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Academic Level Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-700 mb-3">Academic Level</h4>
                  <div className="space-y-2">
                    {academicLevels.map((level) => (
                      <div 
                        key={level.id}
                        className={`flex items-center px-3 py-2 rounded-lg cursor-pointer transition-all ${
                          selectedLevel === level.id 
                            ? 'bg-purple-50 text-purple-600 border border-purple-200' 
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                        onClick={() => setSelectedLevel(level.id)}
                      >
                        <span className="text-sm font-medium">{level.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Apply Filters
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Results Header */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {filteredGigs.length} {filteredGigs.length === 1 ? 'Service' : 'Services'} Available
                </h2>
                <p className="text-gray-600 mt-1">
                  Find the perfect student freelancer for your project
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">Sort by:</span>
                <select className="text-sm border rounded-lg p-2 bg-white">
                  <option>Most Relevant</option>
                  <option>Newest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Top Rated</option>
                  <option>Most Reviews</option>
                </select>
              </div>
            </div>
            
            {/* Gigs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredGigs.map((gig) => (
                <Card key={gig.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                  <div className="relative">
                    <img 
                      src={gig.image} 
                      alt={gig.title} 
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {gig.featured && (
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-yellow-500 text-white">Featured</Badge>
                      </div>
                    )}
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <Button size="sm" variant="secondary" className="w-8 h-8 p-0 bg-white/80 hover:bg-white">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="w-8 h-8 p-0 bg-white/80 hover:bg-white">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="outline" className="text-xs">
                        {categories.find(c => c.id === gig.category)?.name}
                      </Badge>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium ml-1">{gig.freelancer.rating}</span>
                        <span className="text-xs text-gray-500 ml-1">({gig.freelancer.reviewCount})</span>
                      </div>
                    </div>
                    <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {gig.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{gig.description}</p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {gig.tags.slice(0, 3).map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white text-sm font-medium">
                          {gig.freelancer.profilePic}
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium">{gig.freelancer.name}</p>
                          <div className="flex items-center text-xs text-gray-500">
                            <MapPin className="h-3 w-3 mr-1" />
                            {gig.freelancer.school}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-blue-600">
                          ${gig.price}{gig.priceType === 'hourly' ? '/hr' : ''}
                        </p>
                        <div className="flex items-center text-xs text-gray-500">
                          <Clock className="h-3 w-3 mr-1" />
                          {gig.deliveryTime}
                        </div>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Load More Button */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" className="px-8">
                Load More Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
