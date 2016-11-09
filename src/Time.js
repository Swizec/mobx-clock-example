
import React from 'react';
import moment from 'moment';

const now = moment();

const Duration = ({ d }) => {
    let h = d.hours(),
        m = d.minutes(),
        s = d.seconds();

    [h, m, s] = [h, m, s].map(n => n < 10 ? `0${n}` : n);

    return <code>{h}:{m}:{s}</code>;
};

const TimeUntil = ({ until }) => {
    const duration = moment.duration(until.diff(now));

    return (
        <div>
            {until.calendar()} comes in <Duration d={duration} />
        </div>
    );
};

const TimeSince = ({ since }) => {
    const duration = moment.duration(now.diff(since));

    return (
        <div>
            {since.calendar()} was <Duration d={duration} /> ago
        </div>
    );
};

const CurrentTime = () => (
    <div>
        Current Time: <Duration d={now} />
    </div>
);

const Time = ({ until, since }) => {
    if (until) {
        return <TimeUntil until={until} />;
    }else if (since) {
        return <TimeSince since={since} />;
    }else{
        return <CurrentTime />;
    }
};

export default Time;
