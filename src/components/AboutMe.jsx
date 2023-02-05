import { motion } from "framer-motion";

const AboutMe = () => {
  
  return (
    <motion.div className="intro"
    animate={{y:100}}>
      
      <div className="intro-text">
        <h1 className="intro-heading">ABOUT ME</h1>
        <p className="intro-para">
          Computer Science and Engineering Undergraduate with a specialisation
          in blockchain technology, from SRMIST, Chennai . Currently learning
          the ins and outs of Web Development. I mostly do frontend development
          with React and related frameworks and am currently working on my
          backend skills.
        </p>
      </div>

      <motion.div className="wrapper"
      animate={{y:100}}>
        <motion.div  className="skills">
          <motion.div
            whileHover={{ scale: 1, rotate: 25 }}
            whileTap={{ scale: 1.2, rotate: 0 }}
            className="skill-div"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/1051/1051277.png"
              alt="html5"
              className="skill-element"
            ></img>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1, rotate: 25 }}
            whileTap={{ scale: 1.2, rotate: 0 }}
            className="skill-div"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/732/732190.png"
              alt="css"
              className="skill-element"
            ></img>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1, rotate: 25 }}
            whileTap={{ scale: 1.2, rotate: 0 }}
            className="skill-div"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
              alt="javascript"
              className="skill-element"
            ></img>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1, rotate: 25 }}
            whileTap={{ scale: 1.2, rotate: 0 }}
            className="skill-div"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/919/919851.png"
              alt="react"
              className="skill-element"
            ></img>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1, rotate: 25 }}
            whileTap={{ scale: 1.2, rotate: 0 }}
            className="skill-div"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png"
              alt="node"
              className="skill-element"
            ></img>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1, rotate: 25 }}
            whileTap={{ scale: 1.2, rotate: 0 }}
            className="skill-div"
          >
            <img
              src="https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png"
              alt="express"
              className="skill-element"
            ></img>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1, rotate: 25 }}
            whileTap={{ scale: 1.2, rotate: 0 }}
            className="skill-div"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/4494/4494748.png"
              alt="git"
              className="skill-element"
            ></img>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1, rotate: 25 }}
            whileTap={{ scale: 1.2, rotate: 0 }}
            className="skill-div"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25657.png"
              alt="github"
              className="skill-element"
            ></img>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1, rotate: 25 }}
            whileTap={{ scale: 1.2, rotate: 0 }}
            className="skill-div"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3665/3665923.png"
              alt="c"
              className="skill-element"
            ></img>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1, rotate: 25 }}
            whileTap={{ scale: 1.2, rotate: 0 }}
            className="skill-div"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/6132/6132222.png"
              alt="cpp"
              className="skill-element"
            ></img>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1, rotate: 25 }}
            whileTap={{ scale: 1.2, rotate: 0 }}
            className="skill-div"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968350.png"
              className="skill-element"
            ></img>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1, rotate: 25 }}
            whileTap={{ scale: 1.2, rotate: 0 }}
            className="skill-div"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"
              className="skill-element"
            ></img>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AboutMe;
