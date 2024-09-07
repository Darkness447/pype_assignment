export default function Page({ params }: { params: { slug: string } }) {
    return <div className="text-5xl flex flex-col h-screen text-center">Dynamic page : {params.slug}</div>
}