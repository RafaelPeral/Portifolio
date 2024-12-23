import './card_border..css';

interface CardBorderProps {
    children?: React.ReactNode,
    bg: string,
    w: string,
    h: string,
    wb: string,
    hb: string
}

export default  function CardBorder({ children, bg, w, h, wb, hb }: CardBorderProps) {
  return (
    <div className={`relative ${w} ${h} overflow-hidden rounded-lg flex items-center justify-center`}>
        <div className="absolute m-auto">
            <div className={`${wb} ${hb} bg-[conic-gradient(_#000000,_#0d001a,_#140224,_#140224,_#000000,_#9333ea)] animate-gradient`}></div>
        </div>
        
        <div className={`absolute top-[1px] bottom-[1px] left-[1px] right-[1px] flex flex-col items-center justify-center ${bg} rounded-lg`}>
            {children}
        </div>
    </div>
  );
};
