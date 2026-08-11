// ============================================
// ANI3D - COMPLETE WEBSITE SCRIPT (FULLY FIXED)
// Category Filter Working Properly
// Year Filter Added
// Classic - Description Show | Out of Frame - Description Show
// Multiple Genres Support Added
// Cards Match CSS Structure Perfectly
// ============================================

// ======================== PREVIEW VIDEOS DATA ========================
const classicPreview = [
  { 
    id: 1, 
    title: "The Odyssey - 2.39:1 Immersive 3D Trailer", 
    contentType: "Trailer ", 
    genre: "Action , Fantasy Epic , Quest Sword & Sandal , Adventure ,Drama , Fantasy , Action Epic , Adventure Epic", 
    language: "english",
    year: "2026",
    streamUrl: "https://files.ani3d.in/0:/classic/web/The%20Odyssey%20-%202.39%20Classic%203D%20Trailer.mp4?inline=true", 
    downloadUrl: "https://files.ani3d.in/0:/classic/master/The%20Odyssey%20-%202.39%20Classic%203D%20Trailer.mp4", 
    thumb: "https://i.ibb.co/7xnqHjYJ/The-Odyssey-Thumbnail.png",
    desc: "This trailer was converted using Owl3D's custom 3D settings, which provide full control over the stereoscopic conversion process, including depth strength, convergence, rendering style, and other advanced parameters commonly used to fine-tune the 3D viewing experience.\n\nWith a wide range of customization options available, from subtle depth adjustments to stronger pop-out effects, Owl3D offers more than 20 possible output variations. As part of The 3D Experience Project, I will continue experimenting with different settings in future uploads to identify the most natural, immersive, and enjoyable stereoscopic 3D experience possible.\n CURRENT OWL3D CONVERSION SETTINGS\n OUTPUT SETTINGS:\n• Output file format: VIDEO\n• Output resolution: 1080p (free version max)\n• Output codec: H264\n• Output container: MP4\n• Output encoding setting: Quality optimized\n• GPU encoding: Enabled\n• Preserve content aspect ratio: Enabled\n• Fast Re-export 3D: Off\n\n DEPTH & 3D ENGINE:\n• Depth backend: Precision V2\n• Black bar detection: Enabled\n• Enhanced colour fidelity: Enabled\n• Depth temporal stability: Low\n• Output 3D effect: Strength: 7, Style: Real: 5\n• Output 3D convergence: Auto (Pop-out)\n• Output render mode: Standard (both sides)\n• Output render profile: CUSTOM\n \n NOTES & RECOMMENDATIONS\n  \nThese settings provide strong depth with a natural pop-out effect. Feel free to tweak them for your own conversions!\n\nIf you enjoy the current depth profile and stereoscopic presentation, you're welcome to use these settings as a reference or starting point for your own 3D conversions. Feel free to experiment and adjust them to suit your personal preferences and the type of 3D experience you're aiming to create.\n"  },
  { 
    id: 2, 
    title: "The Odyssey - 1.43:1 Immersive 3D Trailer", 
    contentType: "Trailer ", 
    genre: "Action , Fantasy Epic , Quest Sword & Sandal , Adventure ,Drama , Fantasy , Action Epic , Adventure Epic", 
    language: "english",
    year: "2026",
    streamUrl: "https://files.ani3d.in/0:/classic/web/The%20Odyssey%20-%201.43%20Classic%203D%20Trailer.mp4?inline=true", 
    downloadUrl: "https://files.ani3d.in/0:/classic/master/The%20Odyssey%20-%201.43%20Classic%203D%20Trailer.mov", 
    thumb: "https://i.ibb.co/Y4wxJsPp/The-Odyssey-3-D-1-43.png",
desc: "This trailer was converted using Owl3D's custom 3D settings, which provide full control over the stereoscopic conversion process, including depth strength, convergence, rendering style, and other advanced parameters commonly used to fine-tune the 3D viewing experience.\n\nWith a wide range of customization options available, from subtle depth adjustments to stronger pop-out effects, Owl3D offers more than 20 possible output variations. As part of The 3D Experience Project, I will continue experimenting with different settings in future uploads to identify the most natural, immersive, and enjoyable stereoscopic 3D experience possible.\n\n\n CURRENT OWL3D CONVERSION SETTINGS\n\n\nOUTPUT SETTINGS:\n• Output file format: VIDEO\n• Output resolution: 1080p (free version max)\n• Output codec: H264\n• Output container: MKV\n• Output encoding setting: Quality + File size optimized\n• GPU encoding: Enabled\n• Preserve content aspect ratio: Enabled\n• Fast Re-export 3D: Off\n\nDEPTH & 3D ENGINE:\n• Depth backend: Precision V2\n• Black bar detection: Enabled\n• Enhanced colour fidelity: Enabled\n• Depth temporal stability: Low\n• Output 3D effect: Strength: 4.5, Style: Real: 5\n• Output 3D convergence: Auto (Pop-out)\n• Output render mode: Standard (both sides)\n• Output render profile: CUSTOM\n\n\n NOTES & RECOMMENDATIONS\n\n\nThe lower strength (4.5) keeps depth natural and comfortable for longer viewing. Perfect for epic, large-screen 3D content.\n\nIf you enjoy the current depth profile and stereoscopic presentation, you're welcome to use these settings as a reference or starting point for your own 3D conversions. Feel free to experiment and adjust them to suit your personal preferences and the type of 3D experience you're aiming to create."  },
  { 
    id: 3, 
    title: "Spider-Man Brand New Day - Immersive 3D Trailer", 
    contentType: "Trailer", 
    genre: "Adventure , Marvel , Superhero , Urban Adventure , Action , Adventure , Fantasy , Sci-Fi", 
    language: "english",
    year: "2026",
    streamUrl: "https://files.ani3d.in/0:/classic/web/Spiderman%20Brand%20New%20Day%20-%20Classic%203D%20Trailer.mp4?inline=true", 
    downloadUrl: "https://files.ani3d.in/0:/classic/master/Spiderman%20Brand%20New%20Day%20-%20Classic%203D%20Trailer.mov", 
    thumb: "https://i.ibb.co/VWQ6PwbM/Spider-Man-Brand-New-Day-Classic-3-D-Trailer.png",
    desc: "This trailer was converted using Owl3D's custom 3D settings, which provide full control over the stereoscopic conversion process, including depth strength, convergence, rendering style, and other advanced parameters commonly used to fine-tune the 3D viewing experience.\n\nWith a wide range of customization options available, from subtle depth adjustments to stronger pop-out effects, Owl3D offers more than 20 possible output variations. As part of The 3D Experience Project, I will continue experimenting with different settings in future uploads to identify the most natural, immersive, and enjoyable stereoscopic 3D experience possible.\n\n\nCURRENT OWL3D CONVERSION SETTINGS\n\n\n OUTPUT SETTINGS:\n• Output file format: VIDEO\n• Output resolution: 1080p (free version max)\n• Output codec: H265\n• Output container: MP4\n• Output encoding setting: Quality + File size optimized\n• GPU encoding: Enabled\n• Preserve content aspect ratio: Enabled\n• Fast Re-export 3D: Off\n\n DEPTH & 3D ENGINE:\n• Depth backend: Precision V2\n• Black bar detection: Enabled\n• Enhanced colour fidelity: Enabled\n• Depth temporal stability: Low\n• Output 3D effect: Strength: 5.5, Style: Real: 5\n• Output 3D convergence: Auto (Pop-out)\n• Output render mode: Standard (both sides)\n• Output render profile: CUSTOM\n\n\n NOTES & RECOMMENDATIONS\n\n\nThe H265 encoding makes this ideal for streaming or storage without sacrificing visual quality. Great balance of depth and performance.\n\nIf you enjoy the current depth profile and stereoscopic presentation, you're welcome to use these settings as a reference or starting point for your own 3D conversions. Feel free to experiment and adjust them to suit your personal preferences and the type of 3D experience you're aiming to create."  },
  { 
    id: 4, 
    title: "Alpha - Immersive 3D Trailer", 
    contentType: "Trailer", 
    genre: "Action , Adventure , Thriller ", 
    language: "Hindi",
    year: "2026",
    streamUrl: "https://files.ani3d.in/0:/classic/web/Alpha%20-%20Classic%203D%20Teaser.mp4?inline=true", 
    downloadUrl: "https://files.ani3d.in/0:/classic/master/Alpha%20-%20Classic%203D%20Teaser.mov", 
    thumb: "https://i.ibb.co/N285QgYG/Alpha-Classic-3-D.png",
desc: "This trailer was converted using Owl3D's custom 3D settings, which provide full control over the stereoscopic conversion process, including depth strength, convergence, rendering style, and other advanced parameters commonly used to fine-tune the 3D viewing experience.\n\nWith a wide range of customization options available, from subtle depth adjustments to stronger pop-out effects, Owl3D offers more than 20 possible output variations. As part of The 3D Experience Project, I will continue experimenting with different settings in future uploads to identify the most natural, immersive, and enjoyable stereoscopic 3D experience possible.\n\n\nCURRENT OWL3D CONVERSION SETTINGS\n\n\n OUTPUT SETTINGS:\n• Output file format: VIDEO\n• Output resolution: 1080p (free version max)\n• Output codec: H264\n• Output container: MKV\n• Output encoding setting: Quality + File size optimized\n• GPU encoding: Enabled\n• Preserve content aspect ratio: Enabled\n• Fast Re-export 3D: Off\n\nDEPTH & 3D ENGINE:\n• Depth backend: Precision V2\n• Black bar detection: Enabled\n• Enhanced colour fidelity: Enabled\n• Depth temporal stability: Low\n• Output 3D effect: Strength: 5.5, Style: Real: 5\n• Output 3D convergence: Auto (Pop-out)\n• Output render mode: Standard (both sides)\n• Output render profile: CUSTOM\n\n\n NOTES & RECOMMENDATIONS\n\n\nA solid all-rounder setting—good depth with efficient compression. Perfect for action scenes that need punch without overwhelming the viewer.\n\nIf you enjoy the current depth profile and stereoscopic presentation, you're welcome to use these settings as a reference or starting point for your own 3D conversions. Feel free to experiment and adjust them to suit your personal preferences and the type of 3D experience you're aiming to create."  }
];

