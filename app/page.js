'use client'
import * as React from 'react'
import getPhotolist from '@/lib/getPhotolist'
import Image from 'next/image'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

export default function Home() {
	const photolist = getPhotolist()
	const [open, setOpen] = React.useState(false)
	const [currentImageIndex, setCurrentImageIndex] = React.useState(0)
	const colors = ['info', 'primary', 'secondary', 'success', 'warning']

	const handleImageClick = (index) => {
		setCurrentImageIndex(index)
		setOpen(true)
	}

	return (
		<main className="container mx-auto flex flex-col min-h-screen p-6">
			<Timeline position="alternate">
				{
					photolist.map((photo, index) => (
						<TimelineItem key={index}>
							<TimelineOppositeContent>
								<p>{photo.date}</p>
							</TimelineOppositeContent>
							<TimelineSeparator>
								<TimelineDot color={colors[Math.floor(Math.random() * colors.length)]} />
								{index !== photolist.length - 1 && <TimelineConnector />}
							</TimelineSeparator>
							<TimelineContent className="flex flex-col items-center justify-center">
								<div className="my-4 py-2 cursor-pointer" onClick={() => handleImageClick(index)}>
									<Image
										src={photo.original}
										alt={photo.description}
										width={768}
										height={576}
										className="mx-auto"
									/>
								</div>
								<div className="text-lg font-bold text-center">
									<p>{photo.description}</p>
								</div>
							</TimelineContent>
						</TimelineItem>
					))
				}
			</Timeline>
			<Lightbox
				open={open}
				close={() => setOpen(false)}
				index={currentImageIndex}
				slides={photolist.map(photo => ({ src: photo.original, alt: photo.description }))}
			/>
	  </main>
	)
}
