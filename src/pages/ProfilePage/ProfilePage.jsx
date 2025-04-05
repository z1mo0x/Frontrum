import { useParams } from "react-router-dom"

export default function ProfilePage(profileId) {
    const params = useParams()
    console.log(params);
    return (
        <>
            <div>Profile Page {params.profileId}</div>
        </>
    )
}
