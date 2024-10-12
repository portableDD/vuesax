

const SingleCatergoryBrands = ({title, num}) => {
  return (
    <div className="w-full flex justify-between items-center ">
    <div className="flex gap-2 items-center ">
      <input
        id="comments"
        name="comments"
        type="checkbox"
        className="h-4 w-4 rounded border-white"
      />
      <p id="comments-description" className="">
        <span >{title}</span>
      </p>
    </div>
    <div className="flex gap-3 item-center">
       <p>{num}</p>
    </div>
  </div>
  )
}

export default SingleCatergoryBrands