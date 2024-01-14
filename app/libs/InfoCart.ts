import { AlarmClockOff , ArrowDownNarrowWide , ArrowUpNarrowWide , LucideIcon } from "lucide-react";

interface IInfoCard {
    title:string;
    icon: LucideIcon;
    bodyText:string;
    id:number;
}

const infoCards: IInfoCard[] = [
    {
        title: "Increased Sales",
        bodyText: " Develop your project and increase profits by turning all your virtual ideas into reality, which saves time, effort and money.",
        icon: ArrowUpNarrowWide,
        id: 1
    },
    {
        title: "No Time Wasted",
        bodyText: "Black Dev automates personalized content creation, freeing up sales reps' time for revenue-focused activities and increased productivity.",
        icon: AlarmClockOff,
        id: 2
    },
    {
        title: "Feutured World",
        bodyText: " Low engagement and renewal tools Pioneer in AI and cutting-edge technology tools reduce customer churn by 30%.",
        icon: ArrowDownNarrowWide,
        id: 3
    },
]

export default infoCards