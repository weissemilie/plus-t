import * as React from "react";

import { cn } from "@/lib/utils";

const textLinkStyles =
  "text-brand-green underline underline-offset-4 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black rounded-sm";

export interface TextLinkProps extends React.ComponentProps<"a"> {
  /** Set for links that navigate to another site (opens in a new tab). Omit for mailto:/tel: links. */
  external?: boolean;
}

function TextLink({ className, external = false, ...props }: TextLinkProps) {
  return (
    <a
      className={cn(textLinkStyles, className)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    />
  );
}

export { TextLink };
