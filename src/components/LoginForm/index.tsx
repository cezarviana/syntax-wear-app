export const LoginForm = () => {
    return (
        <form className="flex flex-col gap-3.5">
            <input type="email" placeholder="E-mail" className="border rounded-sm border-gray-200 w-full text-black p-3" />
            <button className="bg-[#212A2F] w-full p-3.5 rounded-sm text-white">Continuar</button>
        </form>
    )
}