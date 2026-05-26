import { useState } from 'react';
import Style from './landing.module.css';

const images = import.meta.glob('./pictures/*', { eager: true });

const getImg = (path) => images[path]?.default ?? images[path];

const features = [
  { title: "Fast", desc: "“In life, not everything goes the way we want, but everything teaches us something we need.”", img: getImg('./pictures/pic1.jpg') },
  { title: "Reliable", desc: "“I learned that happiness comes when you stop chasing perfection and start appreciating the little things.”", img: getImg('./pictures/pic2.jpg') },
  { title: "Powerful", desc: "“Life becomes lighter when you stop carrying what was never meant for you.”", img: getImg('./pictures/pic3.jpg') },
  { title: "Fast", desc: "“Life is about growing through what you go through.”", img: getImg('./pictures/pic4.jpg') },
  { title: "Reliable", desc: "I like you", img: getImg('./pictures/pic5.jpg') },
  { title: "Powerful", desc: "“The best version of yourself is created during the hardest moments of your life.”", img: getImg('./pictures/pic6.jpg') },
  { title: "Powerful", desc: "“At the end of the day, peace is more valuable than proving anything to anyone.”", img: getImg('./pictures/pic7.jpg') }
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
        <img src={getImg('./pictures/logo.png')} alt="Product Logo" className={Style.headerImg} />
        <nav id="nav-bar" className={Style.navBar}>
          <a href="#features" className={Style.navlink}>Pictures</a>
          <a href="#video" className={Style.navlink}>Music</a>
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
            <p className={Style.letterDate}>May 2026</p>
            <p className={Style.letterGreeting}>Dear Toni,</p>
            <p className={Style.letterBody}>
              Hello, I am Jay, I just wanted to check on you and ask if you're okay. it's been half a day since our last conversation, and honestly, I can't stop thinking about our relationship. 

            </p>
            <p className={Style.letterBody}>
              I just want answers, that's all. tell me everything you feel about us, or if there's something bothering you or any problem you're dealing with. I'm still here parin naman^^
            </p>
            <p className={Style.letterClosing}>With warmth,</p>
            <p className={Style.letterSignature}>Jay</p>
          </div>
        </section>
      </main>
    </>
  );
}

export default Page;
