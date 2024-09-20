import { Col } from 'react-bootstrap';
import projectleapyear from './asset/img/projectleapyear.png'
export const ProjectCards = ({title, description, imgUrl}) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt='imgUrl' className='imgUrl' />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}