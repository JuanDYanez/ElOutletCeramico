import { AllCeramics, DataCeramic } from "../types";
import ceramicsData from "../utils/ceramicsData.json";

const ceramics: AllCeramics[] = ceramicsData as AllCeramics[];

export const getCeramics = (): AllCeramics[] => ceramics;

export const getCeramicById = (id: number): AllCeramics | undefined => {
    const ceramicId = ceramics.find(c => c.id === id);
    return ceramicId;
}

export const addCeramic = (dataCeramic: DataCeramic): AllCeramics => {
    const newCeramic = {
        id: Math.max(...ceramics.map(c => c.id)) + 1,
        ...dataCeramic,
    };
    ceramics.push(newCeramic);
    return newCeramic;
};