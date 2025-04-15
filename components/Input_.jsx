import { useTranslations } from 'next-intl'
import React from 'react'

const Input_ = ({place , type , reg , error}) => {
	const t = useTranslations()
  return (
	<div className="input">
		<input placeholder={place} type={type} {...reg} />
		{ error?.message && <span className="error" > {t(error?.message)} </span>}
	</div>
  )
}

export default Input_