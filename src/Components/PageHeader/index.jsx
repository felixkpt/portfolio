import './PageHeader.scss'
const PageHeader = (props) => {
    const {pageTitle, icon} = props
  return (
    <div id="wrapper" className="wrapper">
        <h2>{pageTitle}</h2>
        <span>{icon}</span>
    </div>
  )
}

export default PageHeader