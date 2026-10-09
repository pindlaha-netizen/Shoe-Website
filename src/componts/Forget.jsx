import React, { useState } from "react";
import { Form, Input, Button, Alert } from "antd";
import { MailOutlined, ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Password reset requested for:", values.email);
    // Here you would typically trigger your backend API for password recovery
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#0a0a0a] text-white overflow-hidden font-sans">
      
      {/* --- RIGHT SIDE: High-Energy Visuals & Animations --- */}
      <div className="relative lg:w-1/2 min-h-[40vh] lg:min-h-screen flex items-center justify-center bg-linear-to-tr from-[#00ffff] to-[#ff0055] overflow-hidden p-8">
        
        {/* Giant Background Typography */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none select-none overflow-hidden">
          <h1 className="text-[15rem] md:text-[20rem] font-black text-black leading-none whitespace-nowrap transform -rotate-12">
            RECOVER.
          </h1>
        </div>

        {/* Floating Sneaker Image with Drop Shadow */}
        <div className="relative z-10 w-full max-w-lg transform transition-transform duration-700 hover:scale-110">
          <img 
            src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80" 
            alt="Hype Sneaker" 
            className="w-full h-auto object-cover rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.5)] animate-[bounce_4s_ease-in-out_infinite]"
            style={{ 
              filter: 'drop-shadow(0 25px 25px rgba(0,0,0,0.7))' 
            }}
          />
        </div>
        
        {/* Cool Badge */}
        <div className="absolute top-8 left-8 bg-black text-[#00ffff] px-4 py-2 font-bold uppercase tracking-widest text-xs border border-[#00ffff]">
          Vault // Recovery
        </div>
      </div>

      {/* --- LEFT SIDE: Sleek Dark Mode Form --- */}
      <div className="relative lg:w-1/2 flex items-center justify-center p-6 sm:p-12 lg:p-20 z-10">
        
        {/* Subtle background glow behind the form */}
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-[#00ffff] rounded-full mix-blend-overlay filter blur-[120px] opacity-20 animate-pulse"></div>

        <div className="w-full max-w-md relative z-10 animate-[fadeInUp_0.8s_ease-out]">
          
          <div className="mb-10">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight uppercase">
              Forgot <br/><span className="text-[#00ffff]">Password?</span>
            </h2>
            <p className="text-gray-400 mt-3 text-sm font-mono tracking-wide">
              No worries. Enter your registered email and we'll send you instructions to reset your access.
            </p>
          </div>

          {!submitted ? (
            <Form
              form={form}
              name="forgotPassword"
              layout="vertical"
              onFinish={onFinish}
              autoComplete="off"
              size="large"
              requiredMark={false}
            >
              {/* Email Input */}
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: 'Email is required' },
                  { type: 'email', message: 'Please enter a valid email address' }
                ]}
                className="mb-8"
              >
                <Input 
                  prefix={<MailOutlined className="text-[#00ffff] mr-2" />} 
                  placeholder="ENTER YOUR EMAIL" 
                  className="h-14 bg-white/5 border border-white/10 hover:border-[#00ffff] focus-within:ring-1 focus-within:ring-[#00ffff] text-white placeholder:text-gray-500 rounded-none transition-all font-mono tracking-wider shadow-inner"
                />
              </Form.Item>

              {/* Submit Button */}
              <Form.Item className="mb-6">
                <Button 
                  block 
                  type="primary" 
                  htmlType="submit"
                  className="group h-16 bg-[#00ffff] hover:bg-white text-black border-none font-black text-lg tracking-widest uppercase rounded-none transition-all duration-300 flex items-center justify-center overflow-hidden"
                >
                  <span>Send Reset Link</span>
                  <ArrowRightOutlined className="ml-3 transform transition-transform duration-300 group-hover:translate-x-2" />
                </Button>
              </Form.Item>
            </Form>
          ) : (
            <div className="mb-8 animate-[fadeIn_0.5s_ease-out]">
              <Alert
                message="Check Your Inbox"
                description="If an account exists with that email, we've sent password reset instructions."
                type="success"
                showIcon
                className="bg-[#00ffff]/10 border-[#00ffff]/30 text-white rounded-none border-l-4 border-l-[#00ffff] font-mono text-xs tracking-wide p-4 mb-6"
              />
              <Button 
                block 
                onClick={() => setSubmitted(false)}
                className="h-14 bg-white/10 hover:bg-white/20 text-white border-white/20 font-mono tracking-wider uppercase rounded-none"
              >
                Try Another Email
              </Button>
            </div>
          )}

          {/* Back to Login Link */}
          <div className="mt-8 text-center border-t border-white/10 pt-6">
            <Link to="/login" className="inline-flex items-center gap-2 text-gray-400 font-mono text-sm tracking-wider hover:text-[#00ffff] transition-colors uppercase">
              <ArrowLeftOutlined /> Back to Sign In
            </Link>
          </div>

        </div>
      </div>
      
      {/* Required for animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}} />
    </div>
  );
};

export default ForgotPassword;