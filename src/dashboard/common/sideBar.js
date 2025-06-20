function SiderBar() {
    return (
        <div className="sideBarLayout">
            <li className="active"><img src="/assets/images/dashboard/icons/home.svg" width="25" height="25" />Home</li>
            <li><img src="/assets/images/dashboard/icons/buynow.svg" width="25" height="25" />Buy Now</li>
            <li>
                <div class="dropdown">
                    <button class="dropdownLink dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                       <img src="/assets/images/dashboard/icons/transations.svg" width="25" height="25" /> Transaction
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
            </li>
            <li><img src="/assets/images/dashboard/icons/profile.svg" width="25" height="25" />Profile</li>
            <li>BlockExcoin.network</li>
        </div>
    )
}
export default SiderBar