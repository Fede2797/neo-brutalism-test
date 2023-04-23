
export const Navbar = () => {
  return (
    <div className="flex flex-col h-[270px]">
        <div className="flex w-full justify-center items-start h-[200px] font-bold text-[150px] font-[Notable] border-b-[2px] border-black">
            <h1 className="text-center leading-[150px]">Welcome</h1>
        </div>
        <div className="flex gap-10 py-[27px] pl-20 border-black font-[Jost]">
            <span>About</span>
            <span>Projects</span>
            <span>Studies</span>
            <span>Contact</span>
        </div>
    </div>
  )
}
