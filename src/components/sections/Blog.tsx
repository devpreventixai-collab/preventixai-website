import { useState, useCallback } from "react";
import { Search, Calendar, User, ArrowRight, Tag, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import useEmblaCarousel from 'embla-carousel-react';
import blogHeroImage from "@/assets/blog-hero.jpg";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    fullContent: string;
    author: string;
    date: string;
    category: string;
    tags: string[];
    readTime: string;
    image: string;
    featured?: boolean;
    slug?: string;
}

const blogPosts: BlogPost[] = [
  {
    "id": 1,
    "title": "RIDDOR Explained: What You Need to Know",
    "excerpt": "Comprehensive guide to RIDDOR (Reporting of Injuries, Diseases and Dangerous Occurrences Regulations) - understand reporting requirements, timescales, and compliance.",
    "fullContent": "RIDDOR stands for the Reporting of Injuries, Diseases and Dangerous Occurrences Regulations. This critical piece of legislation, established in 2013, forms the cornerstone of workplace safety reporting across the United Kingdom. The RIDDOR framework requires employers and responsible persons to report and keep records of serious workplace incidents.",
    "author": "Safety Team",
    "date": "2025-10-02",
    "category": "Compliance",
    "tags": ["RIDDOR", "HEALTH & SAFETY", "COMPLIANCE", "REGULATIONS"],
    "readTime": "10 min read",
    "image": "https://middleclassopinion-yvboe.wordpress.com/wp-content/uploads/2025/09/preventix-blog-post-1.png",
    "slug": "/blog/riddor-explained-what-you-need-to-know"
  },
  {
    "id": 2,
    "title": "Using Predictive Analytics to Anticipate RIDDOR-Reportable Incidents",
    "excerpt": "What if you could predict which workplace situations are likely to escalate into RIDDOR-reportable incidents before they happen?",
    "fullContent": "Businesses obligated by RIDDOR often find themselves struggling to move from reactive reporting to proactive safety management. What if you could predict which workplace situations are likely to escalate into RIDDOR-reportable incidents before they happen? PreventixAI leverages predictive analytics to analyze historical incident patterns, environmental factors, and behavioral data to forecast potential high-risk scenarios that could result in serious injuries or dangerous occurrences needing RIDDOR reporting. The benefits of predictive RIDDOR management include: · Early Warnings: Identify trends in near-misses and unsafe conditions indicating heightened accident risk. · Resource Optimization: Focus training and safety investments where most needed based on risk forecasts. · Regulatory Confidence: Demonstrate to inspectors that your business is actively working to reduce reportable incidents. · Cost Savings: Prevent expensive injuries, insurance claims, and regulatory penalties by acting early. By shifting your approach from merely fulfilling RIDDOR obligations to anticipating incidents, you take a giant step towards a safer, more compliant workplace.",
    "author": "Technology Team",
    "date": "2025-08-29",
    "category": "Predictive AI",
    "tags": ["AI", "ACCIDENTS", "FORECAST", "RIDDOR", "HEALTH & SAFETY"],
    "readTime": "3 min read",
    "image": "https://preventixai-blogs-bucket.s3.ap-southeast-1.amazonaws.com/0_41X0S6HSK9EwxZEp.jpg"
  }
    
];

