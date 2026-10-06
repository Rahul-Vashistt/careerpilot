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
      type="button"
      onClick={onClick}
      className={`group flex w-full cursor-pointer items-center gap-3.5 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
        active
          ? "bg-white text-[#111111] shadow-sm"
          : "text-white/70 hover:bg-white/8 hover:text-white"
      }`}
    >
      <Icon
        className={`shrink-0 text-[19px] transition-colors duration-200 ${
          active ? "text-[#111111]" : "text-white/60 group-hover:text-white"
        }`}
      />

      <span className="truncate">{title}</span>
    </button>
  );
}
