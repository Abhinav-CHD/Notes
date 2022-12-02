import {MdDeleteForever} from 'react-icons/md';
// import {MdEditNote} from 'react-icons/md';

const Note = ({ id, text, date, handleDeleteNote }) => {
	return (
		<div className='note'>
			<span>{text}</span>
			<div className='note-footer'>
				<small>{date}</small>
				<div>
					{/* Implement edit note functionality */}
					{/* <MdEditNote 
					onClick={() => console.log("Hello World")}
					size='1.3em'
					className='edit-icon'

					/> */}
					<MdDeleteForever
						onClick={() => handleDeleteNote(id)}
						className='delete-icon'
						size='1.2em'
					/>
				</div>
			</div>
		</div>
	);
};

export default Note;
