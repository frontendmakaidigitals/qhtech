// @ts-nocheck
import React, { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const AccordionContext = React.createContext({});
const useAccordion = () => React.useContext(AccordionContext);

export function AccordionContainer({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("grid grid-cols-2 gap-1", className)}>{children}</div>
  );
}
export function AccordionWrapper({ children }) {
  return <div>{children}</div>;
}

export function Accordion({
  children,
  multiple,
  defaultValue,
}: {
  children: ReactNode;
  multiple?: boolean;
  defaultValue?: string | undefined | string[];
}) {
  const [activeIndex, setActiveIndex] = React.useState(
    multiple ? (defaultValue ? [defaultValue] : []) : [defaultValue]
  );

  function onChangeIndex(value) {
    setActiveIndex((currentActiveIndex) => {
      if (!multiple) {
        return value === currentActiveIndex ? null : value;
      }

      if (currentActiveIndex.includes(value)) {
        return currentActiveIndex.filter((i) => i !== value);
      }

      return [...currentActiveIndex, value];
    });
  }

  return React.Children.map(children, (child) => {
    const value = child.props.value;
    const isActive = multiple
      ? Array.isArray(activeIndex) && activeIndex.includes(value)
      : Array.isArray(activeIndex)
      ? activeIndex[0].includes(value)
      : activeIndex === value;

    return (
      <AccordionContext.Provider value={{ isActive, value, onChangeIndex }}>
        <>{child}</>
      </AccordionContext.Provider>
    );
  });
}

export function AccordionItem({ children, value }) {
  const { isActive } = useAccordion();

  return (
    <div
      className={` border-b border-slate-600/40 overflow-hidden mb-2  ${
        isActive ? "active  bg-transparent" : "bg-transparent "
      }
    `}
      value={value}
    >
      {children}
    </div>
  );
}

export function AccordionHeader({
  children,
  icon,
}: {
  children: ReactNode;
  icon?: any;
}) {
  const { isActive, value, onChangeIndex } = useAccordion();

  return (
    <motion.div
      className={`p-4 cursor-pointer transition-all rounded-lg text-xl font-semibold hover:bg-slate-100/10  hover:text-slate-100 flex justify-between items-center ${
        isActive ? "active text-slate-200" : " bg-transparent text-slate-50"
      }
      `}
      onClick={() => onChangeIndex(value)}
    >
      {children}
      {icon ? (
        <div
          className={`${
            isActive
              ? "rotate-45 bg-[#363842] text-[#94959D]"
              : "rotate-0 bg-[#5A5A5F] text-[#191A1F]"
          } transition-transform size-8  flex justify-center items-center rounded-full`}
        >
          {icon}
        </div>
      ) : (
        <>
          <ChevronDown
            className={`${
              isActive ? "rotate-180 " : "rotate-0 "
            } transition-transform`}
          />
        </>
      )}
    </motion.div>
  );
}

export function AccordionPanel({ children }) {
  const { isActive } = useAccordion();

  return (
    <AnimatePresence initial={true}>
      {isActive && (
        <motion.div
          initial={{ height: 0, overflow: "hidden" }}
          animate={{ height: "auto", overflow: "hidden" }}
          exit={{ height: 0 }}
          transition={{ type: "spring", duration: 0.3, bounce: 0 }}
          className={` bg-transparent
          `}
        >
          <motion.article
            initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
            exit={{
              clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
            }}
            transition={{
              type: "spring",
              duration: 0.4,
              bounce: 0,
            }}
            className={`p-3 bg-transparent text-slate-300 `}
          >
            {children}
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
