import React from "react";

function Login() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        <div className="flex justify-center mx-14">
          <img
            src="https://thuanle.vn/wp-content/uploads/2023/06/logo-main-01.png"
            alt="Logo"
            className="w-full h-20"
          />
        </div>
        <h1 className="text-2xl font-semibold text-center text-gray-500 mt-8 mb-6">
          {/* Đăng nhập */}
        </h1>
        <form>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm text-gray-600">
              tài khoản (Email)
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm text-gray-600">
              Mật khẩu
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
            <a href="#" className="block text-right text-xs text-cyan-600 mt-2">
              Bạn đã quên mật khẩu ?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-400 to-cyan-600 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mt-4 mb-6">
            Đăng nhập
          </button>
        </form>
        <div className="text-center">
          <p className="text-sm">
            Bạn chưa có tài khoảng{" "}
            <a href="#" className="text-cyan-600">
              Đăng ký ngay.
            </a>
          </p>
        </div>
        <p className="text-xs text-gray-600 text-center mt-10">
          © 2023 WCS LAT
        </p>
      </div>
    </div>
  );
}

export default Login;
