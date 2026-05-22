import { Header } from "./Positivus/sections/landing-page/Header";
import { Logotypes } from "./Positivus/sections/landing-page/Logotypes";
import { NavigationBar } from "./Positivus/sections/landing-page/NavigationBar";
import { Services } from "./Positivus/sections/services/Services";

export default function Page() {
    return (
        <div className="flex flex-col gap-y-17.5 pt-15 px-25">
            {/* Landing Page */}
            <NavigationBar />
            <Header />
            <Logotypes />

            {/* Services block */}
            <Services />
        </div>
    );
}
