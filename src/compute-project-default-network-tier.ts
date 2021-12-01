// https://www.terraform.io/docs/providers/google/r/compute_project_default_network_tier.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeProjectDefaultNetworkTierConfig extends cdktf.TerraformMetaArguments {
  /**
  * The default network tier to be configured for the project. This field can take the following values: PREMIUM or STANDARD.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_project_default_network_tier.html#network_tier ComputeProjectDefaultNetworkTier#network_tier}
  */
  readonly networkTier: string;
  /**
  * The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_project_default_network_tier.html#project ComputeProjectDefaultNetworkTier#project}
  */
  readonly project?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_project_default_network_tier.html#timeouts ComputeProjectDefaultNetworkTier#timeouts}
  */
  readonly timeouts?: ComputeProjectDefaultNetworkTierTimeouts;
}
export interface ComputeProjectDefaultNetworkTierTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_project_default_network_tier.html#create ComputeProjectDefaultNetworkTier#create}
  */
  readonly create?: string;
}

export function computeProjectDefaultNetworkTierTimeoutsToTerraform(struct?: ComputeProjectDefaultNetworkTierTimeoutsOutputReference | ComputeProjectDefaultNetworkTierTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}

export class ComputeProjectDefaultNetworkTierTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ComputeProjectDefaultNetworkTierTimeouts | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._create) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeProjectDefaultNetworkTierTimeouts | undefined) {
    if (value === undefined) {
      this._create = undefined;
    }
    else {
      this._create = value.create;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_project_default_network_tier.html google_compute_project_default_network_tier}
*/
export class ComputeProjectDefaultNetworkTier extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_compute_project_default_network_tier";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/compute_project_default_network_tier.html google_compute_project_default_network_tier} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeProjectDefaultNetworkTierConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeProjectDefaultNetworkTierConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_project_default_network_tier',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._networkTier = config.networkTier;
    this._project = config.project;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // network_tier - computed: false, optional: false, required: true
  private _networkTier?: string; 
  public get networkTier() {
    return this.getStringAttribute('network_tier');
  }
  public set networkTier(value: string) {
    this._networkTier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTierInput() {
    return this._networkTier;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputeProjectDefaultNetworkTierTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeProjectDefaultNetworkTierTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      network_tier: cdktf.stringToTerraform(this._networkTier),
      project: cdktf.stringToTerraform(this._project),
      timeouts: computeProjectDefaultNetworkTierTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
