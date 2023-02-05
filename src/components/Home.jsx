import { motion } from "framer-motion";

const Home = () => {
    return ( 
        <motion.div className="landingPage"
        animate={{y:50}}
        transition={{ ease: "easeOut", duration: 3 }}>
            {/* <img src="images/pngwing.com.png" alt="backgroung" className="background"></img> */}
            <div className="hw">Hello World!</div>
            <h1 className="tst">
                I am Trisha! 
            </h1>
            <div className="web">
                 A Web Developer
            </div>
        </motion.div>
     );
}
 
export default Home;
