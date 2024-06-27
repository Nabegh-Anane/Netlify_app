import React from 'react';
import styles from './SoftSkills.module.css';
const SoftSkills = () => {

  return (
    <section className={styles.SoftSkill} id="SoftSkills">
      <h2 className={styles.title}>Soft Skills</h2> 
      
      <div className={styles.skills}>
        <div className={`${styles.blogFard} ${styles.blogFard}`}>
          <div className={styles.meta}>
            <div className={styles.photo1}></div>
            <ul className={styles.details}>
              <li className={styles.tags}>
                <ul>
                  <li>Clear Communication</li>
                  <li>Collaboration</li>
                  <li>Stakeholder Engagement</li>
                  <li>Technical Documentation</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className={styles.description}>
            <h1 className={styles.onwen}>Communication Skills</h1>
            <h2>Clear Technical Communication for Collaborative Project Success</h2>
            <p> Ability to convey complex technical information to non-technical stakeholders, fostering collaboration and ensuring effective communication within the team for project success.</p>
            <p className={styles.readMore}>
              <a href="#">Show Example</a>
            </p>
          </div>
        </div>
		
      
        <div className={`${styles.blogFard} ${styles.alt}`}>
          <div className={styles.meta}>
            <div className={styles.photo2} ></div>
            <ul className={styles.details}>
              <li className={styles.tags}>
          <ul>
            <li>Analytical Thinking</li>
            <li>Critical Thinking</li>
            <li>Creative Problem Solving</li>
			<li>Troubleshooting</li>
          </ul>
              </li>
            </ul>
          </div>
          <div className={styles.description}>
      <h1>Problem-Solving</h1>
      <h2>Analytical Thinker, Creative Problem Solver for Efficiency</h2>
      <p>Proficiency in identifying and solving intricate problems through analytical thinking and creative solutions, ensuring optimal functionality and efficiency in data analysis and web/mobile development projects.</p>
           <p className={styles.readMore}>
              <a href="#">Show Example</a>
            </p>
          </div>
        </div>
		
  
        <div className={`${styles.blogFard} ${styles.blogFard}`}>
          <div className={styles.meta}>
            <div className={styles.photo3} ></div>
            <ul className={styles.details}>
              <li className={styles.tags}>
          <ul>
            <li>Flexibility</li>
            <li>Agility</li>
            <li>Open-Mindedness</li>
            <li>Continuous Learning</li>
          </ul>
              </li>
            </ul>
          </div>
          <div className={styles.description}>
      <h1>Adaptability</h1>
      <h2>Flexible Technologist Adapting to Evolving Environments</h2>
      <p>Flexibility to adapt to evolving technologies and methodologies, ensuring seamless transitions in dynamic data analysis and web/mobile development environments for sustained project success.</p>
            <p className={styles.readMore}>
              <a href="#">Show Example</a>
            </p>
          </div>
        </div>
		
     
        <div className={`${styles.blogFard} ${styles.alt}`}>
          <div className={styles.meta}>
            <div className={styles.photo4} ></div>
            <ul className={styles.details}>
              <li className={styles.tags}>
          <ul>
            <li>Precision</li>
            <li>Accuracy</li>
            <li>Thoroughness</li>
			<li>Detail-Oriented</li>
          </ul>
              </li>
            </ul>
          </div>
          <div className={styles.description}>
      <h1>Attention to Detail</h1>
      <h2>Detail-Oriented Developer Ensuring Precision and Accuracy</h2>
      <p>Meticulous focus on details in data analysis and full-stack development, ensuring accuracy and precision in coding, data interpretation, and overall project execution.</p>
           <p className={styles.readMore}>
              <a href="#">Show Example</a>
            </p>
          </div>
        </div>
		
      
        <div className={`${styles.blogFard} ${styles.blogFard}`}>
          <div className={styles.meta}>
            <div className={styles.photo5} ></div>
            <ul className={styles.details}>
              <li className={styles.tags}>
          <ul>
            <li>Time Efficiency</li>
            <li>Prioritization</li>
            <li>Project Management</li>
			<li>Deadline Adherence</li>
          </ul>
              </li>
            </ul>
          </div>
          <div className={styles.description}>
      <h1>Time Management</h1>
      <h2>Time-Efficient Project Manager Ensuring Timely High-Quality Results</h2>
      <p>Efficient utilization of time and resources to meet project deadlines, demonstrating the ability to prioritize tasks, manage workloads, and deliver high-quality results promptly.</p>
             <p className={styles.readMore}>
              <a href="#">Show Example</a>
            </p>
          </div>
        </div>
		
		
        
      </div>
    </section>
  );
}

export default SoftSkills;
