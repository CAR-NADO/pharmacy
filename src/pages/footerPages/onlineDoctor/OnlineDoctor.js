import React from "react";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import SubHeader from "../../../components/header/SubHeader";
import "./onlineDoctor.css";
import onlineDocImg1 from "../../../assets/onlineDoc-img/online-doc-img1.jpg";
import onlineDocImg2 from "../../../assets/onlineDoc-img/online-doc-img2.jpg";

const OnlineDoctor = () => {
  return (
    <div>
      <Header />
      <SubHeader />
      <div className="online-doc-parent-div">
        <div className="online-doc-container">
          <h1>Our online doctor</h1>
          <p>
            <span>Dr. David Jones</span>
          </p>
          <p>
            After graduating from university with medicine degree (MD) and being
            addressed as a doctor in the profession, Dr. David jones pursued a
            reputable career in the NHS to attain more significance. With over
            12 years of long experience, Dr. David Jones holds inexplicable
            expertise and positions worth remembering at several leading
            hospitals with infinite knowledge in almost every aspect of
            healthcare.
          </p>
          <img src={onlineDocImg1} alt="image" className="online-doc-img" />
          <h2>What is an online doctor?</h2>
          <p>
            The term online doctor seems to be taking over the trend of visiting
            doctors in hospitals. It is in vogue and refers to doctors that
            provide valuable healthcare tips based on the conditions of the
            patients. In addition to this, online doctors can prescribe
            medication to patients without having to call them to the
            hospital/clinic.
          </p>
          <p>
            In recent years, the evolution of technology has left an imprint on
            people seeking immediate solutions online and medical advice too can
            be now easily received through video calls and online doctor chat
            services. The ability of online doctor is no different than the
            doctor you meet in the clinic as they all hold the same expertise.
            The online doctor can easily diagnose your debilitating health
            conditions and treat symptoms over the internet. The facilities on
            the internet have greatly improved with satisfaction guaranteed in
            maximum cases.
          </p>
          <h2>Benefits of online doctor</h2>
          <p>
            The option of online doctor service can come with multiple benefits.
            If compared to the old concept, making an appointment is more
            convenient with online doctor than taking out time to meet the
            doctor in clinic/ hospital. The patients do not redundantly need to
            waste his/her time in the long queues and suffer any pay cuts. With
            online doctor, patients can also save the cost and time spent in the
            journey. One of the top benefits of online doctors is, the online
            doctor services facilitate health services and save NHS hospitals.
          </p>
          <p>
            People interested in the journey of Dr. David Jones can see the
            details outlined below
          </p>
          <h2>How to become an Online Doctor</h2>
          <img src={onlineDocImg2} alt="image" className="online-doc-img" />
          <p>
            Dr. David Jones believes that sharing valuable medical information
            and providing free online doctor consultations can contribute to
            enhancing the understanding of individuals wanting to know about the
            medical domain. Our weekly blog at{" "}
            <span>https://onlinepharmas.com/blogs/</span> can be of great help
            to extract valuable information about healthcare and drive maximum
            people to pass on the same knowledge to others.
          </p>
          <p>
            Dr. David Jones has devoted years of hard work at the university,
            learning the essence of health and now putting it up in words
            through writing. Dr. David Jones is fond of writing and pours in his
            medical thoughts into writing to increase awareness about good
            health. Writing has always been close to his heart and through
            blogging, he shares his experiences that contribute to redefining
            the lives of millions. He would spend a significant amount of time
            researching and writing to make sure individuals are aware of the
            latest events taking place in the field of medical.
          </p>
          <h2>Valuable blogs by online doctor</h2>
          <p>
            The weekly blog posted by Dr. David Jones aims to cover those health
            aspects that are suffered by our readers. We welcome our readers to
            take a dig into our blogs and instill the health experience of Dr.
            David jones in your daily lives. We are sure that bounty knowledge
            of the doctor through his comprehensive guide will offer a good
            understanding of medicines such as anxiety medication, sleeping
            tablets, and pain-relieving medicines.
          </p>
          <p>
            To directly speak with our online doctor, you can call at the number
            given below and make an appointment by sending an email to us.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OnlineDoctor;
