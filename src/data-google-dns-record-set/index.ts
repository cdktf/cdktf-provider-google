// https://www.terraform.io/docs/providers/google/d/dns_record_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleDnsRecordSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Name of the zone.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/dns_record_set#managed_zone DataGoogleDnsRecordSet#managed_zone}
  */
  readonly managedZone: string;
  /**
  * The DNS name for the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/dns_record_set#name DataGoogleDnsRecordSet#name}
  */
  readonly name: string;
  /**
  * The ID of the project for the Google Cloud.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/dns_record_set#project DataGoogleDnsRecordSet#project}
  */
  readonly project?: string;
  /**
  * The identifier of a supported record type. See the list of Supported DNS record types.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/dns_record_set#type DataGoogleDnsRecordSet#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/d/dns_record_set google_dns_record_set}
*/
export class DataGoogleDnsRecordSet extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dns_record_set";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/d/dns_record_set google_dns_record_set} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleDnsRecordSetConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleDnsRecordSetConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dns_record_set',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.60.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._managedZone = config.managedZone;
    this._name = config.name;
    this._project = config.project;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // managed_zone - computed: false, optional: false, required: true
  private _managedZone?: string; 
  public get managedZone() {
    return this.getStringAttribute('managed_zone');
  }
  public set managedZone(value: string) {
    this._managedZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedZoneInput() {
    return this._managedZone;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // project - computed: false, optional: true, required: false
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
    return this._project;
  }

  // rrdatas - computed: true, optional: false, required: false
  public get rrdatas() {
    return this.getListAttribute('rrdatas');
  }

  // ttl - computed: true, optional: false, required: false
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      managed_zone: cdktf.stringToTerraform(this._managedZone),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      type: cdktf.stringToTerraform(this._type),
    };
  }
}
