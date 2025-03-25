// import React, { useState } from 'react';
// import emailjs from '@emailjs/browser';

// function Contact() {
//   const [name , setName] = useState("")
//   const [lastName , setLastName] = useState("")
//   const [mobile , setMobile] = useState("")
//   const [email , setEmail] = useState("")
//   const [msg , setMsg] = useState("")

//   function formHandler (e){
//     e.preventDefault();
    
//     const fullName = `${name} ${lastName}`

//     const serviceId = "service_nbwbk8b"
//     const templateId = "template_bs47rto"
//     const publicKey = "sSfxZUPCCyrg1OXKl"

//     const templateParams = {
//       from_name : fullName,
//       from_email : email,
//       phone_number : mobile,
//       to_name : "Jay eng",
//       message : msg
//     }
    
//     emailjs.send(serviceId, templateId, templateParams , publicKey )
//     .then((response)=>{
//       console.log("Email Send Successfully: " , response)
//       setName("")
//       setLastName("")
//       setMobile("")
//       setEmail("")
//       setMsg("")
//     })
//     .catch((error)=>{
//       console.error("Error sending mail: ", error)
//     });

  


//   }
//   return (
//     <div className=' px-25 shadow-md'>
//     <h1 className='text-4xl font-bold mb-4 mt-20 text-center items-center text-orange-500'>Contact Us</h1>
//     <div className='flex  items-center '>
//     <div className=" max-w-4xl mx-auto p-4">
//       <form className="bg-white  rounded px-8 pt-6 pb-8 mb-4" onSubmit={formHandler}>
//         {/* Name */}
//         <div className="mb-4">
//           <label className="block text-gray-700 font-semibold mb-2">Your Name</label>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <input
//                 className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 type="text"
//                 placeholder="First Name"
//                 onChange={(e)=>setName(e.target.value)} value={name}
//               />
              
//             </div>
//             <div>
//               <input
//                 className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 type="text"
//                 placeholder="Last Name"
//                 onChange={(e)=>setLastName(e.target.value)} value={lastName}
//               />
              
//             </div>
//           </div>
//         </div>

//         {/* Phone and Email */}
//         <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
//             <input
//               className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               type="tel"
//               placeholder="(000) 000-0000"
//               onChange={(e)=>setMobile(e.target.value)} value={mobile}
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700 font-semibold mb-2">Your E-mail Address</label>
//             <input
//               className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               type="email"
//               placeholder="ex: myname@example.com"
//               onChange={(e)=>setEmail(e.target.value)} value={email}
//             />
            
//           </div>
//         </div>

//         {/* Message */}
//         <div className="mb-6">
//           <label className="block text-gray-700 font-semibold mb-2">Leave Your Message</label>
//           <textarea
//             className="border border-gray-300 rounded w-full py-2 px-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Type your message here..."
//             onChange={(e)=>setMsg(e.target.value)} value={msg}
//           ></textarea>
//         </div>

//         {/* Submit Button */}
//         <div className="flex justify-center">
//           <button
//             type="submit"
//             className="bg-blue-900 hover:bg-blue-800 text-white font-semibold py-2 px-6 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
    

//     <div>
//       <div>
//       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3395.8713753594548!2d75.22806807468424!3d19.858560926940847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb9a374705e7d7%3A0xef62ac60b118f507!2sJAY%20ENGINEERING!5e1!3m2!1sen!2sin!4v1742747391804!5m2!1sen!2sin" width="600" height="450" s allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
//       </div>
//     </div>
//     </div>
//     </div>
    
//   );
// }

// export default Contact;


import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  function formHandler(e) {
    e.preventDefault();
    const fullName = `${name} ${lastName}`;

    const serviceId = "service_nbwbk8b";
    const templateId = "template_bs47rto";
    const publicKey = "sSfxZUPCCyrg1OXKl";

    const templateParams = {
      from_name: fullName,
      from_email: email,
      phone_number: mobile,
      to_name: "Jay eng",
      message: msg,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email Sent Successfully: ", response);
        setName("");
        setLastName("");
        setMobile("");
        setEmail("");
        setMsg("");
      })
      .catch((error) => {
        console.error("Error sending mail: ", error);
      });
  }

  return (
    <div className="px-4 md:px-10 lg:px-20 shadow-md">
      <h1 className="text-4xl font-bold mb-6 mt-10 text-center text-orange-500">Contact Us</h1>
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Form Section */}
        <div className="w-full lg:w-1/2 max-w-4xl mx-auto p-4">
          <form className="bg-white rounded px-6 py-8" onSubmit={formHandler}>
            {/* Name Fields */}
            <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-1">First Name</label>
                <input className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="First Name" onChange={(e) => setName(e.target.value)} value={name} />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1">Last Name</label>
                <input className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} value={lastName} />
              </div>
            </div>

            {/* Contact Fields */}
            <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-1">Phone Number</label>
                <input className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" type="tel" placeholder="(000) 000-0000" onChange={(e) => setMobile(e.target.value)} value={mobile} />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1">E-mail Address</label>
                <input className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" type="email" placeholder="example@mail.com" onChange={(e) => setEmail(e.target.value)} value={email} />
              </div>
            </div>

            {/* Message Field */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-1">Message</label>
              <textarea className="border border-gray-300 rounded w-full py-2 px-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Type your message here..." onChange={(e) => setMsg(e.target.value)} value={msg}></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button type="submit" className="bg-blue-900 hover:bg-blue-800 text-white font-semibold py-2 px-6 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">Submit</button>
            </div>
          </form>
        </div>

        {/* Google Maps Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="w-full h-64 md:h-96 lg:h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3395.8713753594548!2d75.22806807468424!3d19.858560926940847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb9a374705e7d7%3A0xef62ac60b118f507!2sJAY%20ENGINEERING!5e1!3m2!1sen!2sin!4v1742747391804!5m2!1sen!2sin"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;