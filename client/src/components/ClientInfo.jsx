import { FaEnvelopeOpen, FaPhoneAlt, FaAddressCard } from "react-icons/fa";

export const ClientInfo = ({ client }) => {
  return (
    <>
      <h5 className="mt-5">Client Information</h5>
      <ul className="list-group">
        <li className="list-group-item">
          <FaAddressCard className="icon" /> {client.name}
        </li>
        <li className="list-group-item">
          <FaEnvelopeOpen className="icon" /> {client.email}
        </li>
        <li className="list-group-item">
          <FaPhoneAlt className="icon" /> {client.phone}
        </li>
      </ul>
    </>
  );
};
