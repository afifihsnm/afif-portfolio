import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  index: number;
}

function Project({
  title,
  description,
  image,
  tags,
  liveUrl,
  githubUrl,
}: ProjectProps) {
  return (
    <div>
      <Card className="overflow-hidden border-none shadow-sm hover:shadow-md transition-all">
        <div className="aspect-video relative overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="font-normal">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex gap-4">
            {liveUrl && (
              <Link
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm hover:text-primary transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Live Demo</span>
              </Link>
            )}

            {githubUrl && (
              <Link
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm hover:text-primary transition-colors"
              >
                <Github className="h-4 w-4" />
                <span>Source Code</span>
              </Link>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export function Projects() {
  const projects = [
    {
      title: "simpLeMS (LMS built using Next.js with Xendit Payment Gateway)",
      description:
        "Learning Management System (LMS) developed using Next.js for a modern and responsive user interface. Includes seamless integration with the Xendit Payment Gateway, enabling secure and efficient payment processing, offering an innovative platform tailored for education and online learning needs.",
      image: "/projects/simplems.png",
      tags: ["Next.js", "TypeScript", "PostgreSQL", "Git", "Xendit", "Clerk", "Prisma"],
      liveUrl: "https://simplems.vercel.app",
      // githubUrl: "https://github.com/example/project",
    },
    {
      title: "Afif Camera Rental",
      description:
        "Built with Laravel (API/backend), Inertia.js + React (frontend), Filament (admin panel). Features include user authentication, role-based access control, products availability checks, rental booking management. Deployed on AWS EC2 with optimized server setup.",
      image: "/projects/afif-camera-rental.png",
      tags: ["Laravel", "React", "Inertia", "Filament", "SQLite", "AWS"],
      liveUrl: "https://afif.camera-rental.soon.it",
      // githubUrl: "https://github.com/example/project",
    },
    {
      title: "Afif Portfolio Website",
      description:
        "Portfolio website developed using Next.js for a fast, SEO-friendly frontend. Deployed on Vercel for seamless CI/CD, with custom domain management, analytics integration, and performance optimization.",
      image: "/projects/afif-personal-portfolio-website.png",
      tags: ["Next.js", "TypeScript", "React", "Vercel"],
      liveUrl: "https://afifihsnm.is-a.dev",
      // githubUrl: "https://github.com/example/project",
    },
  ];

  return (
    <section id="projects" className="py-24 md:py-32 px-4 bg-green-100/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Project key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
