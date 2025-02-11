import React from 'react'

const Contact: React.FC = () => {
   const [formData, setFormData] = React.useState({
      name: '',
      email: '',
      message: ''
   });
   const [errors, setErrors] = React.useState({
      name: '',
      email: '',
      message: ''
   });

   const validateForm = () => {
      let isValid = true;
      const newErrors = { name: '', email: '', message: '' };

      if (!formData.name.trim()) {
         newErrors.name = 'Name is required';
         isValid = false;
      }

      if (!formData.email.trim()) {
         newErrors.email = 'Email is required';
         isValid = false;
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
         newErrors.email = 'Invalid email format';
         isValid = false;
      }

      if (!formData.message.trim()) {
         newErrors.message = 'Message is required';
         isValid = false;
      }

      setErrors(newErrors);
      return isValid;
   };

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      if (validateForm()) {
         try {
            const formBody = new URLSearchParams();
            Object.entries(formData).forEach(([key, value]) => {
               formBody.append(key, value);
            });

            const response = await fetch(
               process.env.NEXT_PUBLIC_SCRIPT_ID as string,
               {
                  method: 'POST',
                  body: formBody,
                  headers: {
                     'Content-Type': 'application/x-www-form-urlencoded',
                  },
               }
            );

            if (response.ok) {
               alert('Form submitted successfully!!');
               setFormData({ name: '', email: '', message: '' });
            } else {
               alert('Something went Wrong');
            }
         } catch (error) {
            console.error('Error:', error);
            alert('Something went Wrong');
         }
      }
   };

   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
      if (errors[name as keyof typeof errors]) {
         setErrors(prev => ({ ...prev, [name]: '' }));
      }
   };

   return (
      <div id='connect'>
         <div className='w-full h-[100px] md:h-[150px] border-x border-b' />
         <div className='h-[580px] md:h-[600px] xl:h-[700px] w-full flex items-center border-x border-b'>
            <div className='md:w-1/5 lg:w-1/6 h-full hidden md:block'>.</div>
            <div className='w-full md:w-2/5 h-full px-5 md:px-0'>
               <p className="text-3xl font-questrial py-8">Let&apos;s get <br /> started<span className='text-primary'>.</span></p>
               <form onSubmit={handleSubmit}>
                  <div className='w-full h-[370px] border p-5 flex flex-col gap-1'>
                     <p className='text-sm md:text-base'>Your Name</p>
                     <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder='Enter your name'
                        className='w-full h-[50px] text-xs border p-2 bg-transparent'
                     />
                     <p className='text-primary text-xs h-4'>{errors.name}</p>

                     <p className='text-sm md:text-base'>Your Email</p>
                     <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder='Enter your email'
                        className='w-full h-[50px] text-xs border p-2 bg-transparent'
                     />
                     <p className='text-primary text-xs h-4'>{errors.email}</p>

                     <p className='text-sm md:text-base'>Your Message</p>
                     <textarea
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder='Enter your message'
                        className='w-full h-[100px] text-xs border p-2 bg-transparent'
                     />

                     <div className='flex justify-end w-full mt-2'>
                        <button type="submit" className='bg-black w-fit text-white px-4 py-2 flex items-center gap-4'>
                           Connect Now
                           <svg width="12" height="17" viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1 1L11 8.65957L1 16" stroke="#F4F3EF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                           </svg>
                        </button>
                     </div>
                  </div>
               </form>
            </div>
            <div className='w-1/5 lg:w-1/6 h-full hidden md:block' />
            <div className='w-1/5 lg:w-1/6 h-full border-x hidden lg:block'>
               <div className='w-full h-[150px] lg:h-[175px] border-b' />
               <div className='w-full h-[150px] lg:h-[175px] border-b' />
               <div className='w-full h-[150px] lg:h-[175px] border-b' />
            </div>
            <div className='w-1/5 lg:w-1/6 h-full hidden md:block md:border-l lg:border-l-0'>
               <div className='w-full h-[150px] lg:h-[175px] border-b relative p-5'><Logo /></div>
               <div className='w-full h-[150px] lg:h-[175px] border-b' />
               <div className='w-full h-[150px] lg:h-[175px] border-b' />
               <div className='w-full h-[150px] lg:h-[175px] bg-secondary' />
            </div>
         </div>
      </div>
   )
}

const Logo = () => {
   return (
      <svg className='absolute top-0 right-0 w-32 h-32 p-5' width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
         <circle cx="72.5" cy="11.5" r="11.5" fill="#D2130A" />
         <path d="M1 29H54.5V83.5M4 79L51.975 31.5" stroke="black" strokeWidth="10" />
      </svg>
   )
}

export default Contact