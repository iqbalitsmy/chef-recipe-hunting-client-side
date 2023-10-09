import React from 'react';
import ConsultingSection from '../ConsultingSection/ConsultingSection';
import Newsletter from '../Newsletter/Newsletter';
import FooterNav from '../FooterNav/FooterNav';
import Navigation from '../Navigation/Navigation';

const Blogs = () => {
    return (
        <div className='bg-[#201f1d]'>
            <header>
                <Navigation></Navigation>
            </header>
            <main>
                <section className='container mx-auto bg-[#f2ece0]'>
                    <div className='text-lg p-8'>
                        <div className='mb-8'>
                            <h2 className='text-2xl font-bold text-blue-600 mb-4'>What is differences between uncontrolled and controlled components?</h2>
                            <table className="table-auto">
                                <thead>
                                    <th>Uncontrolled Components</th>
                                    <th>Controlled Components</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            Stateful; the component's state manages the form element's value.
                                        </td>
                                        <td>
                                            Stateless; the form element value is managed by the DOM.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            React manages the form element's state through setState (class components) or useState (functional components).
                                        </td>
                                        <td>
                                            React does not manage the form element's state; it's accessed directly from the DOM.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Precise control over the form element's value and behavior.
                                        </td>
                                        <td>
                                            Limited control; mainly relies on the DOM's built-in behavior.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='mb-8'>
                            <h2>How to validate React props using PropTypes?</h2>
                            <p></p>
                        </div>
                        <div className='mb-8'>
                            <h2 className='text-2xl font-bold text-blue-600 mb-4'>Tell us the difference between nodejs and express js.</h2>
                            <table>
                                <thead>
                                    <th>Node js</th>
                                    <th>Express js</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>JavaScript runtime environment for server-side code execution</td>
                                        <td>Minimal and flexible web application framework for Node.js</td>
                                    </tr>
                                    <tr>
                                        <td>Event-Driven, Non-blocking I/O</td>
                                        <td>Not a focus of Express.js but leverages Node.js's capabilities</td>
                                    </tr>
                                    <tr>
                                        <td>Supports handling HTTP requests but does not provide a structured routing system</td>
                                        <td>Provides built-in methods (get(), post(), etc.) for handling HTTP requests with structured routing</td>
                                    </tr>
                                    <tr>
                                        <td>General-purpose server-side applications, including web servers, desktop applications, CLI tools, etc.</td>
                                        <td>Building web applications, RESTful APIs, and other HTTP-based services</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div>
                            <h2 className='text-2xl font-bold text-blue-600 mb-4'>What is a custom hook, and why will you create a custom hook?</h2>
                            <ol className='list-decimal'>
                                <li className='mb-2'> Custom hooks promote a separation of concerns by extracting logic related to a specific task (e.g., data fetching, form handling, local storage) into a standalone function. This keeps your components cleaner and focused on rendering and user interactions.</li>
                                <li className='mb-2'> Custom hooks allow you to encapsulate and reuse logic that is used in multiple components. Instead of duplicating the same code in multiple places, you can create a custom hook and use it wherever needed.</li>
                                <li className='mb-2'>Custom hooks can be tested independently of the components that use them. This makes it easier to write unit tests for your logic, improving the overall testability of your application.</li>
                                <li className='mb-2'>Custom hooks can be shared across different projects or within a team, promoting code sharing and consistency.</li>
                                <li className=''>You can use multiple custom hooks together to build complex behavior in your components. This promotes composability and makes it easier to manage complex functionality.</li>
                            </ol>
                        </div>
                    </div>
                </section>
                <section className='container mx-auto bg-[#f2ece0] p-2' id='services'>
                    <ConsultingSection></ConsultingSection>
                </section>
            </main>
            <footer>
                <section className='container mx-auto'>
                    <Newsletter></Newsletter>
                </section>
                <section className='container mx-auto'>
                    <FooterNav></FooterNav>
                </section>
            </footer>
        </div>
    );
};

export default Blogs;