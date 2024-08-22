import React from 'react';
import styles from './Resume.module.css';


const Resume = () => {


  return (
    <section className={styles.CV} id="resume">
      <h2 className={styles.title}>Resume</h2>
      <div className={styles.resumi}>
      <header className={styles.headri}>
        <h1 className={styles.hun}>PROFILE</h1>
        <div className={styles.row}>
          <ul className={styles.uli}>
            <li className={styles.address}>
            I’m Nabegh Anane, a young graduate in Business Intelligence, passionate about data analysis and software development. My academic journey and practical experiences have allowed me to develop deep expertise in Data Analysis, Full Stack web development, and user-friendly interface design. Currently a Junior Data Analyst at DIGIBRAIN, I continue to be committed to innovation and automation in data-driven solutions.
            </li>
          </ul>
        </div>
      </header>

      <article className={styles.articli} id="LaT">
        <h2 className={styles.hdu}>LANGUAGES AND TECHNICAL SKILLS</h2>
        <div className={styles.tech}>
          <ul className={styles.uli}>
            <li><span>Communication</span>: Arabic: Native Language – French: Advanced – English: Professional</li>
            <li><span>Web Development</span>: HTML – CSS – JavaScript – Bootstrap – Tailwind – ExpressJS – ReactJS – ThreeJS – NodeJS – PHP – Solidity – Ajax – JQuery – Django</li>
            <li><span>Programming Languages</span>: Pascal – C – C++ – C# – Java – Python – R – XML – Bash – DAX</li>
            <li><span>Mobile Development</span>: Android Studio (Java, XML) – WinDev Mobile – Flutter</li>
            <li><span>Software (Graphic, 3D, Motion, UI, Editing) Design</span>: Adobe Creative Suite (Photoshop, Illustrator, InDesign, Premiere Pro, XD, After Effects) – Blender – Autodesk 3ds Max – Figma – Canva</li>
            <li><span>Operating Systems</span>: Windows Server – Linux (et ses distributions) – UNIX – MacOS – FreeBSD – VMware vSphere/ESXi</li>
            <li><span>Databases</span>: MySQL – Microsoft SQL Server – Oracle Database – PostgreSQL – MongoDB – Hadoop – Azure Cosmos DB – Slick – AWS</li>
            <li><span>Software and CMS</span>: Office 365 – Microsoft Power BI – Microsoft Azure Services – Microsoft Fabric Services – AWS – Azure DevOps – Jenkins – Docker – YAML – Nginx – WinDev – WordPress – IBM Cognos Analytics – QlikView</li>
          </ul>
        </div>
      </article>

      <article className={styles.articli} id="Edc">
        <h2 className={styles.hdu}>EDUCATION</h2>
        <div className={styles.row}>
          <ul className={styles.uli}>
            <li className={styles.right}>
              <ul className={styles.uli}>
                <li>Present</li>
              </ul>
            </li>
            <li className={styles.header}>Undergraduate in Data Science Engineering</li>
            <li className={styles.description}>ESPRIT - Private Higher School of Engineering and Technology, Tunisia</li>
          </ul>
        </div>

        <div className={styles.row}>
          <ul className={styles.uli}>
            <li className={styles.right}>
              <ul className={styles.uli}>
                <li>2024</li>
              </ul>
            </li>
            <li className={styles.header}>National Bachelor's Degree in Business Computing – Business Intelligence</li>
            <li className={styles.description}>Faculty of Economic Sciences and Management of Mahdia in collaboration with the Higher Institute of Informatics of Mahdia - University of Monastir - Tunisia</li>
          </ul>
        </div>

        <div className={styles.row}>
          <ul className={styles.uli}>
            <li className={styles.right}>
              <ul className={styles.uli}>
                <li>2019</li>
              </ul>
            </li>
            <li className={styles.header}>Baccalaureate in Computer Science</li>
            <li className={styles.description}>Private High School El Amal, Megrine, Ben Arous, Tunisia.</li>
          </ul>
        </div>
      </article>

      <article className={styles.articli} id="Expr">
        <h2 className={styles.hdu}>Experience</h2>

        <div className={styles.row}>
          <ul className={styles.uli}>
            <li className={styles.right}>
              <ul className={styles.uli}>
                <li>June 2024</li>
                <li>Present</li>
              </ul>
            </li>
            <li className={styles.header}>Junior Data Analyst</li>
            <li className={styles.description}>DIGIBRAIN AGENCY, Centre Urbain Nord, Tunisia</li>
            <li>Hired as a Junior Data Analyst after completing the internship.</li>
            <li>Work on real-time data analysis projects.</li>
            <li>Create BI reports and automate decision-making processes using Microsoft Azure and Fabric cloud services.</li>
            </ul>
        </div>
        <div className={styles.row}>
				<ul className={styles.uli}>
					<li className={styles.right}>
						<ul className={styles.uli}>
							<li>Feb 2024</li>
							<li>June 2024</li>
						</ul>
					</li>
					<li className={styles.header}>Final Year Internship</li>
					<li className={styles.description}>DIGIBRAIN AGENCY, Centre Urbain Nord, Tunisia</li>
					<li> Implemented a comprehensive analytical system for Connect Content.</li>
					<li> Managed real-time data collection and developed a web application for decision management.</li>
					<li> Integrated reports and automated CI/CD processes using Microsoft Azure, Fabric, and web scraping techniques.</li>
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
					<li className={styles.header}>Marketing and UI/UX Design Internship</li>
					<li className={styles.description}>Express Médical Transport Assistance (EMTA), Hammamet, Tunisia</li>
					<li> Defined client needs and created a graphic charter.</li>
					<li> Designed a mobile app and an e-commerce website.</li>
					<li> Utilized Adobe Suite for graphic design, produced descriptive videos, and launched social media ad campaigns.</li>
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
					<li className={styles.description}>Cuba Studio, Ben Arous, Tunisia</li>
					<li> Analyzed project requirements and drafted a specifications document using UML.</li>
					<li> Developed a Full Stack showcase website and configured a VPS server for deployment.</li>
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
					<li className={styles.description}>Ministry of Justice, Court of First Instance, Ben Arous, Tunisia</li>
					<li> Coordinated the digitization and archiving of judicial files.</li>
					<li> Analyzed needs, trained employees, and ensured confidentiality in document management.</li>
					<li> Implemented software solutions to improve document management processes.</li>
					</ul>
			</div>	

      <div className={styles.row}>
				<ul className={styles.uli}>
					<li className={styles.right}>
						<ul className={styles.uli}>
							<li>July 2020</li>
							<li>August 2020</li>
						</ul>
					</li>
					<li className={styles.header}>Support and Information Systems (SSI) Internship</li>
					<li className={styles.description}>Tunisie Telecom, Regional Directorate – SSI Office, Ben Arous, Tunisia</li>
					<li> Installed and maintained computers and servers, managing fiber optic networks and databases.</li>
					<li> Developed a desktop application with WinDev, C++, and SQL to optimize resources.</li>
					</ul>
			</div>	
      </article>

      <article className={styles.articli} id="PHac">
        <h2 className={styles.hdu}>PARTICIPATIONS AND HACKATHONS</h2>

        <div className={styles.row}>
          <ul className={styles.uli}>
            <li className={styles.right}>
              <ul className={styles.uli}>
                <li>Dec 2023</li>
              </ul>
            </li>
            <li className={styles.header}>MicMinds Mahdia Hackathon</li>
            <li className={styles.description}>APII Business Incubator Mahdia, Tunisia</li>
            <li>Winner Price, 1st Place</li>
          </ul>
        </div>

        <div className={styles.row}>
          <ul className={styles.uli}>
            <li className={styles.right}>
              <ul className={styles.uli}>
                <li>May 2023</li>
              </ul>
            </li>
            <li className={styles.header}>Injaz El Arab MENA Challenge version 3</li>
            <li className={styles.description}>FSEG Mahdia, Tunisia</li>
            <li>Winner Price, 1st Place</li>
          </ul>
        </div>

        <div className={styles.row}>
          <ul className={styles.uli}>
            <li className={styles.right}>
              <ul className={styles.uli}>
                <li>Feb 2023</li>
              </ul>
            </li>
            <li className={styles.header}>Sketch Hackathon ISIMa</li>
            <li className={styles.description}>Microsoft ISI Mahdia Club, Tunisia</li>
            <li>Main Organizer</li>
          </ul>
        </div>

        <div className={styles.row}>
          <ul className={styles.uli}>
            <li className={styles.right}>
              <ul className={styles.uli}>
                <li>May 2022</li>
              </ul>
            </li>
            <li className={styles.header}>Injaz El Arab MENA Challenge version 2</li>
            <li className={styles.description}>FSEG Mahdia, Tunisia</li>
            <li>2nd Place</li>
          </ul>
        </div>

        <div className={styles.row}>
          <ul className={styles.uli}>
            <li className={styles.right}>
              <ul className={styles.uli}>
                <li>Oct 2021</li>
              </ul>
            </li>
            <li className={styles.header}>IEEE Xtream Dev</li>
            <li className={styles.description}>IEEE Student Branch ISI Mahdia, Tunisia</li>
            <li>Regional Participant</li>
          </ul>
        </div>

        <div className={styles.row}>
          <ul className={styles.uli}>
            <li className={styles.right}>
              <ul className={styles.uli}>
                <li>May 2019</li>
              </ul>
            </li>
            <li className={styles.header}>Orientation Design National Challenge</li>
            <li className={styles.description}>UGTE Ben Arous Community, Tunisia</li>
            <li>2nd Place</li>
          </ul>
        </div>

        <div className={styles.row}>
          <ul className={styles.uli}>
            <li className={styles.right}>
              <ul className={styles.uli}>
                <li>Dec 2019</li>
              </ul>
            </li>
            <li className={styles.header}>24h Hack Challenger</li>
            <li className={styles.description}>Microsoft Club ISIMM Monastir, Tunisia</li>
            <li>3rd Place</li>
          </ul>
        </div>

        <div className={styles.row}>
          <ul className={styles.uli}>
            <li className={styles.right}>
              <ul className={styles.uli}>
                <li>Oct 2014</li>
              </ul>
            </li>
            <li className={styles.header}>30 Days Of Code HackerRank</li>
            <li className={styles.description}>HackerRank, WordWide</li>
            <li>Silver Badge</li>
          </ul>
        </div>

      </article>
    </div>
    </section>
  );
};

export default Resume;
