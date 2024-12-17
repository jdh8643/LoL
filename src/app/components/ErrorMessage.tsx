interface ErrorMessageProps {
    message: string;
  }
  
  export default function ErrorMessage({ message }: ErrorMessageProps) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-red-500 text-center">
          <p className="text-xl font-bold">오류 발생</p>
          <p>{message}</p>
        </div>
      </div>
    );
  }