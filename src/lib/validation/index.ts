import * as z from "zod";

// 注册校验
export const SignupValidation = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  username: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email(),
  password: z.string().min(8, { message: "密码必须至少8个字符。" }),
});

// 登录校验
export const SigninValidation = z.object({
  email: z.string().email(),
  password: z.string().min(8, { message: "密码必须至少8个字符。" }),
});

// 资料校验
export const ProfileValidation = z.object({
  file: z.custom<File[]>(),
  name: z.string().min(2, { message: "名称必须至少包含 2 个字符。" }),
  username: z.string().min(2, { message: "名称必须至少包含 2 个字符。" }),
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
