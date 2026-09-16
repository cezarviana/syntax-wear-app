export const Newsletter = () => {
  return (
    <form className="flex flex-col min-w-60">
      <label htmlFor="newsletter">Inscreva-se em nosso e-mail</label>
      <input
        type="text"
        id="newsletter"
        placeholder="email@email.com"
        className="bg-white text-text-tertiary rounded-full h-10 pl-4"
      />
    </form>
  );
};
