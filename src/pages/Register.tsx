
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, UserPlus, CheckCircle, Shield, Star } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

const Register = () => {
  const [accountType, setAccountType] = useState("freelancer");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [academicLevel, setAcademicLevel] = useState("");
  const [institution, setInstitution] = useState("");
  const [major, setMajor] = useState("");
  const [skills, setSkills] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [acceptIntegrity, setAcceptIntegrity] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { register: registerUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const userData = {
      accountType: accountType as 'freelancer' | 'client',
      email,
      password,
      firstName,
      lastName,
      academicLevel: accountType === 'freelancer' ? academicLevel : undefined,
      institution: accountType === 'freelancer' ? institution : undefined,
      major: accountType === 'freelancer' ? major : undefined,
      skills: accountType === 'freelancer' ? skills : undefined,
    };

    const success = await registerUser(userData);

    if (success) {
      toast.success("Account created successfully!");
      navigate("/dashboard");
    } else {
      toast.error("Email already exists or registration failed");
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
            <UserPlus className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Join PIXELIT</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The exclusive platform where students build careers while pursuing education
          </p>
        </div>

        {/* Benefits Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-3">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-3">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle className="text-lg">Verified Students Only</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Join a trusted community of verified student freelancers and clients</CardDescription>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-3">
              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-3">
                <Star className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle className="text-lg">Study-Friendly</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Flexible work that adapts to your academic schedule and commitments</CardDescription>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-3">
              <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-3">
                <GraduationCap className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle className="text-lg">Skill Building</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Gain real-world experience while earning money for your education</CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Registration Form */}
        <Card className="border-0 shadow-2xl">
          <CardContent className="p-8">
            <Tabs defaultValue="freelancer" className="mb-8">
              <TabsList className="grid w-full grid-cols-2 h-14">
                <TabsTrigger 
                  value="freelancer" 
                  onClick={() => setAccountType("freelancer")}
                  className="text-base font-medium data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  I want to freelance
                </TabsTrigger>
                <TabsTrigger 
                  value="client" 
                  onClick={() => setAccountType("client")}
                  className="text-base font-medium data-[state=active]:bg-purple-600 data-[state=active]:text-white"
                >
                  I want to hire
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="freelancer" className="mt-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <GraduationCap className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-blue-900 mb-1">Student Verification Required</p>
                      <p className="text-sm text-blue-700">
                        You'll need to verify your student status with a .edu email or student ID to start freelancing
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="client" className="mt-6">
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <Star className="h-6 w-6 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-purple-900 mb-1">Access Student Talent</p>
                      <p className="text-sm text-purple-700">
                        Connect with talented students and support their educational journey
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">First name</Label>
                  <Input 
                    id="firstName" 
                    type="text" 
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="mt-2 h-11"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">Last name</Label>
                  <Input 
                    id="lastName" 
                    type="text" 
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="mt-2 h-11"
                    required
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email address</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder={accountType === "freelancer" ? "your.name@university.edu" : "email@example.com"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2 h-11"
                  required
                />
                {accountType === "freelancer" && (
                  <p className="text-xs text-gray-500 mt-2 flex items-center">
                    <CheckCircle className="h-3 w-3 text-green-500 mr-1" />
                    .edu email provides instant verification
                  </p>
                )}
              </div>
              
              <div>
                <Label htmlFor="password" className="text-sm font-medium text-gray-700">Password</Label>
                <Input 
                  id="password" 
                  type="password"
                  placeholder="Create a strong password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-2 h-11"
                  required
                />
                <p className="text-xs text-gray-500 mt-2">
                  Must be at least 8 characters with numbers and symbols
                </p>
              </div>
              
              {accountType === "freelancer" && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="institution" className="text-sm font-medium text-gray-700">University/Institution</Label>
                      <Input 
                        id="institution" 
                        type="text" 
                        placeholder="e.g., Stanford University"
                        value={institution}
                        onChange={(e) => setInstitution(e.target.value)}
                        className="mt-2 h-11"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="academicLevel" className="text-sm font-medium text-gray-700">Academic Level</Label>
                      <Select value={academicLevel} onValueChange={setAcademicLevel}>
                        <SelectTrigger className="mt-2 h-11">
                          <SelectValue placeholder="Select your level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="high-school">High School</SelectItem>
                          <SelectItem value="undergraduate">Undergraduate</SelectItem>
                          <SelectItem value="graduate">Graduate</SelectItem>
                          <SelectItem value="phd">PhD</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="major" className="text-sm font-medium text-gray-700">Major/Field of Study</Label>
                    <Input 
                      id="major" 
                      type="text" 
                      placeholder="e.g., Computer Science, Graphic Design"
                      value={major}
                      onChange={(e) => setMajor(e.target.value)}
                      className="mt-2 h-11"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="skills" className="text-sm font-medium text-gray-700">Your Skills</Label>
                    <Input 
                      id="skills" 
                      type="text" 
                      placeholder="e.g., Web Development, Logo Design, Writing"
                      value={skills}
                      onChange={(e) => setSkills(e.target.value)}
                      className="mt-2 h-11"
                      required
                    />
                    <p className="text-xs text-gray-500 mt-2">
                      List your main skills separated by commas
                    </p>
                  </div>
                </>
              )}
              
              <div className="space-y-4 pt-4 border-t border-gray-200">
                <div className="flex items-start space-x-3">
                  <Switch 
                    id="terms" 
                    checked={acceptTerms}
                    onCheckedChange={setAcceptTerms}
                  />
                  <div>
                    <Label htmlFor="terms" className="text-sm text-gray-700 leading-relaxed">
                      I agree to the{" "}
                      <Link to="/terms" className="text-blue-600 hover:underline font-medium">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link to="/privacy" className="text-blue-600 hover:underline font-medium">
                        Privacy Policy
                      </Link>
                    </Label>
                  </div>
                </div>
                
                {accountType === "freelancer" && (
                  <div className="flex items-start space-x-3">
                    <Switch 
                      id="academic-integrity" 
                      checked={acceptIntegrity}
                      onCheckedChange={setAcceptIntegrity}
                    />
                    <div>
                      <Label htmlFor="academic-integrity" className="text-sm text-gray-700 leading-relaxed">
                        I commit to academic integrity and will not use this platform for academic misconduct
                      </Label>
                    </div>
                  </div>
                )}
              </div>
              
              <Button 
                type="submit" 
                className={`w-full h-12 text-base font-medium ${
                  accountType === "freelancer" 
                    ? "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800" 
                    : "bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800"
                }`}
                disabled={!acceptTerms || (accountType === "freelancer" && !acceptIntegrity) || isLoading}
              >
                {isLoading ? "Creating Account..." : "Create My Account"}
              </Button>
            </form>
          </CardContent>
        </Card>
        
        <div className="text-center mt-8">
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
