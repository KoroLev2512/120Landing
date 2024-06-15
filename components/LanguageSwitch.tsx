import { Link } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const LanguageSwitch = () => {
  const path = usePathname();
  return (
    <div className="inline-flex items-center gap-x-4">
      <Link
        href={"/"}
        locale="ru"
        className={cn("text-paragraph-md", path === "/en" ? "" : "opacity-40")}
      >
        RU
      </Link>
      <Link
        href={"/"}
        locale="en"
        className={cn("text-paragraph-md", path === "/ru" ? "" : "opacity-40")}
      >
        EN
      </Link>
    </div>
  );
};

export default LanguageSwitch;
