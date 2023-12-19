import * as z from "zod";

// 注册校验
export const SignupValidation = z.object({
  name: z.string().min(2, { message: "名称至少包含2个字符。" }),
  username: z.string().min(2, { message: "用户名至少包含2个字符。" }),
  email: z.string().email(),
  password: z.string().min(8, { message: "密码必须至少8个字符。" }),
});

// 登录校验
export const SigninValidation = z.object({
  email: z.string().email(),
  password: z.string().min(8, { message: "密码长度不得小于8个字符。" }),
});

// 资料校验
export const ProfileValidation = z.object({
  file: z.custom<File[]>(),
  name: z.string().min(2, { message: "名称必须至少包含2个字符。" }),
  username: z.string().min(2, { message: "用户名必须至少包含2个字符。" }),
  email: z.string().email(),
  bio: z.string(),
});

// 上传校验
export const PostValidation = z.object({
  caption: z.string().min(5, { message: "Minimum 5 characters." }).max(2200, { message: "Maximum 2,200 characters" }),
  file: z.custom<File[]>(),
  location: z.string().min(1, { message: "This field is required" }).max(1000, { message: "Maximum 1000 characters." }),
  tags: z.string(),
});
