import { forwardRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button, type ButtonProps } from "@/components/ui/button";

interface PcbLineProps {
  className?: string;
}

function PcbLine({ className }: PcbLineProps) {
  return (
    <motion.div
      className={cn(
        "absolute h-[1px] bg-gradient-to-r from-primary/50 to-primary",
        className
      )}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.3 }}
    />
  );
}

export interface PcbButtonProps extends ButtonProps {
  glowOnHover?: boolean;
}

const PcbButton = forwardRef<HTMLButtonElement, PcbButtonProps>(
  ({ className, glowOnHover = true, ...props }, ref) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div className="relative">
        <Button
          ref={ref}
          className={cn(
            "relative overflow-hidden transition-all duration-300",
            glowOnHover &&
              "hover:shadow-[0_0_20px_rgba(var(--primary)/0.5)] hover:bg-gradient-to-r hover:from-primary hover:to-primary/80",
            className
          )}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          {...props}
        />
        {isHovered && (
          <>
            <PcbLine className="left-[60%] top-0 w-10 origin-left" />
            <PcbLine className="left-[40%] bottom-0 w-12 origin-left" />
            <PcbLine className="top-[40%] right-0 w-8 origin-right" />
          </>
        )}
      </div>
    );
  }
);
PcbButton.displayName = "PcbButton";

export { PcbButton };
