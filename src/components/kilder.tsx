import Diagram from "./Diagram";
import FadeIn from "@/components/FadeIn";

export default function Kilder() {
    return (
        <FadeIn>
            <div className="bg-gray-100 p-10 mt-4 rounded-[2vw] shadow-md flex flex-col md:flex-row justify-between w-full h-[45vh] md:h-[25vw]">
                <div className="flex flex-col md:h-full justify-between">
                    <div className="flex flex-col">
                        <h3 className="text-lg font-semibold mb-2">Kilder</h3>
                        <ul className="list-disc pl-5">
                            <li>
                                <a 
                                    href="https://fn.no/Statistikk/demokratiindeksen"
                                    target="_blank"
                                    className="text-sky-700"
                                >
                                    FN Demokrati-Indeks
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="https://ourworldindata.org/grapher/democracy-index-eiu" 
                                    target="_blank"
                                    className="text-sky-700"
                                >
                                    Democracy-index Map
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="https://en.wikipedia.org/wiki/Politics_of_Thailand" 
                                    target="_blank"
                                    className="text-sky-700"
                                >
                                    Info om Thailand
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="https://en.wikipedia.org/wiki/Politics_of_Japan" 
                                    target="_blank"
                                    className="text-sky-700"
                                >
                                    Info om Japan
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-4">
                        <h3 className="text-lg font-semibold mb-2">Refleksjon over Demokratiindeksen</h3>
                        <p className="text-sm">
                            Demokrati-indeksen gir en nyttig oversikt over demokratiske forhold i ulike land, men den har også sine begrensninger. 
                            Indeksen er basert på en rekke kriterier som kan være subjektive, og den kan ikke fullt ut fange opp de komplekse politiske realitetene i hvert land. 
                            Videre kan kulturelle og historiske faktorer påvirke hvordan demokrati oppfattes og praktiseres, noe som indeksen kanskje ikke tar tilstrekkelig hensyn til. 
                            Til tross for disse utfordringene, gir indeksen en verdifull ramme for å sammenligne demokratiske utviklinger globalt.
                        </p>
                    </div>
                    <div className="">Laget av Lucas 👌</div>
                </div>
                <div className="w-full h-1/2 md:h-full md:w-1/2">
                    <Diagram />
                </div>
            </div>
        </FadeIn>
    );
};