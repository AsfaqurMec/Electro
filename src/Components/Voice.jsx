/* eslint-disable @next/next/no-img-element */
// "use client";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";

// const Voice = () => {
//   const [isListening, setIsListening] = useState(false);
//   const [text, setText] = useState("");
//   const router = useRouter();

//   useEffect(() => {
//    // console.log("Current text:", text); // Debugging
//   }, [text]);

//   const startListening = () => {
//     if (!("webkitSpeechRecognition" in window)) {
//       alert("Your browser does not support Speech Recognition.");
//       return;
//     }

//     const recognition = new window.webkitSpeechRecognition();
//     recognition.lang = "en-US";

//     // Play a beep sound
//   const beep = new Audio("/Audio.mp3"); // Store a beep sound in the public folder
//      beep.play();

//     recognition.start();
//     setIsListening(true);
//     //console.log("Started listening..."); // Debugging

//     recognition.onresult = (event) => {
//       if (event.results.length > 0) {
//         const speechText = event.results[0][0].transcript;
//        // console.log("Recognized text:", speechText); // Debugging
//         setText(speechText);
//         router.push(`https://electro-brown.vercel.app/voiceSearch/${speechText}`);
//       } else {
//       //  console.log("No speech detected."); // Debugging
//       }
//     };

//     recognition.onerror = (event) => {
//      // console.error("Speech recognition error:", event.error);
//     };

//     recognition.onend = () => {
//       setIsListening(false);
//       //console.log("Stopped listening.");
//     };
//   };

//   return (
//     // <div className="bg-blue-500 px-2 py-2 rounded-full text-white z-[50] animate-bounce">
//     //   <button onClick={startListening} disabled={isListening}>
//     //     {isListening ? "Listening..." : "🎤 Search"}
//     //   </button>
//     // </div>
//     <div className="relative flex items-center justify-center animate-bounce">
//   <button
//     className="relative bg-blue-500 px-4 py-2 rounded-full text-white z-[10] disabled:opacity-50"
//     onClick={startListening}
//     disabled={isListening}
//     aria-label="Voice Search"
//   >
//     {isListening ? "Listening..." : "🎤 Search"}
//   </button>
//   {/* Glowing animation */}
//   <div className="absolute inset-0 flex items-center justify-center">
//     <span className="absolute w-full h-full bg-purple-700 opacity-70 rounded-full animate-ping"></span>
//   </div>
// </div>
//   );
// };

// export default Voice;

"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Voice = () => {
  const [isListening, setIsListening] = useState(false);
  const [text, setText] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (text) {
      router.push(`https://electro-brown.vercel.app/voiceSearch/${text}`);
    }
  }, [text, router]);

  const startListening = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Your browser does not support Speech Recognition.");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-US";

    // Play a beep sound before starting
    const beep = new Audio("/Audio.mp3");
    beep.play().catch((err) => console.error("Audio play error:", err));

    recognition.start();
    setIsListening(true);

    recognition.onresult = (event) => {
      if (event.results.length > 0) {
        const speechText = event.results[0][0].transcript;
        setText(speechText);
      }
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };
  };

  return (
    <div className="relative flex items-center justify-center animate-bounce">
  <button
    className="relative bg-blue-500 px-4 py-2 rounded-full text-white z-[10] disabled:opacity-50"
    onClick={startListening}
    disabled={isListening}
    aria-label="Voice Search"
  >
    {isListening ? "Listening..." : "🎤 Search"}
  </button>
  {/* Glowing animation */}
  <div className="absolute inset-0 flex items-center justify-center">
    <span className="absolute w-full h-full bg-blue-800 opacity-50 rounded-full animate-ping"></span>
  </div>
</div>

  );
};

export default Voice;
