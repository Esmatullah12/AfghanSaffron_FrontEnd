import { UserInfo, UserOrderHistory, WishList as UserWishlist } from "../features/profile";
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