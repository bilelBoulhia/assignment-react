import React from "react"
import { PageHeaderProps } from "../types/page"



const PageHeader: React.FC<PageHeaderProps> = ({ title, description }) => (
  <div className="page-header">
    <h1 className="page-header-title">{title}</h1>
    <p className="page-header-desc">
      {description}
     </p>
  </div>
)

export default PageHeader 