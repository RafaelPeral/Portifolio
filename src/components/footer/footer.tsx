export default function Footer() {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className="w-full bg-secondary flex items-center justify-center gap-60 mt-10 py-3">
            <div className="flex flex-col gap-2">
                <p>Created By</p>
                <p>Rafael Peral</p>
            </div>
            <div className="flex flex-col gap-2">
                <p>&copy;{year} - Copyright</p>
                <p>All Rights reserved</p>
            </div>
        </div>
    )
}