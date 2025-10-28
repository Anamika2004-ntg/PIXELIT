
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlusCircle, Paperclip, Edit } from "lucide-react";
import { SkillForm } from "@/components/SkillForm";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

// Define skill type
interface Skill {
  id: string;
  title: string;
  description: string;
  category: string;
  attachments: File[];
}

const FreelancerProfile = () => {
  const { user, updateProfile } = useAuth();
  const [skills, setSkills] = useState<Skill[]>([]);
  const [isAddingSkill, setIsAddingSkill] = useState(false);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [editForm, setEditForm] = useState({
    hourlyRate: user?.hourlyRate || 25,
    availability: user?.availability || '10 hrs/week',
    experienceLevel: user?.experienceLevel || 'Intermediate'
  });

  const handleAddSkill = (skill: Omit<Skill, "id">) => {
    const newSkill = {
      ...skill,
      id: Date.now().toString(),
    };
    setSkills([...skills, newSkill]);
    setIsAddingSkill(false);
    toast.success("Skill added successfully!");
  };

  const handleDeleteSkill = (id: string) => {
    setSkills(skills.filter(skill => skill.id !== id));
    toast.success("Skill removed successfully!");
  };

  const handleProfileUpdate = () => {
    updateProfile(editForm);
    setIsEditingProfile(false);
    toast.success("Profile updated successfully!");
  };

  if (!user) {
    return <div>Please log in to view your profile.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">My Freelancer Profile</h1>
        <p className="text-muted-foreground">Showcase your skills and get hired by other students</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left sidebar - profile summary */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Profile Summary</CardTitle>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setIsEditingProfile(!isEditingProfile)}
                >
                  <Edit className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center mb-4">
                <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mb-2">
                  <span className="text-2xl font-semibold">
                    {user.firstName[0]}{user.lastName[0]}
                  </span>
                </div>
                <h3 className="text-lg font-semibold">{user.firstName} {user.lastName}</h3>
                <p className="text-sm text-muted-foreground">
                  {user.major} • {user.institution}
                </p>
              </div>

              {isEditingProfile ? (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="hourlyRate">Hourly Rate ($)</Label>
                    <Input
                      id="hourlyRate"
                      type="number"
                      value={editForm.hourlyRate}
                      onChange={(e) => setEditForm({...editForm, hourlyRate: Number(e.target.value)})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="availability">Availability</Label>
                    <Input
                      id="availability"
                      value={editForm.availability}
                      onChange={(e) => setEditForm({...editForm, availability: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="experienceLevel">Experience Level</Label>
                    <Input
                      id="experienceLevel"
                      value={editForm.experienceLevel}
                      onChange={(e) => setEditForm({...editForm, experienceLevel: e.target.value})}
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" onClick={handleProfileUpdate}>Save</Button>
                    <Button size="sm" variant="outline" onClick={() => setIsEditingProfile(false)}>
                      Cancel
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-2 mt-4">
                  <div>
                    <span className="font-medium">Experience Level:</span>
                    <span className="ml-2">{user.experienceLevel}</span>
                  </div>
                  <div>
                    <span className="font-medium">Hourly Rate:</span>
                    <span className="ml-2">${user.hourlyRate}/hour</span>
                  </div>
                  <div>
                    <span className="font-medium">Availability:</span>
                    <span className="ml-2">{user.availability}</span>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Right section - skills list and form */}
        <div className="lg:col-span-2">
          <Card className="mb-6">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>My Skills</CardTitle>
                <CardDescription>Manage your skills and expertise</CardDescription>
              </div>
              <Button onClick={() => setIsAddingSkill(true)} disabled={isAddingSkill}>
                <PlusCircle className="mr-2 h-4 w-4" /> Add Skill
              </Button>
            </CardHeader>
            <CardContent>
              {isAddingSkill ? (
                <SkillForm 
                  onSubmit={handleAddSkill} 
                  onCancel={() => setIsAddingSkill(false)} 
                />
              ) : skills.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-muted-foreground mb-2">No skills added yet</p>
                  <Button 
                    variant="outline" 
                    onClick={() => setIsAddingSkill(true)}
                  >
                    Add Your First Skill
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {skills.map((skill) => (
                    <div key={skill.id} className="border rounded-md p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold">{skill.title}</h3>
                          <p className="text-sm text-muted-foreground">{skill.category}</p>
                        </div>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          onClick={() => handleDeleteSkill(skill.id)}
                        >
                          Remove
                        </Button>
                      </div>
                      
                      <p className="mt-2 text-sm">{skill.description}</p>
                      
                      {skill.attachments.length > 0 && (
                        <div className="mt-3 pt-3 border-t">
                          <p className="text-xs text-muted-foreground mb-2">Attachments:</p>
                          <div className="flex flex-wrap gap-2">
                            {skill.attachments.map((file, index) => (
                              <div 
                                key={index} 
                                className="flex items-center bg-muted px-2 py-1 rounded-md text-xs"
                              >
                                <Paperclip className="mr-1 h-3 w-3" />
                                {file.name}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FreelancerProfile;
