import React, { useState, useEffect } from 'react';
import './App.css';
import CollapsibleSection from './CollapsibleSection'; 


function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeEffect, setFadeEffect] = useState('fade-in');
  // Touch start and end points
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const content = [
    "Job fulfillment stands as a pivotal cornerstone in shaping not only our professional journey but also in enhancing our personal life and overall well-being. Studies have consistently shown that individuals who find deep satisfaction in their work experience higher levels of happiness, reduced stress, and improved mental health. This sense of fulfillment transcends the workplace, fostering stronger relationships and a more positive outlook on life. Moreover, job satisfaction directly correlates with increased productivity, creativity, and loyalty within the workplace, underscoring the profound influence that fulfilling work has on both personal contentment and professional success. Embracing a job that aligns with one's passions and values not only elevates individual performance but also contributes to a more vibrant, engaged, and motivated workforce.",
    "Discover Your Path: Your adventure begins on our website, a gateway to understanding the transformative power of aligning your career with your core values. Here, you're invited to sign up and embark on a journey of self-discovery and alignment. Registration is straightforward, requiring just an email address and a password, setting the stage for a deeper exploration of your professional desires and aspirations.",
    "Define Your Core Values: Upon joining our community, a warm welcome awaits you through an email, outlining the journey ahead and offering tips to navigate it effectively. The initial login ushers you into an onboarding experience that enlightens you about core values—their significance and how to unearth yours. This foundational step is facilitated by a list from which you can select or input your own values, laying the groundwork for personalized insight.",
    "Personalize Your Experience: With your core values identified, the next steps involve personalization—assigning weights to each value according to its importance to you, and evaluating how well your dream job aligns with these values on a scale of 1-10. This process not only clarifies your vision of an ideal job but also offers an optional comparison with your current role, providing a baseline for growth and change..",
    "Analyze and Plan: The completion of your initial evaluation generates a comprehensive report, offering insights into the alignment between your current (if provided) and dream jobs with your core values. Accompanied by personalized recommendations, this analysis serves as a blueprint for navigating the gap between your present circumstances and your professional ideals.",
    "Track and Grow: Embracing the dynamic nature of personal and professional growth, we encourage regular updates to your core values, their assigned weights, and your job ratings. Through monthly or quarterly reflections, supported by reminder emails, you can monitor and visualize your journey towards job fulfillment, adapting to life’s changes and new insights.",
    "Engage and Evolve: Beyond tracking, our platform offers an array of resources, articles, and support to help you interpret your tracker results and make informed decisions. Your feedback is invaluable, shaping the evolution of our tool and fostering a community of like-minded individuals seeking fulfillment in their careers.",
    "Beyond the Tracker: The journey with our tracker is just the beginning. As you delve deeper, personalized insights and suggestions tailored to your evolving career needs emerge. For those interested, opportunities for professional growth, networking, and job opportunities that resonate with your core values are made available, enriching your path to career fulfillment.",
  ];

  const updateContentIndex = (nextIndex) => {
    // Trigger fade-out effect
    setFadeEffect('fade-out');
    setTimeout(() => {
      setCurrentIndex(nextIndex);
      // Trigger fade-in effect after fade-out completes
      setFadeEffect('fade-in');
    }, 500); // Match this timeout to your fade-out animation duration
  };

  const handleScroll = (event) => {
    event.preventDefault();
    const direction = event.deltaY > 0 ? 1 : -1;
    const nextIndex = Math.max(0, Math.min(currentIndex + direction, content.length - 1));
    if (nextIndex !== currentIndex) {
      updateContentIndex(nextIndex);
    }
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const direction = touchStart - touchEnd > 0 ? 1 : -1;
    const nextIndex = Math.max(0, Math.min(currentIndex + direction, content.length - 1));
    if (nextIndex !== currentIndex) {
      updateContentIndex(nextIndex);
    }
    // Reset touch points
    setTouchStart(null);
    setTouchEnd(null);
  };

  useEffect(() => {
    const handleTouchStart = (e) => setTouchStart(e.touches[0].clientY);
    const handleTouchMove = (e) => setTouchEnd(e.touches[0].clientY);

    window.addEventListener('wheel', handleScroll, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentIndex, touchStart, touchEnd]);

  const renderContent = (text) => {
    const splitIndex = text.indexOf(':');
    if (splitIndex !== -1) {
      const title = text.substring(0, splitIndex);
      const rest = text.substring(splitIndex + 1);
      return (
        <>
          <div className="content-title">
          <strong>{title}</strong>
        </div>
        <div className="content-rest">
          {rest}
        </div>
        </>
      );
    }
    return text;
  };

  return (
    <div className="App" style={{ height: '100vh', overflow: 'hidden' }}>
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="#contact">Contact Us</a>
        </div>
        <button>Login</button>
      </nav>
      <div className="blur-text" style={{ filter: `blur(${35 - currentIndex * 5}px)` }}>
        Goals
      </div>
        <div className={` ${currentIndex === 0 ? 'introTextPop' : 'content'} ${fadeEffect}`}>
          {renderContent(content[currentIndex])}
          {currentIndex === 0 &&
          <div className='introText'>
            <CollapsibleSection title="> Personal Well-being">
              <ul>
                <li>Better mental health</li>
                <li>Stronger relationships</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="> Professional Growth">
            <ul>
              <li>Increased productivity</li>
              <li>Enhanced creativity</li>
            </ul>
            </CollapsibleSection>
            <p>Scroll down to see the steps</p>
            <p>or</p>
            <button>Start Your Journey to Fulfillment Today</button>
            </div>
          }
        </div>
        {/* <div className="scroll-down-arrow">
          <p>
            Scroll Down
    </p> 
          ↓ ↓ ↓
        </div> */}
      
    </div>
  );
}

export default App;
