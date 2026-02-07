interface EditableFieldProps {
  label: string;
  name: string;
  value: string;
  isEditing: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const EditableField: React.FC<EditableFieldProps> = ({
  label,
  name,
  value,
  isEditing,
  onChange,
}) => (
  <div>
    <p className="text-gray-500 mb-1">{label}</p>

    {isEditing ? (
      <input
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
      />
    ) : (
      <p className="font-medium text-gray-800">{value}</p>
    )}
  </div>
);

export default EditableField;