import React, { useState } from 'react';
import io from 'socket.io-client';
import AvatarSelector from './AvatarSelectionModal';
import MessageDisplay from './MessageDisplay';
import InputArea from './InputArea';
import ThorGif from './ThorGif';
import Navbar from './Navbar';
import homeImg from '../assets/Messages.png'

const socket = io();

const avatars = [
    { name: "Iron Man", avatarUrl: "./im.png" },
    { name: "Captain America", avatarUrl: "./ca.png" },
    { name: "Thor", avatarUrl: "./thor.png" },
    { name: "Black Panther", avatarUrl: "./bp.png" },
    { name: "Spider-Man", avatarUrl: "./s.png" },
    { name: "Black Widow", avatarUrl: "./bw.png" },
    { name: "Captain Marvel", avatarUrl: "./cm.png" },
    { name: "Hulk", avatarUrl: "./h.png" },
    { name: "Doctor Strange", avatarUrl: "./d.png" },
    { name: "Hawkeye", avatarUrl: "./hk.png" },
    { name: "Baby Groot", avatarUrl: "./bg.png" },
    { name: "Scarlet Witch", avatarUrl: "./sw.png" },
    { name: "Nick Fury", avatarUrl: "./nf.png" },
    { name: "Loki", avatarUrl: "./loki.png" },
    { name: "Stan Lee", avatarUrl: "./stanley.png" },
];

function MessageApp() {
    const [selectedAvatar, setSelectedAvatar] = useState(null);
    const [messages, setMessages] = useState([]);
    const [showThorGif, setShowThorGif] = useState(false);

    const sendMessage = (message) => {
        const msg = {
            user: selectedAvatar.name,
            message: message.trim(),
            avatarUrl: selectedAvatar.avatarUrl,
        };
        socket.emit("message", msg);
    }

    socket.on("message", (msg) => {
        setMessages([...messages, msg]);
        setShowThorGif(true);
        setTimeout(() => setShowThorGif(false), 3000);
    });

    return (
        <div className="App">
            <Navbar class='messages'/>
            {!selectedAvatar && <AvatarSelector avatars={avatars} selectAvatar={selectedAvatar} />} {/* Display AvatarSelector if no avatar is selected */}
      {selectedAvatar && (
        <div className="selected-avatar">
          <h2>Selected Avatar</h2>
          <div className="avatar-item">
            <img src={selectedAvatar.avatarUrl} alt={selectedAvatar.name} />
            <p>{selectedAvatar.name}</p>
          </div>
        </div>
      )}
            <style>{`
                /* Reset CSS */
                * {
                    padding: 0;
                    margin: 0;
                    box-sizing: border-box;
                }

                /* Global Styles */
                body {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: #f8f8f8;
                    font-family: 'Roboto Condensed', sans-serif;
                    background-image: url('${homeImg}');
  background-size: 100%;
  background-repeat: no-repeat;
  overfow:auto;
                }

                h2 {
                    color: white;
                    text-align: center;
                    text-transform: uppercase;
                }

                /* Avatar Selection Modal Styles */
                .modal {
                    display: none;
                    position: fixed;
                    z-index: 1;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    overflow: auto;
                    background-color: rgba(0, 0, 0, 0.4);
                }

                .modal-content {
                    background-color: #fefefe;
                    margin: 15% auto;
                    padding: 20px;
                    border: 1px solid #888;
                    width: 80%;
                }

                .avatar-options {
                    display: grid;
                    grid-template-columns: repeat(5, 1fr);
                    gap: 50px; 
                }

                .avatar-option img {
                    width: 200px; 
                    height: 300px; 
                    filter: sepia(70%);
                }

                .avatar-option p {
                    color: white;
                }

                /* Chat Section Styles */
                .chatsection {
                    margin-top: 30px;
                    margin-left: 500px;
                    width: 900px;
                    background: white;
                }

                .brand {
                    padding: 20px;
                    background: #f10e0e;
                    display: flex;
                    align-items: center;
                }

                .brand h1 {
                    font-family: 'Orbitron', sans-serif;
                    letter-spacing: 2px;
                    top: 50px;
                    left: 45px;
                    font-size: 40px;
                    color: white;
                    margin-left: 10px;
                }

                .messagearea {
                    height: 500px;
                    padding: 16px;
                    display: flex;
                    flex-direction: column;
                    overflow-y: auto;
                    padding-top: 40px;
                }

                #textarea {
                    width: 100%;
                    border: none;
                    padding: 20px;
                    font-size: 16px;
                    outline: none;
                    background: #ff3434;
                    color: rgb(15, 15, 15);
                }

                .message {
                    padding: 20px;
                    border-radius: 4px;
                    margin-bottom: 40px;
                    max-width: 300px;
                    position: relative;
                }

                .in {
                    background: #8f8be8;
                    color: #c61414;
                }

                .out {
                    background: #e9eafd;
                    color: #787986;
                    margin-left: auto;
                }

                .message h4 {
                    position: absolute;
                    top: -20px;
                    left: 0;
                    color: #333;
                    font-size: 14px;
                }

                .input-area {
                    display: flex;
                    align-items: center;
                }

                textarea {
                    flex: 1;
                    resize: none;
                }

                .user-info {
                    display: flex;
                }

                .avatar-img {
                    width: 30px; 
                    height: 30px; 
                    border-radius: 50%;
                }

                .message-content {
                    display: flex;
                    flex-direction: column;
                }
            `}</style>
        </div>
    );
}

export default MessageApp;