const outframePreview = [
  { 
    id: 101,
    title: "Varanasi To The World - Out Of The Frame 3D Trailer",
    contentType: "Trailer",
    genre: "Telugu , Action Epic , Adventure Epic , Fantasy Epic , Globetrotting Adventure , Action , Adventure , Fantasy , Thriller",
    language: "Telugu",
    year: "2026",
    streamUrl: "https://files.ani3d.in/0:/outframe/web/Varanasi%20To%20The%20World%20-%20Out%20Of%20The%20Frame%203D%20Trailer.mp4?inline=true",
    downloadUrl: "https://files.ani3d.in/0:/outframe/web/Varanasi%20To%20The%20World%20-%20Out%20Of%20The%20Frame%203D%20Trailer.mp4",
    thumb: "https://i.ibb.co/RGccXYg7/Varanasi-Frame-Break-3-D-Trailer.png",
    desc: "Out of Frame 3D is 2D content that mimics a 3D visual style where selected elements extend beyond the frame or black screen area to create a pop-out effect. It brings specific elements forward to deliver a 3D-like experience without the need for glasses or special devices.\n\nThis video was edited by Aniket Bhosale in Adobe Premiere Pro using masking tools to isolate elements and build layered depth.\n\nThe intent is to make 2D content feel more 3D and immersive."
  },
  { 
    id: 102,
    title: "Dhurandhar: The Revenge Official Hindi - Out Of The Frame 3D Trailer",
    contentType: "Trailer",
    genre: "Hindi , Action Epic , Gangster , Political Thriller , Spy , Action , Crime",
    language: "hindi",
    year: "2026",
    streamUrl: "https://files.ani3d.in/0:/outframe/web/Dhurandhar%20The%20Revenge%20Hindi%20-%20Out%20Of%20The%20Frame%203D%20Trailer.mp4?inline=true",
    downloadUrl: "https://files.ani3d.in/0:/outframe/web/Dhurandhar%20The%20Revenge%20Hindi%20-%20Out%20Of%20The%20Frame%203D%20Trailer.mp4",
    thumb: "https://i.ibb.co/yms1CKFd/Dhurandhar-The-Revenge-Official-Hindi-Out-Of-The-Frame-3-D.png",
    desc: "Out of Frame 3D is 2D content that mimics a 3D visual style where selected elements extend beyond the frame or black screen area to create a pop-out effect. It brings specific elements forward to deliver a 3D-like experience without the need for glasses or special devices.\n\nThis video was edited by Aniket Bhosale in Adobe Premiere Pro using masking tools to isolate elements and build layered depth.\n\nThe intent is to make 2D content feel more 3D and immersive."
  },
  { 
    id: 103,
    title: "Toxic: Introducing Raya - Out Of The Frame 3D Trailer",
    contentType: "Trailer",
    genre: "Kannada , Action , Crime , Drama , Thriller",
    language: "hindi",
    year: "2027",
    streamUrl: "https://files.ani3d.in/0:/outframe/web/Toxic%20Introducing%20Raya%20-%20Out%20Of%20The%20Frame%203D%20Trailer.mp4?inline=true",
    downloadUrl: "https://files.ani3d.in/0:/outframe/web/Toxic%20Introducing%20Raya%20-%20Out%20Of%20The%20Frame%203D%20Trailer.mp4",
    thumb: "https://i.ibb.co/whVRzs9b/Toxic-3D.png",
    desc: "Out of Frame 3D is 2D content that mimics a 3D visual style where selected elements extend beyond the frame or black screen area to create a pop-out effect. It brings specific elements forward to deliver a 3D-like experience without the need for glasses or special devices.\n\nThis video was edited by Aniket Bhosale in Adobe Premiere Pro using masking tools to isolate elements and build layered depth.\n\nThe intent is to make 2D content feel more 3D and immersive."
  },
  { 
    id: 104,
    title: "Spider-Man: Brand New Day - Out Of The Frame 3D Trailer",
   contentType: "Trailer", 
    genre: "Adventure , Marvel , Superhero , Urban Adventure , Action , Adventure , Fantasy , Sci-Fi", 
    language: "english",
    year: "2026",
    streamUrl: "https://files.ani3d.in/0:/outframe/web/Spider-Man%20Brand%20New%20Day%20-%20Out%20Of%20The%20Frame%203D%20Trailer.mp4?inline=true",
    downloadUrl: "https://files.ani3d.in/0:/outframe/web/Spider-Man%20Brand%20New%20Day%20-%20Out%20Of%20The%20Frame%203D%20Trailer.mp4",
    thumb: "https://i.ibb.co/hRNTs2qM/Brand-New-Day-3-D.png",
    desc: "Out of Frame 3D is 2D content that mimics a 3D visual style where selected elements extend beyond the frame or black screen area to create a pop-out effect. It brings specific elements forward to deliver a 3D-like experience without the need for glasses or special devices.\n\nThis video was edited by Aniket Bhosale in Adobe Premiere Pro using masking tools to isolate elements and build layered depth.\n\nThe intent is to make 2D content feel more 3D and immersive."
  },
];

// ======================== CATEGORY FILTERS ========================
const contentTypes = [
  { id: "all", name: "All", icon: "fa-film" },
  { id: "movie", name: "Movie", icon: "fa-film" },
  { id: "short-film", name: "Short Film", icon: "fa-video" },
  { id: "feature-film", name: "Feature Film", icon: "fa-film" },
  { id: "trailer", name: "Trailer", icon: "fa-trailer" },
  { id: "official-trailer", name: "Official Trailer", icon: "fa-trailer" },
  { id: "teaser", name: "Teaser", icon: "fa-trailer" },
  { id: "clip", name: "Clip", icon: "fa-scissors" },
  { id: "tv-show", name: "TV Show", icon: "fa-tv" },
  { id: "web-series", name: "Web Series", icon: "fa-wifi" },
  { id: "documentary", name: "Documentary", icon: "fa-file-video" },
  { id: "music-video", name: "Music Video", icon: "fa-music" },
  { id: "anime", name: "Anime", icon: "fa-dragon" },
  { id: "gameplay", name: "Gameplay", icon: "fa-gamepad" },
  { id: "review", name: "Review", icon: "fa-star" },
  { id: "tutorial", name: "Tutorial", icon: "fa-chalkboard-teacher" },
  { id: "vlog", name: "Vlog", icon: "fa-video" },
  { id: "podcast", name: "Podcast", icon: "fa-microphone" },
  { id: "livestream", name: "Livestream", icon: "fa-broadcast" },
  { id: "interview", name: "Interview", icon: "fa-users" },
  { id: "sports-clip", name: "Sports Clip", icon: "fa-running" },
  { id: "match-highlights", name: "Match Highlights", icon: "fa-trophy" },
  { id: "comparison", name: "Comparison", icon: "fa-balance-scale" },
  { id: "experiment", name: "Experiment", icon: "fa-flask" },
  { id: "demonstration", name: "Demonstration", icon: "fa-hand-paper" },
  { id: "showcase", name: "Showcase", icon: "fa-star" },
  { id: "presentation", name: "Presentation", icon: "fa-chart-bar" },
  { id: "case-study", name: "Case Study", icon: "fa-book" },
  { id: "software-demo", name: "Software Demo", icon: "fa-code" },
  { id: "app-demo", name: "App Demo", icon: "fa-mobile-alt" },
  { id: "product-demo", name: "Product Demo", icon: "fa-box" },
  { id: "hardware-showcase", name: "Hardware Showcase", icon: "fa-microchip" },
  { id: "tech-review", name: "Tech Review", icon: "fa-laptop" },
  { id: "device-comparison", name: "Device Comparison", icon: "fa-balance-scale" },
  { id: "camera-test", name: "Camera Test", icon: "fa-camera" },
  { id: "spatial-video", name: "Spatial Video", icon: "fa-cube" },
  { id: "ai-2d-to-3d-conversion", name: "AI 2D to 3D Conversion", icon: "fa-cube" },
  { id: "native-stereoscopic-3d", name: "Native Stereoscopic 3D", icon: "fa-cube" },
  { id: "sbs-3d", name: "SBS 3D", icon: "fa-cube" },
  { id: "frame-break-3d", name: "Frame Break 3D", icon: "fa-cube" },
  { id: "pop-out-3d", name: "Pop-Out 3D", icon: "fa-cube" },
  { id: "classic-stereoscopic-3d", name: "Classic Stereoscopic 3D", icon: "fa-cube" },
  { id: "vr-experience", name: "VR Experience", icon: "fa-vr-cardboard" },
  { id: "vr-demo", name: "VR Demo", icon: "fa-vr-cardboard" },
  { id: "vr-gameplay", name: "VR Gameplay", icon: "fa-gamepad" },
  { id: "ar-demo", name: "AR Demo", icon: "fa-cube" },
  { id: "spatial-experience", name: "Spatial Experience", icon: "fa-cube" },
  { id: "360-video", name: "360° Video", icon: "fa-circle" },
  { id: "180-video", name: "180° Video", icon: "fa-circle" },
  { id: "advertisement", name: "Advertisement", icon: "fa-ad" },
  { id: "commercial", name: "Commercial", icon: "fa-ad" },
  { id: "psa", name: "PSA", icon: "fa-bullhorn" },
  { id: "opening-sequence", name: "Opening Sequence", icon: "fa-play" },
  { id: "intro", name: "Intro", icon: "fa-play" },
  { id: "outro", name: "Outro", icon: "fa-stop" },
  { id: "motion-graphics", name: "Motion Graphics", icon: "fa-cogs" },
  { id: "logo-animation", name: "Logo Animation", icon: "fa-cogs" },
  { id: "title-sequence", name: "Title Sequence", icon: "fa-film" },
  { id: "fan-edit", name: "Fan Edit", icon: "fa-cut" },
  { id: "montage", name: "Montage", icon: "fa-film" },
  { id: "compilation", name: "Compilation", icon: "fa-layer-group" },
  { id: "time-lapse", name: "Time-lapse", icon: "fa-clock" },
  { id: "hyperlapse", name: "Hyperlapse", icon: "fa-clock" },
  { id: "slow-motion", name: "Slow Motion", icon: "fa-forward" },
  { id: "screen-recording", name: "Screen Recording", icon: "fa-desktop" }
];

