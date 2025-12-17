import UserInfo from "../components/Profile/UserInfo"
import UserOrderHistory from "../components/Profile/UserOrderHistory"
import UserWishlist from "../components/Profile/WishList"
import Layout from "../layout/Layout"

const Profile = () => {
    return (
        <div>
            <Layout>
                <UserInfo />
                <UserOrderHistory />
                <UserWishlist />
            </Layout>
        </div>
    )
}

export default Profile