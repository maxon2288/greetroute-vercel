// const mail = require('@sendgrid/mail')
//
// export default async (req, res) => {
// 	const body = req.body
// 	console.log(body)
// 	const message = `Сообщение доставлено`
//
// 	const data = {
// 		to: 'greetroute@gmail.com',
// 		from: 'greetroute@gmail.com',
// 		subject: 'Новая заявка с сайта GreetRoute',
// 		text: message,
// 		html: message
// 	}
// 	await mail.send(data).then(() => {
// 		res.status(200).json({ status: 'Ok' })
// 	})
//
// 	res.status(200).json({ status: 'ok' })
// }

const mail = require("@sendgrid/mail")

export default async (req, res) => {
	mail.setApiKey(process.env.NEXT_PUBLIC_MAIL_SENDGRID_PASS)
	console.log(req.body)
	const body = req.body
	const message = `
	<table width='100%' cellpadding='0' cellspacing='0'>
        <tr>
            <td>
                <table style='width: 100%'>
                    <tr>
                        <td>
                            <h1>Новая заявка с сайта GreetRoute</h1>
                            <table style='max-width: 600px; width: 100%'>
                            <tr>
                                    <td style='border-bottom: 1px solid #cccccc; padding: 16px 0;'>
                                        ${req.body}
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
	`
	const data = {
		to: "greetroute@gmail.com",
		from: "greetroute@gmail.com",
		subject: "New web form message!",
		text: message,
		html: message.replace(/\r\n/g, "<br />")
	}
	await mail.send(data).then(() => {
		res.status(200).json({ status: "Ok" })
	})
}

// <tr>
//     <td style='border-bottom: 1px solid #cccccc; padding: 16px 0;'>
//         Имя
//
//     </td>
//     <td style='border-bottom: 1px solid #cccccc; padding: 16px 0;'>
//         ${body.name}
//     </td>
// </tr>
// <tr>
//     <td style='border-bottom: 1px solid #cccccc; padding: 16px 0;'>
//         Почта/телефон
//     </td>
//     <td style='border-bottom: 1px solid #cccccc; padding: 16px 0;'>
//         ${body.email}
//     </td>
// </tr>
// <tr>
//     <td style='border-bottom: 1px solid #cccccc; padding: 16px 0;'>
//         Сообщение
//     </td>
//     <td style='border-bottom: 1px solid #cccccc; padding: 16px 0;'>
//         ${body.message}
//     </td>
// </tr>

// import nodemailer from "nodemailer"
//
// const email = process.env.NEXT_PUBLIC_MAIL_USER
// const pass = process.env.NEXT_PUBLIC_MAIL_PASS
//
// const handler = async (req, res) => {
// 	const transporter = nodemailer.createTransport({
// 		services: "gmail",
// 		host: "smtp.gmail.com",
// 		port: 465,
// 		secure: true,
// 		auth: {
// 			user: email,
// 			pass: pass
// 		},
// 		tls: {
// 			rejectUnauthorized: false
// 		}
// 	})
// 	const mailOptions = {
// 		from: email,
// 		to: email,
// 		subject: "ЗАЯВКА С САЙТА GreetRoute",
// 		text: "Test",
// 		html: `
// 	<table width='100%' cellpadding='0' cellspacing='0'>
//         <tr>
//             <td>
//                 <table style='width: 100%'>
//                     <tr>
//                         <td>
//                             <h1>Новая заявка с сайта syncup.kz</h1>
//                             <table style='max-width: 600px; width: 100%'>
//                                 <tr>
//                                     <td style='border-bottom: 1px solid #cccccc; padding: 16px 0;'>
//                                         Имя
//
//                                     </td>
//                                     <td style='border-bottom: 1px solid #cccccc; padding: 16px 0;'>
//                                         ${req.body.name}
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td style='border-bottom: 1px solid #cccccc; padding: 16px 0;'>
//                                         Почта/телефон
//                                     </td>
//                                     <td style='border-bottom: 1px solid #cccccc; padding: 16px 0;'>
//                                         ${req.body.email}
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td style='border-bottom: 1px solid #cccccc; padding: 16px 0;'>
//                                         Сообщение
//                                     </td>
//                                     <td style='border-bottom: 1px solid #cccccc; padding: 16px 0;'>
//                                         ${req.body.message}
//                                     </td>
//                                 </tr>
//                             </table>
//                         </td>
//                     </tr>
//                 </table>
//             </td>
//         </tr>
//     </table>
// 	`
// 	}
// 	// await transporter.sendMail(mailOptions)
// 	await new Promise((resolve, reject) => {
// 		// send mail
// 		transporter.sendMail(mailOptions, (err, info) => {
// 			if (err) {
// 				console.error(err)
// 				reject(err)
// 			} else {
// 				console.log(info)
// 				resolve(info)
// 			}
// 		})
// 	})
// 	res.status(200).json({ name: "good" })
// }
//
// export default handler
