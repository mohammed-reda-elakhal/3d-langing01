interface IPricingCard {
    price:number;
    title:string;
    benefits:string[];
    id:number;
    oneliner:string;
}

const pricingCards:IPricingCard[] = [
    {
        price: 190,
        title: "Black Dev Standar",
        benefits: [
            "Brinding Website",
            "Business Website",
            "Portfolio Website",
            "Blog/Content Website",
        ],
        id: 1,
        oneliner: "Elevate Your Business with a Standard Website Package"
    },
    {
        price: 999,
        title: "Black Dev Pro",
        benefits: [
            "Custom Web Application",
            "Management Website",
            "Learning Management System",
            "Advanced Store Digital",
        ],
        id: 2,
        oneliner: " Unleashing the Power of the Professional Website Package"
    },
]

export default pricingCards