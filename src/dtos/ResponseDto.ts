import {ErrorDto} from './ErrorDto.js'

export type ResponseDto<T> = {
    error: ErrorDto
    data: Record<string, T>
}