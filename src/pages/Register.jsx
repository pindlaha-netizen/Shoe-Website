import React from 'react';
import { Form, Input, Button, Alert } from 'antd';
import { UserOutlined, LockOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { useNavigate, Link } from 'react-router-dom';

function Register() {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    localStorage.setItem("username", values.username);
    localStorage.setItem("password", values.password);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#0a0a0a] text-white overflow-hidden font-sans">
      
      {/* --- LEFT SIDE: High-Energy Visuals & Animations --- */}
      <div className="relative lg:w-1/2 min-h-[40vh] lg:min-h-screen flex items-center justify-center bg-linear-to-br from-[#ccff00] to-[#00ff88] overflow-hidden p-8">
        
        {/* Giant Background Typography */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none select-none overflow-hidden">
          <h1 className="text-[15rem] md:text-[20rem] font-black text-black leading-none whitespace-nowrap transform -rotate-12">
            HYPE.
          </h1>
        </div>

        {/* Floating Sneaker Image with Drop Shadow */}
        <div className="relative z-10 w-full max-w-lg transform transition-transform duration-700 hover:scale-110">
          <img 
            // Transparent PNG style sneaker or high contrast editorial shot
            src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=800&q=80" 
            alt="Hype Sneaker" 
            className="w-full h-auto object-cover rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.5)] animate-[bounce_4s_ease-in-out_infinite]"
            style={{ 
              filter: 'drop-shadow(0 25px 25px rgba(0,0,0,0.5))' 
            }}
          />
        </div>
        
        {/* Cool Badge */}
        <div className="absolute bottom-8 left-8 bg-black text-[#ccff00] px-4 py-2 font-bold uppercase tracking-widest text-xs border border-[#ccff00]">
          Edition // 2026
        </div>
      </div>

      {/* --- RIGHT SIDE: Sleek Dark Mode Form --- */}
      <div className="relative lg:w-1/2 flex items-center justify-center p-6 sm:p-12 lg:p-20 z-10">
        
        {/* Subtle background glow behind the form */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#ccff00] rounded-full mix-blend-overlay filter blur-[100px] opacity-20 animate-pulse"></div>

        <div className="w-full max-w-md relative z-10 animate-[fadeInUp_0.8s_ease-out]">
          
          <div className="mb-10">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight uppercase">
              Claim Your <br/><span className="text-[#ccff00]">Access.</span>
            </h2>
            <p className="text-gray-400 mt-3 text-sm">Join the elite. Get early access to the hottest drops.</p>
          </div>

          <Form
            form={form}
            name="register"
            layout="vertical"
            onFinish={onFinish}
            autoComplete="off"
            size="large"
            requiredMark={false}
          >
            {/* Username */}
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Username is required' }]}
            >
              <Input 
                prefix={<UserOutlined className="text-[#ccff00] mr-2" />} 
                placeholder="USERNAME" 
                className="h-14 bg-white/5 border border-white/10 hover:border-[#ccff00] focus-within:ring-1 focus-within:ring-[#ccff00] text-white rounded-none transition-all font-mono tracking-wider shadow-inner"
              />
            </Form.Item>
            
            {/* Password */}
            <Form.Item 
              name="password" 
              rules={[{ required: true, message: 'Password is required' }]}
            >
              <Input.Password 
                prefix={<LockOutlined className="text-[#ccff00] mr-2" />}
                placeholder="PASSWORD"
                className="h-14 bg-white/5 border border-white/10 hover:border-[#ccff00] focus-within:ring-1 focus-within:ring-[#ccff00] text-white rounded-none transition-all font-mono tracking-wider shadow-inner"
              />
            </Form.Item>

            {/* Alert */}
            <div className="mb-6">
              <Alert 
                message="Keep it secure. Passwords must match." 
                type="info" 
                showIcon 
                className="bg-[#ccff00]/10 border-[#ccff00]/30 text-[#ccff00] rounded-none border-l-4 border-l-[#ccff00] font-mono text-xs tracking-wide"
              />
            </div>

            {/* Confirm Password */}
            <Form.Item
              name="password2"
              dependencies={['password']}
              rules={[
                { required: true, message: 'Confirmation required' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('Passwords do not match!'));
                  },
                }),
              ]}
            >
              <Input.Password 
                prefix={<LockOutlined className="text-[#ccff00] mr-2" />}
                placeholder="CONFIRM PASSWORD"
                className="h-14 bg-white/5 border border-white/10 hover:border-[#ccff00] focus-within:ring-1 focus-within:ring-[#ccff00] text-white rounded-none transition-all font-mono tracking-wider shadow-inner"
              />
            </Form.Item>

            {/* Submit Button */}
            <Form.Item className="mt-10 mb-0">
              <Button 
                block 
                type="primary" 
                htmlType="submit"
                className="group h-16 bg-[#ccff00] hover:bg-white text-black border-none font-black text-lg tracking-widest uppercase rounded-none transition-all duration-300 flex items-center justify-center overflow-hidden"
              >
                <span>Enter Now</span>
                <ArrowRightOutlined className="ml-3 transform transition-transform duration-300 group-hover:translate-x-2" />
              </Button>
            </Form.Item>

            {/* Login Link */}
            <div className="mt-8 text-center border-t border-white/10 pt-6">
              <span className="text-gray-500 font-mono text-sm tracking-wide">ALREADY IN THE CLUB? </span>
              <Link to="/login" className="text-white font-bold tracking-widest hover:text-[#ccff00] transition-colors ml-2 uppercase">
                Login
              </Link>
            </div>

          </Form>
        </div>
      </div>
      
      {/* Required for the fade-in animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </div>
  );
}

export default Register;