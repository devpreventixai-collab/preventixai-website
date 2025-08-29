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
}

const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "How legacy spend tools cost enterprises millions",
        excerpt: "New Ramp data reveals the cost of status quo spend management and why modern solutions are essential for enterprise success.",
        fullContent: "New Ramp data reveals the cost of status quo spend management and why modern solutions are essential for enterprise success. Legacy spend management systems are silently draining millions from enterprise budgets through inefficiencies, manual processes, and lack of real-time visibility. Our comprehensive analysis of enterprise spending patterns shows that companies using outdated tools lose an average of 12% of their annual spend to preventable inefficiencies. These systems typically lack automated approval workflows, real-time expense tracking, and intelligent fraud detection capabilities that modern businesses require. The hidden costs extend beyond direct financial losses - they include employee productivity losses, delayed financial reporting, compliance risks, and missed opportunities for strategic cost optimization. Forward-thinking finance leaders are recognizing that investing in modern spend management technology isn't just about efficiency - it's about competitive advantage in an increasingly complex business environment.",
        author: "Sarah Johnson",
        date: "2024-01-15",
        category: "Enterprise",
        tags: ["Spend Management", "Enterprise", "Cost Optimization"],
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
        featured: true
    },
    {
        id: 2,
        title: "4 strategies for enterprise finance teams to drive down spend",
        excerpt: "Learn practical approaches that leading finance teams use to optimize spending and improve financial efficiency across the organization.",
        fullContent: "Learn practical approaches that leading finance teams use to optimize spending and improve financial efficiency across the organization. Strategy 1: Implement real-time spend visibility - Modern finance teams leverage automated reporting and dashboards that provide instant insights into spending patterns, enabling proactive decision-making rather than reactive cost-cutting. Strategy 2: Automate approval workflows - By digitizing and streamlining approval processes, teams can eliminate bottlenecks while maintaining proper spend controls and reducing processing time by up to 75%. Strategy 3: Negotiate strategic vendor relationships - Rather than treating vendor management as a procurement afterthought, leading teams actively manage supplier relationships through data-driven negotiations and performance monitoring. Strategy 4: Deploy intelligent expense categorization - Advanced AI-powered systems can automatically categorize expenses, identify anomalies, and suggest optimization opportunities that human reviewers might miss. These strategies work synergistically to create a comprehensive approach to spend optimization that goes beyond simple cost-cutting to enable strategic financial management.",
        author: "Ian McCue",
        date: "2024-01-12",
        category: "Finance Strategy",
        tags: ["Finance", "Strategy", "Optimization"],
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
        featured: true
    },
    {
        id: 3,
        title: "The future of corporate expense management",
        excerpt: "Discover how AI and automation are transforming expense management for modern businesses and what it means for finance teams.",
        fullContent: "Discover how AI and automation are transforming expense management for modern businesses and what it means for finance teams. The corporate expense management landscape is undergoing a fundamental transformation driven by artificial intelligence and machine learning technologies. Traditional manual processes that once required hours of human intervention are now being automated, allowing finance teams to focus on strategic initiatives rather than administrative tasks. AI-powered receipt scanning can now process and categorize expenses with 99.5% accuracy, while intelligent policy enforcement prevents out-of-policy spending before it occurs. Predictive analytics help organizations forecast spending trends and identify potential cost savings opportunities months in advance. The integration of real-time data feeds from credit cards, bank accounts, and vendor systems creates a comprehensive financial ecosystem that provides unprecedented visibility into organizational spending. As these technologies mature, we're seeing the emergence of autonomous finance functions where routine transactions are processed without human intervention, compliance is monitored continuously, and strategic insights are generated automatically.",
        author: "Emily Rodriguez",
        date: "2024-01-10",
        category: "Technology",
        tags: ["AI", "Automation", "Expense Management"],
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
        featured: true
    }
];

