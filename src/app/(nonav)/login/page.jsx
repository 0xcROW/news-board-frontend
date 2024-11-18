'use client';
import { useRouter } from "next/navigation";
import LoginForm from "@/components/LoginForm";
import './style.css';

export default function LoginPage() {
  const router = useRouter();
  return (
    <div>
      <h1>Login</h1>
      <LoginForm />
      <p onClick={() => {router.push('/cadastro')}}>Não tem cadastro?</p>
    </div>
  );
}