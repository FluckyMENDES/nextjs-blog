import { formatRelative, parseISO, format } from "date-fns";
import utilStyles from "../../styles/utils.module.css";

export default function Date({ dateString }) {
    const date = parseISO(dateString);
    return (
        <time className={utilStyles.fontSmall} datatype={dateString}>
            {format(date, "LLLL dd, yyyy")}
        </time>
    );
}
