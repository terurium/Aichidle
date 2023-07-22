import { t } from "i18next";
import React, { useState } from "react";
import Autosuggest from "react-autosuggest";
import { useTranslation } from "react-i18next";
import {
  countries,
  getCountryKana,
  getCountryName,
  sanitizeCountryName,
} from "../domain/countries";

interface CountryInputProps {
  currentGuess: string;
  setCurrentGuess: (guess: string) => void;
}

export function CountryInput({
  currentGuess,
  setCurrentGuess,
}: CountryInputProps) {
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const { i18n } = useTranslation();

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={({ value }) =>
        setSuggestions(
          countries
            .map((c) => [
              getCountryName(i18n.resolvedLanguage, c),
              getCountryKana(i18n.resolvedLanguage, c),
            ])
            .filter(
              ([countryName, countryKana]) =>
                sanitizeCountryName(countryName).includes(
                  sanitizeCountryName(value)
                ) ||
                sanitizeCountryName(countryKana).includes(
                  sanitizeCountryName(value)
                )
            )
            .map((s) => s[0])
        )
      }
      onSuggestionsClearRequested={() => setSuggestions([])}
      getSuggestionValue={(suggestion) => suggestion}
      renderSuggestion={(suggestion) => (
        <div className="border-2 dark:bg-slate-800 dark:text-slate-100">
          {suggestion}
        </div>
      )}
      containerProps={{
        className: "border-2 flex-auto relative",
      }}
      inputProps={{
        className: "w-full dark:bg-slate-800 dark:text-slate-100",
        placeholder: t("予想を入力"),
        value: currentGuess,
        onChange: (_e, { newValue }) => setCurrentGuess(newValue),
      }}
      renderSuggestionsContainer={({ containerProps, children }) => (
        <div
          {...containerProps}
          className={`${containerProps.className} absolute bottom-full w-full bg-white mb-1 divide-x-2 max-h-52 overflow-auto`}
        >
          {children}
        </div>
      )}
    />
  );
}
