import React from 'react';
//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';

const Contact = () => {
  return (
    <section className='py-16 section lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* {text} */}
          <motion.div 
          variants={fadeIn('right', 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.3}}
          className='flex-1'>
            <div>
              <h2 className='h2 text-xl uppercase text-accent font-medium mb-2 tracking-wide'>
                Contact
              </h2>
              <h3>
                お問い合わせ
              </h3>
            </div>
          </motion.div>
          {/* {form} */}
          <motion.form
          variants={fadeIn('left', 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.3}}
           className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'>
            <input className='
            bg-transparent border-b py-3 outline-none w-full 
            placeholder:text-white focus:border-accent transition-all'
            type='text'
            placeholder='お名前'>
            </input>
            <input className='
            bg-transparent border-b py-3 outline-none w-full 
            placeholder:text-white focus:border-accent transition-all'
            type='text'
            placeholder='メールアドレス'>
            </input>
            <textarea className='
            bg-transparent border-b py-3 outline-none w-full 
            placeholder:text-white focus:border-accent transition-all
            resize-none mb-12'
            placeholder='本文'>
            </textarea>
            <button className='btn btn-lg'>送信</button>
          </motion.form>
        </div>
      </div>
    </section>

  );
};

export default Contact;
