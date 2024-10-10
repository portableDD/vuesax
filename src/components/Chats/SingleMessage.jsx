const SingleMessage = ({left, right, text, img, hasImage}) => {
  if (right) {
    return (
      <div className="flex justify-end items-end">
        <div className="flex gap-2">
          {/* message */}
          <div className="pt-2 px-3 bg-gradient-to-r from-logoColor to-logoColor/60  rounded-lg shadow-chatMessage ">
            <p className="max-w-[400px] pb-1">{text}</p>
          </div>
          {/* profile pics */}
          <div
            className="w-10 h-10 rounded-full bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        </div>
      </div>
    );
  }

  if(left){
    return(
        <div className="flex justify-start items-start">
            <div className="flex gap-2">
              {/* profile pics */}
              <div
                className={`w-10 h-10 rounded-full bg-center bg-cover bg-no-repeat ${hasImage ? 'opacity-100' : 'opacity-0'}`}
                style={{ backgroundImage: `url(${img})` }}
              ></div>
              {/* message */}
              <div className="pt-2 px-3 bg-[#2C3350] rounded-lg shadow-chatMessage">
                <p className="max-w-[400px] pb-1">{text}</p>
              </div>
            </div>
          </div>
    )
  }
};

export default SingleMessage;
