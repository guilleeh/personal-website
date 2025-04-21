"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface SocialButtonProps {
  icon: React.ReactNode;
  href: string;
  label: string;
}

export function SocialButton({ icon, href, label }: SocialButtonProps) {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <Button variant="ghost" size="icon" asChild>
        <Link href={href} target="_blank" aria-label={label}>
          <div className="text-muted-foreground hover:text-teal transition-colors">
            {icon}
          </div>
        </Link>
      </Button>
    </motion.div>
  );
}
