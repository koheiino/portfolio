import React from 'react';
//icon
import { BdArrowUpright, BsArrowUpRight } from 'react-icons/bs'
//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';

//service data 
const services = [
  {
    name: 'プログラミング言語など',
    description:
      'html,css,sass,JavaScript,TypeScript,Three.js,Python',
    details: '独学2年ほどです。TypeScript,Pythonに関しては実務経験はありません。',
    link: 'Learn more',
  },
  {
    name: 'ライブラリ/フレームワーク',
    description:
      'React, Next.js,Tailwind CSS',
    details: 'いずれも実務での使用経験はありません',
    link: 'Learn more',
  },
  {
    name: 'CMS',
    description:
      'microCMS, WordPress',
    details: '実務でWordpressを使ったサイト作成をしたことがあります。',
    link: 'Learn more'
  },
  {
    name: 'ツール',
    description:
      'XD, Figma, Elementor, Webflow',
    details: 'FigmaやWebflowはWeb制作で使用しています',
    link: 'Learn more'
  },
];

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto pt-36'>
        <div className='flex flex-col lg:flex-row flex-row'>
            {/* [text & image] */}
            <motion.div
            variants={fadeIn('right', 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.3}}
            className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat 
            mix-blend-lighten mb-12 lg:mb-0'>
              <h2 className='h2 text-accent mb-6'>My skills</h2>
              <h3 className='h3 max-w-[455px] mb-16'></h3>
              <button className='btn btn-sm'>制作物を見る(準備中です！)</button>
            </motion.div>

            {/* [services] */}
            <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.3}}
            className='flex-1'>
            {/* [service list] */}
              <div>
                {services.map((service, index) => {
                  //destructure service
                  const { name, description, details, link } = service;
                  return (
                    <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
                      <div className='max-w-[476px]'>
                        <h4 className='text-[20px] tracking-winder font-primary
                        font-smibold mb-6'>
                          {name}
                        </h4>
                        <p className='font-secondary leading-tight'>
                          {description}
                        </p>
                        <p className='font-secondary leading-tight'>
                          {details}
                        </p>
                      </div>
                      {/* <div className='flex flex-col flex-1 items-end'>
                        <a href='#'className='btn w-9 h-9 flex justify-center items-center mb-9'>
                          <BsArrowUpRight />
                        </a>
                        <a href='#' className='text-gradient text-sm'>{link}</a>
                      </div> */}
                    </div>
                  );
                })}
              </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
