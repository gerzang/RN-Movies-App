export abstract class HttpAdapter {
    abstract get<T>(url: string, optinons?: Record<string, unknown>): Promise<T>;
}