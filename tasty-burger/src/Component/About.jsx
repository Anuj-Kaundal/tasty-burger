import React from 'react'

function About() {
    return (
        <div>
            <div className='lg:flex lg:flex-row mt-20 justify-center gap-20 lg:p-20 md:flex-col sm:flex-col reverse bg-amber-500 p-20'>
                <div className='lg:w-1/2 w-full text-center lg:text-left space-y-5'>
                    <p>
                        At Tasty Burger, we believe burgers are more than just fast food — they’re a feeling.
                        Tasty Burger is a passion-driven burger1 delivery brand built with one simple yet powerful idea:
                    </p>

                    <span className="block font-medium text-base sm:text-lg md:text-xl mt-2">
                        “Every burger should be fresh, flavorful, and satisfying.”
                    </span>

                    <p>
                        We combine premium-quality ingredients, home-style preparation, and fast delivery to bring delicious burgers straight to your doorstep.
                    </p>

                    <h1 className='font-semibold text-xl sm:text-2xl md:text-3xl mt-5'>
                        What We Do
                    </h1>

                    <h2 className='font-semibold text-lg sm:text-xl md:text-2xl mt-4'>
                        🍔 Fresh Burger Experience
                    </h2>
                    <p className='lg:pl-10 lg:pr-30'>
                        Every time you order from Tasty Burger, you enjoy freshly prepared burgers made with soft buns, juicy patties, and signature sauces — cooked to perfection for maximum taste.
                    </p>

                    <h2 className='font-semibold text-lg sm:text-xl md:text-2xl mt-4'>
                        👨‍🍳 Skilled Kitchen Team
                    </h2>
                    <p className='lg:pl-10 lg:pr-30'>
                        Our burgers are prepared by trained cooks who focus on taste, hygiene, and consistency, ensuring every bite meets our quality standards.
                    </p>

                    <h2 className='font-semibold text-lg sm:text-xl md:text-2xl mt-4'>
                        🚀 Quick & Reliable Delivery
                    </h2>
                    <p className='lg:pl-10 lg:pr-30'>
                        We ensure fast, safe, and reliable delivery so your burgers arrive hot, fresh, and on time, every single order.
                    </p>

                    <h2 className='font-semibold text-lg sm:text-xl md:text-2xl mt-4'>
                        💰 Value Meals & Combos
                    </h2>
                    <p className='lg:pl-10 lg:pr-30'>
                        We offer affordable burger combos and deals, making it easy for students, families, and working professionals to enjoy great food without overspending.
                    </p>
                </div>

                <div>
                    <img src="about.png" alt="" height={200} width={200} className='lg:w-100 pt-10 w-full rounded-xl' />
                </div>
            </div>
        </div>
    )
}

export default About
