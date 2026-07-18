import { useState, useEffect } from "react";

/**
 * useTypewriter
 * Types out text character by character. Accepts either a single string
 * or an array of strings — arrays are cycled through automatically
 * (type -> pause -> delete -> move to next string -> repeat).
 *
 * @param {string|string[]} input - the string (or list of strings) to type
 * @param {object} options
 * @param {number} options.speed - ms per character when typing (default 80)
 * @param {boolean} options.loop - whether to delete/retype (single string)
 *   or cycle to the next string (array) after finishing (default true)
 * @param {number} options.pause - ms to hold the full text before deleting (default 1500)
 * @returns {string} the currently displayed (partial) text
 */
export function useTypewriter(input, { speed = 80, loop = true, pause = 1500 } = {}) {
  const texts = Array.isArray(input) ? input : [input];
  const key = texts.join("|");

  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  // Reset whenever the underlying list of strings changes
  useEffect(() => {
    setIndex(0);
    setDisplayed("");
    setDeleting(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  const current = texts[index % texts.length] ?? "";
  const isLastWord = index === texts.length - 1;

  useEffect(() => {
    let timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1));
      }, speed);
    } else if (!deleting && displayed.length === current.length) {
      // Keep looping if: multiple strings to cycle through, OR
      // a single string with loop=true
      if (texts.length > 1 || loop) {
        timeout = setTimeout(() => setDeleting(true), pause);
      }
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length - 1));
      }, speed / 2);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, current, speed, loop, pause, texts.length, isLastWord]);

  return displayed;
}

export default useTypewriter;