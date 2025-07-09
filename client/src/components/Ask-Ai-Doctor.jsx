import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Ask-Ai-Doctor.css';

function Ask_Ai_Doctor() {
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: 'Hello! I\'m Dr. Amit Roy\'s AI Assistant, specializing in Pediatric care. I can help answer questions about child health, our services, and appointments. How can I help you today?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatRef = useRef(null);
  const inputRef = useRef(null);

  const pediatricQuestions = [
    "What are common childhood illnesses?",
    "When should I bring my child for checkup?",
     "How to handle fever in children?",
    "What are Dr. Roy's consultation hours?",
    "How to book a pediatric appointment?"
  ];

  async function askAi() {
    if (!question.trim()) return;

    const userMessage = { 
      sender: 'user', 
      text: question,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setQuestion('');
    setIsTyping(true);

    try {
      let response = await fetch("http://localhost:5000/ask-ai-doctor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ question })
      });

      let data = await response.json();
      
      setTimeout(() => {
        const aiMessage = { 
          sender: 'ai', 
          text: data.answer || 'I apologize, but I\'m having trouble processing your request. Please contact  clinic directly for immediate assistance.',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages((prev) => [...prev, aiMessage]);
        setIsTyping(false);
      }, 1500);

    } catch (error) {
      setTimeout(() => {
        setMessages((prev) => [...prev, { 
          sender: 'ai', 
          text: 'I\'m currently experiencing technical difficulties. For urgent pediatric concerns, please contact Dr. Amit Roy directly ',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }]);
        setIsTyping(false);
      }, 1500);
    }
  }

  const handleSuggestedQuestion = (suggestedQ) => {
    setQuestion(suggestedQ);
    inputRef.current?.focus();
  };

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="pediatric-chat-container w-full h-full  mt-60">
      {/* Header */}
      <div className="chat-header">
        <div className="doctor-profile">
          <div className="doctor-avatar">
            <i className="fas fa-user-md"></i>
          </div>
          <div className="doctor-info">
            <h2>Dr. Amit Roy</h2>
            <p>Pediatric Specialist • AI Assistant</p>
          </div>
        </div>
        <div className="specialization-badge">
          <i className="fas fa-baby"></i>
          <span>Pediatrics</span>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="chat-messages" ref={chatRef}>
        <AnimatePresence initial={false}>
          {messages.map((msg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={`message ${msg.sender}`}
            >
              {msg.sender === 'ai' && (
                <div className="message-avatar">
                  <i className="fas fa-stethoscope"></i>
                </div>
              )}
              <div className="message-content">
                <p>{msg.text}</p>
                <span className="message-time">{msg.timestamp}</span>
              </div>
            </motion.div>
          ))}

          {isTyping && (
            <motion.div
              key="typing"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="message ai typing"
            >
              <div className="message-avatar">
                <i className="fas fa-stethoscope"></i>
              </div>
              <div className="typing-indicator">
                <div className="typing-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span>Dr. Roy is thinking...</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Suggested Questions */}
      {messages.length <= 1 && !isTyping && (
        <div className="suggested-section">
          <h4>Common Pediatric Questions:</h4>
          <div className="suggestions-grid">
            {pediatricQuestions.map((suggestion, index) => (
              <button
                key={index}
                className="suggestion-btn"
                onClick={() => handleSuggestedQuestion(suggestion)}
              >
                <i className="fas fa-question-circle"></i>
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input Area */}
      <div className="chat-input">
        <div className="input-wrapper">
          <input
            ref={inputRef}
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                askAi();
              }
            }}
            disabled={isTyping}
            placeholder="Ask about child health, appointments, or services..."
            maxLength={300}
          />
          <button
            onClick={askAi}
            disabled={isTyping || !question.trim()}
            className="send-button"
          >
            {isTyping ? (
              <div className="loading-spinner"></div>
            ) : (
              <i className="fas fa-paper-plane"></i>
            )}
          </button>
        </div>
        <div className="input-info">
          <span className="char-count">{question.length}/300</span>
          <span className="input-hint">Press Enter to send</span>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="disclaimer">
        <i className="fas fa-info-circle"></i>
        <span>
          This AI provides general pediatric information. For medical emergencies or specific concerns about your child, 
          please contact Dr. Amit Roy directly or visit our clinic.
        </span>
      </div>
    </div>
  );
}

export default Ask_Ai_Doctor;
