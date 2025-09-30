import React, { useState } from 'react';
import { CreditCard, Lock, User, Eye, EyeOff } from 'lucide-react';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 这里可以添加登录逻辑
    console.log('Login attempt:', { username, password });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-4">
      {/* Logo in top left corner */}
      <div className="absolute top-6 left-6 z-10">
        <div className="flex items-center space-x-3">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl shadow-lg">
            <CreditCard className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            GoldCard
          </span>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-yellow-400/10 to-orange-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative w-full flex flex-col items-center">
        {/* Brand messaging outside login box */}
        <div className="text-center mb-20 w-5xl">
          <h1 className="text-6xl font-bold text-white mb-5">
            支付无界，全新 GoldCard 平台
          </h1>
          <p className="text-2xl text-gray-300">
            安全便捷的支付解决方案
          </p>
        </div>

        {/* Main login card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8 transition-all duration-300 hover:shadow-3xl w-[500px]">
          {/* Login form header */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold text-white">
              登录您的账户
            </h2>
          </div>

          {/* Login form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username field */}
            <div className="relative">
              <label htmlFor="username" className="block text-sm font-medium text-gray-200 mb-2">
                用户名
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                  placeholder="请输入用户名"
                  required
                />
              </div>
            </div>

            {/* Password field */}
            <div className="relative">
              <label htmlFor="password" className="block text-sm font-medium text-gray-200 mb-2">
                密码
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                  placeholder="请输入密码"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-200 transition-colors duration-200"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Login button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold py-3 px-6 rounded-xl hover:from-yellow-500 hover:to-orange-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-transparent transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
            >
              立即登录
            </button>

            {/* Additional options */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center text-gray-300 cursor-pointer hover:text-white transition-colors duration-200">
                <input type="checkbox" className="rounded border-gray-300 text-yellow-400 focus:ring-yellow-400 mr-2" />
                记住我
              </label>
              <a href="#" className="text-yellow-400 hover:text-yellow-300 transition-colors duration-200 hover:underline">
                忘记密码？
              </a>
            </div>
          </form>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <p className="text-gray-400 text-sm">
              还没有账户？
              <a href="#" className="text-yellow-400 hover:text-yellow-300 transition-colors duration-200 ml-1 hover:underline">
                立即注册
              </a>
            </p>
          </div>
        </div>

        {/* Security badge */}
        <div className="mt-6 text-center">
          <p className="text-gray-400 text-xs flex items-center justify-center">
            <Lock className="w-3 h-3 mr-1" />
            您的信息受到银行级加密保护
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;