import React from 'react';
import styles from './Skills.module.css';

const ITSkills = () => {

  return (
    <section className={styles.WebDev} id="ITSkills">
        <h2 className={styles.title}>IT Knowladge</h2> 
        
        <div className={styles.skills} >
        <div className={styles.container} >
            
            <div className={styles.skillCarta}>
                <div className={styles.Carta}>
                <i className="bx bxl-microsoft"></i>
                    <h4>Office 365</h4>
                    <p>Leverage Microsofts suite for productivity and collaboration.</p>
                </div>
                
				
				<div className={styles.Carta}>
                <i className="bx bx-stats" ></i>
                    <h4>Microsoft Power BI</h4>
                    <p>Create interactive and insightful business intelligence dashboards.</p>
                </div>
				
				<div className={styles.Carta}>
                <i className="fa-brands fa-dev" ></i>
                    <h4>WinDev</h4>
                    <p>Develop desktop, mobile, and web applications with WinDev.</p>
                </div>
                
                <div className={styles.Carta}>
                <i className="fa-solid fa-magnifying-glass-chart" ></i>
                    <h4>IBM Cognos Analytics</h4>
                    <p>Design and deliver business intelligence solutions with IBM Cognos.</p>
                </div>
                
                <div className={styles.Carta}>
                <i className="fa-solid fa-chart-simple" ></i>
                    <h4>QlikView</h4>
                    <p>Develop and deploy interactive data visualization applications.</p>
                </div>
                
                <div className={styles.Carta}>
                <i className="fa-brands fa-windows" ></i>
                    <h4>Windows Server</h4>
                    <p>Administer and manage Windows-based server environments.</p>
                </div>
                 
                <div className={styles.Carta}>
                <i className="fa-brands fa-linux"></i>
                    <h4>UNIX OS</h4>
                    <p>Navigate and administer Unix-based operating systems.</p>
                </div>
				
				<div className={styles.Carta}>
                <i className="bx bxl-apple" ></i>
                    <h4> MacOs</h4>
                    <p>Work within the macOS environment for development and administration.</p>
                </div>
				
				<div className={styles.Carta}>
                <i className="bx bx-repost" ></i>
                    <h4>FreeBSD</h4>
                    <p>Implement and manage FreeBSD-based systems.</p>
                </div>
                
                <div className={styles.Carta}>
                <i className="fa-solid fa-arrow-down-up-across-line" ></i>
                    <h4> VMware vSphere/ESXi</h4>
                    <p>Virtualize and manage server environments using VMware.</p>
                </div>
                
                <div className={styles.Carta}>
                <i className="bx bxl-adobe" ></i>
                    <h4>Adobe Creative Suite</h4>
                    <p>Utilize Adobe tools for graphic and web design.</p>
                </div>
                
                <div className={styles.Carta}>
                <i className="bx bxs-palette" ></i>
                    <h4>Autodesk 3ds Max</h4>
                    <p>Create 3D models and animations for visualization.</p>
                </div>
                
                <div className={styles.Carta}>
                <i className="bx bxl-figma" ></i>
                    <h4>Figma</h4>
                    <p>Collaboratively design and prototype user interfaces.</p>
                </div>
                
                <div className={styles.Carta}>
                <i className="bx bx-table" ></i>
                    <h4>Tableau Software</h4>
                    <p>Visualize and understand complex datasets with Tableau.</p>
                </div>
                
                <div className={styles.Carta}>
                <i className="bx bxl-chrome" ></i>
                    <h4>Chrome Developer Tools</h4>
                    <p>Debug and optimize web applications in Google Chrome.</p>
                </div>
                
                <div className={styles.Carta}>
                <i className="bx bxl-git" ></i>
                    <h4>Git</h4>
                    <p>Collaborate and version control for efficient code management.</p>
                </div>
                
                <div className={styles.Carta}>
                <i className="fa-solid fa-shield-virus" ></i>
                    <h4>Burp Suite</h4>
                    <p>Secure and test web applications for vulnerabilities.</p>
                </div>
                
                <div className={styles.Carta}>
                <i className="fa-brands fa-cpanel" ></i>
                    <h4>Web Panels</h4>
                    <p>Enhance user interfaces with integrated web panels.</p>
                </div>
                
                <div className={styles.Carta}>
                <i className="fa-brands fa-raspberry-pi" ></i>
                    <h4>embarked système</h4>
                    <p>Implement embedded systems for various applications.</p>
                </div>
                
                <div className={styles.Carta}>
                <i className="fa-solid fa-file-shield" ></i>
                    <h4>Data Crypting and Decrypting</h4>
                    <p>Implement secure data encryption and decryption.</p>
                </div>
                
                <div className={styles.Carta}>
                <i className="fa-brands fa-docker" ></i>
                    <h4>Docker</h4>
                    <p>Containerize applications for efficient deployment and scalability.</p>
                </div>
            </div>
        </div>
    </div>
    </section>
  );
}

export default ITSkills;