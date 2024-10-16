

const SingleRange = ({isChecked, text, id, value, handleChnage}) => {
  return (
    <div className="flex gap-2 items-center">
          <input
            id={id}
            name="comments"
            value={value}
            type="radio"
            onChange={handleChnage}
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