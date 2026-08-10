import { Trees, Mountain, Landmark, Camera, Palette } from "lucide-react";

const prompts = [
  { name: "Nature", icon: Trees },
  { name: "Adventure", icon: Mountain },
  { name: "History", icon: Landmark },
  { name: "Photography", icon: Camera },
  { name: "Culture", icon: Palette },
];

export default function QuickPrompts({ onSelect }) {
  return (
    <div className="overflow-x-auto border-b border-slate-100 bg-white px-3 py-2.5 sm:px-5">
      <div className="mx-auto flex max-w-5xl gap-2">
        {prompts.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              onClick={() => onSelect(item.name)}
              className="
                flex
                shrink-0
                items-center
                gap-1.5
                rounded-full
                border
                border-slate-200
                bg-white
                px-3
                py-1.5
                text-xs
                font-medium
                text-slate-600
                transition-all
                hover:border-[#0E8388]
                hover:bg-[#E4F3F2]
                hover:text-[#0B5E63]
              "
            >
              <Icon size={13} />
              {item.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
