import {
    FiBriefcase,
    FiUser,
    FiTrendingUp,
    FiCheckCircle
} from "react-icons/fi";
import { TbCircleLetterCFilled } from "react-icons/tb";

function SignIn() {
    const features = [
        {
            icon: FiBriefcase,
            title: "Track your applications",
            description:
                "Keep all your job applications organized",
        },
        {
            icon: FiUser,
            title: "Manage your profile",
            description:
                "Build and maintain your professional profile",
        },
        {
            icon: FiTrendingUp,
            title: "Improve your results",
            description:
                "Get insights that makes your career better",
        },
    ];

    return (
        <div className="min-h-screen flex bg-white">

            {/* Left Side */}
            <div className="w-1/2 min-h-screen bg-linear-to-br from-white via-indigo-50 to-indigo-200 px-12 py-10 hidden lg:flex flex-col">

                <div className="max-w-2xl mx-auto w-full">
                    <h1 className="text-2xl font-semibold tracking-tight text-gray-900 flex text-center items-center">
                        <TbCircleLetterCFilled size={34} color="#6366f1"/>
                        areerPilot
                    </h1>
                </div>

                <div className="flex-1 max-w-2xl mx-auto w-full flex items-center">

                    <div className="max-w-xl">

                        <span className="inline-flex items-center gap-2 mb-6 rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700">
                            <FiCheckCircle className="text-indigo-600" />
                            Your career, on autopilot
                        </span>

                        <h2 className="text-5xl font-bold tracking-tight leading-[1.1] text-gray-900">
                            Welcome back,
                        </h2>

                        <h2 className="mt-2 text-5xl font-semibold tracking-tight leading-[1.1] text-indigo-600">
                            Let's get you hired.
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Take control of your job search with tools designed
                            to help you stay organized, improve your profile,
                            and move closer to your next opportunity.
                        </p>

                        {/* Features */}
                        <div className="mt-10 space-y-6">

                            {features.map((feature) => {
                                const Icon = feature.icon;

                                return (
                                    <div
                                        key={feature.title}
                                        className="flex items-start gap-4"
                                    >
                                        <div className="shrink-0 w-11 h-11 rounded-xl bg-indigo-100 border border-indigo-100 flex items-center justify-center shadow-sm">
                                            <Icon className="w-5 h-5 text-indigo-600" />
                                        </div>

                                        <div>
                                            <h3 className="text-base font-semibold text-gray-900">
                                                {feature.title}
                                            </h3>

                                            <p className="mt-1 text-sm leading-6 text-gray-600">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}

                        </div>

                    </div>

                </div>

               
                <div className="max-w-2xl mx-auto w-full">
                    <p className="text-sm text-gray-500">
                        © 2026 CareerPilot. Build your career with confidence.
                    </p>
                </div>

            </div>

            {/* Right Side */}
            <div className="w-1/2 min-h-screen flex items-center justify-center px-12">

                <div className="w-full max-w-md">
                    
                </div>

            </div>

        </div>
    );
}

export default SignIn;