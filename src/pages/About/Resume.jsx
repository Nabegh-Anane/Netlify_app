import React from 'react';
import styles from './Resume.module.css';


const Resume = () => {


  return (
    <section className={styles.CV} id="resume">
      <h2 className={styles.title}>Resume</h2>
      <div className={styles.resumi}>
      <header className={styles.headri}>
        <h1 className={styles.hun}>Nabegh Anane</h1>
        <div className={styles.row}>
          <ul className={styles.uli}>
            <li className={styles.address}>
              My goal is to implement my technical skills in a challenging professional environment while continuing to learn and grow. I am excited to contribute to innovative projects and gain practical experience in the fields of Business Intelligence and software development
            </li>
          </ul>
        </div>
      </header>

      <article className={styles.articli} id="LaT">
        <h2 className={styles.hdu}>Languages and Technologies</h2>
        <div className={styles.tech}>
          <ul className={styles.uli}>
            <li><span>Communication</span>: French (fluent, native) – Arabic (fluent, native) – English (meduim)</li>
            <li><span>Web Development</span>: HTML – CSS – JavaScript – Bootstrap – ExpressJS – ReactJS – ThreeJS – NodeJS – PHP – Solidity – Ajax – Django</li>
            <li><span>Programming Languages</span>: Pascal – C – C++ – C# – Java – Python – R</li>
            <li><span>Mobile Development</span>: Android Studio (java.xml) – WinDev Mobile – Flutter</li>
            <li><span>Software (Graphic-3D-Motion-UI-Editing) Design</span>: Adobe (Photoshop-Illustrator-InDesign-PrPro-XD-After EFFECTS) – Blender – Autodesk 3ds Max – Figma – Canva</li>
            <li><span>Operating Systems</span>: Windows Server – Linux (and its distributions) – UNIX – MacOs – FreeBSD – VMware vSphere/ESXi</li>
            <li><span>Databases</span>: MySQL – Microsoft SQL Server – Oracle Database – PostgreSQL – MongoDB – Hadoop – Slick – AWS</li>
            <li><span>Software and CMS</span>: Office 365 – Microsoft Power BI – WinDev – Wordpress – IBM Cognos Analytics – QlikView</li>
          </ul>
        </div>
      </article>

      <article className={styles.articli} id="Edc">
        <h2 className={styles.hdu}>Education</h2>
        <div className={styles.row}>
          <ul className={styles.uli}>
            <li className={styles.right}>
              <ul className={styles.uli}>
                <li>2024</li>
              </ul>
            </li>
            <li className={styles.header}>Undergraduate, National Business Computing Degree – Business Intelligence</li>
            <li className={styles.description}>Faculty of Economic Sciences and Management of Mahdia in collaboration with the Higher Institute of Computer Science of Mahdia - University of Monastir - Tunisia</li>
          </ul>
        </div>

        <div className={styles.row}>
          <ul className={styles.uli}>
            <li className={styles.right}>
              <ul className={styles.uli}>
                <li>2019</li>
              </ul>
            </li>
            <li className={styles.header}>Bachelor's Degree in Computer Science</li>
            <li className={styles.description}>Private El Amal High School, Megrine, Ben Arous, Tunisia.</li>
          </ul>
        </div>
      </article>

      <article className={styles.articli} id="Expr">
        <h2 className={styles.hdu}>Experience</h2>

        <div className={styles.row}>
          <ul className={styles.uli}>
            <li className={styles.right}>
              <ul className={styles.uli}>
                <li>July 2020</li>
                <li>August 2020</li>
              </ul>
            </li>
            <li className={styles.header}>Support and Information Systems (SIS) Internship</li>
            <li className={styles.description}>Tunisia Telecom Regional Office – SIS Bureau, Ben Arous, Tunisia.</li>
            <li>Installation and maintenance of computers, diagnosing hardware issues, and performing minor repairs to optimize the company's IT infrastructure's performance.</li>
            <li>Visits and maintenance of regional servers to ensure stable internet connectivity.</li>
            <li>Installation and configuration of fiber-optic networks to enhance high-speed connectivity for clients.</li>
            <li>Database management, including design and security measures to protect data integrity and confidentiality.</li>
            <li>Developed a Local Desktop Application using WinDev, C++, and SQL to optimize IT resource management in the company's regional offices.</li>
            <li>Made a significant contribution to the operational efficiency of Tunisia Telecom – SIS Bureau by acquiring practical skills in IT support, system administration, and software development.</li>
          </ul>
        </div>
        <div className={styles.row}>
				<ul className={styles.uli}>
					<li className={styles.right}>
						<ul className={styles.uli}>
							<li>July 2021</li>
							<li>August 2021</li>
						</ul>
					</li>
					<li className={styles.header}>Data Digitization Internship</li>
					<li className={styles.description}>Ministry of Justice, Court of First Instance, Ben Arous, Tunisia.</li>
					<li> Managed a data digitization project within the Court of First Instance, Ben Arous, Tunisia, during my summer internship in 2021 with the Ministry of Justice.</li>
					<li> Coordinated document digitization and electronic archiving operations to optimize the management of judicial files.</li>
					<li> Analyzed digitization needs and implemented efficient procedures to ensure the confidentiality and accessibility of sensitive information.</li>
					<li> Trained employees in scanning tools and data security protocols.</li>
					<li> Contributed to the implementation of software solutions for indexing and fast retrieval of digitized documents.</li>
					<li> Improved the efficiency of the justice service by modernizing document management processes. </li>
				</ul>
			</div>
			
			<div className={styles.row}>
				<ul className={styles.uli}>
					<li className={styles.right}>
						<ul className={styles.uli}>
							<li>June 2022</li>
							<li>August 2022</li>
						</ul>
					</li>
					<li className={styles.header}>Full Stack Web Development Internship</li>
					<li className={styles.description}>Cuba Studio, Ben Arous, Tunisia.</li>
					<li> Designed, analyzed requirements, and wrote a detailed specification in collaboration with the client, using detailed UML diagrams to guide development.</li>
					<li> Developed a complete business website as a Full Stack web developer, utilizing MongoDB, Express.js, React.js, and Node.js technologies, including nine functional user interfaces.</li>
					<li> Configured and managed a VPS server on DigitalOcean, including the installation of Vesta Control Panel (Vesta CP) with SSH access.</li>
					<li> Configured the domain name with Vesta CP and deployed the website on the VPS server, ensuring online hosting of the company's website.</li>
					</ul>
			</div>		
			
						<div className={styles.row}>
				<ul className={styles.uli}>
					<li className={styles.right}>
						<ul className={styles.uli}>
							<li>July 2023</li>
							<li>August 2023</li>
						</ul>
					</li>
					<li className={styles.header}>UI/UX Design Internship</li>
					<li className={styles.description}>Express Medical Transport Assistance (EMTA), Hammamet, Nabeul, Tunisia.</li>
					<li> Designed and defined the client's UI/UX design needs, including creating a complete graphic charter for Express Medical Transport Assistance (EMTA), including a logo, flyers, designs for social media, font and color selection, and branding for company vehicles and the reception area.</li>
					<li> Designed mobile application and e-Commerce website interfaces for EMTA, aligning designs with the client's needs.</li>
					<li> Utilized Adobe Photoshop, Adobe Illustrator, Adobe InDesign for various design process stages, and Adobe XD for UI design.</li>
					<li> Created descriptive videos and Motion Design for social media using Adobe After Effects.</li>
					<li> Launched a social media advertising campaign to promote EMTA.</li>
					</ul>
          </div>
      </article>

      <article className={styles.articli} id="PHac">
        <h2 className={styles.hdu}>Participations and Hackathons</h2>

        <div className={styles.row}>
          <ul className={styles.uli}>
            <li className={styles.right}>
              <ul className={styles.uli}>
                <li>Oct 2014</li>
              </ul>
            </li>
            <li className={styles.header}>UI/UX Design Internship</li>
            <li className={styles.description}>Express Medical Transport Assistance (EMTA), Hammamet, Nabeul, Tunisia.</li>
            <li>Launched a social media advertising campaign to promote EMTA.</li>
          </ul>
        </div>
        <div className={styles.row}>
        <ul className={styles.uli}>
					<li className={styles.right}>
						<ul className={styles.uli}>
							<li>May 2022</li>
						</ul>
					</li>
					<li className={styles.header}>UI/UX Design Internship</li>
					<li className={styles.description}>Express Medical Transport Assistance (EMTA), Hammamet, Nabeul, Tunisia.</li>
					<li> Launched a social media advertising campaign to promote EMTA.</li>
				</ul>
        </div>
        <div className={styles.row}>
				<ul className={styles.uli}>
					<li className={styles.right}>
						<ul className={styles.uli}>
							<li>May 2023</li>
						</ul>
					</li>
					<li className={styles.header}>UI/UX Design Internship</li>
					<li className={styles.description}>Express Medical Transport Assistance (EMTA), Hammamet, Nabeul, Tunisia.</li>
					<li> Launched a social media advertising campaign to promote EMTA.</li>
				</ul>
        </div>
        <div className={styles.row}>
				<ul className={styles.uli}>
					<li className={styles.right}>
						<ul className={styles.uli}>
							<li>Aout 2023</li>
						</ul>
					</li>
					<li className={styles.header}>UI/UX Design Internship</li>
					<li className={styles.description}>Express Medical Transport Assistance (EMTA), Hammamet, Nabeul, Tunisia.</li>
					<li> Launched a social media advertising campaign to promote EMTA.</li>
				</ul>
        </div>
      </article>
    </div>
    </section>
  );
};

export default Resume;
