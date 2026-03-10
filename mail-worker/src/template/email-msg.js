import emailUtils from '../utils/email-utils';

export default function emailMsgTemplate(email, tgMsgTo, tgMsgFrom, tgMsgText) {

	let template = `<b>${email.subject}</b>`

		if (tgMsgFrom === 'only-name') {
			template += `

From\u200B：${email.name}`
		}

		if (tgMsgFrom === 'show') {
			template += `

From\u200B：${email.name}  &lt;${email.sendEmail}&gt;`
		}

		if(tgMsgTo === 'show' && tgMsgFrom === 'hide') {
			template += `

To：\u200B${email.toEmail}`

		} else if(tgMsgTo === 'show') {
		template += `
To：\u200B${email.toEmail}`
	}

	const text = (emailUtils.formatText(email.text) || emailUtils.htmlToText(email.content))
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;');

	if(tgMsgText === 'show') {
		template += `

${text}`
	}

	return template;

}
