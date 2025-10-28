
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  GraduationCap,
  Users,
  Heart,
  Clock,
  Lightbulb
} from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-blue to-indigo-900 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About GigMentor</h1>
            <p className="text-xl text-gray-200 mb-8">
              We're building the first freelancing platform exclusively designed for students, by students.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-brand-blue">Our Mission</h2>
            <p className="text-xl mb-10 text-gray-700">
              GigMentor exists to empower students to gain real-world experience, earn money, and build their portfolios while respecting the unique demands of academic life.
            </p>
            <div className="flex flex-wrap justify-center gap-10">
              <div className="flex flex-col items-center max-w-xs">
                <div className="h-16 w-16 rounded-full bg-brand-blue/10 flex items-center justify-center mb-4">
                  <GraduationCap className="h-8 w-8 text-brand-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Student Success</h3>
                <p className="text-gray-600 text-center">
                  We prioritize academic success alongside professional growth, with features designed around student schedules.
                </p>
              </div>
              <div className="flex flex-col items-center max-w-xs">
                <div className="h-16 w-16 rounded-full bg-brand-teal/10 flex items-center justify-center mb-4">
                  <ShieldCheck className="h-8 w-8 text-brand-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Safe Community</h3>
                <p className="text-gray-600 text-center">
                  Our platform enforces strict verification to ensure only real students can join, creating a trusted environment.
                </p>
              </div>
              <div className="flex flex-col items-center max-w-xs">
                <div className="h-16 w-16 rounded-full bg-brand-red/10 flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-brand-red" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Student-First Design</h3>
                <p className="text-gray-600 text-center">
                  Every feature is built with students in mind, from exam-mode pauses to budget-friendly fees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-brand-blue">Our Story</h2>
                <p className="text-gray-700 mb-4">
                  GigMentor was born from a simple observation: students have incredible skills but traditional freelancing platforms aren't built for academic life.
                </p>
                <p className="text-gray-700 mb-4">
                  Founded by a group of college students in 2023, we experienced firsthand the challenges of balancing freelance work with studies - clients who didn't understand exam schedules, platforms with high fees, and no way to verify who was really a student.
                </p>
                <p className="text-gray-700">
                  So we created the platform we wished existed: a freelance marketplace exclusively for verified students, with features like "exam mode," lower fees, and a community that understands and supports academic priorities.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Students collaborating" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-brand-blue">Our Values</h2>
            <p className="text-xl text-gray-700">
              The core principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center mb-6">
                <GraduationCap className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Academic Integrity</h3>
              <p className="text-gray-600">
                We uphold the highest standards of academic integrity, prohibiting work that could compromise educational values.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community First</h3>
              <p className="text-gray-600">
                We foster a supportive community where students can learn from each other and grow together.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center mb-6">
                <Lightbulb className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Skill Development</h3>
              <p className="text-gray-600">
                We believe in learning by doing, providing students real-world experience to complement classroom learning.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="h-12 w-12 rounded-lg bg-red-100 flex items-center justify-center mb-6">
                <ShieldCheck className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Safety & Trust</h3>
              <p className="text-gray-600">
                We create a safe environment through strict verification and transparent reviews, building trust among all users.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="h-12 w-12 rounded-lg bg-amber-100 flex items-center justify-center mb-6">
                <Clock className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Study-Work Balance</h3>
              <p className="text-gray-600">
                We design features that help students maintain a healthy balance between academics and freelance work.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="h-12 w-12 rounded-lg bg-teal-100 flex items-center justify-center mb-6">
                <Heart className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Inclusion & Diversity</h3>
              <p className="text-gray-600">
                We celebrate diversity and create equal opportunities for students from all backgrounds and institutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section (placeholder) */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-brand-blue">Our Team</h2>
            <p className="text-xl text-gray-700">
              A diverse group of students and recent graduates passionate about helping fellow students succeed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {/* Team members would go here */}
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4">
                {/* Team member photo would go here */}
              </div>
              <h3 className="font-semibold text-lg">Jessica Chen</h3>
              <p className="text-gray-600 text-sm">Co-Founder & CEO</p>
              <p className="text-gray-500 text-sm">Stanford '22</p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4">
                {/* Team member photo would go here */}
              </div>
              <h3 className="font-semibold text-lg">Marcus Johnson</h3>
              <p className="text-gray-600 text-sm">Co-Founder & CTO</p>
              <p className="text-gray-500 text-sm">MIT '23</p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4">
                {/* Team member photo would go here */}
              </div>
              <h3 className="font-semibold text-lg">Aisha Williams</h3>
              <p className="text-gray-600 text-sm">Head of Community</p>
              <p className="text-gray-500 text-sm">Howard '22</p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4">
                {/* Team member photo would go here */}
              </div>
              <h3 className="font-semibold text-lg">Carlos Rodriguez</h3>
              <p className="text-gray-600 text-sm">Product Manager</p>
              <p className="text-gray-500 text-sm">UCLA '23</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Our Community?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start your journey as a student freelancer or hire talented students for your projects.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/register">
              <Button className="bg-white text-brand-blue hover:bg-white/90 text-lg px-8">
                Create Your Account
              </Button>
            </Link>
            <Link to="/how-it-works">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8">
                Learn How It Works
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
