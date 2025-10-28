
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  ShieldCheck, 
  Briefcase, 
  Clock, 
  CreditCard, 
  Users,
  Code,
  PenTool,
  FileText,
  Laptop,
  Camera,
  BookOpen
} from "lucide-react";

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-blue via-brand-blue to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Student Freelancing <span className="text-brand-teal">Reimagined</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-xl">
                Connect with fellow students, offer your skills, and earn while studying. The exclusive marketplace built for students, by students.
              </p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
                <Link to="/register">
                  <Button className="bg-brand-teal hover:bg-brand-teal/90 text-brand-blue text-lg w-full sm:w-auto px-8 py-6">
                    Join as Student
                  </Button>
                </Link>
                <Link to="/marketplace">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg w-full sm:w-auto px-8 py-6">
                    Browse Gigs
                  </Button>
                </Link>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <ShieldCheck className="h-5 w-5 text-brand-teal" />
                <p>Verified student community with academic integrity</p>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative z-10 bg-white p-6 rounded-lg shadow-xl transform rotate-3 animate-float">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center text-white">
                    <Code className="h-5 w-5" />
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium text-gray-900">Mobile App Development</h3>
                    <p className="text-sm text-gray-500">by Computer Science Major</p>
                  </div>
                  <div className="ml-auto">
                    <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">$25/hr</span>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm text-gray-600">I can develop custom mobile apps using React Native, Flutter, or native Android/iOS. Perfect for student projects or startups!</p>
                </div>
              </div>
              
              <div className="absolute top-20 -right-10 z-20 bg-white p-6 rounded-lg shadow-xl transform -rotate-6 animate-float">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-brand-red flex items-center justify-center text-white">
                    <PenTool className="h-5 w-5" />
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium text-gray-900">Graphic Design</h3>
                    <p className="text-sm text-gray-500">by Fine Arts Student</p>
                  </div>
                  <div className="ml-auto">
                    <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">$20/hr</span>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm text-gray-600">I create logos, posters, social media graphics, and UI designs. Let me bring your ideas to life!</p>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-10 z-30 bg-white p-6 rounded-lg shadow-xl transform rotate-12 animate-float">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-brand-teal flex items-center justify-center text-white">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium text-gray-900">Essay Proofreading</h3>
                    <p className="text-sm text-gray-500">by English Literature Major</p>
                  </div>
                  <div className="ml-auto">
                    <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">$15/hr</span>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm text-gray-600">I'll proofread your essays for grammar, structure, and style. Get better grades with polished writing!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-blue">
              Designed for Student Success
            </h2>
            <p className="text-lg text-gray-600">
              Our platform offers unique features tailored to student life, helping you earn without compromising your studies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl shadow-md p-6 card-hover">
              <div className="h-12 w-12 bg-brand-blue/10 rounded-lg flex items-center justify-center mb-4">
                <GraduationCap className="h-6 w-6 text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-brand-blue">Student Verification</h3>
              <p className="text-gray-600">
                Our platform is exclusively for students. Verify with your .edu email or student ID for access to all features.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl shadow-md p-6 card-hover">
              <div className="h-12 w-12 bg-brand-teal/10 rounded-lg flex items-center justify-center mb-4">
                <Briefcase className="h-6 w-6 text-brand-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-brand-blue">Skill-Based Marketplace</h3>
              <p className="text-gray-600">
                Offer your unique skills or find the perfect student freelancer for your project with our tailored categories.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl shadow-md p-6 card-hover">
              <div className="h-12 w-12 bg-brand-red/10 rounded-lg flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-brand-red" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-brand-blue">Exam Mode</h3>
              <p className="text-gray-600">
                Temporarily pause gigs during exam periods with our unique "Exam Mode" feature that keeps clients informed.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-xl shadow-md p-6 card-hover">
              <div className="h-12 w-12 bg-brand-yellow/10 rounded-lg flex items-center justify-center mb-4">
                <CreditCard className="h-6 w-6 text-brand-yellow" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-brand-blue">Student-Friendly Payments</h3>
              <p className="text-gray-600">
                Secure escrow payments, lower fees for students, and flexible payout options designed for university life.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white rounded-xl shadow-md p-6 card-hover">
              <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <ShieldCheck className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-brand-blue">Academic Integrity</h3>
              <p className="text-gray-600">
                Our platform enforces strict academic integrity policies to ensure all work complies with university standards.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white rounded-xl shadow-md p-6 card-hover">
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-brand-blue">Peer Community</h3>
              <p className="text-gray-600">
                Connect with other student freelancers, share tips, and grow your network within your academic community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-blue">
              Discover Popular Categories
            </h2>
            <p className="text-lg text-gray-600">
              Browse through our most in-demand student services or offer your skills in these categories
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {/* Category 1 */}
            <div className="flex flex-col items-center bg-white shadow-md rounded-xl p-6 transition-all hover:shadow-lg hover:-translate-y-1 hover:border-brand-teal">
              <div className="h-16 w-16 bg-brand-blue/10 rounded-full flex items-center justify-center mb-4">
                <Code className="h-8 w-8 text-brand-blue" />
              </div>
              <h3 className="text-lg font-medium text-center text-gray-800">Programming</h3>
              <p className="text-sm text-gray-500 text-center mt-2">145 Gigs</p>
            </div>

            {/* Category 2 */}
            <div className="flex flex-col items-center bg-white shadow-md rounded-xl p-6 transition-all hover:shadow-lg hover:-translate-y-1 hover:border-brand-teal">
              <div className="h-16 w-16 bg-brand-teal/10 rounded-full flex items-center justify-center mb-4">
                <PenTool className="h-8 w-8 text-brand-teal" />
              </div>
              <h3 className="text-lg font-medium text-center text-gray-800">Design</h3>
              <p className="text-sm text-gray-500 text-center mt-2">123 Gigs</p>
            </div>

            {/* Category 3 */}
            <div className="flex flex-col items-center bg-white shadow-md rounded-xl p-6 transition-all hover:shadow-lg hover:-translate-y-1 hover:border-brand-teal">
              <div className="h-16 w-16 bg-brand-red/10 rounded-full flex items-center justify-center mb-4">
                <FileText className="h-8 w-8 text-brand-red" />
              </div>
              <h3 className="text-lg font-medium text-center text-gray-800">Writing</h3>
              <p className="text-sm text-gray-500 text-center mt-2">98 Gigs</p>
            </div>

            {/* Category 4 */}
            <div className="flex flex-col items-center bg-white shadow-md rounded-xl p-6 transition-all hover:shadow-lg hover:-translate-y-1 hover:border-brand-teal">
              <div className="h-16 w-16 bg-brand-yellow/10 rounded-full flex items-center justify-center mb-4">
                <Laptop className="h-8 w-8 text-brand-yellow" />
              </div>
              <h3 className="text-lg font-medium text-center text-gray-800">Marketing</h3>
              <p className="text-sm text-gray-500 text-center mt-2">87 Gigs</p>
            </div>

            {/* Category 5 */}
            <div className="flex flex-col items-center bg-white shadow-md rounded-xl p-6 transition-all hover:shadow-lg hover:-translate-y-1 hover:border-brand-teal">
              <div className="h-16 w-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Camera className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-medium text-center text-gray-800">Photo & Video</h3>
              <p className="text-sm text-gray-500 text-center mt-2">76 Gigs</p>
            </div>

            {/* Category 6 */}
            <div className="flex flex-col items-center bg-white shadow-md rounded-xl p-6 transition-all hover:shadow-lg hover:-translate-y-1 hover:border-brand-teal">
              <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-medium text-center text-gray-800">Tutoring</h3>
              <p className="text-sm text-gray-500 text-center mt-2">112 Gigs</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/marketplace">
              <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue/5">
                View All Categories
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-blue">
              Student Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              Hear from students who've earned, learned, and grown with PIXELIT
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-brand-blue/20 flex items-center justify-center text-brand-blue font-bold text-xl">
                  J
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Josh M.</h4>
                  <p className="text-sm text-gray-500">Computer Science, UCLA</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "I started coding for clients on PIXELIT and made enough to pay for my textbooks and laptop upgrade. The best part is that clients understand I'm a student with exams and deadlines."
              </p>
              <div className="flex text-yellow-400">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-brand-teal/20 flex items-center justify-center text-brand-teal font-bold text-xl">
                  S
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Sarah L.</h4>
                  <p className="text-sm text-gray-500">Graphic Design, RISD</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "PIXELIT has been incredible for building my design portfolio while still in school. The exam mode feature saved me during finals week, and clients were super understanding."
              </p>
              <div className="flex text-yellow-400">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-brand-red/20 flex items-center justify-center text-brand-red font-bold text-xl">
                  M
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Marcus T.</h4>
                  <p className="text-sm text-gray-500">Marketing, NYU</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "As a business student, I wanted real-world marketing experience. Through PIXELIT, I've helped local businesses with their social media and even landed an internship through a connection I made!"
              </p>
              <div className="flex text-yellow-400">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-teal to-brand-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 max-w-2xl mx-auto">
            Ready to Join the Student Freelance Revolution?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Create your account today and start earning or finding talent - all while balancing your academic journey.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/register">
              <Button className="bg-white text-brand-blue hover:bg-white/90 text-lg px-8 py-6 w-full sm:w-auto">
                Sign Up Free
              </Button>
            </Link>
            <Link to="/marketplace">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 w-full sm:w-auto">
                Browse Gigs
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
