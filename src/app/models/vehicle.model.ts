
export class vehicle{
    
    private id : string;
    private numberplate : string;
    private type : string;
    private total_places : number;

	constructor($id: string, $numberplate: string, $type: string, $total_places: number) {
		this.id = $id;
		this.numberplate = $numberplate;
		this.type = $type;
		this.total_places = $total_places;
	}

    

    /**
     * Getter $id
     * @return {string}
     */
	public get $id(): string {
		return this.id;
	}

    /**
     * Getter $numberplate
     * @return {string}
     */
	public get $numberplate(): string {
		return this.numberplate;
	}

    /**
     * Getter $type
     * @return {string}
     */
	public get $type(): string {
		return this.type;
	}

    /**
     * Getter $total_places
     * @return {number}
     */
	public get $total_places(): number {
		return this.total_places;
	}

    /**
     * Setter $id
     * @param {string} value
     */
	public set $id(value: string) {
		this.id = value;
	}

    /**
     * Setter $numberplate
     * @param {string} value
     */
	public set $numberplate(value: string) {
		this.numberplate = value;
	}

    /**
     * Setter $type
     * @param {string} value
     */
	public set $type(value: string) {
		this.type = value;
	}

    /**
     * Setter $total_places
     * @param {number} value
     */
	public set $total_places(value: number) {
		this.total_places = value;
	}


    
}