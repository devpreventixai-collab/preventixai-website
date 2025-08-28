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

interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
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
                <div className="flex">
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

function ExpandableExcerpt({ text }: { text: string }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <p className="text-muted-foreground mb-4 leading-relaxed">
      {expanded ? text : text.slice(0, 145)}{/* first 100 chars */}
      {text.length > 100 && (
        <>
          {!expanded && "..."}
          <button
            onClick={() => setExpanded(!expanded)}
            className="ml-1 text-primary font-small hover:underline"
          >
            {expanded ? " Read Less" : " Read More"}
          </button>
        </>
      )}
    </p>
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

    return (
        <div className="min-h-screen">
            <Header />
            <main>
                <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
                    {/* Header */}
                    {/* <div className="bg-background/95 backdrop-blur-sm border-b sticky top-0 z-40">
                        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                                The Ramp Blog
                            </h1>
                            <div className="relative w-80">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                                <Input
                                    placeholder="Search..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-10"
                                />
                            </div>
                        </div>
                    </div> */}

                    {/* Main Blog Slider */}
                    <section className="mt-16 py-12 px-4 bg-[#17332d]  mx-auto">
                        <Carousel className="mb-4">
                            {blogPosts.map((post) => (
                                <div key={post.id} className="flex-[0_0_100%] px-4">
                                    <div className="relative bg-blue-100 rounded-2xl overflow-hidden min-h-[500px] flex items-center">
                                        <div className="flex w-full max-w-6xl mx-auto">
                                            {/* Content Side */}
                                            <div className="flex-1 p-4 flex flex-col justify-center">
                                                <Badge variant="secondary" className="w-fit mb-4 bg-primary/10 text-primary">
                                                    {post.category}
                                                </Badge>
                                                <h2 className="text-4xl font-bold mb-6 leading-tight">
                                                    {post.title}
                                                </h2>
                                                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                                    {post.excerpt}
                                                </p>
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
                                                {/* <Button variant="gradient" size="lg" className="w-fit">
                                                    Read Article <ArrowRight className="ml-2 h-5 w-5" />
                                                </Button> */}
                                            </div>

                                            {/* Image Side */}
                                            <div className="flex-1 p-8">
                                                <div className="relative h-full min-h-[400px] rounded-xl overflow-hidden">
                                                    <img
                                                        src={post.image}
                                                        alt={post.title}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    </section>

                    {/* Newsroom Slider */}
                    <section className="py-3 mt-4 px-4 max-w-[90rem] mx-auto">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-3xl font-bold px-3">PREDICT</h2>
                            {/* <Button variant="ghost" className="text-primary">
                                View all <ArrowRight className="ml-2 h-4 w-4" />
                            </Button> */}
                        </div>

                        <Carousel>
                            {newsroomPosts.map((post) => (
                                <div key={post.id} className="flex-[0_0_33.333%] px-3 mb-3">
                                    <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-card/80 backdrop-blur-sm">
                                        <div className="relative overflow-hidden rounded-t-lg">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                                            />
                                            <div className="absolute top-4 left-4">
                                                <Badge variant="secondary" className="bg-white/90 text-primary font-medium">
                                                    {post.category}
                                                </Badge>
                                            </div>
                                        </div>

                                        <CardContent className="p-6">
                                            <h3 className="text-xl font-bold mb-3 line-clamp-2 hover:text-primary transition-colors">
                                                {post.title}
                                            </h3>
                                            <p className="text-muted-foreground line-clamp-3 mb-4 leading-relaxed">
                                                {post.excerpt}
                                            </p>
                                            {/* Read More Button */}
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="w-fit mb-4"
                                                onClick={() => console.log(`Go to post ${post.id}`)}
                                            >
                                                Read More <ArrowRight className="ml-2 h-4 w-4" />
                                            </Button>
                                            <div className="flex items-center justify-between text-sm text-muted-foreground border-t pt-4">
                                                <div className="flex items-center gap-4">
                                                    <div className="flex items-center gap-1">
                                                        <User className="h-4 w-4" />
                                                        <span>{post.author}</span>
                                                    </div>
                                                </div>
                                                <span className="font-medium text-primary">{post.readTime}</span>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            ))}
                        </Carousel>
                    </section>

                    <section className="py-3 px-4 max-w-[90rem] mx-auto">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-3xl font-bold px-3">PREVENT</h2>
                            {/* <Button variant="ghost" className="text-primary">
                                View all <ArrowRight className="ml-2 h-4 w-4" />
                            </Button> */}
                        </div>

                        <Carousel>
                            {newsroomPosts.map((post) => (
                                <div key={post.id} className="flex-[0_0_33.333%] px-3 mb-3">
                                    <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-card/80 backdrop-blur-sm">
                                        <div className="relative overflow-hidden rounded-t-lg">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                                            />
                                            <div className="absolute top-4 left-4">
                                                <Badge variant="secondary" className="bg-white/90 text-primary font-medium">
                                                    {post.category}
                                                </Badge>
                                            </div>
                                        </div>

                                        <CardContent className="p-6">
                                            <h3 className="text-xl font-bold mb-3 line-clamp-2 hover:text-primary transition-colors">
                                                {post.title}
                                            </h3>
                                            <p className="text-muted-foreground line-clamp-3 mb-4 leading-relaxed">
                                                {post.excerpt}
                                                <button
                                                    onClick={() => console.log(`Go to post ${post.id}`)}
                                                    className="ml-2 text-primary font-medium hover:underline inline-flex items-center"
                                                >
                                                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                                                </button>
                                            </p>

                                            <div className="flex items-center justify-between text-sm text-muted-foreground border-t pt-4">
                                                <div className="flex items-center gap-4">
                                                    <div className="flex items-center gap-1">
                                                        <User className="h-4 w-4" />
                                                        <span>{post.author}</span>
                                                    </div>
                                                </div>
                                                <span className="font-medium text-primary">{post.readTime}</span>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            ))}
                        </Carousel>
                    </section>

                    <section className="py-3 px-4 max-w-[90rem] mx-auto">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-3xl font-bold px-3">PROTECT</h2>
                            {/* <Button variant="ghost" className="text-primary">
                                View all <ArrowRight className="ml-2 h-4 w-4" />
                            </Button> */}
                        </div>

                        <Carousel>
                            {newsroomPosts.map((post) => (
                                <div key={post.id} className="flex-[0_0_33.333%] px-3 mb-3">
                                    <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-card/80 backdrop-blur-sm">
                                        <div className="relative overflow-hidden rounded-t-lg">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                                            />
                                            <div className="absolute top-4 left-4">
                                                <Badge variant="secondary" className="bg-white/90 text-primary font-medium">
                                                    {post.category}
                                                </Badge>
                                            </div>
                                        </div>

                                        <CardContent className="p-6">
                                            <h3 className="text-xl font-bold mb-3 line-clamp-2 hover:text-primary transition-colors">
                                                {post.title}
                                            </h3>
                                            <ExpandableExcerpt text={post.excerpt} />

                                            <div className="flex items-center justify-between text-sm text-muted-foreground border-t pt-4">
                                                <div className="flex items-center gap-4">
                                                    <div className="flex items-center gap-1">
                                                        <User className="h-4 w-4" />
                                                        <span>{post.author}</span>
                                                    </div>
                                                </div>
                                                <span className="font-medium text-primary">{post.readTime}</span>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            ))}
                        </Carousel>
                    </section>

                    {/* Editor's Picks - Static Grid */}
                    <section className="py-12 px-28 bg-[#f4f2f2]  mx-auto">
                        <h2 className="text-3xl font-bold mb-8">Editor's picks</h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Featured Article */}
                            <div className="lg:row-span-2">
                                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-primary/10 to-primary-glow/5">
                                    <div className="relative overflow-hidden rounded-t-lg">
                                        <img
                                            src={editorsPicks[0].image}
                                            alt={editorsPicks[0].title}
                                            className="w-full h-64 lg:h-80 object-cover"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <Badge className="bg-primary text-primary-foreground">
                                                {editorsPicks[0].category}
                                            </Badge>
                                        </div>
                                    </div>

                                    <CardContent className="p-8">
                                        <h3 className="text-2xl font-bold mb-4 leading-tight">
                                            {editorsPicks[0].title}
                                        </h3>
                                        <p className="text-muted-foreground mb-6 leading-relaxed">
                                            {editorsPicks[0].excerpt}
                                        </p>

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

                                        {/* <Button variant="gradient" className="w-full">
                                            Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button> */}
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Side Articles */}
                            <div className="space-y-6">
                                {editorsPicks.slice(1).map((post) => (
                                    <Card key={post.id} className="hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                                        <div className="flex gap-4 p-6">
                                            <div className="flex-shrink-0">
                                                <img
                                                    src={post.image}
                                                    alt={post.title}
                                                    className="w-20 h-20 object-cover rounded-lg"
                                                />
                                            </div>

                                            <div className="flex-1 min-w-0">
                                                <Badge variant="outline" className="mb-2 text-xs">
                                                    {post.category}
                                                </Badge>
                                                <h4 className="font-bold text-sm mb-2 line-clamp-2 hover:text-primary transition-colors cursor-pointer">
                                                    {post.title}
                                                </h4>
                                                <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
                                                    {post.excerpt}
                                                </p>
                                                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                                    <span>{post.author}</span>
                                                    <span>•</span>
                                                    <span>{post.readTime}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>

    );
}