import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { RiRocketLine} from 'react-icons/ri'
import { Experience } from '../Data';

function Timeline() {
    return ( 
        <section className='w-10/12 py-4'>
            <VerticalTimeline>
                {
                    Experience && Experience.map(item=>(
                        <VerticalTimelineElement
                            key={item.id}
                            className="font-bold text-gray-400 xl:text-gray-100"
                            date={item.date}
                            iconStyle={{ background: '#374151', color: 'rgb(229,231,235)' }}
                            icon={item.iconSrc}
                        >
                            <h3 className="vertical-timeline-element-title text-gray-700 zh">{item.title}</h3>
                            <h4 className="vertical-timeline-element-subtitle text-sm text-gray-600 zh">{item.location}</h4>
                            <p className='text-gray-600 zh'>
                                {item.description}
                            </p>
                        </VerticalTimelineElement>
                    ))
                }
                <VerticalTimelineElement
                    iconStyle={{ background: '#374151', color: 'rgb(229,231,235)' }}
                    icon={<RiRocketLine/>}
                />
            </VerticalTimeline>
        </section>
     );
}

export default Timeline;