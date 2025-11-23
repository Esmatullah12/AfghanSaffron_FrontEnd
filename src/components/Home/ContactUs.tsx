import Button from "../common/Button";
import SocialMediaLinks from "../common/SocialMediaLinks";

export default function ContactUs() {
  return (
    <section id="contact-us" className="w-full bg-white  mt-12 mb-18 px-16">
        <h1  className="font-display text-3xl md:text-4xl font-bold text-center mb-6 text-primary">Contact Us</h1>
          <p className="text-gray-700 mb-8 text-center border-gray-300 mx-auto">
            Please feel free to contact us and we will get back to you as soon as we can.
          </p>
      <div className="w-full flex justify-center px-24 py-20 items-center mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-14
       border border-gray-400 rounded-2xl bg-gray-100">
        <div>
          <form className="space-y-4 max-w-md">
            <input
              type="text"
              placeholder="Name"
              className="w-full border-b border-gray-400 py-2 outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border-b border-gray-400 py-2 outline-none"
            />
            <textarea
              placeholder="Message"
              className="w-full border-b border-gray-400 py-2 outline-none h-24"
            ></textarea>

           <Button text="Send Message" className=" mt-4"/>
          </form>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-end h-full space-y-6 text-gray-800 font-bold tracking-wider">
          <div>
            <h3 className="font-semibold text-lg">CONTACT</h3>
            <p>afghansaffron@gmail.com</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">CALL US</h3>
            <p className="">+61 425 987 908</p>
          </div>

          <SocialMediaLinks size={30} className="text-gray-700"/>
        </div>
      </div>
    </section>
  );
}