const newsroomPosts: BlogPost[] = [
    {
        id: 4,
        title: "Let the robots chase receipts",
        excerpt: "Ramp reached a new valuation: possimus. hey this is the dummy txt tested by umang",
        fullContent: "Ramp reached a new valuation: possimus. hey this is the dummy txt tested by umang. The era of manual receipt chasing is coming to an end as intelligent automation takes over this tedious but essential business function. Our latest AI-powered receipt processing system can automatically capture, categorize, and reconcile receipts from multiple sources including email, mobile uploads, and direct merchant integrations. This technology doesn't just scan receipts - it understands them, extracting relevant data points like vendor information, expense categories, project codes, and tax implications with remarkable accuracy. The system learns from organizational spending patterns and can automatically flag unusual transactions for human review while processing routine expenses seamlessly. Finance teams report saving 15-20 hours per week on receipt management tasks, allowing them to focus on higher-value activities like budget planning and strategic analysis. The robots aren't just chasing receipts - they're revolutionizing how businesses handle expense documentation and compliance.",
        author: "Ramp Team",
        date: "2024-01-08",
        category: "Company News",
        tags: ["Automation", "Receipts", "AI"],
        readTime: "3 min read",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop"
    },
    {
        id: 5,
        title: "New on Ramp: June edition",
        excerpt: "Check out the latest features and improvements we've shipped to help your team save time and money. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, ipsam.",
        fullContent: "Check out the latest features and improvements we've shipped to help your team save time and money. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, ipsam. This month brings exciting updates to the Ramp platform designed to streamline your financial operations and provide deeper insights into your spending patterns. Our enhanced analytics dashboard now includes predictive spending forecasts, helping you anticipate budget needs up to six months in advance. The mobile app has been completely redesigned with a focus on user experience, featuring faster receipt capture, one-tap expense submission, and offline functionality for users on the go. We've also introduced advanced vendor management capabilities that automatically track contract terms, payment schedules, and renewal dates, ensuring you never miss important vendor commitments. Integration improvements include seamless connections with leading ERP systems and enhanced data synchronization capabilities. These updates represent our commitment to continuous innovation and our mission to make financial management effortless for businesses of all sizes.",
        author: "Product Team",
        date: "2024-01-05",
        category: "Product Updates",
        tags: ["Features", "Updates", "Product"],
        readTime: "4 min read",
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop"
    },
    {
        id: 6,
        title: "Introducing Ramp Treasury: Most banks hope you never see this",
        excerpt: "Many banks make money by making their clients worse off — offering yield only if you lock up your cash with restrictions, minimums, transfer limits or brokerage.",
        fullContent: "Many banks make money by making their clients worse off — offering yield only if you lock up your cash with restrictions, minimums, transfer limits or brokerage. Traditional banking relationships often come with hidden costs and artificial restrictions designed to maximize bank profits at the expense of business flexibility. Ramp Treasury changes this paradigm by offering transparent, high-yield cash management solutions without the typical banking restrictions that limit business agility. Our treasury product provides competitive yields on business cash while maintaining full liquidity and operational flexibility. Unlike traditional banks that profit from complex fee structures and limited access to funds, Ramp Treasury operates on a transparent model where your success is our success. The platform integrates seamlessly with your existing financial operations, providing real-time visibility into cash positions, automated sweep capabilities, and intelligent cash optimization recommendations. We believe businesses should earn maximum returns on their cash without sacrificing the operational flexibility they need to grow and respond to market opportunities.",
        author: "Treasury Team",
        date: "2024-01-03",
        category: "Product Launch",
        tags: ["Treasury", "Banking", "Yield"],
        readTime: "7 min read",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop"
    },
    {
        id: 7,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        excerpt: "Many banks make money by making their clients worse off — offering yield only if you lock up your cash with restrictions, minimums, transfer limits or brokerage.",
        fullContent: "Many banks make money by making their clients worse off — offering yield only if you lock up your cash with restrictions, minimums, transfer limits or brokerage. This comprehensive analysis explores the systemic issues within traditional banking that disadvantage business customers through complex fee structures and artificial limitations. The banking industry has historically operated on models that prioritize institutional profits over customer success, creating barriers to efficient cash management and financial growth. Modern businesses require flexible, transparent financial solutions that adapt to their operational needs rather than forcing them to conform to rigid banking structures. Our research indicates that businesses using traditional banking services lose an average of 3-5% of their potential returns due to restrictive policies and hidden fees. The shift toward transparent, customer-centric financial services represents a fundamental change in how businesses can optimize their cash management strategies. By eliminating artificial restrictions and focusing on genuine customer value, modern financial platforms are reshaping the landscape of business banking.",
        author: "Treasury Team",
        date: "2024-01-03",
        category: "Product Launch",
        tags: ["Treasury", "Banking", "Yield"],
        readTime: "7 min read",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop"
    }
];

