import React from 'react'

function Logo({ width = '120px' }) {
  return (
    <img
      src="data:image/png;base64,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"
      alt="MegaBlog Logo"
      style={{ width }}
      className="block"
    />
  );
}

export default Logo;

