import type React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code,
  Database,
  Server,
  Globe,
  Layout,
  Terminal,
  Cloud,
  GitBranch,
  Monitor,
} from "lucide-react";

interface SkillProps {
  icon: React.ReactNode;
  name: string;
}

function Skill({ icon, name }: SkillProps) {
  return (
    <div className="flex items-center gap-3 p-2 transition-all hover:text-green-500">
      {icon}
      <span>{name}</span>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 px-4 bg-green-100/50">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Code className="h-5 w-5 text-green-500" />
                Full-Stack Development
              </h3>
              <div className="grid grid-cols-2 gap-y-3">
                <Skill
                  icon={<Layout className="h-4 w-4" />}
                  name="React / Next.js"
                />
                <Skill icon={<Globe className="h-4 w-4" />} name="TypeScript" />
                <Skill icon={<Database className="h-4 w-4" />} name="Node.js" />
                <Skill icon={<Terminal className="h-4 w-4" />} name="GraphQL" />
                <Skill
                  icon={<Database className="h-4 w-4" />}
                  name="PostgreSQL"
                />
                <Skill icon={<GitBranch className="h-4 w-4" />} name="Git" />
                <Skill
                  icon={<Layout className="h-4 w-4" />}
                  name="Tailwind CSS"
                />
                <Skill
                  icon={<Terminal className="h-4 w-4" />}
                  name="REST APIs"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Server className="h-5 w-5 text-green-500" />
                DevOps & Cloud
              </h3>
              <div className="grid grid-cols-2 gap-y-3">
                <Skill icon={<Cloud className="h-4 w-4" />} name="AWS" />
                <Skill icon={<Terminal className="h-4 w-4" />} name="Docker" />
                {/* <Skill icon={<Cpu className="h-4 w-4" />} name="Kubernetes" /> */}
                {/* <Skill
                  icon={<Terminal className="h-4 w-4" />}
                  name="Terraform"
                /> */}
                <Skill
                  icon={<Monitor className="h-4 w-4" />}
                  name="CI/CD Pipelines"
                />
                <Skill icon={<Terminal className="h-4 w-4" />} name="Linux" />
                <Skill
                  icon={<Monitor className="h-4 w-4" />}
                  name="Monitoring"
                />
                <Skill icon={<Cloud className="h-4 w-4" />} name="Serverless" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