const languages = [
  { id: "all", name: "All", icon: "fa-globe" },
  { id: "english", name: "English", icon: "fa-language" },
  { id: "spanish", name: "Spanish", icon: "fa-language" },
  { id: "french", name: "French", icon: "fa-language" },
  { id: "german", name: "German", icon: "fa-language" },
  { id: "italian", name: "Italian", icon: "fa-language" },
  { id: "portuguese", name: "Portuguese", icon: "fa-language" },
  { id: "brazilian-portuguese", name: "Brazilian Portuguese", icon: "fa-language" },
  { id: "dutch", name: "Dutch", icon: "fa-language" },
  { id: "russian", name: "Russian", icon: "fa-language" },
  { id: "ukrainian", name: "Ukrainian", icon: "fa-language" },
  { id: "polish", name: "Polish", icon: "fa-language" },
  { id: "czech", name: "Czech", icon: "fa-language" },
  { id: "slovak", name: "Slovak", icon: "fa-language" },
  { id: "hungarian", name: "Hungarian", icon: "fa-language" },
  { id: "romanian", name: "Romanian", icon: "fa-language" },
  { id: "bulgarian", name: "Bulgarian", icon: "fa-language" },
  { id: "serbian", name: "Serbian", icon: "fa-language" },
  { id: "croatian", name: "Croatian", icon: "fa-language" },
  { id: "slovenian", name: "Slovenian", icon: "fa-language" },
  { id: "bosnian", name: "Bosnian", icon: "fa-language" },
  { id: "albanian", name: "Albanian", icon: "fa-language" },
  { id: "greek", name: "Greek", icon: "fa-language" },
  { id: "turkish", name: "Turkish", icon: "fa-language" },
  { id: "swedish", name: "Swedish", icon: "fa-language" },
  { id: "norwegian", name: "Norwegian", icon: "fa-language" },
  { id: "danish", name: "Danish", icon: "fa-language" },
  { id: "finnish", name: "Finnish", icon: "fa-language" },
  { id: "icelandic", name: "Icelandic", icon: "fa-language" },
  { id: "estonian", name: "Estonian", icon: "fa-language" },
  { id: "latvian", name: "Latvian", icon: "fa-language" },
  { id: "lithuanian", name: "Lithuanian", icon: "fa-language" },
  { id: "hindi", name: "Hindi", icon: "fa-language" },
  { id: "marathi", name: "Marathi", icon: "fa-language" },
  { id: "gujarati", name: "Gujarati", icon: "fa-language" },
  { id: "punjabi", name: "Punjabi", icon: "fa-language" },
  { id: "bengali", name: "Bengali", icon: "fa-language" },
  { id: "assamese", name: "Assamese", icon: "fa-language" },
  { id: "odia", name: "Odia", icon: "fa-language" },
  { id: "bhojpuri", name: "Bhojpuri", icon: "fa-language" },
  { id: "maithili", name: "Maithili", icon: "fa-language" },
  { id: "konkani", name: "Konkani", icon: "fa-language" },
  { id: "sanskrit", name: "Sanskrit", icon: "fa-language" },
  { id: "urdu", name: "Urdu", icon: "fa-language" },
  { id: "kashmiri", name: "Kashmiri", icon: "fa-language" },
  { id: "dogri", name: "Dogri", icon: "fa-language" },
  { id: "sindhi", name: "Sindhi", icon: "fa-language" },
  { id: "telugu", name: "Telugu", icon: "fa-language" },
  { id: "tamil", name: "Tamil", icon: "fa-language" },
  { id: "kannada", name: "Kannada", icon: "fa-language" },
  { id: "malayalam", name: "Malayalam", icon: "fa-language" },
  { id: "tulu", name: "Tulu", icon: "fa-language" },
  { id: "nepali", name: "Nepali", icon: "fa-language" },
  { id: "japanese", name: "Japanese", icon: "fa-language" },
  { id: "korean", name: "Korean", icon: "fa-language" },
  { id: "mandarin-chinese", name: "Mandarin Chinese", icon: "fa-language" },
  { id: "cantonese", name: "Cantonese", icon: "fa-language" },
  { id: "taiwanese-hokkien", name: "Taiwanese Hokkien", icon: "fa-language" },
  { id: "hakka", name: "Hakka", icon: "fa-language" },
  { id: "mongolian", name: "Mongolian", icon: "fa-language" },
  { id: "thai", name: "Thai", icon: "fa-language" },
  { id: "vietnamese", name: "Vietnamese", icon: "fa-language" },
  { id: "indonesian", name: "Indonesian", icon: "fa-language" },
  { id: "malay", name: "Malay", icon: "fa-language" },
  { id: "filipino", name: "Filipino", icon: "fa-language" },
  { id: "tagalog", name: "Tagalog", icon: "fa-language" },
  { id: "cebuano", name: "Cebuano", icon: "fa-language" },
  { id: "burmese", name: "Burmese", icon: "fa-language" },
  { id: "khmer", name: "Khmer", icon: "fa-language" },
  { id: "lao", name: "Lao", icon: "fa-language" },
  { id: "javanese", name: "Javanese", icon: "fa-language" },
  { id: "sundanese", name: "Sundanese", icon: "fa-language" },
  { id: "sinhala", name: "Sinhala", icon: "fa-language" },
  { id: "dhivehi", name: "Dhivehi", icon: "fa-language" },
  { id: "tibetan", name: "Tibetan", icon: "fa-language" },
  { id: "arabic", name: "Arabic", icon: "fa-language" },
  { id: "persian-farsi", name: "Persian (Farsi)", icon: "fa-language" },
  { id: "hebrew", name: "Hebrew", icon: "fa-language" },
  { id: "kurdish", name: "Kurdish", icon: "fa-language" },
  { id: "armenian", name: "Armenian", icon: "fa-language" },
  { id: "azerbaijani", name: "Azerbaijani", icon: "fa-language" },
  { id: "georgian", name: "Georgian", icon: "fa-language" },
  { id: "pashto", name: "Pashto", icon: "fa-language" },
  { id: "swahili", name: "Swahili", icon: "fa-language" },
  { id: "zulu", name: "Zulu", icon: "fa-language" },
  { id: "xhosa", name: "Xhosa", icon: "fa-language" },
  { id: "afrikaans", name: "Afrikaans", icon: "fa-language" },
  { id: "hausa", name: "Hausa", icon: "fa-language" },
  { id: "yoruba", name: "Yoruba", icon: "fa-language" },
  { id: "igbo", name: "Igbo", icon: "fa-language" },
  { id: "amharic", name: "Amharic", icon: "fa-language" },
  { id: "somali", name: "Somali", icon: "fa-language" },
  { id: "haitian-creole", name: "Haitian Creole", icon: "fa-language" },
  { id: "quechua", name: "Quechua", icon: "fa-language" },
  { id: "guarani", name: "Guarani", icon: "fa-language" },
  { id: "latin", name: "Latin", icon: "fa-language" },
  { id: "esperanto", name: "Esperanto", icon: "fa-language" },
  { id: "no-dialogue", name: "No Dialogue", icon: "fa-volume-mute" },
  { id: "silent", name: "Silent", icon: "fa-volume-mute" },
  { id: "instrumental", name: "Instrumental", icon: "fa-music" },
  { id: "british-english", name: "British English", icon: "fa-language" },
  { id: "chinese", name: "中文", icon: "fa-language" }
];