const predictPosts: BlogPost[] = [
  {
    "id": 4,
    "title": "Using Predictive Analytics to Anticipate RIDDOR-Reportable Incidents",
    "excerpt": "What if you could predict which workplace situations are likely to escalate into RIDDOR-reportable incidents before they happen?",
    "fullContent": "Businesses obligated by RIDDOR often find themselves struggling to move from reactive reporting to proactive safety management. What if you could predict which workplace situations are likely to escalate into RIDDOR-reportable incidents before they happen? PreventixAI leverages predictive analytics to analyze historical incident patterns, environmental factors, and behavioral data to forecast potential high-risk scenarios that could result in serious injuries or dangerous occurrences needing RIDDOR reporting. The benefits of predictive RIDDOR management include: · Early Warnings: Identify trends in near-misses and unsafe conditions indicating heightened accident risk. · Resource Optimization: Focus training and safety investments where most needed based on risk forecasts. · Regulatory Confidence: Demonstrate to inspectors that your business is actively working to reduce reportable incidents. · Cost Savings: Prevent expensive injuries, insurance claims, and regulatory penalties by acting early. By shifting your approach from merely fulfilling RIDDOR obligations to anticipating incidents, you take a giant step towards a safer, more compliant workplace.",
    "author": "Technology Team",
    "date": "2025-08-29",
    "category": "Predictive AI",
    "tags": ["AI", "ACCIDENTS", "FORECAST", "RIDDOR", "HEALTH & SAFETY"],
    "readTime": "3 min read",
    "image": "https://preventixai-blogs-bucket.s3.ap-southeast-1.amazonaws.com/0_41X0S6HSK9EwxZEp.jpg"
  }
];

const preventPost : BlogPost[] = [

  {
    "id": 8,
    "title": "Five Essential Steps to Prevent RIDDOR Incidents in Your Workplace.",
    "excerpt": "Reporting incidents under RIDDOR is not just a legal responsibility—it's a call to action to prevent future harm.",
    "fullContent": "Reporting incidents under RIDDOR is not just a legal responsibility—it's a call to action to prevent future harm. Preventing RIDDOR-reportable incidents starts with understanding common causes and implementing systematic safety measures.\nHere are five essential steps to help your organization reduce RIDDOR incidents:\n• Comprehensive Incident Reporting: Encourage consistent and honest reporting of all incidents and near misses, using digital tools to reduce underreporting.\n• Data-Driven Risk Assessments: Use AI-powered safety platforms that analyze incident data to uncover hidden risks and trends.\n• Targeted Training Programs: Identify safety knowledge gaps and tailor training to address specific risks associated with reportable incidents.\n• Regular Audits and Reviews: Conduct scheduled safety audits to verify the effectiveness of controls and adherence to compliance.\n• Automated Compliance Workflows: Leverage technology to automate RIDDOR report generation and submission, ensuring timely legal compliance and freeing up safety resources.\nPreventixAI supports you throughout these steps by providing an integrated platform that ensures incidents are reported correctly, risks are identified early, and preventive actions are effectively tracked—helping you build a truly safe and compliant workplace culture.",
    "author": "Product Team",
    "date": "2025-08-29",
    "category": "RIDDOR",
    "tags": ["RIDDOR", "AUDIT", "COMPLIANCE"],
    "readTime": "3 min read",
    "image": "https://preventixai-blogs-bucket.s3.ap-southeast-1.amazonaws.com/vlpum5wp5z0-768x512.jpg"
  }
  
]

const protectPosts : BlogPost[] = [{
  "id": 10,
  "title": "How Digital RIDDOR Reporting Enhances Workplace Safety Accountability",
  "excerpt": "Paper based RIDDOR reporting is often time-consuming, prone to human error, and can lead to costly compliance failures.",
  "fullContent": "In today’s fast-paced business environment, protecting your workforce means much more than reacting to incidents—it means ensuring accurate and timely reporting when accidents do occur. The Reporting of Injuries, Diseases and Dangerous Occurrences Regulations (RIDDOR) places strict legal obligations on businesses in the UK to report specific workplace incidents promptly to the HSE.\nPaper based RIDDOR reporting is often time-consuming, prone to human error, and can lead to costly compliance failures. Digital RIDDOR reporting systems, like PreventixAI’s platform, take the administrative burden off safety managers by instantly generating reports based on incidents logged in real time.\nWith digital RIDDOR compliance, businesses enhance accountability through:\n• Faster Notifications: Incident reports are submitted within legally required timelines, reducing risk of penalties.\n• Accurate Data: Digital form filling minimizes errors common in manual paper based reports.\n• Audit Trails: Digital records provide verifiable proof of compliance activities for inspections.\n• Improved Safety Culture: Easier compliance encourages more consistent incident reporting.\nAdopting AI-powered RIDDOR reporting not only protects your business from legal actions but also ensures your safety team is focused on what matters—caring for the wellbeing of employees and preventing future incidents.",
  "author": "Product Team",
  "date": "2025-08-29",
  "category": "RIDDOR",
  "tags": ["DIGITAL REPORTING", "RIDDOR", "SAFETY", "COMPLIANCE"],
  "readTime": "5 min read",
  "image": "https://preventixai-blogs-bucket.s3.ap-southeast-1.amazonaws.com/photo-1558963675-94dc9c4a66a9.jpeg"
}


]


