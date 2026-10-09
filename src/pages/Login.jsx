import React, { useContext } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { useNavigate, Link } from "react-router-dom";
import userA from "../componts/usercontext";

const Login = () => {
  const navigate = useNavigate();
  const user = useContext(userA);

  const onFinish = (values) => {
    console.log("Login Success:", values);
    
    // Update context using your existing method
    Object.assign(user, { username: values.username, password: values.password });
    
    // Navigate to homepage
    navigate("/");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 sm:p-8 overflow-hidden font-sans">
      
      {/* --- Animated Background --- */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=1920&q=80" 
          alt="Background" 
          className="w-full h-full object-cover animate-pulse" 
          style={{ animationDuration: '8s' }} 
        />
        {/* Dark blurred overlay */}
        <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-md"></div>
      </div>

      {/* --- Floating Centered Card --- */}
      <div className="relative z-10 w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl p-8 sm:p-10 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(255,70,51,0.4)]">
        
        {/* Header Icon & Text */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-50 mb-4 transition-transform duration-500 hover:rotate-12">
            {/* Shoe Icon */}
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#FF4633]">
              <path d="M20.916 11.218L14.417 5.719C13.882 5.267 13.197 5 12.49 5H5C3.895 5 3 5.895 3 7V16C3 17.105 3.895 18 5 18H19.5C20.328 18 21 17.328 21 16.5V12.181C21 11.823 20.97 11.468 20.916 11.218Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 13H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 className="text-3xl font-black text-gray-900 tracking-tight">Welcome Back</h2>
          <p className="text-gray-500 text-sm mt-2">Sign in to access your account and orders.</p>
        </div>

        {/* Ant Design Form */}
        <Form
          name="login"
          layout="vertical"
          onFinish={onFinish}
          initialValues={{ remember: true }}
          size="large"
          requiredMark={false}
        >
          {/* Username Field */}
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input 
              prefix={<UserOutlined className="text-gray-400 mr-2" />} 
              placeholder="Username" 
              className="px-4 py-3 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:border-[#FF4633] focus-within:ring-2 focus-within:ring-[#FF4633]/20 transition-all"
            />
          </Form.Item>
          
          {/* Password Field */}
          <Form.Item 
            name="password" 
            rules={[{ required: true, message: 'Please input your Password!' }]}
            className="mb-4"
          >
            <Input.Password 
              prefix={<LockOutlined className="text-gray-400 mr-2" />}
              placeholder="Password"
              className="px-4 py-3 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:border-[#FF4633] focus-within:ring-2 focus-within:ring-[#FF4633]/20 transition-all"
            />
          </Form.Item>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between mb-8 px-1">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox className="text-gray-500 hover:text-gray-900">Remember me</Checkbox>
            </Form.Item>
            <a href="/forget" className="text-sm font-medium text-gray-500 hover:text-[#FF4633] transition-colors">
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <Form.Item className="mb-2">
            <Button 
              block 
              type="primary" 
              htmlType="submit"
              className="group h-14 rounded-full bg-gray-900 hover:bg-[#FF4633] border-none font-bold text-base transition-all duration-300 flex items-center justify-center overflow-hidden"
            >
              <span>Sign In</span>
              <ArrowRightOutlined className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Form.Item>

          {/* Register Link */}
          <div className="text-center mt-6">
            <span className="text-gray-500 text-sm">New to Brand Shoes? </span>
            <Link to="/register" className="text-gray-900 font-bold hover:text-[#FF4633] transition-colors">
              Create an account
            </Link>
          </div>

        </Form>
      </div>
    </div>
  );
};

export default Login;