const genres = [
  { id: "all", name: "All", icon: "fa-star" },
  { id: "action", name: "Action", icon: "fa-fist-raised" },
  { id: "adventure", name: "Adventure", icon: "fa-compass" },
  { id: "animation", name: "Animation", icon: "fa-cat" },
  { id: "anime", name: "Anime", icon: "fa-dragon" },
  { id: "biography", name: "Biography", icon: "fa-user-tie" },
  { id: "comedy", name: "Comedy", icon: "fa-laugh" },
  { id: "crime", name: "Crime", icon: "fa-gavel" },
  { id: "documentary", name: "Documentary", icon: "fa-file-video" },
  { id: "drama", name: "Drama", icon: "fa-theater-masks" },
  { id: "family", name: "Family", icon: "fa-users" },
  { id: "fantasy", name: "Fantasy", icon: "fa-hat-wizard" },
  { id: "history", name: "History", icon: "fa-history" },
  { id: "horror", name: "Horror", icon: "fa-ghost" },
  { id: "music", name: "Music", icon: "fa-music" },
  { id: "musical", name: "Musical", icon: "fa-music" },
  { id: "mystery", name: "Mystery", icon: "fa-question-circle" },
  { id: "romance", name: "Romance", icon: "fa-heart" },
  { id: "sci-fi", name: "Sci-Fi", icon: "fa-rocket" },
  { id: "science-fiction", name: "Science Fiction", icon: "fa-rocket" },
  { id: "sport", name: "Sport", icon: "fa-running" },
  { id: "superhero", name: "Superhero", icon: "fa-mask" },
  { id: "suspense", name: "Suspense", icon: "fa-clock" },
  { id: "thriller", name: "Thriller", icon: "fa-bolt" },
  { id: "war", name: "War", icon: "fa-tank" },
  { id: "western", name: "Western", icon: "fa-horse-head" },
  { id: "reality", name: "Reality", icon: "fa-eye" },
  { id: "game-show", name: "Game Show", icon: "fa-gamepad" },
  { id: "talk-show", name: "Talk Show", icon: "fa-microphone" },
  { id: "news", name: "News", icon: "fa-newspaper" },
  { id: "educational", name: "Educational", icon: "fa-graduation-cap" },
  { id: "experimental", name: "Experimental", icon: "fa-flask" },
  { id: "short-film", name: "Short Film", icon: "fa-video" },
  { id: "independent", name: "Independent", icon: "fa-star" },
  { id: "silent", name: "Silent", icon: "fa-volume-mute" },
  { id: "noir", name: "Noir", icon: "fa-moon" },
  { id: "action-epic", name: "Action Epic", icon: "fa-fist-raised" },
  { id: "adventure-epic", name: "Adventure Epic", icon: "fa-compass" },
  { id: "fantasy-epic", name: "Fantasy Epic", icon: "fa-hat-wizard" },
  { id: "historical-epic", name: "Historical Epic", icon: "fa-history" },
  { id: "space-epic", name: "Space Epic", icon: "fa-rocket" },
  { id: "spy", name: "Spy", icon: "fa-user-secret" },
  { id: "spy-thriller", name: "Spy Thriller", icon: "fa-user-secret" },
  { id: "political-thriller", name: "Political Thriller", icon: "fa-gavel" },
  { id: "psychological-thriller", name: "Psychological Thriller", icon: "fa-brain" },
  { id: "crime-thriller", name: "Crime Thriller", icon: "fa-gavel" },
  { id: "tech-thriller", name: "Tech Thriller", icon: "fa-microchip" },
  { id: "survival-thriller", name: "Survival Thriller", icon: "fa-life-ring" },
  { id: "conspiracy", name: "Conspiracy", icon: "fa-shield-alt" },
  { id: "espionage", name: "Espionage", icon: "fa-user-secret" },
  { id: "military", name: "Military", icon: "fa-shield-alt" },
  { id: "tactical", name: "Tactical", icon: "fa-chess" },
  { id: "mercenary", name: "Mercenary", icon: "fa-skull-crossbones" },
  { id: "vigilante", name: "Vigilante", icon: "fa-mask" },
  { id: "revenge", name: "Revenge", icon: "fa-fist-raised" },
  { id: "assassin", name: "Assassin", icon: "fa-crosshairs" },
  { id: "hitman", name: "Hitman", icon: "fa-crosshairs" },
  { id: "martial-arts", name: "Martial Arts", icon: "fa-fist-raised" },
  { id: "hand-to-hand-combat", name: "Hand-to-Hand Combat", icon: "fa-fist-raised" },
  { id: "sword-fighting", name: "Sword Fighting", icon: "fa-sword" },
  { id: "gunfight", name: "Gunfight", icon: "fa-crosshairs" },
  { id: "chase", name: "Chase", icon: "fa-car" },
  { id: "heist", name: "Heist", icon: "fa-coins" },
  { id: "prison-break", name: "Prison Break", icon: "fa-lock-open" },
  { id: "rescue-mission", name: "Rescue Mission", icon: "fa-medkit" },
  { id: "undercover", name: "Undercover", icon: "fa-user-secret" },
  { id: "investigation", name: "Investigation", icon: "fa-search" },
  { id: "detective", name: "Detective", icon: "fa-search" },
  { id: "police", name: "Police", icon: "fa-shield-alt" },
  { id: "swat", name: "SWAT", icon: "fa-shield-alt" },
  { id: "cia", name: "CIA", icon: "fa-user-secret" },
  { id: "fbi", name: "FBI", icon: "fa-user-secret" },
  { id: "raw", name: "RAW", icon: "fa-user-secret" },
  { id: "intelligence", name: "Intelligence", icon: "fa-user-secret" },
  { id: "secret-agent", name: "Secret Agent", icon: "fa-user-secret" },
  { id: "quest", name: "Quest", icon: "fa-flag" },
  { id: "treasure-hunt", name: "Treasure Hunt", icon: "fa-map" },
  { id: "urban-adventure", name: "Urban Adventure", icon: "fa-city" },
  { id: "globetrotting-adventure", name: "Globetrotting Adventure", icon: "fa-globe" },
  { id: "space-adventure", name: "Space Adventure", icon: "fa-rocket" },
  { id: "jungle-adventure", name: "Jungle Adventure", icon: "fa-tree" },
  { id: "sea-adventure", name: "Sea Adventure", icon: "fa-ship" },
  { id: "island-adventure", name: "Island Adventure", icon: "fa-umbrella-beach" },
  { id: "survival", name: "Survival", icon: "fa-life-ring" },
  { id: "expedition", name: "Expedition", icon: "fa-mountain" },
  { id: "exploration", name: "Exploration", icon: "fa-binoculars" },
  { id: "lost-world", name: "Lost World", icon: "fa-globe" },
  { id: "time-travel", name: "Time Travel", icon: "fa-clock" },
  { id: "alternate-reality", name: "Alternate Reality", icon: "fa-cube" },
  { id: "parallel-universe", name: "Parallel Universe", icon: "fa-cube" },
  { id: "multiverse", name: "Multiverse", icon: "fa-cube" },
  { id: "mythology", name: "Mythology", icon: "fa-book" },
  { id: "folklore", name: "Folklore", icon: "fa-book" },
  { id: "fairy-tale", name: "Fairy Tale", icon: "fa-book" },
  { id: "magic", name: "Magic", icon: "fa-magic" },
  { id: "wizards", name: "Wizards", icon: "fa-hat-wizard" },
  { id: "dragons", name: "Dragons", icon: "fa-dragon" },
  { id: "knights", name: "Knights", icon: "fa-shield-alt" },
  { id: "kingdom", name: "Kingdom", icon: "fa-crown" },
  { id: "royalty", name: "Royalty", icon: "fa-crown" },
  { id: "medieval", name: "Medieval", icon: "fa-shield-alt" },
  { id: "sword-and-sandal", name: "Sword & Sandal", icon: "fa-sword" },
  { id: "high-fantasy", name: "High Fantasy", icon: "fa-hat-wizard" },
  { id: "low-fantasy", name: "Low Fantasy", icon: "fa-hat-wizard" },
  { id: "dark-fantasy", name: "Dark Fantasy", icon: "fa-moon" },
  { id: "urban-fantasy", name: "Urban Fantasy", icon: "fa-city" },
  { id: "cyberpunk", name: "Cyberpunk", icon: "fa-robot" },
  { id: "steampunk", name: "Steampunk", icon: "fa-cogs" },
  { id: "space-opera", name: "Space Opera", icon: "fa-rocket" },
  { id: "hard-sci-fi", name: "Hard Sci-Fi", icon: "fa-rocket" },
  { id: "soft-sci-fi", name: "Soft Sci-Fi", icon: "fa-rocket" },
  { id: "alien", name: "Alien", icon: "fa-ufo" },
  { id: "alien-invasion", name: "Alien Invasion", icon: "fa-ufo" },
  { id: "robot", name: "Robot", icon: "fa-robot" },
  { id: "android", name: "Android", icon: "fa-robot" },
  { id: "artificial-intelligence", name: "Artificial Intelligence", icon: "fa-brain" },
  { id: "virtual-reality", name: "Virtual Reality", icon: "fa-vr-cardboard" },
  { id: "augmented-reality", name: "Augmented Reality", icon: "fa-cube" },
  { id: "dystopian", name: "Dystopian", icon: "fa-skull" },
  { id: "post-apocalyptic", name: "Post-Apocalyptic", icon: "fa-skull" },
  { id: "future-tech", name: "Future Tech", icon: "fa-microchip" },
  { id: "space-colony", name: "Space Colony", icon: "fa-rocket" },
  { id: "space-exploration", name: "Space Exploration", icon: "fa-rocket" },
  { id: "terraforming", name: "Terraforming", icon: "fa-globe" },
  { id: "time-loop", name: "Time Loop", icon: "fa-clock" },
  { id: "time-paradox", name: "Time Paradox", icon: "fa-clock" },
  { id: "genetic-engineering", name: "Genetic Engineering", icon: "fa-dna" },
  { id: "cloning", name: "Cloning", icon: "fa-dna" },
  { id: "nanotechnology", name: "Nanotechnology", icon: "fa-microchip" },
  { id: "quantum", name: "Quantum", icon: "fa-atom" },
  { id: "simulation", name: "Simulation", icon: "fa-laptop" },
  { id: "supernatural", name: "Supernatural", icon: "fa-ghost" },
  { id: "paranormal", name: "Paranormal", icon: "fa-ghost" },
  { id: "ghost", name: "Ghost", icon: "fa-ghost" },
  { id: "haunted-house", name: "Haunted House", icon: "fa-house" },
  { id: "demon", name: "Demon", icon: "fa-skull" },
  { id: "exorcism", name: "Exorcism", icon: "fa-pray" },
  { id: "occult", name: "Occult", icon: "fa-book-dead" },
  { id: "possession", name: "Possession", icon: "fa-skull" },
  { id: "zombie", name: "Zombie", icon: "fa-skull" },
  { id: "vampire", name: "Vampire", icon: "fa-skull" },
  { id: "werewolf", name: "Werewolf", icon: "fa-skull" },
  { id: "monster", name: "Monster", icon: "fa-skull" },
  { id: "creature-feature", name: "Creature Feature", icon: "fa-skull" },
  { id: "kaiju", name: "Kaiju", icon: "fa-dragon" },
  { id: "slasher", name: "Slasher", icon: "fa-cut" },
  { id: "body-horror", name: "Body Horror", icon: "fa-skull" },
  { id: "folk-horror", name: "Folk Horror", icon: "fa-book" },
  { id: "psychological-horror", name: "Psychological Horror", icon: "fa-brain" },
  { id: "cosmic-horror", name: "Cosmic Horror", icon: "fa-globe" },
  { id: "survival-horror", name: "Survival Horror", icon: "fa-life-ring" },
  { id: "found-footage", name: "Found Footage", icon: "fa-video" },
  { id: "gothic-horror", name: "Gothic Horror", icon: "fa-moon" },
  { id: "coming-of-age", name: "Coming-of-Age", icon: "fa-user" },
  { id: "family-drama", name: "Family Drama", icon: "fa-users" },
  { id: "romantic-drama", name: "Romantic Drama", icon: "fa-heart" },
  { id: "historical-drama", name: "Historical Drama", icon: "fa-history" },
  { id: "political-drama", name: "Political Drama", icon: "fa-gavel" },
  { id: "sports-drama", name: "Sports Drama", icon: "fa-running" },
  { id: "medical-drama", name: "Medical Drama", icon: "fa-medkit" },
  { id: "courtroom-drama", name: "Courtroom Drama", icon: "fa-gavel" },
  { id: "crime-drama", name: "Crime Drama", icon: "fa-gavel" },
  { id: "social-drama", name: "Social Drama", icon: "fa-users" },
  { id: "slice-of-life", name: "Slice of Life", icon: "fa-user" },
  { id: "melodrama", name: "Melodrama", icon: "fa-theater-masks" },
  { id: "character-study", name: "Character Study", icon: "fa-user" },
  { id: "human-relationships", name: "Human Relationships", icon: "fa-users" },
  { id: "romantic-comedy", name: "Romantic Comedy", icon: "fa-laugh-beam" },
  { id: "romantic-fantasy", name: "Romantic Fantasy", icon: "fa-heart" },
  { id: "romantic-thriller", name: "Romantic Thriller", icon: "fa-heart" },
  { id: "love-story", name: "Love Story", icon: "fa-heart" },
  { id: "teen-romance", name: "Teen Romance", icon: "fa-heart" },
  { id: "period-romance", name: "Period Romance", icon: "fa-heart" },
  { id: "dark-comedy", name: "Dark Comedy", icon: "fa-skull" },
  { id: "satire", name: "Satire", icon: "fa-smile" },
  { id: "parody", name: "Parody", icon: "fa-smile" },
  { id: "slapstick", name: "Slapstick", icon: "fa-laugh" },
  { id: "screwball-comedy", name: "Screwball Comedy", icon: "fa-laugh" },
  { id: "buddy-comedy", name: "Buddy Comedy", icon: "fa-users" },
  { id: "family-comedy", name: "Family Comedy", icon: "fa-users" },
  { id: "teen-comedy", name: "Teen Comedy", icon: "fa-user" },
  { id: "workplace-comedy", name: "Workplace Comedy", icon: "fa-briefcase" },
  { id: "gangster", name: "Gangster", icon: "fa-gavel" },
  { id: "mafia", name: "Mafia", icon: "fa-gavel" },
  { id: "drug-cartel", name: "Drug Cartel", icon: "fa-coins" },
  { id: "organized-crime", name: "Organized Crime", icon: "fa-gavel" },
  { id: "serial-killer", name: "Serial Killer", icon: "fa-skull" },
  { id: "true-crime", name: "True Crime", icon: "fa-gavel" },
  { id: "prison", name: "Prison", icon: "fa-lock" },
  { id: "smuggling", name: "Smuggling", icon: "fa-box" },
  { id: "corruption", name: "Corruption", icon: "fa-hand-holding-usd" },
  { id: "white-collar-crime", name: "White Collar Crime", icon: "fa-hand-holding-usd" },
  { id: "cricket", name: "Cricket", icon: "fa-baseball-ball" },
  { id: "football-soccer", name: "Football", icon: "fa-futbol" },
  { id: "basketball", name: "Basketball", icon: "fa-basketball-ball" },
  { id: "baseball", name: "Baseball", icon: "fa-baseball-ball" },
  { id: "tennis", name: "Tennis", icon: "fa-table-tennis" },
  { id: "badminton", name: "Badminton", icon: "fa-table-tennis" },
  { id: "formula-1", name: "Formula 1", icon: "fa-car" },
  { id: "motorsport", name: "Motorsport", icon: "fa-car" },
  { id: "racing", name: "Racing", icon: "fa-car" },
  { id: "wrestling", name: "Wrestling", icon: "fa-fist-raised" },
  { id: "boxing", name: "Boxing", icon: "fa-fist-raised" },
  { id: "mma", name: "MMA", icon: "fa-fist-raised" },
  { id: "ufc", name: "UFC", icon: "fa-fist-raised" },
  { id: "kabaddi", name: "Kabaddi", icon: "fa-running" },
  { id: "hockey", name: "Hockey", icon: "fa-hockey-puck" },
  { id: "athletics", name: "Athletics", icon: "fa-running" },
  { id: "olympics", name: "Olympics", icon: "fa-olympic" },
  { id: "esports", name: "Esports", icon: "fa-gamepad" },
  { id: "chess", name: "Chess", icon: "fa-chess" },
  { id: "concert-live", name: "Concert", icon: "fa-music" },
  { id: "live-performance-music", name: "Live Performance", icon: "fa-microphone-alt" },
  { id: "music-video-genre", name: "Music Video", icon: "fa-music" },
  { id: "dance", name: "Dance", icon: "fa-dance" },
  { id: "singing", name: "Singing", icon: "fa-microphone" },
  { id: "orchestra", name: "Orchestra", icon: "fa-music" },
  { id: "classical-music", name: "Classical Music", icon: "fa-music" },
  { id: "rock", name: "Rock", icon: "fa-music" },
  { id: "pop", name: "Pop", icon: "fa-music" },
  { id: "hip-hop", name: "Hip Hop", icon: "fa-music" },
  { id: "rap", name: "Rap", icon: "fa-music" },
  { id: "jazz", name: "Jazz", icon: "fa-music" },
  { id: "edm", name: "EDM", icon: "fa-music" },
  { id: "folk-music", name: "Folk Music", icon: "fa-music" },
  { id: "nature", name: "Nature", icon: "fa-tree" },
  { id: "wildlife", name: "Wildlife", icon: "fa-paw" },
  { id: "environment", name: "Environment", icon: "fa-globe" },
  { id: "ocean", name: "Ocean", icon: "fa-water" },
  { id: "space", name: "Space", icon: "fa-rocket" },
  { id: "technology", name: "Technology", icon: "fa-microchip" },
  { id: "science", name: "Science", icon: "fa-flask" },
  { id: "culture", name: "Culture", icon: "fa-users" },
  { id: "society", name: "Society", icon: "fa-users" },
  { id: "politics", name: "Politics", icon: "fa-gavel" },
  { id: "crime-documentary", name: "Crime Documentary", icon: "fa-gavel" },
  { id: "sports-documentary", name: "Sports Documentary", icon: "fa-running" },
  { id: "music-documentary", name: "Music Documentary", icon: "fa-music" },
  { id: "travel-documentary", name: "Travel Documentary", icon: "fa-map" },
  { id: "food-documentary", name: "Food Documentary", icon: "fa-utensils" },
  { id: "behind-the-scenes-genre", name: "Behind the Scenes", icon: "fa-video-camera" },
  { id: "making-of-genre", name: "Making Of", icon: "fa-cogs" },
  { id: "interview-genre", name: "Interview", icon: "fa-users" },
  { id: "tv-show-genre", name: "TV Show", icon: "fa-tv" },
  { id: "web-series-genre", name: "Web Series", icon: "fa-wifi" },
  { id: "mini-series-genre", name: "Mini Series", icon: "fa-layer-group" },
  { id: "anthology-genre", name: "Anthology", icon: "fa-book" },
  { id: "sitcom-genre", name: "Sitcom", icon: "fa-laugh" },
  { id: "reality-show-genre", name: "Reality Show", icon: "fa-eye" },
  { id: "variety-show", name: "Variety Show", icon: "fa-tv" },
  { id: "podcast-genre", name: "Podcast", icon: "fa-microphone" },
  { id: "livestream-genre", name: "Livestream", icon: "fa-broadcast" },
  { id: "youtube-genre", name: "YouTube", icon: "fa-youtube" },
  { id: "youtube-shorts-genre", name: "YouTube Shorts", icon: "fa-youtube" },
  { id: "internet-genre", name: "Internet", icon: "fa-globe" },
  { id: "meme-genre", name: "Meme", icon: "fa-laugh-squint" },
  { id: "viral-genre", name: "Viral", icon: "fa-fire" },
  { id: "social-media-genre", name: "Social Media", icon: "fa-share-alt" },
  { id: "reel-genre", name: "Reel", icon: "fa-instagram" },
  { id: "short-video", name: "Short Video", icon: "fa-short-video" },
  { id: "gameplay-genre", name: "Gameplay", icon: "fa-gamepad" },
  { id: "walkthrough-genre", name: "Walkthrough", icon: "fa-map" },
  { id: "speedrun-genre", name: "Speedrun", icon: "fa-tachometer-alt" },
  { id: "cinematic-genre", name: "Cinematic", icon: "fa-film" },
  { id: "open-world", name: "Open World", icon: "fa-globe" },
  { id: "rpg", name: "RPG", icon: "fa-chess" },
  { id: "fps", name: "FPS", icon: "fa-crosshairs" },
  { id: "horror-game", name: "Horror Game", icon: "fa-ghost" },
  { id: "racing-game", name: "Racing Game", icon: "fa-car" },
  { id: "mobile-game", name: "Mobile Game", icon: "fa-mobile-alt" },
  { id: "pc-gaming", name: "PC Gaming", icon: "fa-laptop" },
  { id: "console-gaming", name: "Console Gaming", icon: "fa-gamepad" },
  { id: "vr-gaming", name: "VR Gaming", icon: "fa-vr-cardboard" },
  { id: "strategy-game", name: "Strategy", icon: "fa-chess" },
  { id: "survival-game", name: "Survival Game", icon: "fa-life-ring" },
  { id: "hollywood", name: "Hollywood", icon: "fa-film" },
  { id: "bollywood", name: "Bollywood", icon: "fa-film" },
  { id: "tollywood", name: "Tollywood", icon: "fa-film" },
  { id: "kollywood", name: "Kollywood", icon: "fa-film" },
  { id: "mollywood", name: "Mollywood", icon: "fa-film" },
  { id: "sandalwood", name: "Sandalwood", icon: "fa-film" },
  { id: "pollywood", name: "Pollywood", icon: "fa-film" },
  { id: "japanese-cinema", name: "Japanese Cinema", icon: "fa-film" },
  { id: "korean-cinema", name: "Korean Cinema", icon: "fa-film" },
  { id: "chinese-cinema", name: "Chinese Cinema", icon: "fa-film" },
  { id: "european-cinema", name: "European Cinema", icon: "fa-film" },
  { id: "international-cinema", name: "International Cinema", icon: "fa-globe" },
  { id: "kids", name: "Kids", icon: "fa-child" },
  { id: "teen", name: "Teen", icon: "fa-user" },
  { id: "young-adult", name: "Young Adult", icon: "fa-user" },
  { id: "adult", name: "Adult", icon: "fa-user" },
  { id: "family-friendly", name: "Family Friendly", icon: "fa-users" },
  { id: "live-action", name: "Live Action", icon: "fa-video" },
  { id: "cgi", name: "CGI", icon: "fa-cogs" },
  { id: "vfx", name: "VFX", icon: "fa-cogs" },
  { id: "motion-capture", name: "Motion Capture", icon: "fa-user" },
  { id: "stop-motion", name: "Stop Motion", icon: "fa-stop" },
  { id: "clay-animation", name: "Clay Animation", icon: "fa-cat" },
  { id: "2d-animation", name: "2D Animation", icon: "fa-cat" },
  { id: "3d-animation", name: "3D Animation", icon: "fa-cat" },
  { id: "anime-film", name: "Anime Film", icon: "fa-dragon" },
  { id: "animated-series", name: "Animated Series", icon: "fa-cat" },
  { id: "fan-film-genre", name: "Fan Film", icon: "fa-users" },
  { id: "indie-film", name: "Indie Film", icon: "fa-star" },
  { id: "student-film", name: "Student Film", icon: "fa-graduation-cap" },
  { id: "sbs-3d-genre", name: "SBS 3D", icon: "fa-cube" },
  { id: "side-by-side-3d", name: "Side-by-Side 3D", icon: "fa-cube" },
  { id: "stereoscopic-3d", name: "Stereoscopic 3D", icon: "fa-cube" },
  { id: "native-3d", name: "Native 3D", icon: "fa-cube" },
  { id: "ai-2d-to-3d", name: "AI 2D to 3D", icon: "fa-cube" },
  { id: "frame-break", name: "Frame Break", icon: "fa-cube" },
  { id: "pop-out", name: "Pop-Out", icon: "fa-cube" },
  { id: "depth-showcase", name: "Depth Showcase", icon: "fa-cube" },
  { id: "before-and-after-genre", name: "Before & After", icon: "fa-arrows-alt-h" },
  { id: "comparison-3d", name: "Comparison", icon: "fa-balance-scale" },
  { id: "owl3d", name: "Owl3D", icon: "fa-cube" },
  { id: "spatial-video-genre", name: "Spatial Video", icon: "fa-cube" },
  { id: "apple-vision-pro", name: "Apple Vision Pro", icon: "fa-headset" },
  { id: "visionos", name: "VisionOS", icon: "fa-headset" },
  { id: "vr-headset", name: "VR Headset", icon: "fa-headset" },
  { id: "ar-glasses", name: "AR Glasses", icon: "fa-headset" },
  { id: "xreal", name: "XREAL", icon: "fa-headset" },
  { id: "meta-quest", name: "Meta Quest", icon: "fa-headset" },
  { id: "3d-tv", name: "3D TV", icon: "fa-tv" },
  { id: "3d-projector", name: "3D Projector", icon: "fa-film" },
  { id: "anaglyph-3d", name: "Anaglyph 3D", icon: "fa-cube" },
  { id: "glasses-free-3d", name: "Glasses-Free 3D", icon: "fa-cube" },
  { id: "mobile-vr", name: "Mobile VR", icon: "fa-mobile-alt" },
  { id: "stereo-camera", name: "Stereo Camera", icon: "fa-camera" },
  { id: "marvel", name: "Marvel", icon: "fa-star" },
  { id: "dc", name: "DC", icon: "fa-star" },
  { id: "pixar", name: "Pixar", icon: "fa-star" },
  { id: "disney", name: "Disney", icon: "fa-star" },
  { id: "dreamworks", name: "DreamWorks", icon: "fa-star" },
  { id: "studio-ghibli", name: "Studio Ghibli", icon: "fa-star" },
  { id: "star-wars", name: "Star Wars", icon: "fa-star" },
  { id: "jurassic-park", name: "Jurassic Park", icon: "fa-dragon" },
  { id: "harry-potter", name: "Harry Potter", icon: "fa-hat-wizard" },
  { id: "lord-of-the-rings", name: "The Lord of the Rings", icon: "fa-ring" },
  { id: "spider-man", name: "Spider-Man", icon: "fa-star" },
  { id: "batman", name: "Batman", icon: "fa-star" },
  { id: "superman", name: "Superman", icon: "fa-star" },
  { id: "godzilla", name: "Godzilla", icon: "fa-dragon" },
  { id: "king-kong", name: "King Kong", icon: "fa-dragon" },
  { id: "pokemon", name: "Pokémon", icon: "fa-star" },
  { id: "naruto", name: "Naruto", icon: "fa-star" },
  { id: "one-piece", name: "One Piece", icon: "fa-star" },
  { id: "dragon-ball", name: "Dragon Ball", icon: "fa-star" },
  { id: "demon-slayer", name: "Demon Slayer", icon: "fa-star" }
];

