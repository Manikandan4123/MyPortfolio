import React from 'react'

function WapButton() {

    const wapClick=()=>
    {
    const phoneNumber = "+918939349903"; // Include country code, no '+' or '-'
    const message = "Hello, I want to know more!";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    }

  return (
    <div className="whatsapp-icon" id="waIcon" onClick={wapClick}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp"/>
        <div className="tooltip">Click to connect with WhatsApp!!</div>
    </div>
  )
}

export default WapButton