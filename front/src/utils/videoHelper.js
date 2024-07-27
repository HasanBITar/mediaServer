
export function formatDuration(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);

    const hoursFormatted = hours > 0 ? `${hours}:` : '';
    const minutesFormatted = hours > 0 || minutes > 0 ? `${String(minutes).padStart(2, '0')}:` : '0:';
    const secondsFormatted = String(secs).padStart(2, '0');

    return `${hoursFormatted}${minutesFormatted}${secondsFormatted}`;
}
