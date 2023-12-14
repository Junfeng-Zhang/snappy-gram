// 此布局将包含登录和注册表单
import { Outlet, Navigate } from "react-router-dom";

import { useUserContext } from "@/context/AuthContext";

export default function AuthLayout() {
  const { isAuthenticated } = useUserContext(); // 确定用户是否已通过身份验证

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex flex-col items-center justify-center flex-1 py-10">
            <Outlet />
          </section>

          <img
            src="/assets/images/social-media.jpg"
            alt="logo"
            // 移动端隐藏，PC端显示
            className="hidden object-cover w-1/2 h-screen bg-no-repeat xl:block"
          />
        </>
      )}
    </>
  );
}
