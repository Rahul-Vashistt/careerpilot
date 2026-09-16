"use client";

import { useState } from "react";
import {
  FiSearch,
  FiPlus,
  FiCheck,
  FiX,
  FiArrowLeft,
  FiArrowRight,
} from "react-icons/fi";
import { skills } from "./skillsOption";
import StepHeader from "../StepHeader";
import StepNavigation from "../StepNavigation";

type Props = {
  onNext: () => void;
  onBack: () => void;
};

export default function SkillsStep({ onNext, onBack }: Props) {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [inputSkill, setInputSkill] = useState("");
  const [searchResults, setSearchResults] = useState<(typeof skills)[number][]>(
    [],
  );
  const [limitError, setLimitError] = useState("");

  const handleSkillToggle = (skillName: string) => {
    setSelectedSkills((prev) => {
      if (prev.includes(skillName)) {
        setLimitError("");
        return prev.filter((skill) => skill !== skillName);
      }

      if (prev.length >= 15) {
        setLimitError("Maximum skill limit reached");
        return prev;
      }

      setLimitError("");
      return [...prev, skillName];
    });
  };

  const handleSearch = (value: string) => {
    setInputSkill(value);

    const query = value.trim().toLowerCase();
    if (!query) {
      setSearchResults([]);
      return;
    }

    const filtered = skills.filter((skill) =>
      skill.name.toLowerCase().includes(query.toLowerCase()),
    );
    setSearchResults(filtered.slice(0, 5));
  };

  const clearSearch = () => {
    setLimitError("");
    setInputSkill("");
    setSearchResults([]);
  };

  const popularSkills = skills
    .filter((skill) =>
      ["Programming", "Frontend", "Design", "AI / ML"].includes(skill.category),
    )
    .slice(0, 30);

  return (
    <div className="flex min-h-[90vh] items-center justify-center px-4 py-10 sm:px-6">
      <div className="w-full max-w-4xl space-y-4 p-2">
        <StepHeader
          currentStep={3}
          title="What do you already know?"
          description={
            <>
              Select the skills and technologies you are familiar with.
              <br />
              This helps us personalize your experience"
            </>
          }
        />

        {/* Search Bar */}
        <div className="relative mb-6 mt-6">
          <FiSearch
            size={18}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
          />

          <input
            name="inputSkill"
            value={inputSkill}
            onChange={(e) => handleSearch(e.target.value)}
            type="text"
            placeholder="Search technologies, tools, skills..."
            className="h-12 w-full rounded-xl border border-border bg-surface pl-11 pr-10 text-sm text-text-primary shadow-sm outline-none transition-all placeholder:text-muted/60 hover:border-border-hover"
          />

          {inputSkill && (
            <button
              type="button"
              onClick={clearSearch}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 rounded-md p-1 text-muted transition-colors hover:bg-surface-hover hover:text-text-primary"
            >
              <FiX size={16} />
            </button>
          )}

          {searchResults.length > 0 && (
            <div className="absolute left-0 top-full z-30 mt-2 w-72 rounded-2xl border border-border bg-surface p-2 shadow-xl">
              <p className="px-3 pb-2 pt-1.5 text-xs font-medium text-muted">
                Suggestions
              </p>

              <div className="space-y-1">
                {searchResults.map((skill) => {
                  const isSelected = selectedSkills.includes(skill.name);

                  return (
                    <button
                      key={skill.name}
                      type="button"
                      onClick={() => handleSkillToggle(skill.name)}
                      className={`group flex w-full cursor-pointer items-center justify-between rounded-xl px-3 py-2 text-left text-sm font-medium transition-colors ${
                        isSelected
                          ? "bg-surface-muted text-text-primary"
                          : "text-text-primary hover:bg-surface-hover"
                      }`}
                    >
                      <span>{skill.name}</span>

                      {isSelected ? (
                        <FiCheck size={15} className="text-text-primary" />
                      ) : (
                        <FiPlus
                          size={15}
                          className="text-muted transition-colors group-hover:text-text-primary"
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Popular Skills */}
        <div className="mb-3 flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted">
            Popular skills
          </p>
          <span className="text-xs text-muted/70">Select all that apply</span>
        </div>

        <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6">
          {popularSkills.map((skill) => {
            const isSelected = selectedSkills.includes(skill.name);

            return (
              <button
                key={skill.name}
                type="button"
                onClick={() => handleSkillToggle(skill.name)}
                className={`group flex min-h-11 cursor-pointer items-center justify-between gap-2 rounded-xl border px-3 py-2 text-left text-sm font-medium transition-all active:scale-[0.98] ${
                  isSelected
                    ? "border-primary bg-primary text-primary-foreground shadow-sm"
                    : "border-border bg-surface text-text-primary hover:border-border-hover hover:bg-surface-hover"
                }`}
              >
                <span className="truncate text-xs font-medium">
                  {skill.name}
                </span>

                <span
                  className={`flex size-5 shrink-0 items-center justify-center rounded-full transition-colors ${
                    isSelected
                      ? "bg-primary-foreground/20 text-primary-foreground"
                      : "bg-surface-muted text-muted group-hover:bg-border group-hover:text-text-primary"
                  }`}
                >
                  {isSelected ? <FiCheck size={12} /> : <FiPlus size={12} />}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Skills */}
        <div className="mt-6 rounded-xl border border-border bg-surface p-4">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-text-primary">
                Selected skills
              </span>

              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-surface-muted px-1.5 text-[11px] font-semibold text-muted">
                {selectedSkills.length}
              </span>

              <span className="text-xs text-muted/60">/ 15 max</span>
              {limitError && (
                <span className="text-xs text-danger">{limitError}</span>
              )}
            </div>

            {selectedSkills.length > 0 && (
              <button
                type="button"
                onClick={() => {
                  setSelectedSkills([]);
                  setLimitError("");
                }}
                className="text-xs font-medium text-muted transition-colors hover:text-danger cursor-pointer"
              >
                Clear all
              </button>
            )}
          </div>

          {selectedSkills.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {selectedSkills.map((skill) => (
                <button
                  key={skill}
                  type="button"
                  onClick={() => handleSkillToggle(skill)}
                  className="group inline-flex items-center gap-1.5 rounded-full border border-border bg-surface-muted py-1 pl-3 pr-2 text-xs font-medium text-text-primary transition-colors hover:border-danger/40 hover:text-danger"
                >
                  <span>{skill}</span>
                  <FiX
                    size={13}
                    className="text-muted transition-colors group-hover:text-danger"
                  />
                </button>
              ))}
            </div>
          ) : (
            <p className="text-xs text-muted/70">No skills selected yet.</p>
          )}
        </div>

        <p className="mt-4 text-center text-xs text-muted/60">
          You can always add or swap these later in settings.
        </p>

        <StepNavigation
          onNext={onNext}
          onBack={onBack}
          nextLabel={selectedSkills.length === 0 ? "Skip" : "Continue"}
        />
      </div>
    </div>
  );
}
