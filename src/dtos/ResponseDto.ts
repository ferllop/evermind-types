import {ErrorDto} from './ErrorDto'

export type ResponseDto<T> = {
    error: ErrorDto
    data: Record<string, T>
}