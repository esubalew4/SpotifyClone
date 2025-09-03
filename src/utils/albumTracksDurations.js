export const convertToSecond = (duration) => {
  const parts = duration.split(":").map(Number);
  if (parts.length === 2) {
    const [min, sec] = parts;
    return min * 60 + sec;
  }

  if (parts.length === 3) {
    const [hr, min, sec] = parts;
    return hr * 3600 + min * 60 + sec;
  }
  return 0;
};

export const formatDuration = (seconds) => {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  if (h > 0) {
    return `${h} hr ${String(m).padStart(2, "0")} min ${String(s).padStart(
      2,
      "0"
    )} sec `;
  }
  return `${m} min ${String(s).padStart(2, "0")} sec`;
};
