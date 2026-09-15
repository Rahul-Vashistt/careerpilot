import {
  FiSearch,
  FiPlus,
  FiCheck,
  FiX,
  FiArrowLeft,
  FiArrowRight,
} from "react-icons/fi";
import { skills } from "./skillsOption";
import { useState } from "react";

export default function SkillsStep() {
  const [selectedSkill, setSelectedSkill] = useState<string[]>(["JavaScript"]);
  const [inputSkill, setInputSkill] = useState("");

  const handleSkillToggle = (skillName: string) => {
    setSelectedSkill((prev) =>
      prev.includes(skillName)
        ? prev.filter((skill) => skill !== skillName)
        : [...prev, skillName],
    );
  };

  return (
    <div className="flex min-h-[90vh] items-center justify-center px-5 py-10 sm:px-6">
      <div className="w-full max-w-3xl">
        {/* Header */}
        <div className="mb-8 flex flex-col items-center text-center">
          <span className="mb-4 rounded-full border border-border bg-surface px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
            Step 3 of 6
          </span>

          <h1 className="font-geist text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            What do you already know?
          </h1>

          <p className="mt-3 max-w-md text-sm leading-6 text-muted">
            Select the skills and technologies you're familiar with. We'll use
            them to personalize your CareerPilot experience.
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-5">
          <FiSearch
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
          />

          <input
            name="inputSkill"
            value={inputSkill}
            onChange={(e) => setInputSkill(e.target.value)}
            type="text"
            placeholder="Search skills..."
            className="h-12 w-full rounded-xl border border-border bg-surface pl-11 pr-4 text-sm text-text-primary shadow-sm outline-none transition-all placeholder:text-muted/70 hover:border-border-hover focus:border-primary/40 focus:ring-4 focus:ring-primary/5"
          />
        </div>

        {/* Popular skills */}
        <div className="mb-3 flex items-center justify-between">
          <p className="text-xs font-medium text-muted">Popular skills</p>

          <p className="text-xs text-muted/70">Select all that apply</p>
        </div>

        {/* Skills */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-5">
          {skills
            .filter(
              (skill) =>
                skill.category === "Programming" ||
                skill.category === "Frontend" ||
                skill.category === "Design",
            )
            .map((skill) => {
              const selected = selectedSkill.includes(skill.name);

              return (
                <button
                  key={skill.name}
                  type="button"
                  onClick={() => handleSkillToggle(skill.name)}
                  className={`group flex min-h-10 cursor-pointer items-center justify-between gap-2 rounded-xl border px-3.5 py-2.5 text-left text-sm font-medium transition-all active:scale-[0.98] ${
                    selected
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-surface text-text-primary hover:border-border-hover hover:bg-surface-hover"
                  }`}
                >
                  <span className="truncate text-xs">{skill.name}</span>

                  <span
                    className={`flex size-6 shrink-0 items-center justify-center rounded-full transition-colors ${
                      selected
                        ? "bg-primary-foreground/10 text-primary-foreground"
                        : "bg-surface-muted text-muted group-hover:bg-primary group-hover:text-primary-foreground"
                    }`}
                  >
                    {selected ? <FiCheck size={14} /> : <FiPlus size={14} />}
                  </span>
                </button>
              );
            })}
        </div>

        {/* Selected skills */}
        <div className="mt-8 rounded-xl border border-border bg-surface p-4">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <p className="text-sm font-semibold text-text-primary">
                Selected skills
              </p>

              <span className="flex size-5 items-center justify-center rounded-full bg-surface-muted text-[10px] font-semibold text-muted">
                {selectedSkill.length}
              </span>
            </div>

            {selectedSkill.length > 0 && (
              <button
                type="button"
                onClick={() => setSelectedSkill([])}
                className="cursor-pointer text-xs font-medium text-muted transition-colors hover:text-danger"
              >
                Clear all
              </button>
            )}
          </div>

          {selectedSkill.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {selectedSkill.map((skill) => (
                <button
                  key={skill}
                  type="button"
                  onClick={() => handleSkillToggle(skill)}
                  className="group flex cursor-pointer items-center gap-1.5 rounded-full border border-border bg-surface-muted px-3 py-1.5 text-xs font-medium text-text-primary transition-colors hover:border-danger/30 hover:text-danger"
                >
                  {skill}

                  <FiX
                    size={13}
                    className="text-muted transition-colors group-hover:text-danger"
                  />
                </button>
              ))}
            </div>
          ) : (
            <p className="py-2 text-xs text-muted">No skills selected yet.</p>
          )}
        </div>

        {/* Hint */}
        <p className="mt-4 text-center text-xs text-muted/70">
          You can always update your skills later.
        </p>

        {/* Navigation */}
        <div className="mt-8 flex items-center justify-between">
          <button
            type="button"
            className="flex cursor-pointer items-center gap-2 rounded-xl border border-border bg-surface px-5 py-2.5 text-sm font-medium text-text-primary transition-colors hover:border-border-hover hover:bg-surface-hover"
          >
            <FiArrowLeft size={16} />
            Back
          </button>

          <button
            type="button"
            className="flex cursor-pointer items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary-hover active:scale-[0.98]"
          >
            Continue
            <FiArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
