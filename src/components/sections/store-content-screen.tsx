
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Package, Zap, Youtube } from 'lucide-react';
import Link from 'next/link';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const apps = [
  {
    id: 'store-africrypt',
    name: "AfriCrypt",
    description: "Your secure gateway to the African cryptocurrency market. Buy, sell, and manage digital assets with ease.",
    videoUrl: `https://youtu.be/AhlNPTF2-bk`,
    dataAiHint: "crypto exchange africa",
    tags: ['Crypto', 'Trading', 'Africa', 'Fintech', 'YouTube Demo'],
    features: ['Multi-currency Wallet', 'Advanced Trading Tools', 'Fiat On/Off Ramp'],
  },
  {
    id: 'store-marketsync-pro',
    name: "Market Sync Pro",
    description: "Synchronize your e-commerce operations across multiple platforms seamlessly. Inventory, orders, and listings in one place.",
    videoUrl: `https://youtu.be/SWhGv12Cjdw`,
    dataAiHint: "ecommerce sync",
    tags: ['E-commerce', 'Automation', 'SaaS', 'Productivity', 'YouTube Demo'],
    features: ['Real-time Inventory Sync', 'Multi-channel Listing', 'Order Management Automation'],
  },
  {
    id: 'store-vibetribe',
    name: "VibeTribe Connect",
    description: "Discover and connect with communities that share your vibe. Events, groups, and interest-based networking.",
    videoUrl: `https://youtube.com/shorts/NzsltvJ7RcQ`,
    dataAiHint: "social community app",
    tags: ['Social', 'Community', 'Networking', 'Events', 'YouTube Demo'],
    features: ['AI-powered Matchmaking', 'Private & Public Groups', 'Event Discovery'],
  },
  {
    id: 'store-waec-prepmax',
    name: "WAEC PrepMax",
    description: "The ultimate preparation tool for WAEC exams. Access past questions, mock tests, and AI-driven study plans.",
    videoUrl: `https://youtu.be/xENcAmf9uBg`,
    dataAiHint: "exam preparation youtube",
    tags: ['Education', 'Exam Prep', 'AI Tutor', 'WAEC', 'YouTube Demo'],
    features: ['Extensive Question Bank', 'Timed Mock Exams', 'Performance Analytics'],
  },
  {
    id: 'store-dailiesmart',
    name: "DailiesMart Groceries",
    description: "Fresh groceries and daily essentials delivered to your doorstep. Quick, reliable, and convenient.",
    videoUrl: `https://youtube.com/shorts/iT7YQQNQfPE`,
    dataAiHint: "grocery delivery",
    tags: ['Groceries', 'Delivery', 'E-commerce', 'Essentials', 'YouTube Demo'],
    features: ['Same-day Delivery', 'Personalized Shopping Lists', 'Subscription Options'],
  },
  {
    id: 'store-zungukalite',
    name: "Zunguka Lite",
    description: "Host and discover engaging online events, webinars, and workshops with Zunguka Lite's powerful platform.",
    videoUrl: `https://youtu.be/lZQOuTYn7BI`,
    dataAiHint: "online events platform youtube",
    tags: ['Events', 'Webinar', 'SaaS', 'Virtual Meetings', 'YouTube Demo'],
    features: ['Interactive Polls & Q&A', 'HD Video Streaming', 'Ticketing & Registration'],
  },
];

