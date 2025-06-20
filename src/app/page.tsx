"use client";

import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      {/* Hero */}
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 font-JB space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-5xl sm:font-extrabold font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`I'm Anurag`}
              />
              <BlurFadeText
                className="max-w-[600px] mt-3 text-md text-justify font-bold sm:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold font-JB">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className="prose max-w-full mt-2 text-justify font-sans sm:text-sm text-sm text-muted-foreground dark:prose-invert">
            <Markdown>
              {DATA.summary}
            </Markdown>
          </div>
        </BlurFade>
      </section>

      {/* Work Experience */}
      <section id="work">
        <div className="flex min-h-0 flex-col text-justify gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold mb-3 font-JB">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
              key={work.company}>
              <ResumeCard
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                badges={work.badges}
                period={`${work.start}${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Education */}
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-JB mb-3 font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
              key={education.school}
            >
              <ResumeCard
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold text-center font-JB mt-3">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap justify-center gap-2">
  {DATA.skills.map((skill, id) => (
    <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
      <Badge>{skill}</Badge>
    </BlurFade>
  ))}
</div>

        </div>
      </section>

      {/* Projects */}
      <section id="projects">
        <div className="space-y-12 w-full sm:py-10 py-4">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my work
                </h2>
                <p className="text-muted-foreground text-sm text-justify sm:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] pr-2 text-justify mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
              className="font-JB"
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                key={project.title}
              >
                <ProjectCard
                  href={project.href}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Hackathons */}
      <section id="hackathons">
        <div className="space-y-12 w-full py-6">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg mb-3 bg-foreground text-background px-3 py-1 text-sm">
                  Hackathons
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  I like Hackathons
                </h2>
                <p className="text-muted-foreground text-justify md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I enjoy participating in hackathons because they help me learn new skills and apply fresh ideas while building real world projects
                </p>
              </div>
            </div>
          </BlurFade>
          <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
            {DATA.hackathons.map((project, id) => (
              <BlurFade
                className="text-justify"
                delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                key={project.title + project.dates}>
                <HackathonCard
                  title={project.title}
                  description={project.description}
                  location={project.location}
                  dates={project.dates}
                  image={project.image}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <div className="grid items-center justify-center text-justify gap-4 px-4 md:px-6 w-full py-6">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg font-JB bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat ? Just shoot me a DM{" "}
                <Link
                  href={DATA.contact.social.X.url}
                  className="text-blue-500 hover:underline"
                >
                  on Twitter
                </Link>{" "}
                and I&apos;ll respond whenever I can. I will ignore all
                soliciting.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
