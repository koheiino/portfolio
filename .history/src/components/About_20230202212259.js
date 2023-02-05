import React from 'react';
//countup
import CountUp from 'react-countup';
//intersection observer
import { useInView } from 'react-intersection-observer';
//motion
import {motion } from 'framer-motion';
//variant
import { fadeIn } from '../variants';
 
const About = () => {
  const [ref, inView] = useInView ({
    threshold: 0.5,
  });
  return (
    <section id='about' className='section' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20
        lg:gap-y-0 h-screen'>
          {/* {img} */}
          <motion.div 
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.3}}
          className='flex-1 bg-about bgcontain bg-no-repeat h-[640px]
          mix-blend-lighten bg-bottom'></motion.div>
          {/* {text} */}
          <motion.div
          variants={fadeIn('left', 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.3}}
          className='flex-1'>
            <h2 className='h2 text-accent'>About me.</h2>
            <h3 className='h3 mb-4'>私はクリエイティブコーダーを目指している見習いフロントエンドエンジニアです。</h3>
            <p>
            神奈川在住、大学33年生。<br />
            東京都市大学メディア情報学部に在学中、現在は独学でクリエイティブコーディングを勉強中。<br />
            卒業研究では、UXを高めた読書支援のアプリケーションを作る予定。<br />
            趣味は、ピアノと読書と原神です。<br />
            興味ある分野は、Three.jsやクリエイティブなWeb技術。<br />
            性格は常にポジティブで前向きです。
            </p>
            {/* {stats} */}
            <div className='flex gap-x-6 lg:gap-x-10 mt-8'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient
                mb-2'>
                  {inView ?<CountUp start={0} end={21} duration={3} /> :null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>21 years old<br />
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient
                mb-2'>
                  {inView ?<CountUp start={0} end={4} duration={3} /> :null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>Projects<br />
                Completed</div>
              </div>
            </div>
            {/* <div className='flex gap-x-8 items-center mt-8'>
                <button className='btn btn-lg'>お問い合わせ</button>
              <a href='#' className='text-gradient btn-link'>
                My portfolio
              </a>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
