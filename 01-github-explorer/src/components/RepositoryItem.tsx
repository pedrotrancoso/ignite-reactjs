interface RepositoryItemProps{
    repository: {
        name: string;
        diretory: string;
        html_url: string;    
    }
}


export function RepositoryItem(props: RepositoryItemProps) {
    return (
        <li>
            <strong>{props.repository?.name ?? 'Default'}</strong>
            <p>{props.repository?.diretory}</p>

           <a href={props.repository?.html_url}>Acessar reporitório</a>
        </li>
    );
}