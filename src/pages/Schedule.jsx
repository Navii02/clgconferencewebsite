import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { Helmet } from 'react-helmet';

const Schedule = () => {
  const schedule = [
    {
      day: 'August 21, 2025',
      events: [
        { time: '9:00 AM - 10:00 AM', title: 'Registration & Breakfast' },
        { time: '10:00 AM - 11:00 AM', title: 'Inaugural Session & Keynote' },
        { time: '11:00 AM - 11:30 AM', title: 'Tea Break' },
        { time: '11:30 AM - 1:00 PM', title: 'Technical Paper Presentations – Session 1' },
        { time: '1:00 PM - 2:00 PM', title: 'Lunch' },
        { time: '2:00 PM - 4:00 PM', title: 'Technical Paper Presentations – Session 2' },
        { time: '4:00 PM - 4:30 PM', title: 'Coffee Break' },
        { time: '4:30 PM - 6:00 PM', title: 'Panel Discussion' },
      ],
    },
    {
      day: 'August 22, 2025',
      events: [
        { time: '9:00 AM - 10:30 AM', title: 'Workshops & Tutorials' },
        { time: '10:30 AM - 11:00 AM', title: 'Tea Break' },
        { time: '11:00 AM - 1:00 PM', title: 'Technical Paper Presentations – Session 3' },
        { time: '1:00 PM - 2:00 PM', title: 'Lunch' },
        { time: '2:00 PM - 3:30 PM', title: 'Special Lectures' },
        { time: '3:30 PM - 4:00 PM', title: 'Closing Ceremony & Awards' },
      ],
    },
  ];

  return (
    <div className="bg-white py-12 sm:py-16 md:py-20">
      <Helmet>
        <title>Schedule – NCICIS 2025</title>
        <meta name="description" content="View the detailed schedule of events, sessions, and workshops at NCICIS 2025." />
      </Helmet>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8 sm:mb-12">Conference Schedule</h1>

        {schedule.map(({ day, events }) => (
          <section key={day} className="mb-8 sm:mb-12">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-600 mb-4 sm:mb-6 flex items-center justify-center gap-2">
              <Calendar className="h-5 sm:h-6 w-5 sm:w-6" />
              {day}
            </h2>
            <ul className="space-y-3 sm:space-y-4">
              {events.map(({ time, title }, idx) => (
                <li key={idx} className="border border-gray-200 rounded-lg p-3 sm:p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center shadow-sm hover:shadow-md transition">
                  <time className="text-gray-600 font-mono text-xs sm:text-sm flex items-center gap-1 mb-2 sm:mb-0">
                    <Clock className="h-4 sm:h-5 w-4 sm:w-5 text-blue-500" />
                    {time}
                  </time>
                  <span className="text-gray-800 font-medium text-sm sm:text-base">{title}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Schedule;