const editorsPicks: BlogPost[] = [
    {
        id: 7,
        title: "We Raised $560M to build the future of finance",
        excerpt: "Today, Ramp agents not just chasing receipts. They're filing your expenses, booking your travel, paying your invoices, and closing your books. And we've raised another $560M at a $22.5 billion valuation to...",
        fullContent: "Today, Ramp agents not just chasing receipts. They're filing your expenses, booking your travel, paying your invoices, and closing your books. And we've raised another $560M at a $22.5 billion valuation to accelerate our vision of autonomous finance. This significant funding round reflects the market's confidence in our approach to transforming enterprise financial operations through intelligent automation. The capital will be invested in expanding our AI capabilities, growing our engineering team, and developing new products that further automate routine financial tasks. Our agents already handle millions of transactions monthly, saving finance teams thousands of hours while improving accuracy and compliance. The future we're building isn't just about better software - it's about fundamentally reimagining how businesses manage their financial operations. With this new funding, we're positioned to accelerate our roadmap and deliver on our mission to make finance effortless for every business. The market opportunity is enormous, and we're just getting started on transforming how companies handle their financial operations.",
        author: "Leadership Team",
        date: "2024-01-01",
        category: "Company",
        tags: ["Funding", "Growth", "Vision"],
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=250&fit=crop"
    },
    {
        id: 8,
        title: "Ramp now supports Sunshine Act compliance",
        excerpt: "New capabilities built into Ramp make it much easier for life sciences companies to track transfers of value with healthcare providers.",
        fullContent: "New capabilities built into Ramp make it much easier for life sciences companies to track transfers of value with healthcare providers. The Physician Payments Sunshine Act requires detailed reporting of financial relationships between healthcare companies and medical professionals, creating complex compliance obligations for life sciences organizations. Our new compliance module automates the tracking and reporting of these transfers of value, reducing the administrative burden on compliance teams while ensuring accurate and timely submissions. The system automatically categorizes payments, maintains detailed audit trails, and generates reports in formats required by regulatory agencies. Healthcare companies can now manage their entire compliance workflow within Ramp, from initial payment authorization through final regulatory submission. This integration eliminates the need for separate compliance tracking systems while providing the detailed documentation and reporting capabilities required for Sunshine Act compliance. The feature includes built-in validation rules to catch potential compliance issues before they become problems, helping organizations maintain their regulatory standing while focusing on their core mission of advancing healthcare.",
        author: "Compliance Team",
        date: "2023-12-28",
        category: "Compliance",
        tags: ["Healthcare", "Compliance", "Regulations"],
        readTime: "4 min read",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=250&fit=crop"
    },
    {
        id: 9,
        title: "Ramp named a Leader in 2025 IDC MarketScape",
        excerpt: "Gartner has recognized Ramp as a leader for AI-Enabled Travel and Expense Applications for Midmarket and Small Business. jhbf sjvdbvsd",
        fullContent: "Gartner has recognized Ramp as a leader for AI-Enabled Travel and Expense Applications for Midmarket and Small Business. This recognition validates our commitment to innovation and customer success in the rapidly evolving expense management space. The IDC MarketScape evaluation assessed vendors across multiple criteria including current capabilities, future strategy, customer satisfaction, and market presence. Our leadership position reflects the strength of our AI-powered platform, comprehensive feature set, and proven track record of helping businesses optimize their financial operations. The report specifically highlighted our advanced automation capabilities, seamless integration ecosystem, and exceptional customer support as key differentiators in the market. This recognition comes at a time of significant growth for Ramp, with increasing adoption among enterprise customers who are seeking more intelligent, automated solutions for their financial management needs. We're proud of this achievement and remain committed to pushing the boundaries of what's possible in financial technology.",
        author: "Marketing Team",
        date: "2023-12-25",
        category: "Recognition",
        tags: ["Award", "Leadership", "AI"],
        readTime: "3 min read",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=250&fit=crop"
    },
    {
        id: 10,
        title: "How Poshmark exceeded their free cash flow goals with Ramp",
        excerpt: "Learn how Poshmark achieved its free cash flow goals in seven months instead of 12 and cut its monthly close time in half after optimizing cash flow, forecasting, and financial strategy with Ramp.",
        fullContent: "Learn how Poshmark achieved its free cash flow goals in seven months instead of 12 and cut its monthly close time in half after optimizing cash flow, forecasting, and financial strategy with Ramp. This case study demonstrates the transformative impact of modern spend management on enterprise financial performance. Poshmark's finance team faced challenges with manual expense processing, limited spending visibility, and inefficient approval workflows that were hindering their ability to achieve aggressive growth targets. By implementing Ramp's comprehensive financial platform, they gained real-time visibility into cash flows, automated routine financial processes, and established intelligent spending controls that aligned with their strategic objectives. The results were immediate and substantial - monthly close processes that previously took weeks were completed in days, spending forecasts became accurate to within 2%, and the finance team could focus on strategic initiatives rather than administrative tasks. The accelerated path to free cash flow goals enabled Poshmark to invest more aggressively in growth initiatives while maintaining strict financial discipline. This success story illustrates how the right financial technology can become a competitive advantage for growing companies.",
        author: "Case Studies Team",
        date: "2023-12-22",
        category: "Customer Story",
        tags: ["Case Study", "Success", "Efficiency"],
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop"
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
                        <motion.button
                          whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
                          whileTap={{ scale: 0.95 }}
                          className="w-fit px-6 py-2 bg-primary text-white rounded-full font-medium transition-colors duration-300"
                        >
                          Read More
                        </motion.button>
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
              {newsroomPosts.map((post) => (
                <motion.div 
                  key={post.id} 
                  className="flex-[0_0_33.333%] px-3 mb-3"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-card/80 backdrop-blur-sm">
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
                      <motion.button
                        whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-4 w-full px-6 py-2 bg-primary text-white rounded-full font-medium transition-colors duration-300"
                      >
                        Read Article
                      </motion.button>
                    </CardContent>
                  </Card>
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
              {newsroomPosts.map((post) => (
                <motion.div 
                  key={post.id} 
                  className="flex-[0_0_33.333%] px-3 mb-3"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-card/80 backdrop-blur-sm">
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
                      <motion.button
                        whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-4 w-full px-6 py-2 bg-primary text-white rounded-full font-medium transition-colors duration-300"
                      >
                        Read Article
                      </motion.button>
                    </CardContent>
                  </Card>
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
              {newsroomPosts.map((post) => (
                <motion.div 
                  key={post.id} 
                  className="flex-[0_0_33.333%] px-3 mb-3"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-card/80 backdrop-blur-sm">
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
                      <motion.button
                        whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-4 w-full px-6 py-2 bg-primary text-white rounded-full font-medium transition-colors duration-300"
                      >
                        Read Article
                      </motion.button>
                    </CardContent>
                  </Card>
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

