export default function CheckoutInput({ label, id, ...props }) {
  return (
    <p className="">
      <label htmlFor={id}>{label}</label>
      <br />
      <input id={id} name={id} required {...props} className="border rounded-xl w-full mb-3" />
    </p>
  );
}
