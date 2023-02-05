import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="exp">
      <h1 className="exp-heading">EXPERIENCE</h1>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1.05 }}
        className="cards"
      >
        <div className="exp-line-1">
          <div>COLLEGE CLUB</div>
          <a href="https://apply.dscommunity.in">
            <img
              src="https://cdn-icons-png.flaticon.com/512/7268/7268615.png"
              alt="link"
              className="link-img"
            ></img>
          </a>
        </div>
        <div className="exp-line-2">
          <img
            src="https://media.licdn.com/dms/image/C510BAQEj-uKiVvgAew/company-logo_200_200/0/1587506331537?e=1683763200&v=beta&t=nzCCdHDml5jkZ9foBDBhclq_T__538QaOspg2uoxn50"
            alt="logo"
            className="logo-img"
          ></img>
          <div>DATA SCIENCE COMMUNITY SRM</div>
        </div>
        <div className="exp-line-3"> Duration: November 2022 - Present</div>
        <div className="exp-line-4">
          <div>
            <ul>
              <li>Member at techical domain</li>
              <li>Worked on Club Projects.</li>
              <li>Mentored attendies on Club Events.</li>
            </ul>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1.05 }}
        className="cards"
      >
        <div className="exp-line-1">
          <div>COLLEGE CLUB</div>
          <a href="https://linktr.ee/adg_srm?fbclid=PAAaa9ISqysP5yBlcF4iueT8IZOQna68U3MC8YMUciRIwAvisifLE_r0BPzmA">
            <img
              src="https://cdn-icons-png.flaticon.com/512/7268/7268615.png"
              alt="link"
              className="link-img"
            ></img>
          </a>
        </div>
        <div className="exp-line-2">
          <img
            src="https://media.licdn.com/dms/image/C560BAQE8q_f0Meb1JQ/company-logo_200_200/0/1672749680522?e=1683763200&v=beta&t=dP2YaMZV1CcfhKg7rRNCWVU9HeoEqZfUbFuU9rJyjt4"
            alt="logo"
            className="logo-img"
          ></img>
          <div>SWIFT CODING CLUB SRM</div>
        </div>
        <div className="exp-line-3"> Duration: October 2022 - Present</div>
        <div className="exp-line-4">
          <div>
            <ul>
              <li>Member at web development domain</li>
              <li>Worked on Club Projects.</li>
            </ul>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1.05 }}
        className="cards"
      >
        <div className="exp-line-1">
          <div>COLLEGE CLUB</div>
          <a href="https://githubsrm.tech">
            <img
              src="https://cdn-icons-png.flaticon.com/512/7268/7268615.png"
              alt="link"
              className="link-img"
            ></img>
          </a>
        </div>
        <div className="exp-line-2">
          <img
            src="https://media.licdn.com/dms/image/C4D0BAQGBI0JjQ_vd3Q/company-logo_200_200/0/1620249437859?e=1683763200&v=beta&t=NiDO8fHSyY0IzKpEwruszxlV1TCAJ3835kNMWfg7mlI"
            alt="logo"
            className="logo-img"
          ></img>
          <div>GITHUB COMMUNITY SRM</div>
        </div>
        <div className="exp-line-3"> Duration: November 2022 - Present</div>
        <div className="exp-line-4">
          <div>
            <ul>
              <li>Member at techical domain</li>
              <li>Worked on Club Projects.</li>
            </ul>
          </div>
        </div>
      </motion.div>
      
    </div>
  );
};

export default Experience;
