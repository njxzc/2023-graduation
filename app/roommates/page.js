import Image from 'next/image'
import getRoomMates from '@/lib/getRoomMates'

export default function roommates() {
	const roommates = getRoomMates()

	return (
		<main className="flex flex-wrap justify-center p-4 bg-gray-100">
			{roommates.map((roommate, index) => (
				<div key={index} className="w-full sm:w-1/2 md:w-1/3 p-4">
					<div className="flex flex-col items-center bg-white shadow-lg p-4 rounded-lg">
						<Image 
							src={'https://q.qlogo.cn/g?b=qq&nk='+roommate.qq+'&s=100'} 
							alt={roommate.name} 
							width={96}
							height={96}
							className="object-cover rounded-full mb-4"
						/>
						<div className="flex items-center justify-center mb-2">
							{roommate.gender === '男' ? (
								<div className="inline-flex mr-2 items-center">
									<svg t="1683982360557" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2447" width="40" height="200">
										<path d="M872.335 421.516V151.71H602.528L702.949 252.13 601.4 353.68c-46.47-32.81-103.174-52.091-164.385-52.091-157.595 0-285.351 127.756-285.351 285.35S279.421 872.29 437.014 872.29s285.352-127.755 285.352-285.35c0-57.78-17.19-111.537-46.711-156.47l102.818-102.814 93.862 93.861zM437.015 782.18c-107.827 0-195.24-87.413-195.24-195.24s87.413-195.24 195.24-195.24 195.24 87.413 195.24 195.24-87.413 195.24-195.24 195.24z" fill="#1296DB" p-id="2448"></path>
									</svg>
								</div>
							) : (
								<div className="inline-flex mr-2 items-center">
									<svg t="1683982428035" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5336" width="40" height="200">
										<path d="M512 105.5c-220.6 0-399.5 178.9-399.5 399.5S291.4 904.5 512 904.5 911.5 725.6 911.5 505 732.6 105.5 512 105.5z m200 621.9H561.5v75.1h-99.1v-75.1H312V627.3h150.4v-6.2c-33.6-8.6-65.5-25.9-91.8-52.2-78-78-78-204.5 0-282.5s204.5-78 282.5 0 78 204.5 0 282.5c-26.3 26.3-58.1 43.7-91.7 52.2v6.2h150.4v100.1h0.2z" fill="#FF4D94" p-id="5337"></path><path d="M582.4 356.1c-39.1-39.1-102.5-39.1-141.6 0-39.1 39.1-39.1 102.4 0 141.5 39.1 39.1 102.5 39.1 141.6 0 39.1-39 39.1-102.4 0-141.5z" fill="#FF4D94" p-id="5338"></path>
									</svg>
								</div>
							)}
							<p className="text-lg font-bold inline-flex items-center">{roommate.id}{' '}{roommate.name}</p>
						</div>
					</div>
				</div>
			))}
		</main>
	)
}
