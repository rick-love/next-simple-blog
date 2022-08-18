import headerStyles from '../styles/Header.module.css'
const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Cloud Dev</span> Updates
      </h1>
      <p className={headerStyles.description}>
        Keep up to date with my learnings
      </p>
    </div>
  )
}

export default Header
