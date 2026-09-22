import { Logo } from '#/components/Logo'
import { RegisterForm } from '#/components/RegisterForm'
import { Separator } from '#/components/Separator'
import { createFileRoute } from '@tanstack/react-router'
import GoogleIcon from '@/assets/images/google-icon.png'

export const Route = createFileRoute('/_auth/sign-up')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <section className='min-h-screen w-full flex justify-center items-center bg=[#F5F5F5] p-5'>
      <div className='w-[450px] bg-white rounded-2xl p-5 flex flex-col'>
        <Logo />
        <RegisterForm />
        <Separator />

        <button className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md py-3 hover:bg-gray-50 transition">
          <img src={GoogleIcon} alt="Google Logo" className="w-5 h-5" />
          <span className="text-sm font-medium text-black">
            Continue with Google Account
          </span>
        </button>
        <p className="text-sm text-gray-600 mt-6 text-center">
          Already have an account?{" "}
          <a href="/sign-in" className="text-[#5433EB] hover:underline">Enter</a>
        </p>
      </div>
    </section>
  )
}
