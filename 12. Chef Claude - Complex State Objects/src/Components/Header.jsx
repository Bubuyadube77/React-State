import chefClaudeLogo from "/src/images/chef-claude-icon.png"
export default function Header() {
    return (
        <header>
            <img className="website-logo" src={chefClaudeLogo} alt="chef claude logo" />
            <h1>Chef Claude</h1>
        </header>
    )
}