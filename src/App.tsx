import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, User, Lock, CreditCard } from 'lucide-react';

function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Login attempt:', { username, password });
    alert('登录功能演示 - 用户名: ' + username);
  };

  useEffect(() => {
    // Add entrance animations
    const brandSection = document.querySelector('.brand-section') as HTMLElement;
    const loginCard = document.querySelector('.login-card') as HTMLElement;
    
    if (brandSection && loginCard) {
      // Set initial states
      brandSection.style.opacity = '0';
      brandSection.style.transform = 'translateY(20px)';
      brandSection.style.transition = 'all 0.6s ease';
      
      loginCard.style.opacity = '0';
      loginCard.style.transform = 'translateY(20px)';
      loginCard.style.transition = 'all 0.6s ease';

      setTimeout(() => {
        brandSection.style.opacity = '1';
        brandSection.style.transform = 'translateY(0)';
      }, 100);
      
      setTimeout(() => {
        loginCard.style.opacity = '1';
        loginCard.style.transform = 'translateY(0)';
      }, 300);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black flex items-center justify-center p-4 relative overflow-x-hidden">
      {/* Logo in top left corner */}
      <div className="absolute top-6 left-6 z-10">
        <div className="flex items-center gap-3">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl shadow-lg shadow-yellow-400/30 text-white">
            <CreditCard size={24} />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            GoldCard
          </span>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr from-yellow-400/10 to-yellow-600/10 blur-3xl"></div>
      </div>

      <div className="relative w-full max-w-md flex flex-col items-center">
        {/* Brand messaging outside login box */}
        <div className="brand-section text-center mb-20">
          <h1 className="text-6xl font-bold text-white mb-4 leading-tight whitespace-nowrap">
            支付无界，全新 GoldCard 平台
          </h1>
          <p className="text-2xl text-gray-300 leading-relaxed">
            安全便捷的支付解决方案
          </p>
        </div>

        {/* Main login card */}
        <div className="login-card bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20 p-8 transition-all duration-300 hover:shadow-3xl w-full">
          {/* Login form header */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold text-white">登录您的账户</h2>
          </div>

          {/* Login form */}
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            {/* Username field */}
            <div className="flex flex-col">
              <label htmlFor="username" className="block text-sm font-medium text-gray-200 mb-2">
                用户名
              </label>
              <div className="relative flex items-center">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                <input
                  type="text"
                  id="username"
                  className="w-full pl-10 pr-3 py-3 bg-white/10 border border-white/20 rounded-xl text-white text-base transition-all duration-200 backdrop-blur-sm placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:shadow-lg focus:shadow-yellow-400/20"
                  placeholder="请输入用户名"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Password field */}
            <div className="flex flex-col">
              <label htmlFor="password" className="block text-sm font-medium text-gray-200 mb-2">
                密码
              </label>
              <div className="relative flex items-center">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  className="w-full pl-10 pr-12 py-3 bg-white/10 border border-white/20 rounded-xl text-white text-base transition-all duration-200 backdrop-blur-sm placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:shadow-lg focus:shadow-yellow-400/20"
                  placeholder="请输入密码"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer p-1 transition-colors duration-200 hover:text-gray-200"
                  onClick={togglePassword}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Login button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-semibold py-3 px-6 rounded-xl text-base cursor-pointer transition-all duration-200 shadow-lg shadow-yellow-400/30 hover:from-yellow-600 hover:to-yellow-700 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-yellow-400/40 active:translate-y-0"
            >
              立即登录
            </button>

            {/* Additional options */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center text-gray-300 cursor-pointer transition-colors duration-200 hover:text-white">
                <input type="checkbox" className="mr-2 accent-yellow-400" />
                记住我
              </label>
              <a href="#" className="text-yellow-400 no-underline transition-colors duration-200 hover:text-yellow-600 hover:underline">
                忘记密码？
              </a>
            </div>
          </form>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <p className="text-gray-400 text-sm">
              还没有账户？
              <a href="#" className="text-yellow-400 no-underline ml-1 transition-colors duration-200 hover:text-yellow-600 hover:underline">
                立即注册
              </a>
            </p>
          </div>
        </div>

        {/* Security badge */}
        <div className="mt-6 text-center">
          <p className="text-gray-400 text-xs flex items-center justify-center gap-1">
            <Lock size={12} />
            您的信息受到银行级加密保护
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-full text-center z-10">
        <p className="text-gray-400 text-xs">
          Copyright © 2024-2025, GoldCardPay All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default App;