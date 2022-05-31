import Link from 'next/link';
import { Plus } from 'react-feather';

const ViewMore = ({ props }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full max-w-sm overflow-hidden transition duration-500 ease-in-out border rounded cursor-pointer border-gray-lightest hover:shadow-lg shadow-md">
      <Link href={props.href}>
        <a target={props.target}>
          <span>
            <Plus />
          </span>
          <span>{props.content}</span>
        </a>
      </Link>
    </div>
  );
};

export default ViewMore;
