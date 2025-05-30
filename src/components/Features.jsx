import React from 'react'

function Features() {
    return (
        <div>
            {/* <div>
                <h2 className='text-blue-500'>helloo</h2>
            </div> */}

            <section class="py-12">
                <div class="container mx-auto">
                    <article class="text-center max-w-3xl mx-auto">
                        <h1 class="text-black font-bold text-4xl capitalize">
                            <span class="text-shadow-lg shadow-green-500">15+ Features</span> On The Go!
                        </h1>
                    </article>
                    <div class="flex flex-wrap justify-center mt-8 gap-6">
                        <div class="w-full md:w-5/12 lg:w-5/12">
                            <div class="bg-white shadow-lg rounded-lg p-6">
                                <figure>
                                    <span class="material-icons text-green-500 text-4xl">file_copy</span>
                                </figure>
                                <div class="mt-4">
                                    <h5 class="text-green-500 text-xl font-semibold">Applicant Form & Records System</h5>
                                    <p class="mt-2 text-gray-700">Keep track of all your applicants on all steps of their processing. With the intuitive profile created for each applicant, you can easily maintain their records about classes, VISA, tests, documents, payments, and many more in a single place.</p>
                                </div>
                            </div>
                        </div>

                        <div class="w-full md:w-5/12 lg:w-5/12">
                            <div class="bg-white shadow-lg rounded-lg p-6">
                                <figure>
                                    <span class="material-icons text-green-500 text-4xl">attach_money</span>
                                </figure>
                                <div class="mt-4">
                                    <h5 class="text-green-500 text-xl font-semibold">Commissions Management</h5>
                                    <p class="mt-2 text-gray-700">Easily manage commissions of all your applicants with the click of a button. Track commission collection times with reminders and emails.</p>
                                </div>
                            </div>
                        </div>

                        <div class="w-full md:w-5/12 lg:w-5/12">
                            <div class="bg-white shadow-lg rounded-lg p-6">
                                <figure>
                                    <span class="material-icons text-green-500 text-4xl">list_alt</span>
                                </figure>
                                <div class="mt-4">
                                    <h5 class="text-green-500 text-xl font-semibold">Commission Invoice Generation</h5>
                                    <p class="mt-2 text-gray-700">Avoid the hassle of manually creating invoices for each commission with the innovative invoice generation. You can directly send the automatically generated invoice to the receiver from within the system.</p>
                                </div>
                            </div>
                        </div>

                        <div class="w-full md:w-5/12 lg:w-5/12">
                            <div class="bg-white shadow-lg rounded-lg p-6">
                                <figure>
                                    <span class="material-icons text-green-500 text-4xl">list_alt</span>
                                </figure>
                                <div class="mt-4">
                                    <h5 class="text-green-500 text-xl font-semibold">Classes Management</h5>
                                    <p class="mt-2 text-gray-700">Do you run training, language, and test preparation classes? Now keep track of all of them and their enrolled students. You can also manage attendance of your students.</p>
                                </div>
                            </div>
                        </div>

                        <div class="w-full md:w-5/12 lg:w-5/12">
                            <div class="bg-white shadow-lg rounded-lg p-6">
                                <figure>
                                    <span class="material-icons text-green-500 text-4xl">list_alt</span>
                                </figure>
                                <div class="mt-4">
                                    <h5 class="text-green-500 text-xl font-semibold">Payments Management and History</h5>
                                    <p class="mt-2 text-gray-700">Easily manage records of the payments of each individual applicant.</p>
                                </div>
                            </div>
                        </div>

                        <div class="w-full md:w-5/12 lg:w-5/12">
                            <div class="bg-white shadow-lg rounded-lg p-6">
                                <figure>
                                    <span class="material-icons text-green-500 text-4xl">sms</span>
                                </figure>
                                <div class="mt-4">
                                    <h5 class="text-green-500 text-xl font-semibold">Send Bulk SMS with your Identity</h5>
                                    <p class="mt-2 text-gray-700">Send SMS to many applicants all at once. You have your own identity (Display name in SMS) so that the receivers recognize you instantly.</p>
                                </div>
                            </div>
                        </div>

                        <div class="w-full md:w-5/12 lg:w-5/12">
                            <div class="bg-white shadow-lg rounded-lg p-6">
                                <figure>
                                    <span class="material-icons text-green-500 text-4xl">email</span>
                                </figure>
                                <div class="mt-4">
                                    <h5 class="text-green-500 text-xl font-semibold">Send Bulk Emails</h5>
                                    <p class="mt-2 text-gray-700">Send emails to many applicants from within CMST with your designated email address.</p>
                                </div>
                            </div>
                        </div>

                        <div class="w-full md:w-5/12 lg:w-5/12">
                            <div class="bg-white shadow-lg rounded-lg p-6">
                                <figure>
                                    <span class="material-icons text-green-500 text-4xl">list_alt</span>
                                </figure>
                                <div class="mt-4">
                                    <h5 class="text-green-500 text-xl font-semibold">Courses, University/College, and Country Management</h5>
                                    <p class="mt-2 text-gray-700">Store details of all your colleges, universities, and their courses for use in the system. These details can be used in applicant's processing, mobile apps, and in Consultancy Finder.</p>
                                </div>
                            </div>
                        </div>

                        <div class="w-full md:w-5/12 lg:w-5/12">
                            <div class="bg-white shadow-lg rounded-lg p-6">
                                <figure>
                                    <span class="material-icons text-green-500 text-4xl">dashboard</span>
                                </figure>
                                <div class="mt-4">
                                    <h5 class="text-green-500 text-xl font-semibold">Organize and Categorize your Information</h5>
                                    <p class="mt-2 text-gray-700">With the intuitive Tags feature, you can group different applicants and assign them tags for bulk actions.</p>
                                </div>
                            </div>
                        </div>

                        <div class="w-full md:w-5/12 lg:w-5/12">
                            <div class="bg-white shadow-lg rounded-lg p-6">
                                <figure>
                                    <span class="material-icons text-green-500 text-4xl">timeline</span>
                                </figure>
                                <div class="mt-4">
                                    <h5 class="text-green-500 text-xl font-semibold">Enable CMST in your Branch Offices</h5>
                                    <p class="mt-2 text-gray-700">Create accounts for your branch offices directly from CMST. The branch offices will have their own space to work in, and you can monitor their activity from the main account.</p>
                                </div>
                            </div>
                        </div>

                        <div class="w-full md:w-5/12 lg:w-5/12">
                            <div class="bg-white shadow-lg rounded-lg p-6">
                                <figure>
                                    <span class="material-icons text-green-500 text-4xl">speaker_notes</span>
                                </figure>
                                <div class="mt-4">
                                    <h5 class="text-green-500 text-xl font-semibold">Tasks with To-do List</h5>
                                    <p class="mt-2 text-gray-700">Create and assign tasks for efficient productivity. You can create to-do checklists to list out specific task details and discuss them in the comment section.</p>
                                </div>
                            </div>
                        </div>

                        <div class="w-full md:w-5/12 lg:w-5/12">
                            <div class="bg-white shadow-lg rounded-lg p-6">
                                <figure>
                                    <span class="material-icons text-green-500 text-4xl">chat</span>
                                </figure>
                                <div class="mt-4">
                                    <h5 class="text-green-500 text-xl font-semibold">Real-time Chatting and Messaging</h5>
                                    <p class="mt-2 text-gray-700">Chat with each other in real-time from within CMST.</p>
                                </div>
                            </div>
                        </div>

                        <div class="w-full md:w-5/12 lg:w-5/12">
                            <div class="bg-white shadow-lg rounded-lg p-6">
                                <figure>
                                    <span class="material-icons text-green-500 text-4xl">verified_user</span>
                                </figure>
                                <div class="mt-4">
                                    <h5 class="text-green-500 text-xl font-semibold">User-based, Role-based Login</h5>
                                    <p class="mt-2 text-gray-700">Give necessary access to users by assigning them roles and permissions. Secure your data by managing who can or cannot see information in the system.</p>
                                </div>
                            </div>
                        </div>

                        <div class="w-full md:w-5/12 lg:w-5/12">
                            <div class="bg-white shadow-lg rounded-lg p-6">
                                <figure>
                                    <span class="material-icons text-green-500 text-4xl">assignment</span>
                                </figure>
                                <div class="mt-4">
                                    <h5 class="text-green-500 text-xl font-semibold">Automatic User Daily Report</h5>
                                    <p class="mt-2 text-gray-700">Receive an automated report of your users' activity in your email so you can review their overall daily work.</p>
                                </div>
                            </div>
                        </div>

                        <div class="w-full md:w-5/12 lg:w-5/12">
                            <div class="bg-white shadow-lg rounded-lg p-6">
                                <figure>
                                    <span class="material-icons text-green-500 text-4xl">receipt</span>
                                </figure>
                                <div class="mt-4">
                                    <h5 class="text-green-500 text-xl font-semibold">Online IELTS Booking</h5>
                                    <p class="mt-2 text-gray-700">Book test dates for IELTS directly from CMST.</p>
                                </div>
                            </div>
                        </div>

                        <div class="w-full md:w-5/12 lg:w-5/12">
                            <div class="bg-white shadow-lg rounded-lg p-6">
                                <figure>
                                    <span class="material-icons text-green-500 text-4xl">mobile_friendly</span>
                                </figure>
                                <div class="mt-4">
                                    <h5 class="text-green-500 text-xl font-semibold">Integration with your Customized Mobile App</h5>
                                    <p class="mt-2 text-gray-700">CMST can be fully integrated with your customized mobile app (for both Android & iOS) so that applicants can easily stay up-to-date with their processing and other details.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Features
