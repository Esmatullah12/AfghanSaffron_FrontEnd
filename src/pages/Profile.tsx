import UserInfo from "../components/Profile/UserInfo"
import UserOrderHistory from "../components/Profile/UserOrderHistory"
import Layout from "../layout/Layout"

const Profile = () => {
    return (
        <div>
            <Layout>
                <UserInfo />
                <UserOrderHistory />
            </Layout>
        </div>
    )
}

export default Profile