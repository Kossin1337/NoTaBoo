import React, { useState, useEffect } from "react";

type Theme = {
  name: string;
  background: string;
  primary: string;
  lighter: string;
  darker: string;
  text: string;
};

const themes: Theme[] = [
  {
    name: "blue",
    background: "#080808",
    primary: "#0080ff",
    lighter: "#66aaff",
    darker: "#003366",
    text: "#ffffff",
  },
  {
    name: "magenta",
    background: "#080808",
    primary: "#ff00ff",
    lighter: "#ff66ff",
    darker: "#660066",
    text: "#ffffff",
  },
  {
    name: "purple",
    background: "#080808",
    primary: "#8000ff",
    lighter: "#b366ff",
    darker: "#330066",
    text: "#ffffff",
  },
  {
    name: "orange",
    background: "#080808",
    primary: "#ff8000",
    lighter: "#ffc266",
    darker: "#663300",
    text: "#ffffff",
  },
  {
    name: "green",
    background: "#080808",
    primary: "#00ff80",
    lighter: "#66ffb3",
    darker: "#006633",
    text: "#ffffff",
  },
  {
    name: "white",
    background: "#fefefe",
    primary: "#8000ff",
    lighter: "#b366ff",
    darker: "#330066",
    text: "#333333",
  },
];

const Themes: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState("blue");

  function updateTheme(themeName: string) {
    setCurrentTheme(themeName);
  }

  useEffect(() => {
    const root = document.documentElement;
    const theme = themes.find((t) => t.name === currentTheme);
    if (theme) {
      root.style.setProperty("--background-color", theme.background);
      root.style.setProperty("--primary-color", theme.primary);
      root.style.setProperty("--lighter-color", theme.lighter);
      root.style.setProperty("--darker-color", theme.darker);
      root.style.setProperty("--text-color", theme.text);
    }
  }, [currentTheme]);

  return (
    <div className="w-full rounded-xl bg-bg-color bg-neutral-800 p-4">
      <h2 className="text-center uppercase text-text-color">Select a Theme</h2>
      <div className="mt-4 grid grid-cols-3 gap-3">
        {themes.map((theme: Theme) => (
          <button
            key={theme.name}
            style={{
              backgroundColor: theme.primary,
            }}
            className={`box-border h-[48px] w-[48px] rounded-full px-6 py-3 hover:bg-[${theme.darker}]`}
            onClick={() => updateTheme(theme.name)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Themes;
