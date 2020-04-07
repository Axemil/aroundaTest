import React, {Fragment} from 'react';
import style from './style.scss';
import Title from '@simple/Title';
import Works from '@simple/Works';



const WorkSection = ({worksData, title}) => {    
    return (
        <Fragment>
                <div className={style.titleWrapper}>
                    <Title text={title}/>
                </div>
            <Works worksData={worksData}/>
        </Fragment>
    )
};
export default WorkSection;