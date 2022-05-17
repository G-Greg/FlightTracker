export interface Response {
    pagination: {
        limit: number,
        offset: number,
        count: number,
        total: number
    },
    data: [{
        flight_date: string,
        flight_status: string,
        departure: {
            airport: string,
            timezone: string,
            iata: string,
            icao: string,
            terminal: number,
            gate: number,
            delay: null,
            scheduled: string,
            estimated: string,
            actual: null,
            estimated_runway: null,
            actual_runway: null
        },
        arrival: {
            airport: string,
            timezone: string,
            iata: string,
            icao: string,
            terminal: number,
            gate: null,
            baggage: number,
            delay: null,
            scheduled: string,
            estimated: string,
            actual: null,
            estimated_runway: null,
            actual_runway: null
        },
        airline: {
            name: string,
            iata: string,
            icao: string
        },
        flight: {
            number: number,
            iata: string,
            icao: string,
            codeshared: {
                airline_name: string,
                airline_iata: string,
                airline_icao: string,
                flight_number: number,
                flight_iata: string,
                flight_icao: string
            }
        },
        aircraft: null,
        live: null
    }]
}