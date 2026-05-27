

export default function TableView({header, content}) {
    return (
        <table>
            <thead>
                <tr>
                    <th>{header}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{content}</td>
                </tr>
            </tbody>
        </table>
    );
};
