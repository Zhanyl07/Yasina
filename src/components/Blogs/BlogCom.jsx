import React from 'react'
import "./BlogCom.scss"

function BlogCom() {
  return (
    <div className="blog">
      <h1 className="blog-title">Blog</h1>

      <div className="blogs">

        <div className="blog-card">
          <h2>Improving UI Responsiveness with Micro-Interactions</h2>
          <div className="blog-info">
            <span>12 Feb 2025</span>
            <span>|</span>
            <span>React, Framer Motion</span>
          </div>
          <p className="blog-text">
            This week, I focused on polishing small UI interactions to make user 
            flows feel smoother and more intuitive. I added micro-animations to buttons, 
            dropdowns, and navigation elements. With Framer Motion and subtle CSS transitions, 
            the interface became more responsive and visually consistent, helping users 
            better understand system feedback.
          </p>
        </div>

        <div className="blog-card">
          <h2>Boosting Performance with Code Splitting and Lazy Loading</h2>
          <div className="blog-info">
            <span>03 Feb 2025</span>
            <span>|</span>
            <span>React, Webpack</span>
          </div>
          <p className="blog-text">
            I implemented dynamic imports and lazy loading for heavy UI components to 
            reduce initial bundle size. This resulted in a much faster first render and 
            improved overall performance. Code splitting allowed me to load large sections 
            of the application only when needed, making the user experience noticeably faster.
          </p>
        </div>

        <div className="blog-card">
          <h2>Enhancing Forms with Real-Time Validation and Better Error Handling</h2>
          <div className="blog-info">
            <span>28 Jan 2025</span>
            <span>|</span>
            <span>React, React Hook Form</span>
          </div>
          <p className="blog-text">
            I refactored form validation using React Hook Form to deliver instant feedback 
            and clearer guidance for users. Error messages now appear in real time, 
            fields highlight automatically, and validation logic is unified across the app. 
            This significantly reduced the number of incorrect submissions and improved 
            overall UX.
          </p>
        </div>

      </div>
    </div>
  )
}

export default BlogCom