const editorsPicks: BlogPost[] = [
  {
    "id": 7,
    "title": "Five Essential Steps to Prevent RIDDOR Incidents in Your Workplace.",
    "excerpt": "Reporting incidents under RIDDOR is not just a legal responsibility—it's a call to action to prevent future harm.",
    "fullContent": "Reporting incidents under RIDDOR is not just a legal responsibility—it's a call to action to prevent future harm. Preventing RIDDOR-reportable incidents starts with understanding common causes and implementing systematic safety measures.\nHere are five essential steps to help your organization reduce RIDDOR incidents:\n• Comprehensive Incident Reporting: Encourage consistent and honest reporting of all incidents and near misses, using digital tools to reduce underreporting.\n• Data-Driven Risk Assessments: Use AI-powered safety platforms that analyze incident data to uncover hidden risks and trends.\n• Targeted Training Programs: Identify safety knowledge gaps and tailor training to address specific risks associated with reportable incidents.\n• Regular Audits and Reviews: Conduct scheduled safety audits to verify the effectiveness of controls and adherence to compliance.\n• Automated Compliance Workflows: Leverage technology to automate RIDDOR report generation and submission, ensuring timely legal compliance and freeing up safety resources.\nPreventixAI supports you throughout these steps by providing an integrated platform that ensures incidents are reported correctly, risks are identified early, and preventive actions are effectively tracked—helping you build a truly safe and compliant workplace culture.",
    "author": "Product Team",
    "date": "2025-08-29",
    "category": "RIDDOR",
    "tags": ["RIDDOR", "AUDIT", "COMPLIANCE"],
    "readTime": "3 min read",
    "image": "https://preventixai-blogs-bucket.s3.ap-southeast-1.amazonaws.com/vlpum5wp5z0-768x512.jpg"
  }
   
];

interface CarouselProps {
    children: React.ReactNode;
    className?: string;
}

function Carousel({ children, className = "" }: CarouselProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, slidesToScroll: 1 });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <div className={`relative ${className}`}>
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex items-start">
                    {children}
                </div>
            </div>

            <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg"
                onClick={scrollPrev}
            >
                <ChevronLeft className="h-4 w-4" />
            </Button>

            <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg"
                onClick={scrollNext}
            >
                <ChevronRight className="h-4 w-4" />
            </Button>
        </div>

    );
}

function ExpandableContent({ excerpt, fullContent, showReadMore = true }: { excerpt: string; fullContent: string; showReadMore?: boolean }) {
    const [expanded, setExpanded] = useState(false);

    if (!showReadMore) {
        return <p className="text-muted-foreground mb-4 leading-relaxed">{excerpt}</p>;
    }

    return (
        <div className="text-muted-foreground mb-4 leading-relaxed">
            <p className="mb-2">
                {expanded ? fullContent : excerpt}
            </p>
            <button
                onClick={() => setExpanded(!expanded)}
                className="text-primary font-medium hover:underline inline-flex items-center transition-colors"
            >
                {expanded ? "Read Less" : "Read More"} 
                <ArrowRight className={`ml-1 h-4 w-4 transition-transform ${expanded ? "rotate-90" : ""}`} />
            </button>
        </div>
    );
}

