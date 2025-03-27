import { notFound } from "next/navigation";

type Props = {}

export default async function ProductReview  ({params}:{params :Promise<{productId: string;reviewId : string}>}) {

    const {productId,reviewId} = await params
    if(parseInt(reviewId) > 1000){
        notFound()
    }
  return (
   <div>
     <h1>Review {reviewId} for product of {productId}</h1>
   </div>
  )
}