function getYouTubeEmbedUrl(url?: string): string | null {
  if (!url || typeof url !== 'string' || !url.startsWith('http')) return null;

  try {
    const urlObj = new URL(url);
    let videoId: string | null = null;

    if (urlObj.hostname === 'www.youtube.com' || urlObj.hostname === 'youtube.com') {
      videoId = urlObj.searchParams.get('v');
      if (!videoId && urlObj.pathname.startsWith('/shorts/')) {
        videoId = urlObj.pathname.split('/shorts/')[1];
      }
    } else if (urlObj.hostname === 'youtu.be') {
      videoId = urlObj.pathname.substring(1);
    }

    if (videoId) {
      // Clean up videoId from potential parameters like &t= or list=
      const ampersandPosition = videoId.indexOf('&');
      if (ampersandPosition !== -1) {
        videoId = videoId.substring(0, ampersandPosition);
      }
      const questionMarkPosition = videoId.indexOf('?');
      if (questionMarkPosition !== -1) {
        videoId = videoId.substring(0, questionMarkPosition);
      }
      const hashPosition = videoId.indexOf('#');
      if (hashPosition !== -1) {
        videoId = videoId.substring(0, hashPosition);
      }
      return `https://www.youtube.com/embed/${videoId}`;
    }
    // Check if it's already an embed URL (less common for input but good to handle)
    if (url.includes('youtube.com/embed/')) {
        return url;
    }
  } catch (e) {
    // console.error("Error parsing YouTube URL:", e); // Optional: for debugging
  }
  return null;
}


export default function StoreContentScreen() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block p-4 bg-primary/10 rounded-full mb-6">
            <Package className="h-16 w-16 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            MykelFolio <span className="text-primary">App Hub</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover exclusive applications designed to enhance your productivity, creativity, and development workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apps.map((app) => {
            const youtubeEmbedUrl = getYouTubeEmbedUrl(app.videoUrl);
            const hasDisplayableVideoIcon = !!youtubeEmbedUrl; 

            return (
              <Card key={app.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-primary/20 transition-all duration-300 rounded-xl border hover:border-primary/50 group">
                <CardHeader className="p-0 relative">
                  <div className="aspect-video overflow-hidden relative bg-muted group-hover:bg-secondary/70 transition-colors duration-300">
                    {hasDisplayableVideoIcon && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50 group-hover:bg-black/30 transition-colors">
                          <Youtube className="h-16 w-16 text-red-600/80 group-hover:text-red-500/90 transition-colors" />
                      </div>
                    )}
                    <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                      {app.tags[0]}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <CardTitle className="text-2xl mb-2 font-sans">{app.name}</CardTitle>
                  <CardDescription className="text-muted-foreground text-sm mb-4 flex-grow min-h-[60px]">{app.description}</CardDescription>

                  <div className="mb-4">
                    <h4 className="text-xs font-semibold uppercase text-muted-foreground mb-2">Key Features:</h4>
                    <ul className="space-y-1 text-sm">
                      {app.features.map(feature => (
                        <li key={feature} className="flex items-center">
                          <Zap className="h-4 w-4 mr-2 text-primary/70 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {app.tags.slice(1).map(tag => (
                      <span key={tag} className="inline-block bg-secondary text-secondary-foreground text-xs px-2.5 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 border-t mt-auto">
                  <div className="w-full">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="secondary" className="w-full h-11">
                          <Youtube className="mr-2 h-4 w-4" />
                          Watch Demo
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl p-0 overflow-hidden rounded-lg">
                        <DialogHeader className="sr-only">
                          <DialogTitle>{app.name} Video Demo</DialogTitle>
                        </DialogHeader>
                        <div className="aspect-video bg-black">
                          {youtubeEmbedUrl ? (
                            <iframe
                              key={youtubeEmbedUrl} // Ensure iframe re-renders if URL changes
                              width="100%"
                              height="100%"
                              src={`${youtubeEmbedUrl}?autoplay=1&mute=0`}
                              title={app.name}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                              className="rounded-b-lg"
                            ></iframe>
                          ) : (
                            <div className="flex items-center justify-center h-full">
                                <p className="text-white text-center p-4">No video demo has been provided for this app yet.</p>
                            </div>
                          )}
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardFooter>
              </Card>
            );
          })}
        </div>
        <div className="text-center mt-16">
          <p className="text-muted-foreground">
            More innovative apps are on the way. Follow us for updates!
          </p>
          <Button variant="link" asChild className="mt-2 text-primary">
            <Link href="/#contact">Suggest an App</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
