
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Briefcase, MessageSquare, Bell, Clock, DollarSign, BarChart2, AlertTriangle, Calendar, CheckCircle, XCircle, ExternalLink } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const { user } = useAuth();
  
  // Mock data with INR currency
  const mockData = {
    balance: 20362.50, // ₹20,362.50
    completedJobs: 12,
    activeJobs: 3,
    earnings: {
      total: 106706.25, // ₹1,06,706.25
      thisMonth: 29068.75, // ₹29,068.75
      pending: 10375.00 // ₹10,375.00
    },
    rating: 4.8
  };
  
  // Sample active projects with INR
  const activeProjects = [
    {
      id: 1,
      title: "E-commerce Website Development",
      client: "Sarah M.",
      deadline: "Sep 25, 2023",
      budget: 29050, // ₹29,050
      progress: 65,
      status: "in-progress",
      messages: 2
    },
    {
      id: 2,
      title: "Landing Page Design",
      client: "Michael T.",
      deadline: "Sep 18, 2023",
      budget: 14940, // ₹14,940
      progress: 90,
      status: "in-review",
      messages: 0
    },
    {
      id: 3,
      title: "Mobile App Frontend",
      client: "Jennifer K.",
      deadline: "Oct 5, 2023",
      budget: 37350, // ₹37,350
      progress: 30,
      status: "in-progress",
      messages: 5
    }
  ];
  
  // Sample notifications
  const notifications = [
    {
      id: 1,
      type: "message",
      content: "New message from Sarah M. about your project",
      time: "10 minutes ago",
      read: false
    },
    {
      id: 2,
      type: "review",
      content: "You received a 5-star review from Michael T.",
      time: "2 hours ago",
      read: false
    },
    {
      id: 3,
      type: "payment",
      content: "Payment of ₹14,940 has been released to your account",
      time: "1 day ago",
      read: true
    },
    {
      id: 4,
      type: "project",
      content: "Project milestone approved: Landing Page Design",
      time: "2 days ago",
      read: true
    }
  ];
  
  const upcomingDeadlines = [
    {
      id: 1,
      title: "Submit E-commerce Website Prototype",
      project: "E-commerce Website Development",
      date: "Sep 20, 2023",
      daysLeft: 3
    },
    {
      id: 2,
      title: "Final Landing Page Delivery",
      project: "Landing Page Design",
      date: "Sep 18, 2023",
      daysLeft: 1
    },
    {
      id: 3,
      title: "Mobile App UI Components",
      project: "Mobile App Frontend",
      date: "Sep 28, 2023",
      daysLeft: 11
    }
  ];

  // Helper function to get status badge
  const getStatusBadge = (status: string) => {
    switch(status) {
      case "in-progress":
        return <Badge className="bg-blue-500">In Progress</Badge>;
      case "in-review":
        return <Badge className="bg-amber-500">In Review</Badge>;
      case "completed":
        return <Badge className="bg-green-500">Completed</Badge>;
      default:
        return <Badge>Unknown</Badge>;
    }
  };

  // Helper function to format INR currency
  const formatINR = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2
    }).format(amount);
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
              {user.firstName.charAt(0)}{user.lastName.charAt(0)}
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{user.firstName} {user.lastName}</h1>
              <div className="flex items-center text-gray-600">
                <span className="mr-2">{user.institution || 'Not specified'}</span>
                <span>•</span>
                <span className="mx-2">{user.major || 'Not specified'}</span>
                <span>•</span>
                <span className="ml-2">{user.academicLevel || 'Not specified'}</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" className="flex items-center border-brand-teal text-brand-teal">
              <MessageSquare className="mr-2 h-4 w-4" />
              Messages
            </Button>
            <Button variant="outline" className="flex items-center border-brand-blue text-brand-blue">
              <Bell className="mr-2 h-4 w-4" />
              Notifications
              <Badge className="ml-2 bg-brand-red text-white">{notifications.filter(n => !n.read).length}</Badge>
            </Button>
            <Button className="flex items-center bg-brand-blue text-white">
              <DollarSign className="mr-2 h-4 w-4" />
              Balance: {formatINR(mockData.balance)}
            </Button>
          </div>
        </div>
        
        {/* Main Dashboard Content */}
        <div className="flex flex-wrap gap-6">
          {/* Dashboard Sidebar - Stats Overview */}
          <div className="w-full lg:w-1/4 space-y-6">
            {/* Profile Status Card */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Profile Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Profile Completion</span>
                  <span className="text-sm font-medium">85%</span>
                </div>
                <Progress value={85} className="h-2" />
                <Button variant="outline" className="w-full text-sm mt-2">Complete Profile</Button>
                
                <div className="flex items-center mt-4 pt-4 border-t border-gray-100">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-sm font-medium capitalize">Available</span>
                  <Button variant="ghost" className="ml-auto text-xs h-auto py-1 px-2">
                    Change Status
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Stats Overview Card */}
            <Card>
              <CardHeader>
                <CardTitle>Stats Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Jobs Completed</span>
                  <span className="font-semibold">{mockData.completedJobs}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Active Jobs</span>
                  <span className="font-semibold">{mockData.activeJobs}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Rating</span>
                  <div className="flex items-center">
                    <span className="font-semibold mr-1">{mockData.rating}</span>
                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Response Rate</span>
                  <span className="font-semibold">98%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">On-time Delivery</span>
                  <span className="font-semibold">100%</span>
                </div>
              </CardContent>
              <CardFooter className="border-t pt-4 pb-0">
                <Button variant="ghost" className="text-brand-blue w-full">View Full Analytics</Button>
              </CardFooter>
            </Card>
            
            {/* Earnings Overview Card */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex justify-between items-center">
                  <span>Earnings</span>
                  <BarChart2 className="h-4 w-4 text-gray-400" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Earnings</span>
                  <span className="font-semibold">{formatINR(mockData.earnings.total)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">This Month</span>
                  <span className="font-semibold">{formatINR(mockData.earnings.thisMonth)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Pending</span>
                  <span className="font-semibold">{formatINR(mockData.earnings.pending)}</span>
                </div>
              </CardContent>
              <CardFooter className="border-t pt-4 pb-0">
                <Button variant="ghost" className="text-brand-blue w-full">Withdraw Funds</Button>
              </CardFooter>
            </Card>
          </div>
          
          {/* Main Dashboard Content */}
          <div className="w-full lg:w-[calc(75%-1.5rem)]">
            <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-4 mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="messages">Messages</TabsTrigger>
                <TabsTrigger value="calendar">Calendar</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-6">
                {/* Active Projects Section */}
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <div>
                      <CardTitle>Active Projects</CardTitle>
                      <CardDescription>Your ongoing gigs and current progress</CardDescription>
                    </div>
                    <Button size="sm">View All</Button>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {activeProjects.map(project => (
                        <div key={project.id} className="border rounded-lg p-4">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h3 className="font-semibold">{project.title}</h3>
                              <p className="text-sm text-gray-600">Client: {project.client}</p>
                            </div>
                            <div>
                              {getStatusBadge(project.status)}
                            </div>
                          </div>
                          <div className="flex justify-between items-center text-sm text-gray-600 mb-3">
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              <span>Deadline: {project.deadline}</span>
                            </div>
                            <div className="flex items-center">
                              <DollarSign className="h-4 w-4 mr-1" />
                              <span>{formatINR(project.budget)}</span>
                            </div>
                          </div>
                          <div className="space-y-1">
                            <div className="flex justify-between items-center text-sm">
                              <span>Progress</span>
                              <span>{project.progress}%</span>
                            </div>
                            <Progress value={project.progress} className="h-2" />
                          </div>
                          <div className="flex justify-between mt-4">
                            {project.messages > 0 ? (
                              <Button variant="outline" size="sm" className="text-amber-600 border-amber-200 bg-amber-50">
                                <MessageSquare className="h-4 w-4 mr-1" />
                                {project.messages} new {project.messages === 1 ? 'message' : 'messages'}
                              </Button>
                            ) : (
                              <div></div>
                            )}
                            <Button size="sm">View Project</Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                {/* Notifications and Deadlines Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Notifications */}
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <div>
                        <CardTitle>Notifications</CardTitle>
                        <CardDescription>Recent updates and alerts</CardDescription>
                      </div>
                      <Button variant="ghost" size="sm" className="text-xs">Mark all as read</Button>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {notifications.slice(0, 4).map(notification => (
                          <div 
                            key={notification.id} 
                            className={`p-3 rounded-lg ${notification.read ? 'bg-white' : 'bg-blue-50'} border ${notification.read ? 'border-gray-200' : 'border-blue-200'}`}
                          >
                            <div className="flex">
                              <div className="mr-3">
                                {notification.type === 'message' && (
                                  <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
                                    <MessageSquare className="h-4 w-4 text-indigo-600" />
                                  </div>
                                )}
                                {notification.type === 'review' && (
                                  <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                                    <Star className="h-4 w-4 text-green-600" />
                                  </div>
                                )}
                                {notification.type === 'payment' && (
                                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                                    <DollarSign className="h-4 w-4 text-blue-600" />
                                  </div>
                                )}
                                {notification.type === 'project' && (
                                  <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                                    <Briefcase className="h-4 w-4 text-purple-600" />
                                  </div>
                                )}
                              </div>
                              <div>
                                <p className={`text-sm ${notification.read ? 'text-gray-600' : 'text-gray-900 font-medium'}`}>
                                  {notification.content}
                                </p>
                                <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="border-t pt-4">
                      <Button variant="ghost" className="w-full text-brand-blue">View All Notifications</Button>
                    </CardFooter>
                  </Card>
                  
                  {/* Upcoming Deadlines */}
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <div>
                        <CardTitle>Upcoming Deadlines</CardTitle>
                        <CardDescription>Don't miss these important dates</CardDescription>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        Calendar
                      </Button>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {upcomingDeadlines.map(deadline => (
                          <div 
                            key={deadline.id} 
                            className={`p-3 rounded-lg border ${
                              deadline.daysLeft <= 2 ? 'border-red-200 bg-red-50' : 'border-gray-200 bg-white'
                            }`}
                          >
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="font-medium text-gray-900">{deadline.title}</h4>
                                <p className="text-sm text-gray-600">{deadline.project}</p>
                              </div>
                              <div className={`px-2 py-1 rounded text-xs font-medium ${
                                deadline.daysLeft <= 2 ? 'bg-red-200 text-red-800' : 'bg-blue-200 text-blue-800'
                              }`}>
                                {deadline.daysLeft === 0 ? 'Today' : 
                                  deadline.daysLeft === 1 ? 'Tomorrow' : 
                                  `${deadline.daysLeft} days left`
                                }
                              </div>
                            </div>
                            <div className="flex items-center mt-2 text-sm text-gray-600">
                              <Calendar className="h-4 w-4 mr-1" />
                              <span>{deadline.date}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="border-t pt-4">
                      <Button variant="ghost" className="w-full text-brand-blue">Set Study Schedule</Button>
                    </CardFooter>
                  </Card>
                </div>
                
                {/* Student Features Section */}
                <Card>
                  <CardHeader>
                    <CardTitle>Student Features</CardTitle>
                    <CardDescription>Tools to balance freelancing with your studies</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="border rounded-lg p-4 flex flex-col items-center text-center">
                        <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mb-3">
                          <AlertTriangle className="h-6 w-6 text-amber-600" />
                        </div>
                        <h3 className="font-semibold mb-1">Exam Mode</h3>
                        <p className="text-sm text-gray-600 mb-3">Temporarily pause work during exam periods</p>
                        <Button variant="outline" size="sm" className="mt-auto">Activate</Button>
                      </div>
                      
                      <div className="border rounded-lg p-4 flex flex-col items-center text-center">
                        <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                          <Calendar className="h-6 w-6 text-blue-600" />
                        </div>
                        <h3 className="font-semibold mb-1">Academic Calendar</h3>
                        <p className="text-sm text-gray-600 mb-3">Sync your class and exam schedule</p>
                        <Button variant="outline" size="sm" className="mt-auto">Connect</Button>
                      </div>
                      
                      <div className="border rounded-lg p-4 flex flex-col items-center text-center">
                        <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-3">
                          <BarChart2 className="h-6 w-6 text-green-600" />
                        </div>
                        <h3 className="font-semibold mb-1">Workload Tracker</h3>
                        <p className="text-sm text-gray-600 mb-3">Monitor your work-study balance</p>
                        <Button variant="outline" size="sm" className="mt-auto">View Report</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="projects">
                <Card>
                  <CardHeader>
                    <CardTitle>All Projects</CardTitle>
                    <CardDescription>Manage your current and past projects</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Your projects dashboard would appear here with comprehensive filters and sorting options.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="messages">
                <Card>
                  <CardHeader>
                    <CardTitle>Messages</CardTitle>
                    <CardDescription>Communicate with your clients and team members</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Your messaging interface would appear here with conversation history and quick replies.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="calendar">
                <Card>
                  <CardHeader>
                    <CardTitle>Calendar</CardTitle>
                    <CardDescription>Your schedule, deadlines, and academic commitments</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Your integrated calendar would appear here with project deadlines and academic schedule.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

// Fix missing Star component
const Star = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export default Dashboard;
