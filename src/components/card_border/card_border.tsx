import './card_border..css';

interface CardBorderProps {
    children?: React.ReactNode,
    w: number,
    h: number
}

export default  function CardBorder({ children, w, h }: CardBorderProps) {
  return (
    <div className={`relative w-[${w}px] h-[${h}px] overflow-hidden rounded-lg flex items-center justify-center`}>
        <div className="absolute m-auto">
            <div className={`w-screen h-screen bg-[conic-gradient(_#000000,_#0d001a,_#140224,_#140224,_#000000,_#9333ea)] animate-gradient`}></div>
        </div>
        
        <div className="absolute top-[1px] bottom-[1px] left-[1px] right-[1px] flex items-center justify-center bg-primary-foreground rounded-lg">
            {children}
        </div>
    </div>
  );
};
