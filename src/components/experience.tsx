import { CheckIcon } from "lucide-react";

import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/timeline";

const items = [
  {
    id: 1,
    date: "Oct 2023 - Nov 2023",
    title: "Backend Developer Intern at VRASMEDIA IT SOLUTION",
    description:
      "Developed backend for an air conditioning management system using Laravel with WhatsApp API Gateway Integration (Fonnte).",
  },
  {
    id: 2,
    date: "Jul 2024 - Sep 2024",
    title: "Software Engineer Intern at KodingWorks",
    description:
      "Built backend APIs for an attendance application using Laravel | Developed a Learning Management System (LMS) web application, integrating Xendit as the payment gateway. (Tech Stack: Next.js, PostgreSQL, Prisma, ShadCN)",
  },
  {
    id: 3,
    date: "Oct 2024 - Dec 2024",
    title: "Software Engineer Intern at Crackin'Code",
    description:
      "Deployed and maintained a Laravel Filament web application on Heroku, ensuring stable operation and uptime | Developed a freelance landing page project for Heber Spring Resort, a vacation destination business.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Experience
        </h2>

        <Timeline defaultValue={3}>
          {items.map((item) => (
            <TimelineItem
              key={item.id}
              step={item.id}
              className="group-data-[orientation=vertical]/timeline:ms-10"
            >
              <TimelineHeader>
                <TimelineSeparator className="group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=vertical]/timeline:translate-y-6.5" />
                <TimelineDate>{item.date}</TimelineDate>
                <TimelineTitle>{item.title}</TimelineTitle>
                <TimelineIndicator className="group-data-completed/timeline-item:bg-green-500 group-data-completed/timeline-item:text-primary-foreground flex size-6 items-center justify-center group-data-completed/timeline-item:border-none group-data-[orientation=vertical]/timeline:-left-7">
                  <CheckIcon
                    className="group-not-data-completed/timeline-item:hidden"
                    size={16}
                  />
                </TimelineIndicator>
              </TimelineHeader>
              <TimelineContent>{item.description}</TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </section>
  );
}
