module.exports = (username, appName, link) => {
	console.log("templates: ", link)
    return `
    <html>
				<table class='m_5365646497215267716m_-8246483030534680746wrapper' width='100%' cellpadding='0' cellspacing='0' style='font-family:Avenir,Helvetica,sans-serif; box-sizing:border-box; background-color:#f5f8fa; margin:0; padding:0; width:100%''>
				<tbody>
				<tr>
				<td align='center' style='font-family:Avenir,Helvetica,sans-serif; box-sizing:border-box'>
				<table class='m_5365646497215267716m_-8246483030534680746content' width='100%' cellpadding='0' cellspacing='0' style='font-family:Avenir,Helvetica,sans-serif; box-sizing:border-box; margin:0; padding:0; width:100%'>
				<tbody>
				<tr>
				<td class='m_5365646497215267716m_-8246483030534680746header' style='font-family:Avenir,Helvetica,sans-serif; box-sizing:border-box;padding:25px 0; text-align:center'>
				<a href='' style='font-family:Avenir,Helvetica,sans-serif; box-sizing:border-box; color:#bbbfc3; font-size:19px; font-weight:bold; text-decoration:none'>${appName} App</a>
				</td>
				</tr>
				<tr>
				<td class='m_5365646497215267716m_-8246483030534680746body' width='100%' cellpadding='0' cellspacing='0' style='font-family:Avenir,Helvetica,sans-serif; box-sizing:border-box; background-color:#ffffff; border-bottom:1px solid #edeff2; border-top:1px solid #edeff2; margin:0; padding:0; width:100%'>
				<table class='m_5365646497215267716m_-8246483030534680746inner-body' align='center' width='570' cellpadding='0' cellspacing='0' style='font-family:Avenir,Helvetica,sans-serif; box-sizing:border-box; background-color:#ffffff; margin:0 auto; padding:0; width:570px'>
				<tbody>
				<tr>
				<td class='m_5365646497215267716m_-8246483030534680746content-cell' style='font-family:Avenir,Helvetica,sans-serif; box-sizing:border-box; padding:35px'>
				<h1 style='font-family:Avenir,Helvetica,sans-serif; box-sizing:border-box; color:#2f3133; font-size:19px; font-weight:bold; margin-top:0; text-align:left'>Hello, ${username}</h1>
				<p style='font-family:Avenir,Helvetica,sans-serif; box-sizing:border-box; color:#74787e; font-size:16px; line-height:1.5em; margin-top:0; text-align:left'>Welcome to ${appName} ! Please click on this <a href='${link}' target='_blank' >link</a>  to verify your account</p>
				<p style='font-family:Avenir,Helvetica,sans-serif; box-sizing:border-box; color:#74787e; font-size:16px; line-height:1.5em; margin-top:0; text-align:left'>Thank you for using ${appName}!</p>
				<p style='font-family:Avenir,Helvetica,sans-serif; box-sizing:border-box; color:#74787e; font-size:16px; line-height:1.5em; margin-top:0; text-align:left'><b>Note: </b> Your link will expire in 15 minutes.</p>

				<p style='font-family:Avenir,Helvetica,sans-serif; box-sizing:border-box; color:#74787e; font-size:16px; line-height:1.5em; margin-top:0; text-align:left'>Regards,<br>${appName}</p>
				</td>
				</tr>
				</tbody>
				</table>
				</td>
				</tr>
				<tr>
				<td style='font-family:Avenir,Helvetica,sans-serif; box-sizing:border-box'>
				<table class='m_5365646497215267716m_-8246483030534680746footer' align='center' width='570' cellpadding='0' cellspacing='0' style='font-family:Avenir,Helvetica,sans-serif; box-sizing:border-box; margin:0 auto; padding:0; text-align:center; width:570px'>
				<tbody>
				<tr>
				<td class='m_5365646497215267716m_-8246483030534680746content-cell' align='center' style='font-family:Avenir,Helvetica,sans-serif; box-sizing:border-box; padding:35px'>
				<p style='font-family:Avenir,Helvetica,sans-serif; box-sizing:border-box; line-height:1.5em; margin-top:0; color:#aeaeae; font-size:12px; text-align:center'>©${ new Date().getFullYear()} ${appName}. All rights reserved.</p>
				</td>
				</tr>
				</tbody>
				</table>
				</td>
				</tr>
				</tbody>
				</table>
				</td>
				</tr>
				</tbody>
				</table>
				</html>
    `
}