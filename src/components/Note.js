import { MdDeleteForever,MdEditNote} from 'react-icons/md';

const Note = ({ id, text, date, handleDeleteNote }) => {
	return (
		<div className='note'>
			<span>{text}</span>
			<div className='note-footer'>
				<small>{date}</small>
				<div>
					<MdEditNote 
					size='1.3em'
					/>
					<MdDeleteForever
						onClick={() => handleDeleteNote(id)}
						className='delete-icon'
						size='1.3em'
					/>
				</div>
			</div>
		</div>
	);
};

export default Note;
