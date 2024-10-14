import { FaRegHeart } from "react-icons/fa";


const AppFooter = () => {
  return (
    <div className="w-full">
        <div className="flex flex-col md:flex-row justify-between items-center font-semibold">
            <p className="text-center">COPYRIGHT @ 2019 <span className="text-[#7E72F2]">Pixinvent</span>, All rights Reserved</p>
            <p>
                <span className="pr-2 align-middle">Hand-crafted & Made with</span>
                <FaRegHeart className="inline text-[#F30000]" />
            </p>
        </div>
    </div>
  )
}

export default AppFooter