import sanityClient from "@sanity/client"

export default sanityClient({
    // find projectid in studio/sanity.json
    projectId: "5m3s5ybn",
    dataset: "production"
})