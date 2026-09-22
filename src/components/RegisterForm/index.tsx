import { useRegisterForm } from "./register-form.schema"

export const RegisterForm = () => {
  const { handleSubmit, isSubmitting, register, errors } = useRegisterForm();

  const inputClass = (field: keyof typeof errors) =>
    `w-full border rounded-sm px-1 mt-1 focus:outline-none focus:ring-1 ${
      errors[field] ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#5433EB]"
    }`;


    //function Para testar o sending do botão
    const onSubmit = async(data) => {
        await new Promise(resolve => setTimeout(resolve, 2000))
        console.log(data);
    }


  return (
    <form className="text-black space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label className="text-xs text-gray-600">First name*</label>
        <input className={inputClass("firstName")} type="text" {...register("firstName")} />
        {errors.firstName && <p className="text-xs text-red-600 mt-1">{errors.firstName.message}</p>}
      </div>

      <div>
        <label className="text-xs text-gray-600">Last name*</label>
        <input className={inputClass("lastName")} type="text" {...register("lastName")} />
        {errors.lastName && <p className="text-xs text-red-600 mt-1">{errors.lastName.message}</p>}
      </div>

      <div>
        <label className="text-xs text-gray-600">Email*</label>
        <input className={inputClass("email")} type="email" {...register("email")} />
        {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <label className="text-xs text-gray-600">Password*</label>
        <input className={inputClass("password")} type="password" {...register("password")} />
        {errors.password && <p className="text-xs text-red-600 mt-1">{errors.password.message}</p>}
      </div>

      <div>
        <label className="text-xs text-gray-600">Confirm password*</label>
        <input className={inputClass("confirmPassword")} type="password" {...register("confirmPassword")} />
        {errors.confirmPassword && (
          <p className="text-xs text-red-600 mt-1">{errors.confirmPassword.message}</p>
        )}
      </div>

      <div>
        <label className="text-xs text-gray-600">CPF*</label>
        <input className={inputClass("cpf")} type="text" {...register("cpf")} />
        {errors.cpf && <p className="text-xs text-red-600 mt-1">{errors.cpf.message}</p>}
      </div>

      <div>
        <label className="text-xs text-gray-600">Birth date</label>
        <input className={inputClass("birthDate")} type="date" {...register("birthDate")} />
        {errors.birthDate && <p className="text-xs text-red-600 mt-1">{errors.birthDate.message}</p>}
      </div>

      <div>
        <label className="text-xs text-gray-600">Cellphone*</label>
        <input className={inputClass("cellphone")} type="tel" {...register("cellphone")} />
        {errors.cellphone && <p className="text-xs text-red-600 mt-1">{errors.cellphone.message}</p>}
      </div>

      <button type="submit" className="w-full rounded-md cursor-pointer bg-[#5433EB] px-4 py-3 text-sm font-semibold uppercase text-white disabled:opacity-50" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Create account"}
      </button>
    </form>
  );
};