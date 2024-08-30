import React, { useState } from "react"; // Import useState

const Settings = () => {
  const [imageUrl, setImageUrl] = useState(""); // Use useState for imageUrl

  return (
    <div>
      <h1>Settings</h1>
      <input
        type="text"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)} // Update imageUrl on input change
        placeholder="Enter image URL"
      />
      {/* Your JSX here */}
    </div>
  );
};

export default Settings;
