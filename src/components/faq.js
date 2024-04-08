import Link from 'next/link';
import Image from 'next/image';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Dropdown from '../../public/assets/imgs/dropdown.svg';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const CustomExpandIcon = () => {
    return (
      <Image src={Dropdown} alt="dropdown" width={24} height={24} />
      // Adjust width and height based on your icon dimensions
    );
  };

const Faq = () => {
  return (
    <div className="px-4 md:px-64 py-4 md:py-[75px] flex flex-col justify-around gap-2 md:gap-16 ">
          
                               <div className='flex flex-col items-center justify-center px-2 md:px-16 gap-2 md:gap-4 '>
      <h1 className="text-center font-poppins text-[20px] md:text-[40px]  font-semibold text-black ">
     FAQ                 </h1>
     </div>
     <div className='px-2 md:px-32'>
      <Accordion>
        <AccordionSummary
          expandIcon={<CustomExpandIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className=" text-[12px] md:text-[20px]">Is it really free?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="text-gray-400 text-[12px] md:text-[20px]">
          Yes, CapHacker is 100% free
                    </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<CustomExpandIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className=" text-[12px] md:text-[20px]">Is it truly unlimited?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="text-gray-400 text-[12px] md:text-[20px]">
          Yes, currently there are no limits 
                    </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<CustomExpandIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className=" text-[12px] md:text-[20px]">Is myy data safe?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="text-gray-400 text-[12px] md:text-[20px]">
          Yes your data is 100% safe.
                    </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<CustomExpandIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className=" text-[12px] md:text-[20px]">Do you provide api?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="text-gray-400 text-[12px] md:text-[20px]">
          You can contact us here, It won’t be free                    </Typography>
        </AccordionDetails>
      </Accordion>

                    </div>

    </div>
  );
};

export default Faq;