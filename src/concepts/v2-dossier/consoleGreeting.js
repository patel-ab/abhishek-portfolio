let hasRun = false;

export const printConsoleGreeting = () => {
  if (hasRun || typeof console === "undefined") return;
  hasRun = true;

  const accent = "color: #2a5aa0; font-weight: 600;";
  const muted = "color: #6e716a;";
  const reset = "color: inherit; font-weight: normal;";

  console.log(
    "%cExhibit 00 %c/ Devtools\n%cYou opened the console. Most visitors don't.\n\nThis site is a React + Vite SPA, hand-built, no template.\nIf you're reviewing the code and not just the page:\n  %chttps://github.com/patel-ab/abhishek-portfolio\n\n%cSay hi: %cabhishekvpatel20@gmail.com",
    accent,
    muted,
    reset,
    accent,
    reset,
    accent
  );
};
