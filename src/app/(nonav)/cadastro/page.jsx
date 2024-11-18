'use client';
import { useRouter } from "next/navigation";
import CadastroForm from "@/components/CadastroForm";
import './style.css';

const CadastroPage = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Cadastro</h1>
      <CadastroForm />
      <p onClick={() => {router.push('/login')}}>Já tem cadastro?</p>
    </div>
    
  );
};

export default CadastroPage;