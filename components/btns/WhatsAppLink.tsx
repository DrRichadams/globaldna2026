import Link from "next/link";
import type { ReactNode } from "react";

interface WhatsAppLinkProps {
  children: ReactNode;
  className?: string;
  message: string;
}

export default function WhatsAppLink({
  children,
  className,
  message,
}: WhatsAppLinkProps) {
  const href = `https://wa.me/263719428436?text=${encodeURIComponent(message)}`;

  return (
    <Link
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </Link>
  );
}
