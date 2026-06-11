import { useRef,useState,useEffect } from "react";


const VedioPlayer = ({ src,height='400px' }) => {
  const vidRef = useRef(null);
  const progressRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [volume, setVolume] = useState(0.8);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("0:00");
  const [showControls, setShowControls] = useState(true);

  const fmt = (s) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec < 10 ? "0" : ""}${sec}`;
  };

  const togglePlay = () => {
    if (vidRef.current.paused) vidRef.current.play();
    else vidRef.current.pause();
  };

  const toggleMute = () => {
    vidRef.current.muted = !muted;
    setMuted(!muted);
  };

  const handleVolume = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const vol = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    vidRef.current.volume = vol;
    setVolume(vol);
    setMuted(vol === 0);
  };

  const handleSeek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    vidRef.current.currentTime = pct * vidRef.current.duration;
  };

  const handleFullscreen = () => {
    if (document.fullscreenElement) document.exitFullscreen();
    else vidRef.current.closest(".vp-wrap").requestFullscreen();
  };

  useEffect(() => {
    const vid = vidRef.current;
    const onPlay  = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    const onTime  = () => {
      setProgress((vid.currentTime / vid.duration) * 100 || 0);
      setCurrentTime(fmt(vid.currentTime));
    };
    const onMeta  = () => setDuration(fmt(vid.duration));
    vid.addEventListener("play",            onPlay);
    vid.addEventListener("pause",           onPause);
    vid.addEventListener("timeupdate",      onTime);
    vid.addEventListener("loadedmetadata",  onMeta);
    return () => {
      vid.removeEventListener("play",           onPlay);
      vid.removeEventListener("pause",          onPause);
      vid.removeEventListener("timeupdate",     onTime);
      vid.removeEventListener("loadedmetadata", onMeta);
    };
  }, []);

  return (
    <div
      className="vp-wrap"
      style={{ position: "relative", borderRadius: 16, overflow: "hidden", background: "#000", height }}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => playing && setShowControls(false)}
    >
      <video
        ref={vidRef}
        src={src}
        loop
        muted
        autoPlay
        playsInline
        preload="metadata"
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        onClick={togglePlay}
      />

      {/* Controls overlay */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        background: "linear-gradient(transparent, rgba(0,0,0,0.75))",
        padding: "32px 14px 12px",
        opacity: showControls || !playing ? 1 : 0,
        transition: "opacity 0.25s",
      }}>
        {/* Progress bar */}
        <div onClick={handleSeek} style={{ height: 4, background: "rgba(255,255,255,0.3)", borderRadius: 999, marginBottom: 10, cursor: "pointer", position: "relative" }}>
          <div style={{ width: `${progress}%`, height: "100%", background: "#0ea5e9", borderRadius: 999 }} />
          <div style={{ position: "absolute", top: "50%", left: `${progress}%`, transform: "translate(-50%,-50%)", width: 12, height: 12, background: "#0ea5e9", borderRadius: "50%" }} />
        </div>

        {/* Controls row */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>

          {/* Play / Pause */}
          <button onClick={togglePlay} style={{ background: "none", border: "none", cursor: "pointer", color: "#fff", display: "flex", padding: 0 }}>
            {playing
              ? <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
              : <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            }
          </button>

          {/* Mute */}
          <button onClick={toggleMute} style={{ background: "none", border: "none", cursor: "pointer", color: "#fff", display: "flex", padding: 0 }}>
            {muted
              ? <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>
              : <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>
            }
          </button>

          {/* Volume slider */}
          <div onClick={handleVolume} style={{ width: 70, height: 4, background: "rgba(255,255,255,0.3)", borderRadius: 999, cursor: "pointer", flexShrink: 0 }}>
            <div style={{ width: `${muted ? 0 : volume * 100}%`, height: "100%", background: "#fff", borderRadius: 999 }} />
          </div>

          {/* Time */}
          <span style={{ color: "rgba(255,255,255,0.85)", fontSize: 12, fontFamily: "monospace", whiteSpace: "nowrap" }}>
            {currentTime} / {duration}
          </span>

          <div style={{ flex: 1 }} />

          {/* Fullscreen */}
          <button onClick={handleFullscreen} style={{ background: "none", border: "none", cursor: "pointer", color: "#fff", display: "flex", padding: 0 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VedioPlayer;