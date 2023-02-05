import React from 'react';
//images
import Image from '../assets/profile-1.png';
//icons
import { FaGithub, FaTwitter } from 'react-icons/fa';
//type animation
import { TypeAnimation } from 'react-type-animation';
//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';
//imort link 

import { Link } from 'react-scroll';

const Banner = () => {
  return (
  <section 
  className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
        {/* {text} */}
        <div className='flex-1 text-center font-secondary lg:text-left'>
        <motion.h1 
        variants={fadeIn('up', 0.3)} 
        initial="hidden"
        whileInView={'show'} 
        viewport={{once: false, amount:0.7}} 
        className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
          KOHEI <span>HIGASHI</span>
        </motion.h1>
      <motion.div 
        variants={fadeIn('up', 0.3)} 
        initial="hidden"
        whileInView={'show'} 
        viewport={{once: false, amount:0.7}} 
       className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold
       uppercase leading-[1]'>
        <span className='text-white mr-4'>I want to be</span>
        <TypeAnimation sequence={[
          'Developer',
          2000,
          'pianist',
          2000,
        ]}
        speed={50}
        className='text-accent' 
        wrapper='span'
        repeat={Infinity}
        />
      </motion.div>
        {/* <motion.p 
        variants={fadeIn('up', 0.5)} 
        initial="hidden"
        whileInView={'show'} 
        viewport={{once: false, amount:0.7}} 
        className='mb-8 max-w-lg mx-auto lg:mx-0'>
        神奈川生まれの大学3年生。<br />
        東京都市大学メディア情報学部に在学中。
        現在は独学でクリエイティブコーディングを勉強中。卒業研究では、
        UXを大事にしたアプリケーションを作る予定。趣味は、ピアノと読書と原神です。
        興味ある分野は、Three.jsやクリエイティブなWeb技術。
        </motion.p> */}
          <motion.div 
          variants={fadeIn('up', 0.6)} 
          initial="hidden"
          whileInView={'show'} 
          viewport={{once: false, amount:0.7}} 
          className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
            <Link
              to='contact'
              activeClass='active'
              smooth={true}
              spy={true}> 

              <button 
              className='btn btn-lg'>
              Contact me</button>
              </Link>
            <a href='#' className='text-gradient btn-link '>My portfolio</a>
          </motion.div>
        {/* {actions} */}
        <motion.div 
        variants={fadeIn('up', 0.8)} 
        initial="hidden"
        whileInView={'show'} 
        viewport={{once: false, amount:0.7}} 
        className='flex text-[20px] gap-x-6 max-w-max mx-auto
        lg:mx-0'>
          <a href='https://twitter.com/7SUTnykliHAwttI'>
            <FaTwitter />
          </a>
          <a href='https://github.com/koheiino'>
            <FaGithub />
          </a>
        </motion.div>
        </div>
      {/* {image} */}
      <motion.div
      variants={fadeIn('down', 0.5)} 
      initial="hidden"
      whileInView={'show'} 
      viewport={{once: false, amount:0.7}} 
      className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] mx-auto'>
        <img src={Image} alt='' className='rounded-full' />
      </motion.div>
      </div>
    </div>
  </section>
  );
};

export default Banner;
