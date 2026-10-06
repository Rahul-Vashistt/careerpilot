import { IconType } from "react-icons";

type PropsNavigation = {
  title: string;
  icon: IconType;
  active: boolean;
  onClick: () => void;
};

export function NavigationButton({
  title,
  icon: Icon,
  active,
  onClick,
}: PropsNavigation) {
  return (
    <button
      onClick={onClick}
      className={`group flex w-full items-center gap-3.5 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 cursor-pointer ${
        active
          ? "bg-background text-primary shadow-sm"
          : "text-background/70 hover:bg-background/8 hover:text-background"
      }`}
    >
      <Icon
        className={`shrink-0 text-[19px] transition-colors duration-200 ${
          active
            ? "text-primary"
            : "text-background/60 group-hover:text-background"
        }`}
      />

      <span className="truncate">{title}</span>
    </button>
  );
}