const years = [
  { id: "all", name: "All", icon: "fa-calendar" },
  { id: "2024", name: "2024", icon: "fa-calendar" },
  { id: "2025", name: "2025", icon: "fa-calendar" },
  { id: "2026", name: "2026", icon: "fa-calendar" },
  { id: "2027", name: "2027", icon: "fa-calendar" }
];

// ======================== STATE ========================
let currentMainTab = "content";
let currentSubFilter = "all";
let currentSearch = "";
let currentVideos = [];

// ======================== RENDER PREVIEW GRIDS ========================
function renderPreview(gridId, videos, showDesc = true) {
  const grid = document.getElementById(gridId);
  if (!grid) {
    console.log("Grid not found:", gridId);
    return;
  }
  
  let filteredVideos = [...videos];
  
  // Apply filters
  if (currentMainTab === "content" && currentSubFilter !== "all") {
    filteredVideos = filteredVideos.filter(v => 
      v.contentType && v.contentType.toLowerCase() === currentSubFilter.toLowerCase()
    );
  } else if (currentMainTab === "languages" && currentSubFilter !== "all") {
    filteredVideos = filteredVideos.filter(v => 
      v.language && v.language.toLowerCase() === currentSubFilter.toLowerCase()
    );
  } else if (currentMainTab === "genres" && currentSubFilter !== "all") {
    filteredVideos = filteredVideos.filter(v => {
      if (!v.genre) return false;
      const genresList = v.genre.split(',').map(g => g.trim().toLowerCase());
      return genresList.includes(currentSubFilter.toLowerCase());
    });
  } else if (currentMainTab === "years" && currentSubFilter !== "all") {
    filteredVideos = filteredVideos.filter(v => 
      v.year && v.year.toString() === currentSubFilter
    );
  }
  
  // Apply search
  if (currentSearch) {
    const searchLower = currentSearch.toLowerCase();
    filteredVideos = filteredVideos.filter(v =>
      (v.title && v.title.toLowerCase().includes(searchLower)) ||
      (v.desc && v.desc.toLowerCase().includes(searchLower))
    );
  }
  
  // Store filtered videos
  if (gridId === "classicGridPreview") {
    currentVideos = filteredVideos;
  }
  
  if (filteredVideos.length === 0) {
    grid.innerHTML = `
      <div class="no-results-home">
        <i class="fas fa-video-slash"></i>
        <h3>No videos found</h3>
        <button class="reset-btn-home" onclick="resetFilters()">Reset Filters</button>
      </div>
    `;
    return;
  }
  
  grid.innerHTML = filteredVideos.map(v => {
    // Multiple genres display with bullet separator
    const genreDisplay = v.genre ? v.genre.split(',').map(g => g.trim()).join(' • ') : v.genre || 'N/A';
    
    // Description truncation
    let descText = v.desc || '';
    let isLong = descText.length > 120;
    let shortDesc = isLong ? descText.substring(0, 120) + '...' : descText;
    let descId = 'desc-' + v.id;
    
    // Escape description for JavaScript
    let escapedDesc = descText.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/'/g, "\\'");
    
    return `
    <div class="feature-card" 
         data-id="${v.id}" 
         data-file="${v.streamUrl}" 
         data-filetype="embed"
         data-thumb="${v.thumb || ''}"
         data-download="${v.downloadUrl}"
         data-title="${v.title}" 
         data-desc="${escapedDesc}"
         data-genre="${v.genre}" 
         data-lang="${v.language}"
         data-contenttype="${v.contentType}"
         data-year="${v.year || 'N/A'}">
      <div class="card-thumb" style="background-image: url('${v.thumb}');">
        <div class="play-overlay"><i class="fas fa-play-circle"></i></div>
        <div class="card-badge">${gridId === 'classicGridPreview' ? '🎬 Immersive 3D' : '🔥 POP-OUT'}</div>
      </div>
      <div class="card-info">
        <h3>${v.title}</h3>
        ${showDesc && v.desc ? `
          <div class="card-desc-wrapper">
            <div class="card-desc" id="${descId}">${shortDesc}</div>
            ${isLong ? `<button class="read-more-btn" onclick="toggleDescription('${descId}', '${escapedDesc.replace(/\n/g, '\\n')}')">Read More</button>` : ''}
          </div>
        ` : ''}
        <div class="card-tags">
          <span class="tag genre"><i class="fas fa-mask"></i> ${genreDisplay}</span>
          <span class="tag language"><i class="fas fa-language"></i> ${v.language}</span>
          <span class="tag content"><i class="fas fa-tag"></i> ${v.contentType}</span>
          <span class="tag year"><i class="fas fa-calendar"></i> ${v.year || 'N/A'}</span>
        </div>
        <div class="card-actions">
          <button class="action-btn stream-btn-card stream-btn" data-id="${v.id}"><i class="fas fa-play"></i> Stream</button>
          <button class="action-btn download-btn-card" onclick="event.stopPropagation(); window.open('${v.downloadUrl || ''}', '_blank')"><i class="fas fa-download"></i> Download</button>
        </div>
      </div>
    </div>
  `;
  }).join("");
  
  // Add click listeners for cards
  document.querySelectorAll(`#${gridId} .feature-card`).forEach(card => {
    card.addEventListener("click", function(e) {
      // Ignore if click is on button or read more
      if (e.target.closest('.action-btn') || e.target.closest('.read-more-btn')) return;
      
      const video = {
        title: this.dataset.title, 
        desc: this.dataset.desc, 
        genre: this.dataset.genre,
        language: this.dataset.lang, 
        year: this.dataset.year,
        file: this.dataset.file,
        fileType: this.dataset.filetype,
        thumb: this.dataset.thumb,
        downloadUrl: this.dataset.download,
        showDesc: showDesc
      };
      openModal(video);
    });
  });
  
  // Add click listeners for stream buttons
  document.querySelectorAll(`#${gridId} .stream-btn`).forEach(btn => {
    btn.addEventListener("click", function(e) {
      e.stopPropagation();
      const card = this.closest('.feature-card');
      if (card) {
        const video = {
          title: card.dataset.title, 
          desc: card.dataset.desc, 
          genre: card.dataset.genre,
          language: card.dataset.lang, 
          year: card.dataset.year,
          file: card.dataset.file,
          fileType: card.dataset.filetype,
          thumb: card.dataset.thumb,
          downloadUrl: card.dataset.download,
          showDesc: showDesc
        };
        openModal(video);
      }
    });
  });
}

