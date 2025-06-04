
"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Project } from '@/types';
import { ExternalLink, Github, Youtube, MonitorPlay, ImageIcon, ChevronLeft, ChevronRight, Video as VideoIconProp } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
}

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
    if (url.includes('youtube.com/embed/')) {
        return url; // Already an embed URL
    }
  } catch (e) {
    console.error("Error parsing YouTube URL:", e);
  }
  return null;
}

function isLocalVideoPath(url?: string): boolean {
    return !!url && typeof url === 'string' && url.endsWith('.mp4') && !url.startsWith('http');
}


export default function ProjectCard({ project }: ProjectCardProps) {
  const hasValidVideoUrl = typeof project.videoUrl === 'string' && project.videoUrl.trim() !== '';
  const isLocalVideo = hasValidVideoUrl && isLocalVideoPath(project.videoUrl);
  const videoEmbedUrl = hasValidVideoUrl && !isLocalVideo ? getYouTubeEmbedUrl(project.videoUrl) : null;

  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isVideoDialogOpen, setIsVideoDialogOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const gallery = project.imageGallery && project.imageGallery.length > 0 ? project.imageGallery : [];
  const displayImageUrl = project.imageUrl || "https://placehold.co/600x400.png?text=Project+Image"; 

  // Log the image URL being attempted for each card
  console.log(`ProjectCard ID: "${project.id}", Title: "${project.title}", Attempting card image URL: "${displayImageUrl}"`);
  if (project.category === 'Design' && gallery.length > 0) {
    // console.log(`ProjectCard ID: "${project.id}", Title: "${project.title}", Gallery images:`, gallery);
  }


  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % (gallery.length || 1));
  }, [gallery.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + (gallery.length || 1)) % (gallery.length || 1));
  }, [gallery.length]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | undefined;
    if (isGalleryOpen && gallery.length > 1) {
      intervalId = setInterval(() => {
        nextSlide();
      }, 3500);
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isGalleryOpen, gallery.length, nextSlide]);

  useEffect(() => {
    if (isGalleryOpen) {
      setCurrentSlide(0);
    }
  }, [isGalleryOpen, project.id]);


  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out group">
      <CardHeader className="p-0 relative">
        <div className="aspect-video overflow-hidden">
          <Image
            src={displayImageUrl}
            alt={project.title}
            width={600} 
            height={400} 
            className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
            data-ai-hint={project.dataAiHint || "project image"}
            quality={90} // Increased quality
            priority={project.id === 'fe-naijastay'} 
            onError={(e) => console.error(`Error loading card image for project ID: "${project.id}", Title: "${project.title}". Attempted URL: "${displayImageUrl}". Ensure this file exists in 'public' or is accessible.`, e)}
            unoptimized={displayImageUrl.startsWith("https://placehold.co")} 
          />
        </div>

        <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors">
          {project.category === 'Design' && gallery.length > 0 ? (
            <ImageIcon className="h-16 w-16 text-white/70" />
          ) : videoEmbedUrl ? (
            <Youtube className="h-16 w-16 text-red-600/90" />
          ) : isLocalVideo ? (
            <VideoIconProp className="h-16 w-16 text-white/80" />
          ) : project.type === 'video' && hasValidVideoUrl ? ( 
            <MonitorPlay className="h-16 w-16 text-white/80" />
          ) : null}
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="text-xl md:text-2xl mb-2 font-sans">{project.title}</CardTitle>
        <CardDescription className="text-muted-foreground mb-4 text-base min-h-[60px]">{project.description}</CardDescription>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex flex-wrap gap-2 justify-start items-center">
        {(isLocalVideo || videoEmbedUrl) && (
          <Dialog open={isVideoDialogOpen} onOpenChange={setIsVideoDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" type="button" onClick={() => setIsVideoDialogOpen(true)}>
                {isLocalVideo ? <VideoIconProp className="mr-2 h-4 w-4" /> : <Youtube className="mr-2 h-4 w-4" />}
                Watch Demo
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-7xl w-[95vw] h-[90vh] p-1 flex flex-col">
              <DialogHeader className="sr-only">
                <DialogTitle>{project.title} Video Demo</DialogTitle>
              </DialogHeader>
              <div className="aspect-video bg-black flex-1 min-h-0">
                {isLocalVideo && project.videoUrl && project.videoUrl.trim() !== '' ? (
                    <video
                        key={project.videoUrl}
                        src={encodeURI(project.videoUrl)} 
                        controls
                        autoPlay
                        className="w-full h-full rounded-b-lg object-contain"
                        onError={(e) => console.error('Video playback error for local video:', project.videoUrl, e)}
                    >
                      Your browser does not support the video tag. Attempted video source: {project.videoUrl}
                    </video>
                ) : videoEmbedUrl ? (
                    <iframe
                        key={videoEmbedUrl}
                        width="100%"
                        height="100%"
                        src={videoEmbedUrl + "?autoplay=1&mute=0"} 
                        title={project.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="rounded-b-lg"
                    ></iframe>
                ) : (
                  <p className="text-center text-muted-foreground p-8">Video content is unavailable for this project.</p>
                )}
              </div>
            </DialogContent>
          </Dialog>
        )}

        {project.category === 'Design' && gallery.length > 0 && (
          <Dialog open={isGalleryOpen} onOpenChange={setIsGalleryOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" type="button" onClick={() => setIsGalleryOpen(true)}>
                <ImageIcon className="mr-2 h-4 w-4" /> View Design
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-7xl w-[95vw] h-[90vh] p-1 flex flex-col">
              <DialogHeader className="sr-only">
                <DialogTitle>{project.title} Design Showcase</DialogTitle>
              </DialogHeader>
              {gallery.length > 0 ? (
                <div className="relative w-full flex-1 rounded-md overflow-hidden group/slideshow min-h-0">
                  <div
                    className="flex transition-transform duration-700 ease-in-out h-full"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {gallery.map((imageSrc, index) => (
                      <div key={`${project.id}-gallery-${index}`} className="w-full h-full flex-shrink-0 relative">
                        <Image
                          src={imageSrc}
                          alt={`${project.title} - Design Preview ${index + 1}`}
                          fill
                          className="object-contain" 
                          quality={90} // Increased quality for gallery images too
                          priority={index === 0}
                          sizes="(max-width: 768px) 95vw, (max-width: 1300px) 90vw, 1280px"
                          data-ai-hint={project.dataAiHint || 'design showcase'}
                          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => console.error(`Error loading gallery image for project ID: "${project.id}", Title: "${project.title}", Image index: ${index}, Attempted URL: "${imageSrc}". Please ensure this file exists. Event:`, e)}
                          unoptimized={imageSrc.startsWith("https://placehold.co")}
                        />
                      </div>
                    ))}
                  </div>
                  {gallery.length > 1 && (
                    <>
                      <Button
                        variant="outline"
                        size="icon"
                        type="button"
                        className="absolute top-1/2 left-2 -translate-y-1/2 z-10 bg-background/50 hover:bg-background/80 opacity-0 group-hover/slideshow:opacity-100 transition-opacity"
                        onClick={prevSlide}
                        aria-label="Previous slide"
                      >
                        <ChevronLeft className="h-6 w-6" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        type="button"
                        className="absolute top-1/2 right-2 -translate-y-1/2 z-10 bg-background/50 hover:bg-background/80 opacity-0 group-hover/slideshow:opacity-100 transition-opacity"
                        onClick={nextSlide}
                        aria-label="Next slide"
                      >
                        <ChevronRight className="h-6 w-6" />
                      </Button>
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex space-x-1.5">
                        {gallery.map((_, index) => (
                          <button
                            key={`${project.id}-dot-${index}`}
                            type="button"
                            onClick={() => setCurrentSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                            className={cn(
                              "h-2 w-2 rounded-full transition-colors",
                              currentSlide === index ? "bg-primary" : "bg-muted-foreground/50 hover:bg-muted-foreground"
                            )}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ) : (
                 <div className="flex flex-col items-center justify-center h-full">
                    <ImageIcon className="h-24 w-24 text-muted-foreground/50 mb-4" />
                    <p className="text-center text-muted-foreground p-8">Image gallery is currently empty for this project or images failed to load.</p>
                 </div>
              )}
            </DialogContent>
          </Dialog>
        )}
        
        {project.projectUrl && project.projectUrl !== '#' && 
         !( (isLocalVideo || videoEmbedUrl) && project.projectUrl === project.videoUrl ) && ( 
          <Button asChild variant="outline" size="sm">
            <Link href={project.projectUrl} target="_blank" rel="noopener noreferrer" aria-label={`View live project: ${project.title}`}>
              <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
            </Link>
          </Button>
        )}

        {project.repoUrl && project.repoUrl !== '#' && (
          <Button asChild variant="ghost" size="sm">
            <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer" aria-label={`View source code for ${project.title} on GitHub`}>
              <Github className="mr-2 h-4 w-4" /> Source Code
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

