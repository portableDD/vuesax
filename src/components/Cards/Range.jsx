

const SingleRange = ({isChecked, text}) => {
  return (
    <div className="flex gap-2 items-center">
          <input
            id="comments"
            name="comments"
            type="radio"
            checked={isChecked}
            className="h-4 w-4 rounded "
          />
          <p id="comments-description">
            <span>{text}</span>                      
          </p>
        </div>
  )
}

export default SingleRange