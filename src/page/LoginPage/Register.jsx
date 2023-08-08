import React from "react";

function Register() {
  return (
    <div className="min-h-[100vh] flex items-center justify-center">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        <div className="flex justify-center my-10">
          <img
            src="https://thuanle.vn/wp-content/uploads/2023/06/logo-main-01.png"
            alt="Logo"
            className="w-full h-20"
          />
        </div>
        <h1 className="text-2xl w-full font-semibold text-center text-gray-500 mt-8 mb-6">
          Đăng ký tài khoảng
        </h1>
        <form>
          <div className="mb-4">
            <label
              htmlFor="nombre"
              className="block mb-2 text-sm text-gray-600">
              Họ và tên
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="apellido"
              className="block mb-2 text-sm text-gray-600">
              Họ
            </label>
            <input
              type="text"
              id="apellido"
              name="apellido"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
          </div>
          <div className="mb-4">
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
          </div>
          <div className="mb-6">
            <label
              htmlFor="confirmPassword"
              className="block mb-2 text-sm text-gray-600">
              Nhập lại mật khẩu
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-400 to-cyan-600 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mb-2">
            Registro
          </button>
        </form>
        <div className="text-center">
          <p className="text-sm">
            Bạn đã có tài khoảng?{" "}
            <a href="#" className="text-cyan-600">
              Đăng nhập
            </a>
          </p>
        </div>
        <p className="text-xs text-gray-600 text-center mt-8">© 2023 WCS LAT</p>
      </div>
    </div>
  );
}

export default Register;
