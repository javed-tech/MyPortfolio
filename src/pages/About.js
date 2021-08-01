import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';
import jsPDF from 'jspdf'
import resume from '../assets/data/resume.pdf'

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);

    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
  .button {
    font-size: 2.2rem;
    background-color: ${(props) =>
      props.outline ? 'transperant' : 'var(--gray-1)'};
    padding: 0.7em 2em;
    border: 2px solid var(--gray-1);
    border-radius: 8px;
    display: inline-block;
    color: ${(props) => (props.outline ? 'var(--gary-1)' : 'black')};
  }
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.8rem;
    }
  }
`;

export default function About() {
  const downloadFile = () => {
    window.location.href = "https://www.dropbox.com/s/h00oymam6fcy9ky/resume.pdf?dl=0"
  }
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Javed</span>
              </p>
              <h2 className="about__heading"> Web developer</h2>
              <div className="about__info">
                <PText>
                  I am from Faridabad, Haryana, India. A place of beauty and
                  nature. Since my childhood, i love art and design. I always
                  try to design stuff with my unique point of view. I also love
                  to create things that can be usefull to others.
                  <br /> <br />
                  I started coding since I was in college. Coding is also an
                  art for me. I love it and now I have the opportunity to design
                  along with the coding. I find it really interesting and I
                  enjoyed the process a lot.
                  <br />
                  <br />
                  My vision is to make the world a better place. Now almost
                  everything is becoming better than ever. It is time for us to
                  create more good stuff that helps the world to become a better
                  place.
                </PText>
              </div>
              <button className="button" onClick={downloadFile}>Dowload CV</button>
              {/* <Button btnText="Download CV"  btnLink="https://www.dropbox.com/sh/hbvkwqtk8gah9uc/AACcLyn83nChOt1l2iRfP5DEa?dl=0"  /> */}
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="School"
                items={['Modern B.P Public School, Faridabad']}
              />
              <AboutInfoItem
                title="Collage"
                items={['B S Anangpuria Institute of Technology & Management']}
              />
              <AboutInfoItem
                title="University"
                items={['Maharishi Dayanand University, Rohtak']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Marks</h1>

              <AboutInfoItem
                title="Class 10th"
                items={['7.2 cgpa']}
              />
              <AboutInfoItem
                title="Class 12th"
                items={['6.5 cgpa']}
              />
              <AboutInfoItem
                title="B.Tech(IT)"
                items={['60%']}
              
              />
             
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title=""
                items={['HTML', 'CSS', 'JavaScript', 'REACTJS']}
              />
              <AboutInfoItem
                title=""
                items={['Bootstrap']}
              />
             
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem
                title=" 2019-2020"
                items={['Web Developer  at Adifeco Pvt Ltd']}
              />
              
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
