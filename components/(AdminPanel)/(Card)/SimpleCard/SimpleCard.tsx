
interface simpleCard_props{
    title:string,
    value:string|number,
    percentage:string,
    icon?:any,
    bgColor?: string;
    icon2?:any;



} 



const SimpleCard=({title,value,percentage,icon,bgColor="bg-green-300", icon2}:simpleCard_props)=>{



    return(
        <>
        <div className={`flex flex-wrap bg-[${bgColor}] border-2 rounded-2xl p-4 w-[210px] `} style={{ backgroundColor: bgColor }}>
            <div className="flex justify-between p-1 w-full">
                <h2 className={`font-bold `}>{title}</h2>
                {icon && <p>{icon}</p>}
            </div>
            <div className="flex justify-between p-1 w-full">
                <h2 className={`text-2xl font-bold `}>{value}</h2>
                {percentage && <p className="flex items-center gap-3">{percentage} {icon2}</p>}
            </div>
        </div>

        </>
    )
}

export default SimpleCard;