// ======================== TOGGLE DESCRIPTION FUNCTION ========================
function toggleDescription(descId, fullDesc) {
  const descDiv = document.getElementById(descId);
  const card = descDiv ? descDiv.closest('.feature-card') : null;
  const btn = card ? card.querySelector('.read-more-btn') : null;
  
  if (descDiv && btn) {
    if (descDiv.textContent.includes('...')) {
      descDiv.textContent = fullDesc;
      btn.textContent = 'Read Less';
    } else {
      descDiv.textContent = fullDesc.substring(0, 120) + '...';
      btn.textContent = 'Read More';
    }
  }
}

// ======================== FILTER FUNCTIONS ========================
function applyFilters() {
  renderPreview("classicGridPreview", classicPreview, true);
  renderPreview("outFrameGridPreview", outframePreview, true);
  updateVideoCount();
}

function updateVideoCount() {
  const classicCount = document.querySelectorAll('#classicGridPreview .feature-card').length;
  const outframeCount = document.querySelectorAll('#outFrameGridPreview .feature-card').length;
  const total = classicCount + outframeCount;
  
  // Update stats
  const stats = document.querySelectorAll('.stat-card span');
  if (stats.length >= 2 && stats[0]) {
    stats[0].textContent = total;
  }
}

// ======================== RENDER SUBCATEGORIES ========================
function renderSubcategories() {
  const container = document.getElementById('subcatContainer');
  if (!container) return;
  
  let data = [];
  if (currentMainTab === "content") data = contentTypes;
  else if (currentMainTab === "languages") data = languages;
  else if (currentMainTab === "genres") data = genres;
  else if (currentMainTab === "years") data = years;
  
  container.innerHTML = data.map(cat => `
    <button class="subcat-btn ${currentSubFilter === cat.id ? 'active' : ''}" data-subcat="${cat.id}">
      <i class="fas ${cat.icon}"></i> ${cat.name}
    </button>
  `).join('');
  
  document.querySelectorAll('.subcat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.subcat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentSubFilter = btn.dataset.subcat;
      applyFilters();
    });
  });
}

