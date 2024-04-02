// FAQ.js
import React, { useState } from "react";
import Accordion from "./Accordion";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="grid grid-cols-2 gap-12 p-4 rounded-lg max-w-screen-md mx-auto">
      <Accordion
        title="How does the blood donation process work?"
        answer={
          <ul>
            <li>
              You will complete donor registration, which includes information
              such as your name, address, phone number, and donor identification
              number (if you have one).
            </li>
            <li>
              You will have your temperature, hemoglobin, blood pressure, and
              pulse checked.
            </li>
            <li>
              They will cleanse an area on your arm and insert a brand–new,
              sterile needle for the blood draw.
            </li>
            <li>
              After donation, you will spend 10-15 minutes enjoying refreshments
              to allow your body time to adjust to the slight decrease in fluid
              volume.
            </li>
          </ul>
        }
        isOpen={openIndex === 0}
        onClick={() => handleAccordionClick(0)}
      />
      <Accordion
        title="How long can blood be kept after donation?"
        answer="When test results are received, units suitable for transfusion are labeled and stored. Red cells are stored in refrigerators at 6ºC for up to 42 days. Platelets are stored at room temperature in agitators for up to five days. Plasma and cryo are frozen and stored in freezers for up to one year."
        isOpen={openIndex === 1}
        onClick={() => handleAccordionClick(1)}
      />
      <Accordion
        title="Can I eat before donating blood?"
        answer="Eating regularly before donating will help to keep your blood sugar levels stable. This is important so that you don't feel lightheaded or dizzy after your donation. Having a snack before you donate can help maintain these blood sugar levels."
        isOpen={openIndex === 2}
        onClick={() => handleAccordionClick(2)}
      />
      <Accordion
        title="How many times can you donate blood?"
        answer="You must wait at least eight weeks (56 days) between donations of whole blood and 16 weeks (112 days) between Power Red donations. Whole blood donors can donate up to 6 times a year. Platelet apheresis donors may give every 7 days up to 24 times per year."
        isOpen={openIndex === 3}
        onClick={() => handleAccordionClick(3)}
      />
      <Accordion
        title="What types of tests are performed on donated blood?"
        answer={
          <ul>
            <li>Hepatitis B surface antigen (HBsAg).</li>
            <li>Hepatitis C virus antibody (anti-HCV)/antigen (HCV Ag).</li>
            <li>
              HIV-1 and HIV-2 antibody (anti-HIV-1 and anti-HIV-2) antigen
              (HIV-1 and HIV-2 Ag).
            </li>
            <li>Serologic test for syphilis.</li>
            <li>
              Nucleic acid amplification testing (NAT) for HIV-1, HCV, and HBV
              if available.
            </li>
          </ul>
        }
        isOpen={openIndex === 4}
        onClick={() => handleAccordionClick(4)}
      />
      <Accordion
        title="Can diabetic donate blood?"
        answer="If you have diabetes and want to donate blood, it's generally safe to do so. People with type 1 and type 2 diabetes are eligible to give blood donations. But you should properly manage your diabetes and be in otherwise good health before donating blood."
        isOpen={openIndex === 5}
        onClick={() => handleAccordionClick(5)}
      />
      <Accordion
        title="What should I do/not do after donating blood?"
        answer={
          <>
            <p>
              The loss of red blood cells means that there is less oxygen
              circulating in the body. Donating blood usually does not affect a
              person’s daily routine. However, it can limit what a person can do
              immediately afterward.
            </p>
            <p>
              Self-Care After Donating Blood:
            </p>
              <ul>
                <li>Have a snack.</li>
                <li>
                  Drink four additional 8-oz glasses of fluid over the next 24
                  hours.
                </li>
                <li>
                  Avoid drinking alcohol for the first 24 hours after a
                  donation.
                </li>
                <li>Keep the bandage on for several hours.</li>
                <li>
                  Clean the area around the bandage with soap and water to avoid
                  a skin rash.
                </li>
                <li>
                  Avoid vigorous activity such as heavy lifting or strenuous
                  exercise for the rest of the day.
                </li>
                <li>Eat food rich in iron.</li>
              </ul>
          </>
        }
        isOpen={openIndex === 6}
        onClick={() => handleAccordionClick(6)}
      />
      <Accordion
        title="Who Cannot donate blood?"
        answer="You must be in good health at the time you donate. You cannot donate if you have a cold, flu, sore throat, cold sore, stomach bug, or any other infection. If you have recently had a tattoo or body piercing, you cannot donate for 6 months from the date of the procedure."
        isOpen={openIndex === 7}
        onClick={() => handleAccordionClick(7)}
      />
    </div>
  );
};

export default FAQ;
