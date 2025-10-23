interface LoadingProps {
    text: string;
}

function LoadingOverlay({ text }: LoadingProps) {
    return (
        <>
            <div className="w-screen h-screen fixed inset-0 bg-black/80 backdrop-blur-xs z-80" />
            <div className="absolute text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg z-90">
                <h2 className="text-xl font-bold mb-4">Loading...</h2>
                <p>{text}</p>
            </div>


        </>

    )
}

export default LoadingOverlay;