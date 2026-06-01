import { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward } from 'lucide-react';

interface Track {
  label: string;
  file: string;
}

interface AudioPlayerProps {
  tracks: Track[];
  pageTitle?: string;
}

export default function AudioPlayer({ tracks, pageTitle = 'Listen' }: AudioPlayerProps) {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const track = tracks[currentTrack];

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, '0')}`;
  };

  const playTrack = (index: number) => {
    setCurrentTrack(index);
    setIsPlaying(true);
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const prev = () => {
    const idx = currentTrack > 0 ? currentTrack - 1 : tracks.length - 1;
    playTrack(idx);
  };

  const next = () => {
    const idx = currentTrack < tracks.length - 1 ? currentTrack + 1 : 0;
    playTrack(idx);
  };

  const onTimeUpdate = () => {
    if (!audioRef.current) return;
    setCurrentTime(audioRef.current.currentTime);
    setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
  };

  const onLoadedMetadata = () => {
    if (!audioRef.current) return;
    setDuration(audioRef.current.duration);
  };

  const onEnded = () => {
    if (currentTrack < tracks.length - 1) {
      playTrack(currentTrack + 1);
    } else {
      setIsPlaying(false);
      setCurrentTime(0);
      setProgress(0);
    }
  };

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    audioRef.current.currentTime = pct * duration;
  };

  useEffect(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.src = `/audio/${track.file}`;
      audioRef.current.load();
      audioRef.current.play().catch(() => setIsPlaying(false));
    }
  }, [currentTrack]);

  return (
    <div className="border-2 border-black bg-white">
      {/* Header */}
      <div className="border-b-2 border-black px-4 py-3 bg-black/[0.02]">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/50">{pageTitle}</p>
      </div>

      <audio ref={audioRef} onTimeUpdate={onTimeUpdate} onLoadedMetadata={onLoadedMetadata} onEnded={onEnded} />

      {/* Now playing */}
      <div className="px-4 py-3 border-b border-black/10">
        <p className="text-xs font-mono text-black/40">Now Playing</p>
        <p className="text-sm font-bold">{track.label}</p>
      </div>

      {/* Playlist */}
      <div className="border-b border-black/10 max-h-[160px] overflow-y-auto">
        {tracks.map((t, i) => (
          <button
            key={i}
            onClick={() => playTrack(i)}
            className={`w-full text-left px-4 py-2 text-xs font-mono transition-colors border-b border-black/5 last:border-0 ${
              i === currentTrack
                ? 'bg-black text-white'
                : 'text-black/70 hover:bg-black/[0.04]'
            }`}
          >
            <span className="mr-2 opacity-50">{String(i + 1).padStart(2, '0')}</span>
            {t.label}
          </button>
        ))}
      </div>

      {/* Controls */}
      <div className="px-4 py-4 space-y-2">
        {/* Progress bar */}
        <div className="cursor-pointer h-2 bg-black/10 rounded-none" onClick={seek}>
          <div className="h-full bg-black transition-all duration-200" style={{ width: `${progress}%` }} />
        </div>

        {/* Time */}
        <div className="flex justify-between text-[10px] font-mono text-black/40">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-4">
          <button onClick={prev} className="p-1 hover:bg-black/10 transition-colors" aria-label="Previous">
            <SkipBack className="w-4 h-4" />
          </button>
          <button
            onClick={togglePlay}
            className="w-10 h-10 bg-black text-white flex items-center justify-center hover:bg-gray-900 transition-colors"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
          </button>
          <button onClick={next} className="p-1 hover:bg-black/10 transition-colors" aria-label="Next">
            <SkipForward className="w-4 h-4" />
          </button>
        </div>

        {/* Track counter */}
        <p className="text-[10px] font-mono text-black/30 text-center">
          Track {currentTrack + 1} of {tracks.length}
        </p>
      </div>
    </div>
  );
}
