import "./Editor.css";

export const Editor = ({ placeHolder, onChange }) => {
    return (
        <textarea
            className="editor"
            placeholder={placeHolder}
            onChange={onChange}
        ></textarea>
    );
};