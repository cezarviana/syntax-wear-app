import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { isValidCPF } from '#/utils/cpf-validator'

// Schema de Registro com Zod
export const registerUserFormSchema = z
  .object({
    firstName: z.string().nonempty('First name is required'),
    lastName: z.string().nonempty('Last name is required'),
    email: z
      .email('Invalid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters long'),
    confirmPassword: z.string().min(1, 'Password confirmation is required'),
    cpf: z
      .string()
      .nonempty('CPF is required')
      .refine((val) => isValidCPF(val), {
        message: 'Invalid CPF',
      }),
    birthDate: z
      .string()
      .refine((date) => !isNaN(Date.parse(date)), {
        message: 'Invalid birth date',
      }),
    cellphone: z.string().nonempty('Cellphone number is required'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'], // Associa o erro ao campo de confirmação de senha
  })

// Tipo inferido para uso no TypeScript (ex: useForm do React Hook Form)
type RegisterFormData = z.infer<typeof registerUserFormSchema>


export const useRegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    reset,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerUserFormSchema),
    mode: "onBlur", // valida assim que retirar o mouse de cima do campo
    defaultValues: {
        email: "",
        password: "",
    },
    criteriaMode: "all", // mostra todas as mensagens de erro
  });
  
  return {
      handleSubmit,
      register,
      errors,
      isSubmitting,
      setError,
      reset,
  }
}
