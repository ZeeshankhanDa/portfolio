import './animatedLetter.scss'

export const AnimatedLetters = ({letterClass,strArry,index})=>{
    return(
        <span>
        {
            strArry.map((char, i)=>(
                <span key={char+i} className={`${letterClass} _${i+index}`}>
                     {char}
                </span>
               
            ))
        }
            </span>
    )
}