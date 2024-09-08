import swell from 'swell-js'

// @ts-expect-error key type is string
swell.init('deepesh', process.env.SWELL_PUBLIC_KEY)

export const data = async () => {

    const response = await swell.products.list({
        category: 'features',
        limit: 25,
        page: 1
    })



    const Finaldata = response.results.map((item) => {
        return {
            title: item?.name,
            description: item?.description,
            link: item.images && item.images[0].file?.url,
            path: item.attributes && item.attributes?.path?.value
        }
    })

    return Finaldata
}