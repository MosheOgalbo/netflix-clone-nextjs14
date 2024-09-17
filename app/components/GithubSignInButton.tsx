"use client";

import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { signIn } from "next-auth/react";
import GithubIcon from "@/public/github.svg";
import Image from "next/image";

export default function GithubSignInButton() {
  return (
    <Button
      onClick={async () => await signIn("github")}
      variant="outline"
      size="icon"
    >
      <Github className="w-4 h-4" />
      {/* <Image src={GithubIcon} alt="github icon" className="w-4 h-4" /> */}
    </Button>
  );
}
