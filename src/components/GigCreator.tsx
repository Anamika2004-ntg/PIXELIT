
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Plus, X, Upload, DollarSign, Clock, Tag } from "lucide-react";

const categories = [
  { id: "programming", name: "Programming & Tech" },
  { id: "design", name: "Design & Creative" },
  { id: "writing", name: "Writing & Translation" },
  { id: "marketing", name: "Marketing" },
  { id: "video", name: "Video & Animation" },
  { id: "music", name: "Music & Audio" },
  { id: "tutoring", name: "Tutoring" },
  { id: "business", name: "Business" }
];

const GigCreator = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    priceType: "hourly",
    deliveryTime: "",
    tags: [],
    requirements: "",
    isActive: true
  });

  const [currentTag, setCurrentTag] = useState("");
  const [images, setImages] = useState([]);

  const handleTagAdd = () => {
    if (currentTag.trim() && !formData.tags.includes(currentTag.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, currentTag.trim()]
      }));
      setCurrentTag("");
    }
  };

  const handleTagRemove = (tagToRemove) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Creating gig:", formData);
    // Here you would submit to your backend
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Your Service</h1>
        <p className="text-gray-600">
          Share your skills with fellow students and start earning while you learn
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Basic Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Tag className="h-5 w-5 mr-2" />
              Basic Information
            </CardTitle>
            <CardDescription>
              Tell potential clients what you offer and make it stand out
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label htmlFor="title" className="text-sm font-medium">Service Title</Label>
              <Input
                id="title"
                placeholder="I will create a professional logo design for your brand"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                className="mt-2"
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                Be specific and descriptive. Start with "I will..."
              </p>
            </div>

            <div>
              <Label htmlFor="category" className="text-sm font-medium">Category</Label>
              <Select value={formData.category} onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}>
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="description" className="text-sm font-medium">Detailed Description</Label>
              <Textarea
                id="description"
                placeholder="Describe your service in detail. What exactly will you deliver? What makes you qualified? What's your process?"
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                className="mt-2 min-h-[120px]"
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                Include your experience, process, and what makes your service unique
              </p>
            </div>

            <div>
              <Label className="text-sm font-medium">Skills & Tags</Label>
              <div className="flex items-center space-x-2 mt-2">
                <Input
                  placeholder="Add a skill or tag"
                  value={currentTag}
                  onChange={(e) => setCurrentTag(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleTagAdd())}
                />
                <Button type="button" onClick={handleTagAdd} size="sm">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                {formData.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="flex items-center space-x-1">
                    <span>{tag}</span>
                    <button
                      type="button"
                      onClick={() => handleTagRemove(tag)}
                      className="ml-1 hover:text-red-500"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pricing & Delivery */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <DollarSign className="h-5 w-5 mr-2" />
              Pricing & Delivery
            </CardTitle>
            <CardDescription>
              Set competitive student-friendly rates and realistic delivery times
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="price" className="text-sm font-medium">Price</Label>
                <div className="relative mt-2">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="price"
                    type="number"
                    placeholder="25"
                    value={formData.price}
                    onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                    className="pl-9"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="priceType" className="text-sm font-medium">Price Type</Label>
                <Select value={formData.priceType} onValueChange={(value) => setFormData(prev => ({ ...prev, priceType: value }))}>
                  <SelectTrigger className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hourly">Per Hour</SelectItem>
                    <SelectItem value="fixed">Fixed Price</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="deliveryTime" className="text-sm font-medium">Delivery Time</Label>
              <Select value={formData.deliveryTime} onValueChange={(value) => setFormData(prev => ({ ...prev, deliveryTime: value }))}>
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="Select delivery time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-2 days">1-2 days</SelectItem>
                  <SelectItem value="3-5 days">3-5 days</SelectItem>
                  <SelectItem value="1 week">1 week</SelectItem>
                  <SelectItem value="2 weeks">2 weeks</SelectItem>
                  <SelectItem value="1 month">1 month</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Requirements & Images */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Upload className="h-5 w-5 mr-2" />
              Additional Details
            </CardTitle>
            <CardDescription>
              Help clients understand what you need from them and showcase your work
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label htmlFor="requirements" className="text-sm font-medium">Requirements from Client</Label>
              <Textarea
                id="requirements"
                placeholder="What information or materials do you need from the client to get started?"
                value={formData.requirements}
                onChange={(e) => setFormData(prev => ({ ...prev, requirements: e.target.value }))}
                className="mt-2"
              />
            </div>

            <div>
              <Label className="text-sm font-medium">Portfolio Images</Label>
              <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors">
                <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-2">Upload images showcasing your work</p>
                <p className="text-sm text-gray-500 mb-4">PNG, JPG up to 5MB</p>
                <Button type="button" variant="outline">
                  Choose Files
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Service Status */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-sm font-medium">Service Status</Label>
                <p className="text-sm text-gray-500">
                  Make your service available to clients immediately
                </p>
              </div>
              <Switch
                checked={formData.isActive}
                onCheckedChange={(checked) => setFormData(prev => ({ ...prev, isActive: checked }))}
              />
            </div>
          </CardContent>
        </Card>

        {/* Submit Button */}
        <div className="flex justify-end space-x-4">
          <Button type="button" variant="outline" size="lg">
            Save as Draft
          </Button>
          <Button type="submit" size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            Publish Service
          </Button>
        </div>
      </form>
    </div>
  );
};

export default GigCreator;
