import React from 'react';
import './Others.css';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import img6 from '../assets/img6.jpg';
import img7 from '../assets/img7.jpg';
import lor from '../assets/lor.jpg';
import cert1 from '../assets/cert-1.jpg';
import cert2 from '../assets/cert-2.jpg';
const Others = () => {
  return (
    <div style={styles.container}>
      <h1 className="section-title text-pop-up-top" style={{ marginTop: '3rem' }}>
        what more do i do in co-curriculum?
      </h1>

      <ul style={styles.list}>
        <li>👩🏻‍💻 i contributed significantly in Social Summer of Code Season 4 - 2025 and ranked 87 among 1361 others.</li>
       <br></br> <li>
          📰 i had the opportunity to write and file a patent under my professor Sir Sudheer Kr E. <br />
          <ul style={styles.nestedList}>
            <li>
              Title: AI-Assisted Interactive Whiteboard System and Method for Engaging Users in collaborative brainstorming and learning experiences
            </li>
            <li>Application Number: 202541034233</li>
            <li>
              <a className='beas2'
                href="https://iprsearch.ipindia.gov.in/PublicSearch/PublicationSearch/ApplicationStatus"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.link}
              >
                link to verify application status
              </a>
            </li>
          </ul>
        </li>
<br></br>
        <li>🫶🏻 i volunteered at Kshitiksha Foundation during Summer 2024. i helped raise funds for the NGO and contributed to content writing and marketing during the period.
            <br></br>
        </li>
        <br></br>
        <li>🏅 i was an active member of the Student Council at my school from 2019 - 2022 and have been chosen several times for hosting fests and events.</li>
        <li>🏅 awarded Best Speaker award at over five debate fests across West Bengal.</li>
        <li>
          🏅verbally mentioned by head Chair at IIMUN Digital Conference 17.0, representing Iran in United Nations Women. <br></br> 🏅also represented foreign affairs minister of India, Afghanistan UNW, etc at other MUNs.
        </li><br></br>
        <li>🖊🎀i also love writing abstract blogs in WordPress based on grief and ambition.
            <ul style={styles.nestedList}>
                <li><a className='beas2'
                href="https://bellbuuu5.wordpress.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.link}
              >
              🫀WHAT ONCE WAS🫀</a></li>
              <li><a className='beas2'
                href="https://shiulii.wordpress.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.link}
              >🌼A MILLION PIECES🌼</a>
             </li>
            </ul>
        </li>
      </ul> <br></br>
      <h2 className="beas3">gallery:</h2>
      <div style={styles.gallery}>
  <img src={cert2} alt="Photo 1" style={styles.galleryImage} />
  <img src={cert1} alt="Photo 3" style={styles.galleryImage} />
  <img src={img3} alt="Photo 4" style={styles.galleryImage} />
  <img src={img4} alt="Photo 5" style={styles.galleryImage} />
  <img src={img5} alt="Photo 6" style={styles.galleryImage} />
  <img src={img6} alt="Photo 7" style={styles.galleryImage} />
  <img src={img2} alt="Photo 8" style={styles.galleryImage} />
  <img src={img1} alt="Photo 9" style={styles.galleryImage} />
  <img src={img7} alt="Photo 10" style={styles.galleryImage} />
  
  <img src={lor} alt="Photo 2" style={styles.galleryImage} />
  
</div>

    </div>
  );
};

const styles = {
  container: {
    color: 'white',
    maxWidth: '800px',
    margin: '80px auto',
    padding: '20px',
    textAlign: 'left',  
    fontFamily: 'Arial, sans-serif',
  },
  list: {
    listStyleType: 'none',
    paddingLeft: '20px',
    fontSize: '1.1rem',
    lineHeight: 1.6,
    fontWeight: '700',
  },
  nestedList: {
    listStyleType: 'disc',
    paddingLeft: '20px',
    marginTop: '8px',
    fontSize: '1rem',
  },
  gallery: {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '16px',
  marginTop: '40px',
},

galleryImage: {
  width: '100%',
  height: 'auto',
  borderRadius: '8px',
  objectFit: 'cover',
  boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
  cursor: 'pointer',
  transition: 'transform 0.3s ease',
},

galleryImageHover: {
  transform: 'scale(1.05)',
},

};

export default Others;
