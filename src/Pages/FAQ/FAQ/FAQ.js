import { Accordion } from 'flowbite-react';
import React from 'react';

const FAQ = () => {
    return (
        <div className='max-w-screen-md mx-auto'>
            <h2 className='text-3xl my-10 text-center'>Frequently Asked Questions</h2>
            <Accordion>
                <Accordion.Panel>
                    <Accordion.Title>
                        Who should I take an Online Course?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Students join our online courses for a variety of reasons and come from diverse backgrounds, professions, and age groups. With online courses, you can
                            Advance your skill-set or begin a career change.
                            Take the next step in your formal education.
                            Ease the transition before entering a full-time academic program.
                            Enjoy learning a new topic.
                            Whatever the reason, our online courses are a flexible way of learning about the art world without disrupting your daily life.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        I am a high school student, can I join?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Courses are open to all students 18 years or older. If you are under 18 years old, please contact us to discuss further.
                        </p>

                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        Can I take more than one course at a time?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            If you are new to online learning, we recommend that you begin with one course. As our courses are offered frequently throughout the year, you can always come back and continue your studies with one or more topics.
                        </p>

                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        How long is my course?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            We currently offer 4-week, 6-week, and 8-week courses. Check the course dates listed online prior to registration.
                            For a 4-week or 6-week course, you can expect to spend 5-7 hours a week reviewing and completing the course material.
                            For an 8-week course, you can expect to spend 8-10 hours a week reviewing and completing the course material.
                            You will also have read-only access to your course in Canvas for 90 days after its conclusion to review the course materials at your leisure.
                        </p>

                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        Do I need specific equipment to take Online Courses?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            You should have an up-to-date web browser such as: Chrome, Safari, Firefox, or Internet Explorer. For more detailed information, please see the guides for supported browsers and basic computer specifications.
                            Our Online Courses can be accessed on a mobile or tablet device, although we strongly encourage you to have access to a desktop or laptop computer and reliable internet connection for certain course components. Former students have told us it is easiest to read discussion threads and complete written assignments on a laptop or desktop computer.
                        </p>

                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                    Do I need to buy textbooks?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                        All the reading materials you are required to access are included with your course. Instructors may provide recommended and suggested texts for further exploration.
                        </p>

                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
        </div>
    );
};

export default FAQ;