export default function ({ route, redirect }) {
    if (!parseInt(route.params.id)) {
        return redirect('/');
    }
}