// ======================== INIT CATEGORY TABS ========================
function initCategoryTabs() {
  document.querySelectorAll('.tab-btn').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentMainTab = tab.dataset.tab;
      currentSubFilter = "all";
      
      document.querySelectorAll('.subcat-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.subcat === 'all');
      });
      
      renderSubcategories();
      applyFilters();
    });
  });
}

// ======================== SEARCH FUNCTION ========================
function initSearch() {
  const searchInput = document.getElementById('searchInput');
  if (!searchInput) return;
  
  searchInput.addEventListener('input', (e) => {
    currentSearch = e.target.value;
    applyFilters();
  });
}

// ======================== RESET FILTERS ========================
function resetFilters() {
  currentMainTab = "content";
  currentSubFilter = "all";
  currentSearch = "";
  
  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.value = '';
  
  document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
  document.querySelector('.tab-btn[data-tab="content"]')?.classList.add('active');
  
  renderSubcategories();
  applyFilters();
}

function initReset() {
  const resetBtn = document.getElementById('resetBtn');
  if (resetBtn) {
    resetBtn.addEventListener('click', resetFilters);
  }
}

// ======================== MODAL FUNCTIONS ========================

// Media the browser can decode itself. Everything on files.ani3d.in is H.264 in
// MP4; anything else is an embed URL (Wistia, YouTube), which keeps the iframe.
const NATIVE_VIDEO_RE = /\.(mp4|m4v|mov|webm|mkv)(\?|$)/i;

function buildPlayer(container, video) {
  const src = video.file || '';
  if (!src) return;

  if (!NATIVE_VIDEO_RE.test(src)) {
    container.innerHTML = `<iframe src="${src}" frameborder="0" allow="autoplay; fullscreen" style="width:100%; height:100%;"></iframe>`;
    return;
  }

  const el = document.createElement('video');
  el.controls = true;
  el.autoplay = true;
  el.playsInline = true;
  el.preload = 'metadata';
  // No crossorigin attribute on purpose: media loads as a no-CORS request and
  // works without one. Setting it forces a CORS check that breaks playback.
  if (video.thumb) el.poster = video.thumb;
  // No hardcoded type="video/mp4" on a <source> — let the server's Content-Type
  // decide, so .mov and friends aren't mislabelled.

  // files.ani3d.in proxies Google Drive, which can fail for reasons unrelated to
  // the file: per-file download quota, an expired refresh token, an outage.
  let settled = false;
  let timer;
  const succeed = () => { settled = true; clearTimeout(timer); };
  const fail = () => {
    if (settled) return;
    settled = true;
    clearTimeout(timer);
    const dl = video.downloadUrl || '';
    container.innerHTML = `
      <div class="modal-video-error">
        <p><i class="fas fa-triangle-exclamation"></i> This video couldn't be played here.</p>
        <p>Download it and play it in VLC, or on a 3D TV / headset.</p>
        ${dl ? `<a class="modal-download-btn" href="${dl}" target="_blank" rel="noopener"><i class="fas fa-download"></i> Download Video</a>` : ''}
      </div>`;
  };

  el.addEventListener('loadedmetadata', succeed, { once: true });
  el.addEventListener('error', fail, { once: true });
  timer = setTimeout(fail, 20000);

  el.src = src;
  container.appendChild(el);
}

function openModal(video) {
  const modal = document.getElementById("videoModal");
  const modalVideo = document.getElementById("modalVideo");
  const modalInfo = document.getElementById("modalInfo");
  
  if (!modal) {
    console.log("Modal not found");
    return;
  }
  
  if (modalVideo) {
    modalVideo.innerHTML = '';
    buildPlayer(modalVideo, video);
  }

  if (modalInfo) {
    const genreDisplay = video.genre ? video.genre.split(',').map(g => g.trim()).join(' • ') : video.genre || '3D';
    
    modalInfo.innerHTML = `
      <h2>${video.title}</h2>
      <div class="modal-details">
        <div class="modal-detail"><i class="fas fa-tag"></i> ${genreDisplay}</div>
        <div class="modal-detail"><i class="fas fa-language"></i> ${video.language || 'Multi Language'}</div>
        <div class="modal-detail"><i class="fas fa-calendar"></i> ${video.year || 'N/A'}</div>
      </div>
      ${video.showDesc && video.desc ? `<div class="modal-desc">${video.desc}</div>` : ''}
      <button class="modal-download-btn" data-url="${video.downloadUrl || '#'}">
        <i class="fas fa-download"></i> Download Video
      </button>
    `;
    
    const downloadBtn = modalInfo.querySelector(".modal-download-btn");
    if (downloadBtn) {
      downloadBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const url = downloadBtn.getAttribute("data-url");
        if (url && url !== "#") { 
          window.open(url, '_blank');
        } else {
          alert("Download link will be available soon!");
        }
      });
    }
  }
  
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

// ======================== MODAL CLOSE HANDLERS ========================
function initModalClose() {
  // Close button
  const closeBtn = document.querySelector(".modal-close");
  if (closeBtn) {
    closeBtn.addEventListener("click", function(e) {
      e.preventDefault();
      e.stopPropagation();
      closeModal();
    });
  }
  
  // Click outside
  document.addEventListener("click", function(e) {
    const modal = document.getElementById("videoModal");
    if (modal && e.target === modal) {
      closeModal();
    }
  });
  
  // ESC key
  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
      const modal = document.getElementById("videoModal");
      if (modal && modal.style.display === "flex") {
        closeModal();
      }
    }
  });
}

