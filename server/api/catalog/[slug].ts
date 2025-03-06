import {generateFakeProduct} from "~/utils/generate";
import {faker} from "@faker-js/faker";

export default defineEventHandler((event) => {
    const limit:number = Number(event.context.params?.slug) || 0
    const response = []
    for (let i=0; i<limit; i++) {
        response.push(generateFakeProduct())
    }
    return response
})