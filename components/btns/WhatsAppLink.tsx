import Link from "next/link";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  href: string;
  target?: string;
  rel?: string;
}

export default function WhatsAppLink({ children, className }: ContainerProps) {
  return (
    <Link
      href="https://wa.me/263719428436"
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </Link>
  );
}
