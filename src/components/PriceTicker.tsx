'use client';


const priceList = [
    {name:'মিনিকেট চাল', emoji:'🍚', price:99, change:-2.9},
    {name:'স্বর্ণমাছি চাল', emoji:'🍚', price:148, change:2.1},
    {name:'বাটাম সাইজ চাল', emoji:'🍚', price:66, change:3.1},

    {name:'মসুর ডাল', emoji:'🫘', price:142, change:2.9},
    {name:'ছোলা', price:120, emoji:'🫘', change:-2.4},
    {name:'আমন ডাল (খোসাসিলা)', emoji:'🫘', price:156, change:-2.6},
    
]
//  english-bangla
const formatNumber = (number:number)=>{
    return new Intl.NumberFormat('bn-BD',{
        maximumFractionDigits:1,
    }).format(number);
}

const PriceTicker = () => {
    return (
        <div className="w-full overflow-hidden bg-white border-y border-gray-200">
            <div className="flex w-max animate-marquee">
                {[...priceList, ...priceList].map((item,index)=>(
                    <div
                    key={index}
                    className="flex items-center gap-2 px-5 py-3 border-r border-gray-100 whitespace-nowrap" 
                    >
                        {/* product-emoji */}
                        

                    </div>
                ))}
            </div>
            
        </div>
    );
};

export default PriceTicker;