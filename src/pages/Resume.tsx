import { useEffect } from "react";


export default function Resume() {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, []);
    return (
        <div>
            <h3>Not anon!</h3>
        </div>
    );
}