export default function Blog() {
    const [searchTerm, setSearchTerm] = useState("");

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };



  // Define the resetMainCarouselExpanded function
  const resetMainCarouselExpanded = () => {
    // Add logic here if needed, e.g., resetting state for expandable content
    console.log('Carousel slide changed'); // Placeholder for debugging
  };

  
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
          {/* Main Blog Slider */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-16 py-12 px-4 bg-[#17332d] mx-auto"
          >
            <Carousel className="mb-4">
              {blogPosts.map((post) => (
                <motion.div 
                  key={post.id} 
                  className="flex-[0_0_100%] px-4"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <div className="relative bg-blue-100 rounded-2xl overflow-hidden min-h-[500px] flex items-center transition-all duration-300 hover:shadow-2xl">
                    <div className="flex w-full max-w-6xl mx-auto">
                      {/* Content Side */}
                      <div className="flex-1 p-8 flex flex-col justify-center">
                        <Badge variant="secondary" className="w-fit mb-4 bg-primary/10 text-primary transition-colors duration-300 hover:bg-primary/20">
                          {post.category}
                        </Badge>
                        <h2 className="text-4xl font-bold mb-6 leading-tight">{post.title}</h2>
                        <ExpandableContent 
                          excerpt={post.excerpt} 
                          fullContent={post.fullContent}
                        />
                        <div className="flex items-center gap-6 mb-8">
                          <div className="flex items-center gap-2">
                            <User className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm font-medium">{post.author}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{formatDate(post.date)}</span>
                          </div>
                          <span className="text-sm text-primary font-medium">{post.readTime}</span>
                        </div>
                        <Link to={post.slug || `/blog/${post.id}`}>
                        <motion.button
                          whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
                          whileTap={{ scale: 0.95 }}
                          className="w-fit px-6 py-2 bg-primary text-white rounded-full font-medium transition-colors duration-300"
                        >
                          Read More
                        </motion.button>
                        </Link>
                      </div>
  
                      {/* Image Side */}
                      <div className="flex-1 p-8">
                        <motion.div 
                          className="relative h-full min-h-[400px] rounded-xl overflow-hidden"
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.3 }}
                        >
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                          />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </Carousel>
          </motion.section>
  
          {/* PREDICT Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="py-3 mt-4 px-4 max-w-[90rem] mx-auto"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-3xl font-bold px-3">PREDICT</h2>
            </div>
  
            <Carousel>
              {predictPosts.map((post) => (
                <motion.div 
                  key={post.id} 
                  className="flex-[0_0_33.333%] px-3 mb-3"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <Link to={post.slug || '#'} className="block">
                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-card/80 backdrop-blur-sm h-full">
                      <div className="relative overflow-hidden rounded-t-lg">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge variant="secondary" className="bg-white/90 text-primary font-medium transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                            {post.category}
                          </Badge>
                        </div>
                      </div>
      
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <ExpandableContent 
                          excerpt={post.excerpt} 
                          fullContent={post.fullContent}
                        />
                        <div className="flex items-center justify-between text-sm text-muted-foreground border-t pt-4">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <User className="h-4 w-4" />
                              <span>{post.author}</span>
                            </div>
                          </div>
                          <span className="font-medium text-primary">{post.readTime}</span>
                        </div>
                        <motion.div
                          whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
                          whileTap={{ scale: 0.95 }}
                          className="mt-4 w-full px-6 py-2 bg-primary text-white rounded-full font-medium transition-colors duration-300 text-center"
                        >
                          Read Article
                        </motion.div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </Carousel>
          </motion.section>
  
          {/* PREVENT Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="py-3 px-4 max-w-[90rem] mx-auto"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-3xl font-bold px-3">PREVENT</h2>
            </div>
  
            <Carousel>
              {preventPost.map((post) => (
                <motion.div 
                  key={post.id} 
                  className="flex-[0_0_33.333%] px-3 mb-3"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <Link to={post.slug || '#'} className="block">
                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-card/80 backdrop-blur-sm h-full">
                      <div className="relative overflow-hidden rounded-t-lg">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge variant="secondary" className="bg-white/90 text-primary font-medium transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                            {post.category}
                          </Badge>
                        </div>
                      </div>
      
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <ExpandableContent 
                          excerpt={post.excerpt} 
                          fullContent={post.fullContent}
                        />
                        <div className="flex items-center justify-between text-sm text-muted-foreground border-t pt-4">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <User className="h-4 w-4" />
                              <span>{post.author}</span>
                            </div>
                          </div>
                          <span className="font-medium text-primary">{post.readTime}</span>
                        </div>
                        <motion.div
                          whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
                          whileTap={{ scale: 0.95 }}
                          className="mt-4 w-full px-6 py-2 bg-primary text-white rounded-full font-medium transition-colors duration-300 text-center"
                        >
                          Read Article
                        </motion.div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </Carousel>
          </motion.section>
  
          {/* PROTECT Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            className="py-3 px-4 max-w-[90rem] mx-auto"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-3xl font-bold px-3">PROTECT</h2>
            </div>
  
            <Carousel>
              {protectPosts.map((post) => (
                <motion.div 
                  key={post.id} 
                  className="flex-[0_0_33.333%] px-3 mb-3"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <Link to={post.slug || '#'} className="block">
                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-card/80 backdrop-blur-sm h-full">
                      <div className="relative overflow-hidden rounded-t-lg">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge variant="secondary" className="bg-white/90 text-primary font-medium transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                            {post.category}
                          </Badge>
                        </div>
                      </div>
      
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <ExpandableContent 
                          excerpt={post.excerpt} 
                          fullContent={post.fullContent}
                        />
                        <div className="flex items-center justify-between text-sm text-muted-foreground border-t pt-4">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <User className="h-4 w-4" />
                              <span>{post.author}</span>
                            </div>
                          </div>
                          <span className="font-medium text-primary">{post.readTime}</span>
                        </div>
                        <motion.div
                          whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
                          whileTap={{ scale: 0.95 }}
                          className="mt-4 w-full px-6 py-2 bg-primary text-white rounded-full font-medium transition-colors duration-300 text-center"
                        >
                          Read Article
                        </motion.div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </Carousel>
          </motion.section>
  
          {/* Editor's Picks - Static Grid */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
            className="py-12 px-28 bg-[#f4f2f2] mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8">Editor's Picks</h2>
  
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Featured Article */}
              <motion.div 
                className="lg:row-span-2"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-primary/10 to-primary-glow/5">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={editorsPicks[0].image}
                      alt={editorsPicks[0].title}
                      className="w-full h-64 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-primary-foreground transition-colors duration-300 group-hover:bg-primary/80">
                        {editorsPicks[0].category}
                      </Badge>
                    </div>
                  </div>
  
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4 leading-tight group-hover:text-primary transition-colors">
                      {editorsPicks[0].title}
                    </h3>
                    <ExpandableContent 
                      excerpt={editorsPicks[0].excerpt} 
                      fullContent={editorsPicks[0].fullContent}
                    />
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{editorsPicks[0].author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(editorsPicks[0].date)}</span>
                      </div>
                      <span className="font-medium text-primary">{editorsPicks[0].readTime}</span>
                    </div>
                  
                  </CardContent>
                </Card>
              </motion.div>
  
              {/* Side Articles */}
              <div className="space-y-6">
                {editorsPicks.slice(1).map((post) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                      <CardContent className="p-6">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <img
                              src={post.image}
                              alt={post.title}
                              className="w-20 h-20 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
  
                          <div className="flex-1 min-w-0">
                            <Badge variant="outline" className="mb-2 text-xs transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                              {post.category}
                            </Badge>
                            <h4 className="font-bold text-sm mb-2 line-clamp-2 group-hover:text-primary transition-colors cursor-pointer">
                              {post.title}
                            </h4>
                            <div className="text-xs text-muted-foreground mb-2">
                              <ExpandableContent 
                                excerpt={post.excerpt.slice(0, 80) + "..."} 
                                fullContent={post.fullContent}
                              />
                            </div>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <span>{post.author}</span>
                              <span>•</span>
                              <span>{post.readTime}</span>
                            </div>
                        
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

