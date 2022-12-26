import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Discord from '../public/logo-discord.svg';

const copyDiscordTag = () => {
  const tag = "The One#6087";
  navigator.clipboard.writeText(tag);
  //alert("Copied the text: " + tag);
  toast("Copied the text: " + tag, {
    
  });
}

const DiscordButton = () => {

  return (
    <div className='flex flex-row justify-center items-center'>
      <button onClick={() => copyDiscordTag()}><Discord className="text-3xl pl-1 pr-1" height={30} width={30} fill={'white'} /></button>
      <ToastContainer/>
    </div>
  );
}

export default DiscordButton;