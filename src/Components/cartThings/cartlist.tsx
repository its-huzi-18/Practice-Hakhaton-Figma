import Image from "next/image";
import Cartquantitycontroller from "./cartquantitycontroller";
import { IoMdClose } from "react-icons/io";

const Cartlist = ({ arr }: { arr: { title: string; image: string; price: number }[] }) => {
    return (
        <>
            {(() => {
                const elements = [];
                for (let i = 0; i < arr.length && i < 2; i++) {
                    const data = arr[i];
                    elements.push(
                        <div
                            className="rounded-sm shadow-black shadow-sm md:shadow-none border-2 border-border grid grid-cols-4 w-full sm:py-7 py-4 relative group"
                            key={i}
                        >
                            <span className=" absolute top-2 xs:left-6 left-1 xs:w-5 xs:h-5 w-4 h-4 rounded-full bg-red-500 hidden group-hover:flex text-white p-1 justify-center items-center">
                                <IoMdClose />
                            </span>
                            <div className="col-span-1 md:ml-12 flex items-center sm:gap-3 gap-1 sm:flex-row flex-col sm:text-left text-center ">
                                <div className="w-14 h-12">
                                    <Image
                                        src={data.image}
                                        alt={data.title}
                                        width={600}
                                        height={600}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <span className="xs:text-base text-xs">
                                    {data.title.substring(0, 15)}...
                                </span>
                            </div>
                            <div className="col-span-1 m-auto xs:text-base text-sm">${data.price}</div>
                            <Cartquantitycontroller price={data.price} />
                        </div>
                    );
                }
                return elements;
            })()}
        </>
    );
};

export default Cartlist;