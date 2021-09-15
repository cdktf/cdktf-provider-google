// https://www.terraform.io/docs/providers/google/r/healthcare_dataset.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HealthcareDatasetConfig extends cdktf.TerraformMetaArguments {
  /**
  * The location for the Dataset.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_dataset.html#location HealthcareDataset#location}
  */
  readonly location: string;
  /**
  * The resource name for the Dataset.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_dataset.html#name HealthcareDataset#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_dataset.html#project HealthcareDataset#project}
  */
  readonly project?: string;
  /**
  * The default timezone used by this dataset. Must be a either a valid IANA time zone name such as
"America/New_York" or empty, which defaults to UTC. This is used for parsing times in resources
(e.g., HL7 messages) where no explicit timezone is specified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_dataset.html#time_zone HealthcareDataset#time_zone}
  */
  readonly timeZone?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_dataset.html#timeouts HealthcareDataset#timeouts}
  */
  readonly timeouts?: HealthcareDatasetTimeouts;
}
export interface HealthcareDatasetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_dataset.html#create HealthcareDataset#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_dataset.html#delete HealthcareDataset#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_dataset.html#update HealthcareDataset#update}
  */
  readonly update?: string;
}

function healthcareDatasetTimeoutsToTerraform(struct?: HealthcareDatasetTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/healthcare_dataset.html google_healthcare_dataset}
*/
export class HealthcareDataset extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_healthcare_dataset";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/healthcare_dataset.html google_healthcare_dataset} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HealthcareDatasetConfig
  */
  public constructor(scope: Construct, id: string, config: HealthcareDatasetConfig) {
    super(scope, id, {
      terraformResourceType: 'google_healthcare_dataset',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._timeZone = config.timeZone;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // time_zone - computed: true, optional: true, required: false
  private _timeZone?: string;
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: HealthcareDatasetTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: HealthcareDatasetTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      time_zone: cdktf.stringToTerraform(this._timeZone),
      timeouts: healthcareDatasetTimeoutsToTerraform(this._timeouts),
    };
  }
}
