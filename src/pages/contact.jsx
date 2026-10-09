import React from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, MailOutlined, ArrowRightOutlined } from "@ant-design/icons";
import Header from "../componts/Header";
import Footer from "../componts/Footer";

const Contact = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Contact form submitted:", values);
    alert("Message sent successfully! We will get back to you soon.");
    form.resetFields();
  };

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen flex flex-col font-sans">
      <Header />

      {/* Main Content Container */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-8 py-16 md:py-24">
        
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-[fadeInUp_0.8s_ease-out]">
          <span className="text-[#00ffff] font-mono text-xs uppercase tracking-widest bg-white/5 border border-white/10 px-4 py-1.5 rounded-full inline-block mb-4">
            Get In Touch // Brand Shoes
          </span>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white mb-4">
            Contact <span className="text-[#00ffff]">Us</span>
          </h1>
          <p className="text-gray-400 font-mono text-sm sm:text-base">
            Have questions about drops, sizing, or orders? Drop us a line.
          </p>
        </div>

        {/* Grid Layout: Contact Info & Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto items-start">
          
          {/* Left Box: Store Details Card */}
          <div className="lg:col-span-5 bg-white/5 border border-white/10 p-8 sm:p-10 rounded-[2.5rem] backdrop-blur-md relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#00ffff] rounded-full mix-blend-overlay filter blur-[90px] opacity-20"></div>
            
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-6">
              Brand <span className="text-[#00ffff]">Shoes</span>
            </h2>

            <div className="space-y-6 font-mono text-sm">
              <div className="flex items-start gap-4">
                <span className="text-xl text-[#00ffff]">📍</span>
                <div>
                  <p className="text-gray-400 uppercase text-xs tracking-wider">Location</p>
                  <p className="text-white font-sans font-medium mt-0.5">Naraingarh, Haryana</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-xl text-[#00ffff]">📞</span>
                <div>
                  <p className="text-gray-400 uppercase text-xs tracking-wider">Phone Support</p>
                  <a href="tel:+919817632517" className="text-white font-sans font-medium hover:text-[#00ffff] transition-colors mt-0.5 block">
                    +91 9817632517
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-xl text-[#00ffff]">✉️</span>
                <div>
                  <p className="text-gray-400 uppercase text-xs tracking-wider">Email Inquiry</p>
                  <a href="mailto:support@brandshoes.com" className="text-white font-sans font-medium hover:text-[#00ffff] transition-colors mt-0.5 block break-all">
                    [EMAIL_ADDRESS]
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-white/10 text-gray-500 font-mono text-xs uppercase tracking-widest">
              Response time: Within 24 hours.
            </div>
          </div>

          {/* Right Box: Modern Form Card */}
          <div className="lg:col-span-7 bg-white/5 border border-white/10 p-8 sm:p-10 rounded-[2.5rem] backdrop-blur-md relative">
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-[#ff0055] rounded-full mix-blend-overlay filter blur-[90px] opacity-20"></div>

            <Form
              form={form}
              name="contactForm"
              layout="vertical"
              onFinish={onFinish}
              autoComplete="off"
              size="large"
              requiredMark={false}
            >
              <Form.Item
                name="name"
                rules={[{ required: true, message: "Please input your name!" }]}
              >
                <Input 
                  prefix={<UserOutlined className="text-[#00ffff] mr-2" />} 
                  placeholder="YOUR NAME" 
                  className="h-14 bg-white/5 border border-white/10 hover:border-[#00ffff] focus-within:ring-1 focus-within:ring-[#00ffff] text-white placeholder:text-gray-500 rounded-none transition-all font-mono tracking-wider shadow-inner"
                />
              </Form.Item>

              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                  { type: 'email', message: 'Please enter a valid email!' }
                ]}
              >
                <Input 
                  prefix={<MailOutlined className="text-[#00ffff] mr-2" />} 
                  placeholder="YOUR EMAIL" 
                  className="h-14 bg-white/5 border border-white/10 hover:border-[#00ffff] focus-within:ring-1 focus-within:ring-[#00ffff] text-white placeholder:text-gray-500 rounded-none transition-all font-mono tracking-wider shadow-inner"
                />
              </Form.Item>

              <Form.Item
                name="message"
                rules={[{ required: true, message: "Please input your message!" }]}
              >
                <Input.TextArea 
                  rows={4}
                  placeholder="YOUR MESSAGE..." 
                  className="bg-white/5 border border-white/10 hover:border-[#00ffff] focus-within:ring-1 focus-within:ring-[#00ffff] text-white placeholder:text-gray-500 rounded-none transition-all font-mono tracking-wider p-4 shadow-inner"
                />
              </Form.Item>

              <Form.Item className="mb-0 mt-8">
                <Button 
                  block 
                  type="primary" 
                  htmlType="submit"
                  className="group h-16 bg-[#00ffff] hover:bg-white text-black border-none font-black text-lg tracking-widest uppercase rounded-none transition-all duration-300 flex items-center justify-center overflow-hidden"
                >
                  <span>Send Message</span>
                  <ArrowRightOutlined className="ml-3 transform transition-transform duration-300 group-hover:translate-x-2" />
                </Button>
              </Form.Item>
            </Form>
          </div>

        </div>

      </main>

      <Footer />

      {/* Animation Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </div>
  );
};

export default Contact;