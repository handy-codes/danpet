import "./gallery.css"

const GalleryPage = () => {
    return ( 
    <div className="gallery-cover"> 
      <div className="levels">
        <h2>MEETING YOU AT ALL LEVELS OF <span>LEARNING</span></h2>
        <h4>Nursery | Primary | College | Extra-Mural Classes | The Bethel University</h4>
      </div>
      <div className="one">
        <div className="two unit"><img src="https://images.pexels.com/photos/1181516/pexels-photo-1181516.jpeg? 
            auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
        </div>
        <div className="three unit"><img src="https://cdn.ahzassociates.co.uk/wp-content/uploads/2023/08/02180701/nigerian-student.webp" alt=""/></div>
        <div className="four unit"><img src="https://solacebase.com/wp-content/uploads/2020/02/JAMB-Exam-1.jpg" alt=""/></div>
        <div className="five unit"><img src="https://ryculture.org/wp-content/uploads/2021/10/Image-YVN.jpg" alt="somethin"/></div>
        <div className="seven unit"><img src="https://edusko-dev-bucket.s3.eu-north-1.amazonaws.com/1635113410523IvJAQJ3LyGO3p8y0R-YPhuOYF8fEM1HE.png" alt=""/></div>
      </div>
    </div>
);
}
 
export default GalleryPage;

