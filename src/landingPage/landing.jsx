import { useState } from 'react';
import Style from './landing.module.css';

const images = import.meta.glob('./pictures/*', { eager: true, as: 'url' });

const features = [
  { title: "Fast", desc: "I like your Eyes", img: images['./pictures/pic1.jpg'] },
  { title: "Reliable", desc: "I ", img: images['./pictures/pic2.jpg'] },
  { title: "Powerful", desc: "i don't know why its powerful", img: images['./pictures/pic3.jpg'] },
  { title: "Fast", desc: "i don't know why its fast", img: images['./pictures/pic4.jpg'] },
  { title: "Reliable", desc: "i don't know why its reliable", img: images['./pictures/pic5.jpg'] },
  { title: "Powerful", desc: "i don't know why its powerful", img: images['./pictures/pic6.jpg'] },
  { title: "Powerful", desc: "i don't know why its powerful", img: images['./pictures/pic7.jpg'] }
]

function FeatureCard({ title, desc, img }) {
  const [show, setShow] = useState(false);
  return (
    <div
      className={Style.feature}
      style={{ backgroundImage: `url(${img})` }}
      onClick={() => setShow(!show)}
    >
      {show && <div className={Style.text}>{desc}</div>}
    </div>
  );
}

function Page() {
  return (
    <>
      <header id="header" className={Style.header}>
        <img src={images['./pictures/logo.png']} alt="Product Logo" className={Style.headerImg} />
        <nav id="nav-bar" className={Style.navBar}>
          <a href="#features" className={Style.navlink}>Features</a>
          <a href="#video" className={Style.navlink}>Video</a>
          <a href="#message" className={Style.navlink}>Message</a>
        </nav>
      </header>

      <main>
        <section id="features" className={Style.features}>
          {features.map((item) => (
            <FeatureCard key={item.title} title={item.title} desc={item.desc} img={item.img} />
          ))}
        </section>

        <section id="video" className={Style.video}>
            <h2 className={Style.playtext}>PLAY THIS!!</h2>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/u9raS7-NisU"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </section>

        <section id="message" className={Style.message}>
          <div className={Style.letter}>
            <p className={Style.letterDate}>October 2024</p>
            <p className={Style.letterGreeting}>Dear Toni,</p>
            <p className={Style.letterBody}>
              Hello, I am Christian Jay, a 3rd year computer engineering student at MSU-IIT.
              I built this page to share a little about myself and the things I love.
              Thank you for taking the time to visit.
            </p>
            <p className={Style.letterClosing}>With warmth,</p>
            <p className={Style.letterSignature}> Jay</p>
          </div>
        </section>
      </main>
    </>
  );
}

export default Page;
