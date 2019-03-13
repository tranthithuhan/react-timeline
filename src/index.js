import React, {Component} from 'react'
import classNames from 'classnames';
import "./style/index.css";

export default class extends Component {
    render() {
        let {events, horizontal, className, eventClassName, mode} = this.props;
        const timelineClassName = classNames({
            "owp-hv-timeline": true,
            "alternate": mode === "alternate",
            "horizontal": !!horizontal,
            [className]: !!className,
        });


        return (
            <div className={timelineClassName}>
                {
                    events.map((event, eventIndex) => {
                        const iconCls = classNames({
                            "icon": true,
                            [event.iconClassName]: !!event.iconClassName,
                        });

                        const eventCls = classNames({
                            "timeline-item": true,
                            [eventClassName]: !!eventClassName,
                            "reverse": mode === "alternate" && (eventIndex % 2)
                        });

                        return (
                            <div className={eventCls}>
                                <div className="timeline-date">
                                    {event.date}
                                </div>
                                <div className="timeline-badge">
                                    <div className={iconCls}>{event.icon}</div>
                                </div>
                                <div className="timeline-label-wrapper">
                                    {
                                        event.label &&
                                        <div className="timeline-label">
                                            {event.label}
                                        </div>
                                    }
                                    {
                                        event.sublabel &&
                                        <div className="timeline-sub-label">
                                            {event.sublabel}
                                        </div>
                                    }
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}
