// function getRandomInt(count: number){
//     return Math.floor(Math.random() * count)
//   }

export default function ProductDeatilsLayout({children}:{
    children: React.ReactNode
}){

    // const random = getRandomInt(2);

    // if(random === 1){
    //   throw new Error("Error Loading Product...")
    // }

    return(
        <>
            {children}
            <h2>Featured Product</h2>
        </>
    )
}