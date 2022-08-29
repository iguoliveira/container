import { Links } from "./Links"

export const Footer = () => {
    return (
        <div className="bg-gray-900 flex justify-between py-4 px-4">
            <div className="text-white">
                <div className="w-40">
                    Made By Igor Oliveira @2022
                </div>
            </div>
            <div className="flex flex-col text-white space-y-4">
                <Links href="https://github.com/iguoliveira/opm-wiki" name="Github"/>
            </div>
        </div>
    )
}