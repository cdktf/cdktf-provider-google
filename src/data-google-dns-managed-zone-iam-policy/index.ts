// https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/data-sources/dns_managed_zone_iam_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleDnsManagedZoneIamPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/data-sources/dns_managed_zone_iam_policy#id DataGoogleDnsManagedZoneIamPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/data-sources/dns_managed_zone_iam_policy#managed_zone DataGoogleDnsManagedZoneIamPolicy#managed_zone}
  */
  readonly managedZone: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/data-sources/dns_managed_zone_iam_policy#project DataGoogleDnsManagedZoneIamPolicy#project}
  */
  readonly project?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/data-sources/dns_managed_zone_iam_policy google_dns_managed_zone_iam_policy}
*/
export class DataGoogleDnsManagedZoneIamPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dns_managed_zone_iam_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/data-sources/dns_managed_zone_iam_policy google_dns_managed_zone_iam_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleDnsManagedZoneIamPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleDnsManagedZoneIamPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dns_managed_zone_iam_policy',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.72.1',
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
    this._id = config.id;
    this._managedZone = config.managedZone;
    this._project = config.project;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // policy_data - computed: true, optional: false, required: false
  public get policyData() {
    return this.getStringAttribute('policy_data');
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
    return this._project;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      managed_zone: cdktf.stringToTerraform(this._managedZone),
      project: cdktf.stringToTerraform(this._project),
    };
  }
}
