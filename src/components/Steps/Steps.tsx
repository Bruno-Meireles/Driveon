import "./Steps.css";
import linha from "../../assets/img/linha.png";
import solucao1 from "../../assets/img/solucao1.png";
import solucao2 from "../../assets/img/solucao2.png";
import solucao3 from "../../assets/img/solucao3.png";
import solucao4 from "../../assets/img/solucao4.png";

const Steps: React.FC = () => {
  const sections = [
    {
      img: solucao1,
      title: "Create your account",
      desc: "Complete your account with some basic infirmation including hour home your work location and your working hours.",
    },
    {
      title: "Plan your journey",
      img: solucao2,
      desc: "Open the app click the agenda tab and enter your working hoursbfor the coming week.Then you'll be presented with a list of our drivers.",
    },
    {
      title: "Meet your driver",
      img: solucao3,
      desc: "Use our to get to know your match with our driver.You'll be picked up at your regular location, or agree on an alternative pick-up location.        .",
    },
    {
      title: "Enjoy your journey",
      img: solucao4,
      desc: "Get in, sit back and enjoy your journey that takes you directly to your destination with some free cup of coffee from us.",
    },
  ];

  return (
    <>
      <section className="steps">
        <div className="steps-base">
          <img className="steps-line" src={linha} alt="Line image" />
          <h1 className="steps-title">How to get starded?</h1>
        </div>
        <div className="steps-container">
          {sections.map((section, index) => (
            <div key={index} className="step-card">
              <img src={section.img} alt={section.title} />
              <h3>{section.title}</h3>
              <p>{section.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
export default Steps;
