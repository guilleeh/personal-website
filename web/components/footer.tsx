"use client";

import { Github, Linkedin, User } from "lucide-react";
import { socialLinks } from "@/lib/constants";
import { SocialButton } from "@/components/social-button";

export function Footer() {
  return (
    <footer className="border-t border-teal/20 py-6 md:py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <div>
          <p className="text-sm text-muted-foreground">
            Made with ❤️ by Guillermo Hernandez Flores
          </p>
        </div>
        <div className="flex gap-4">
          <SocialButton
            icon={<Github className="h-4 w-4" />}
            href={socialLinks.github}
            label="GitHub"
          />
          <SocialButton
            icon={<Linkedin className="h-4 w-4" />}
            href={socialLinks.linkedin}
            label="LinkedIn"
          />
          <SocialButton
            icon={<User className="h-4 w-4" />}
            href={socialLinks.upwork}
            label="Upwork"
          />
        </div>
      </div>
    </footer>
  );
}
