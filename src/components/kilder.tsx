import Diagram from "./diagram";

export default function Kilder() {
    return (
      <div className="bg-gray-100 p-10 mt-4 rounded-[2vw] shadow-md flex justify-between w-full h-[25vw]">
        <div className="flex flex-col h-full justify-between">
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
            <div className="">Laget av Lucas 👌</div>
        </div>
        <div className="w-1/2">
            <Diagram />
        </div>
      </div>
    );
};