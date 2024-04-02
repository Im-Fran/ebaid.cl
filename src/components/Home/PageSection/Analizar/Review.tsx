export type ReviewProps = {
  image: string
  title: string
  description: string
  author: string
  authorImage: string
  authorTitle: string
  link?: string
}

const Review = (props: ReviewProps) => <div className="flex flex-col items-center justify-center mt-3 w-full">
  test
</div>

export default Review;