
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  UserCheck,
  Briefcase,
  CreditCard,
  Star,
  Clock,
  Calendar,
  Shield,
  BookOpen,
  BarChart,
  CheckCircle,
  Users,
  ArrowRight,
  Zap,
  Award,
  Target
} from "lucide-react";

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-brand-light to-brand-accent">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-90"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')]"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in">
              How <span className="text-accent">PIXELIT</span> Works
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 slide-in-left">
              Our platform connects student freelancers with clients in a safe, study-friendly environment. Here's everything you need to know.
            </p>
            <div className="flex justify-center space-x-4 floating-element">
              <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-white rounded-full animate-bounce delay-100"></div>
              <div className="w-3 h-3 bg-white rounded-full animate-bounce delay-200"></div>
            </div>
          </div>
        </div>
      </section>

      {/* For Freelancers Section */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">For Student Freelancers</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Turn your skills into income while balancing your studies
            </p>
          </div>

          <div className="max-w-7xl mx-auto space-y-20">
            {/* Step 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="slide-in-left">
                <div className="flex items-center mb-8">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold text-2xl mr-6 shadow-custom-lg">
                    1
                  </div>
                  <h3 className="text-3xl font-bold text-primary">Create Your Account</h3>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  Sign up with your .edu email or other student verification. Complete your profile with your skills, education, and portfolio.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start bg-white p-4 rounded-lg shadow-custom border-l-4 border-primary">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-foreground font-medium">Verify with student email or ID</span>
                  </div>
                  <div className="flex items-start bg-white p-4 rounded-lg shadow-custom border-l-4 border-secondary">
                    <CheckCircle className="h-6 w-6 text-secondary mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-foreground font-medium">Upload portfolio samples</span>
                  </div>
                  <div className="flex items-start bg-white p-4 rounded-lg shadow-custom border-l-4 border-accent">
                    <CheckCircle className="h-6 w-6 text-accent-foreground mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-foreground font-medium">Set your skill tags and education level</span>
                  </div>
                </div>
              </div>
              <div className="slide-in-right">
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 h-80 flex items-center justify-center shadow-custom-xl">
                  <UserCheck className="h-32 w-32 text-primary animate-pulse-slow" />
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 slide-in-left">
                <div className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl p-8 h-80 flex items-center justify-center shadow-custom-xl">
                  <Briefcase className="h-32 w-32 text-secondary animate-bounce-slow" />
                </div>
              </div>
              <div className="order-1 lg:order-2 slide-in-right">
                <div className="flex items-center mb-8">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-r from-secondary to-accent flex items-center justify-center text-white font-bold text-2xl mr-6 shadow-custom-lg">
                    2
                  </div>
                  <h3 className="text-3xl font-bold text-secondary">Create & Sell Your Services</h3>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  List your skills as services, set your prices, and availability around your class schedule.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start bg-white p-4 rounded-lg shadow-custom border-l-4 border-secondary">
                    <CheckCircle className="h-6 w-6 text-secondary mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-foreground font-medium">Create detailed gig descriptions</span>
                  </div>
                  <div className="flex items-start bg-white p-4 rounded-lg shadow-custom border-l-4 border-accent">
                    <CheckCircle className="h-6 w-6 text-accent-foreground mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-foreground font-medium">Set competitive student-friendly pricing</span>
                  </div>
                  <div className="flex items-start bg-white p-4 rounded-lg shadow-custom border-l-4 border-primary">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-foreground font-medium">Define your availability and response times</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="slide-in-left">
                <div className="flex items-center mb-8">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-r from-brand-red to-brand-orange flex items-center justify-center text-white font-bold text-2xl mr-6 shadow-custom-lg">
                    3
                  </div>
                  <h3 className="text-3xl font-bold text-brand-red">Complete Projects & Get Paid</h3>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  Deliver quality work, build your reputation with reviews, and receive secure payments for your efforts.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start bg-white p-4 rounded-lg shadow-custom border-l-4 border-brand-red">
                    <CheckCircle className="h-6 w-6 text-brand-red mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-foreground font-medium">Communicate through our secure platform</span>
                  </div>
                  <div className="flex items-start bg-white p-4 rounded-lg shadow-custom border-l-4 border-brand-orange">
                    <CheckCircle className="h-6 w-6 text-brand-orange mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-foreground font-medium">Receive payments through secure escrow</span>
                  </div>
                  <div className="flex items-start bg-white p-4 rounded-lg shadow-custom border-l-4 border-brand-green">
                    <CheckCircle className="h-6 w-6 text-brand-green mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-foreground font-medium">Collect reviews to build your reputation</span>
                  </div>
                </div>
              </div>
              <div className="slide-in-right">
                <div className="bg-gradient-to-br from-brand-red/10 to-brand-orange/10 rounded-2xl p-8 h-80 flex items-center justify-center shadow-custom-xl">
                  <CreditCard className="h-32 w-32 text-brand-red floating-element" />
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 slide-in-left">
                <div className="bg-gradient-to-br from-brand-violet/10 to-brand-indigo/10 rounded-2xl p-8 h-80 flex items-center justify-center shadow-custom-xl">
                  <Calendar className="h-32 w-32 text-brand-violet animate-float" />
                </div>
              </div>
              <div className="order-1 lg:order-2 slide-in-right">
                <div className="flex items-center mb-8">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-r from-brand-violet to-brand-indigo flex items-center justify-center text-white font-bold text-2xl mr-6 shadow-custom-lg">
                    4
                  </div>
                  <h3 className="text-3xl font-bold text-brand-violet">Balance Studies & Work</h3>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  Use our unique student-focused features to maintain your academic performance while freelancing.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start bg-white p-4 rounded-lg shadow-custom border-l-4 border-brand-violet">
                    <CheckCircle className="h-6 w-6 text-brand-violet mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-foreground font-medium">Activate "Exam Mode" during busy academic periods</span>
                  </div>
                  <div className="flex items-start bg-white p-4 rounded-lg shadow-custom border-l-4 border-brand-indigo">
                    <CheckCircle className="h-6 w-6 text-brand-indigo mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-foreground font-medium">Sync with your academic calendar</span>
                  </div>
                  <div className="flex items-start bg-white p-4 rounded-lg shadow-custom border-l-4 border-brand-blue">
                    <CheckCircle className="h-6 w-6 text-brand-blue mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-foreground font-medium">Track your workload to prevent burnout</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Clients Section */}
      <section className="section bg-gradient-to-r from-muted/30 to-accent/20">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">For Clients</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hire talented students for your projects at student-friendly rates
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-custom-xl card-hover scale-in">
                <div className="h-16 w-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mb-6">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary">Find Student Talent</h3>
                <p className="text-muted-foreground mb-6">
                  Browse verified student freelancers or post your project to receive proposals from qualified students.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-sm text-foreground">Access to verified student-only talent</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-sm text-foreground">Filter by academic background and skills</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-sm text-foreground">Fresh, innovative perspectives</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-custom-xl card-hover scale-in delay-100">
                <div className="h-16 w-16 rounded-full bg-gradient-to-r from-secondary to-accent flex items-center justify-center mb-6">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-secondary">Work With Confidence</h3>
                <p className="text-muted-foreground mb-6">
                  Our secure platform ensures quality work, transparent communication, and protected payments.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-secondary mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-sm text-foreground">Secure escrow payment protection</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-secondary mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-sm text-foreground">Clear milestone-based deliverables</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-secondary mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-sm text-foreground">Academic integrity guidelines</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-custom-xl card-hover scale-in delay-200">
                <div className="h-16 w-16 rounded-full bg-gradient-to-r from-brand-red to-brand-orange flex items-center justify-center mb-6">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-brand-red">Student-Friendly Terms</h3>
                <p className="text-muted-foreground mb-6">
                  Understand how to work effectively with student freelancers and support their academic journey.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-red mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-sm text-foreground">Awareness of academic schedules</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-red mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-sm text-foreground">Accommodating of exam periods</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-red mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-sm text-foreground">Support student skill development</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Benefits */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Why Choose PIXELIT?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our platform offers unique features designed specifically for student freelancers and their clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              { icon: Shield, title: "Student Verification", desc: "All freelancers are verified students, creating a trusted community of genuine academic talent.", color: "blue" },
              { icon: Clock, title: '"Exam Mode" Feature', desc: "Students can temporarily pause gigs during exams without affecting their ratings or availability status.", color: "green" },
              { icon: CreditCard, title: "Lower Platform Fees", desc: "Student-friendly commission rates that are lower than traditional freelancing platforms.", color: "purple" },
              { icon: BookOpen, title: "Academic Integrity", desc: "Clear guidelines ensure all work complies with academic integrity policies and educational values.", color: "amber" },
              { icon: BarChart, title: "Skill Development", desc: "Built-in resources to help students improve their skills and track their freelance growth.", color: "red" },
              { icon: Users, title: "Student Community", desc: "Forums and networking opportunities exclusive to verified student freelancers.", color: "teal" },
              { icon: Calendar, title: "Academic Calendar", desc: "Sync with your school's academic calendar to manage availability during breaks and exam periods.", color: "indigo" },
              { icon: Star, title: "Verified Reviews", desc: "All reviews come from verified transactions, ensuring authenticity and trustworthiness.", color: "emerald" }
            ].map((item, index) => (
              <div key={index} className={`bg-white p-6 rounded-2xl shadow-custom-xl card-hover scale-in delay-${index * 50}`}>
                <div className={`h-14 w-14 rounded-full bg-${item.color}-100 flex items-center justify-center mb-4`}>
                  <item.icon className={`h-7 w-7 text-${item.color}-600`} />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gradient-to-r from-muted/30 to-accent/20">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Common questions about using PIXELIT as a student freelancer or client
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                q: "How do I verify my student status?",
                a: "You can verify your student status by signing up with your .edu email address or uploading your student ID/enrollment proof. Our team will verify your documentation within 24-48 hours."
              },
              {
                q: "What happens if I have exams coming up?",
                a: "You can activate \"Exam Mode\" in your profile settings, which will notify your current clients and temporarily hide your services from new clients. This won't affect your rating or ranking on the platform."
              },
              {
                q: "How does payment protection work?",
                a: "We use an escrow system where clients fund the project before work begins. The payment is only released to the freelancer when the work is completed and approved, protecting both parties."
              },
              {
                q: "What types of gigs aren't allowed?",
                a: "We prohibit gigs that violate academic integrity, including completing assignments for submission, writing essays for others, taking exams, or any work that could constitute academic misconduct."
              },
              {
                q: "What are the platform fees?",
                a: "Our student-friendly platform fee is 10% for freelancers, significantly lower than most freelancing platforms. This fee covers payment processing, platform maintenance, and student verification services."
              },
              {
                q: "What happens after I graduate?",
                a: "Recent graduates (within 1 year) can continue using the platform with an \"Alumni\" badge. After that, we offer a smooth transition to partner platforms or our sister site for professional freelancers."
              }
            ].map((faq, index) => (
              <div key={index} className={`bg-white p-8 rounded-2xl shadow-custom-xl scale-in delay-${index * 100}`}>
                <h3 className="text-xl font-semibold mb-4 text-primary flex items-center">
                  <Zap className="h-5 w-5 mr-2" />
                  {faq.q}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')]"></div>
        <div className="container-custom text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white fade-in">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90 slide-in-left">
            Join thousands of students freelancing and hiring on PIXELIT.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 scale-in">
            <Link to="/register">
              <Button className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 w-full sm:w-auto shadow-custom-xl transform hover:scale-105 transition-all duration-200">
                Create Your Account
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/marketplace">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 w-full sm:w-auto shadow-custom-xl transform hover:scale-105 transition-all duration-200">
                Explore the Marketplace
                <Target className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
