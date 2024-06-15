import { cn } from "@/lib/utils";
import { IconCheck } from "@irsyadadl/paranoid";
import { ReactNode } from "react";

const Roadmap = ({ children }: { children: ReactNode }) => {
  return (
    <section className="flex w-full flex-col items-center -space-y-1.5">
      {children}
    </section>
  );
};

export type RoadmapItemProps = {
  date: string;
  title: string;
  number?: number;
  isCompleted?: boolean;
  isDashedBorderHidden?: boolean;
};

const RoadmapItem = ({
  date,
  title,
  number,
  isCompleted,
  isDashedBorderHidden,
}: RoadmapItemProps) => {
  return (
    <div className="inline-flex w-[210px] items-center gap-x-5 sm:w-[280px]">
      <div className="flex flex-col items-center">
        <div
          className={cn(
            "flex size-[22px] items-center justify-center rounded-[6px] border text-paragraph-md sm:size-[30px] sm:text-paragraph-lg",
            isCompleted
              ? "border-app-green-dark/35 bg-app-green-light shadow-lg shadow-app-green-light/75"
              : "border-app-border bg-white drop-shadow-sm",
          )}
        >
          {isCompleted ? (
            <IconCheck className="size-[18px] text-white sm:size-6" />
          ) : (
            number
          )}
        </div>
        <div
          className={cn(
            "h-[60px] w-[1px] border border-dashed border-black/20 sm:h-20",
            isDashedBorderHidden ? "opacity-0" : "",
          )}
        />
      </div>
      <div
        className={cn(
          "flex flex-col *:text-paragraph-md sm:*:text-paragraph-lg",
          isCompleted ? "opacity-30" : "",
        )}
      >
        <p className="text-app-text/40">{date}</p>
        <p className="max-w-[180px] sm:max-w-[230px]">{title}</p>
      </div>
    </div>
  );
};

export { RoadmapItem, Roadmap };