function closeModal() {
  const modal = document.getElementById("videoModal");
  if (modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
    
    const modalVideo = document.getElementById("modalVideo");
    if (modalVideo) modalVideo.innerHTML = "";
    
    const modalInfo = document.getElementById("modalInfo");
    if (modalInfo) modalInfo.innerHTML = "";
  }
}

// ======================== SLIDER FUNCTIONS ========================
function initSlider(containerId, dividerId, afterImageId) {
  const container = document.getElementById(containerId);
  const divider = document.getElementById(dividerId);
  const afterImg = document.getElementById(afterImageId);
  
  if (!container || !divider || !afterImg) return;
  
  let isDragging = false;
  
  function update(clientX) {
    const rect = container.getBoundingClientRect();
    let x = clientX - rect.left;
    if (x < 0) x = 0;
    if (x > rect.width) x = rect.width;
    const percent = (x / rect.width) * 100;
    afterImg.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
    divider.style.left = `${percent}%`;
  }
  
  function onMove(e) {
    if (!isDragging) return;
    let cx = e.clientX ?? (e.touches ? e.touches[0].clientX : null);
    if (cx) update(cx);
  }
  
  function onUp() {
    isDragging = false;
    document.removeEventListener("mousemove", onMove);
    document.removeEventListener("mouseup", onUp);
    document.removeEventListener("touchmove", onMove);
    document.removeEventListener("touchend", onUp);
  }
  
  function onDown(e) {
    isDragging = true;
    e.preventDefault();
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
    document.addEventListener("touchmove", onMove);
    document.addEventListener("touchend", onUp);
    let cx = e.clientX ?? (e.touches ? e.touches[0].clientX : null);
    if (cx) update(cx);
  }
  
  divider.addEventListener("mousedown", onDown);
  divider.addEventListener("touchstart", onDown);
  
  setTimeout(() => {
    const rect = container.getBoundingClientRect();
    update(rect.left + rect.width / 2);
  }, 100);
}

// ======================== PARTICLES EFFECT ========================
function initParticles() {
  const canvas = document.getElementById("particles");
  if (!canvas) return;
  
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  
  const ctx = canvas.getContext("2d");
  let particles = [];
  
  function initParticlesArray() {
    particles = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        alpha: Math.random(),
        speed: 0.15 + Math.random() * 0.25,
        color: Math.random() > 0.7 ? "#cc0000" : "#fff"
      });
    }
  }
  
  function draw() {
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color === "#cc0000" ? `rgba(204,0,0,${p.alpha * 0.3})` : `rgba(255,255,255,${p.alpha * 0.15})`;
      ctx.fill();
      p.y += p.speed;
      if (p.y > canvas.height) p.y = 0;
    });
    requestAnimationFrame(draw);
  }
  
  initParticlesArray();
  draw();
  
  window.addEventListener('resize', () => {
    resizeCanvas();
    initParticlesArray();
  });
}

// ======================== NAVBAR FUNCTIONS ========================
function handleNavbarScroll() { 
  const navbar = document.getElementById("navbar"); 
  if (navbar) {
    if (window.scrollY > 50) navbar.classList.add("scrolled"); 
    else navbar.classList.remove("scrolled"); 
  }
}

function handleBackToTop() { 
  const backBtn = document.getElementById("backToTop"); 
  if (backBtn) {
    if (window.scrollY > 500) backBtn.classList.add("show-btn"); 
    else backBtn.classList.remove("show-btn"); 
  }
}

function initHamburger() { 
  const hamburger = document.getElementById("hamburger"); 
  const navLinks = document.getElementById("navLinks");
  if (hamburger && navLinks) { 
    hamburger.addEventListener("click", (e) => { 
      e.stopPropagation();
      navLinks.classList.toggle("active"); 
    });
    document.querySelectorAll(".nav-links a").forEach(link => { 
      link.addEventListener("click", () => { 
        navLinks.classList.remove("active"); 
      }); 
    });
  }
}

// ======================== GSAP ANIMATIONS ========================
function initGSAP() { 
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    return; 
  }
  
  gsap.registerPlugin(ScrollTrigger); 
  
  gsap.utils.toArray(".feature-card, .glass-card-3d, .community-card-modern, .about-card, .slider-card, .tech-card, .owl3d-box").forEach(el => { 
    if (el) {
      gsap.from(el, { 
        scrollTrigger: { trigger: el, start: "top 85%" }, 
        opacity: 0, 
        y: 40, 
        duration: 0.6 
      }); 
    }
  }); 
}

// ======================== EMAILJS CONTACT FORM ========================
function initContactForm() {
  const form = document.getElementById('contactForm');
  const statusDiv = document.getElementById('formStatus');
  
  if (!form) return;
  
  if (typeof emailjs === 'undefined') {
    if (statusDiv) {
      statusDiv.innerHTML = '<i class="fas fa-exclamation-circle"></i> Email service not available.';
      statusDiv.className = 'form-status-pro error';
    }
    return;
  }
  
  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const name = document.getElementById('userName')?.value || '';
    const email = document.getElementById('userEmail')?.value || '';
    const subject = document.getElementById('userSubject')?.value || 'General Inquiry';
    const message = document.getElementById('userMessage')?.value || '';
    
    const SERVICE_ID = "service_93r0sxe";
    const TEMPLATE_ID = "template_tpry5z5";
    const PUBLIC_KEY = "KGz59FXMARusJXVJH";
    
    if (statusDiv) {
      statusDiv.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending message...';
      statusDiv.className = 'form-status-pro loading';
      statusDiv.style.display = 'block';
    }
    
    try {
      emailjs.init(PUBLIC_KEY);
      
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        name: name,
        email: email,
        subject: subject,
        message: message,
        to_email: "ani3d.feedback@gmail.com"
      });
      
      if (statusDiv) {
        statusDiv.innerHTML = '<i class="fas fa-check-circle"></i> ✓ Message sent successfully!';
        statusDiv.className = 'form-status-pro success';
      }
      form.reset();
      
      setTimeout(() => {
        if (statusDiv) {
          statusDiv.className = 'form-status-pro';
          statusDiv.innerHTML = '';
          statusDiv.style.display = 'none';
        }
      }, 5000);
      
    } catch (error) {
      console.error("EmailJS Error:", error);
      if (statusDiv) {
        statusDiv.innerHTML = '<i class="fas fa-exclamation-circle"></i> Failed to send. Please try again.';
        statusDiv.className = 'form-status-pro error';
      }
      
      setTimeout(() => {
        if (statusDiv) {
          statusDiv.className = 'form-status-pro';
          statusDiv.innerHTML = '';
          statusDiv.style.display = 'none';
        }
      }, 5000);
    }
  });
}

// ======================== FIX HOME BUTTON AND LOGO ========================
function fixLogoClick() {
  const logoLink = document.querySelector('.logo-link');
  if (logoLink) {
    logoLink.addEventListener('click', function(e) {
      e.preventDefault();
      window.location.href = 'index.html';
    });
  }
}

function fixHomeButton() {
  const allLinks = document.querySelectorAll('.nav-links a');
  allLinks.forEach(link => {
    if (link.textContent.trim() === 'HOME') {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'index.html';
      });
    }
  });
}

// ======================== RESIZE HANDLER ========================
let resizeTimer;
function handleResize() {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => { 
    initSlider("sliderContainer1", "sliderDivider1", "sliderAfter1");
    initSlider("sliderContainer2", "sliderDivider2", "sliderAfter2");
    initSlider("sliderContainer3", "sliderDivider3", "sliderAfter3");
    initSlider("sliderContainer4", "sliderDivider4", "sliderAfter4");
  }, 100);
}

// ======================== SCROLL BUTTONS ========================
function initScrollButtons() {
  const scrollContainer = document.getElementById('subcategoryScroll');
  const leftBtn = document.getElementById('subScrollLeft');
  const rightBtn = document.getElementById('subScrollRight');
  
  if (leftBtn && scrollContainer) {
    leftBtn.addEventListener('click', () => {
      scrollContainer.scrollBy({ left: -200, behavior: 'smooth' });
    });
  }
  
  if (rightBtn && scrollContainer) {
    rightBtn.addEventListener('click', () => {
      scrollContainer.scrollBy({ left: 200, behavior: 'smooth' });
    });
  }
}

// ======================== INITIALIZE EVERYTHING ========================
document.addEventListener("DOMContentLoaded", () => {
  console.log("🚀 ANI3D Website Initializing...");
  
  initCategoryTabs();
  renderSubcategories();
  initSearch();
  initReset();
  applyFilters();
  
  // Initialize sliders
  const sliders = [
    ["sliderContainer1", "sliderDivider1", "sliderAfter1"],
    ["sliderContainer2", "sliderDivider2", "sliderAfter2"],
    ["sliderContainer3", "sliderDivider3", "sliderAfter3"],
    ["sliderContainer4", "sliderDivider4", "sliderAfter4"]
  ];
  
  sliders.forEach(slider => {
    if (document.getElementById(slider[0])) {
      initSlider(slider[0], slider[1], slider[2]);
    }
  });
  
  initParticles();
  initGSAP();
  initHamburger();
  initContactForm();
  initModalClose();
  initScrollButtons();
  
  window.addEventListener("scroll", () => {
    handleNavbarScroll();
    handleBackToTop();
  });
  
  window.addEventListener("resize", handleResize);
  
  handleNavbarScroll();
  
  fixLogoClick();
  fixHomeButton();
  
  console.log("✅ ANI3D Website Initialized Successfully!");
});

// Make functions globally available
window.resetFilters = resetFilters;
window.toggleDescription = toggleDescription;
window.closeModal = closeModal;

// EmailJS initialization
window.addEventListener('load', function() {
  if (typeof emailjs !== 'undefined') {
    emailjs.init("KGz59FXMARusJXVJH");
    console.log("✅ EmailJS initialized");
  }
});