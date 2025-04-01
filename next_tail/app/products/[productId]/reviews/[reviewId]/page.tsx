import { notFound, redirect } from "next/navigation";

function getRandomInt(count: number){
  return Math.floor(Math.random() * count)
}

export default async function ProductReview({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;
  if (parseInt(reviewId) > 1000) {
    // notFound()
    redirect("/");
  }

  const random = getRandomInt(2);

  // if(random === 1){
  //   throw new Error("New Error Loading...")
  // }
  return (
    <div>
      <h1>
        Review {reviewId} for product of {productId}
      </h1>
    </div>
  );
}
