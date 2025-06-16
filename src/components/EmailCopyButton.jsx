import React from "react";

export default function EmailCopyButton() {
  const email = "810nishwan@example.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email).then(() => {
      alert("Email copied to clipboard!");
    });
  };

  return (
    <div className="flex flex-col items-center space-y-2">
      <p className="text-gray-800">{email}</p>
      <button
        onClick={copyToClipboard}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Copy Email
      </button>
    </div>
  );
}
