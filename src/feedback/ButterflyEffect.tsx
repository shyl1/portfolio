
export default function ButterflyEffect() {
  return (
    <section className="bg-[url('/images/rewind-bg.png')] bg-cover bg-center h-screen w-screen flex max-md:items-center  justify-center">

      <div className="mt-3 flex flex-col">
        <img src="/public/gifs/butterfly.gif" alt="butterfly effect" />
        <p className="text-xl sm:text-3xl md:text-4xl color-primary font-body animate-pulse ">this action will have consequences </p>
      </div>
    </section>
  )
}
