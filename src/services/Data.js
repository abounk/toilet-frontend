import axios from 'axios';

export async function getTimestamp() {
    const res = await axios.get("https://ecourse.cpe.ku.ac.th/exceed06/api/")
    return res.data
}

// export async function omponentDidMount() {
//     this.ajaxRequest().done((data) => {
//         if (data !== this.state.data) {
//             this.setState({ data: data, showNotif: true })
//         }
//     }
// }