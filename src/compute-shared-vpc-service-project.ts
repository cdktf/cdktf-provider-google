// https://www.terraform.io/docs/providers/google/r/compute_shared_vpc_service_project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeSharedVpcServiceProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of a host project to associate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_shared_vpc_service_project#host_project ComputeSharedVpcServiceProject#host_project}
  */
  readonly hostProject: string;
  /**
  * The ID of the project that will serve as a Shared VPC service project.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_shared_vpc_service_project#service_project ComputeSharedVpcServiceProject#service_project}
  */
  readonly serviceProject: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_shared_vpc_service_project#timeouts ComputeSharedVpcServiceProject#timeouts}
  */
  readonly timeouts?: ComputeSharedVpcServiceProjectTimeouts;
}
export interface ComputeSharedVpcServiceProjectTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_shared_vpc_service_project#create ComputeSharedVpcServiceProject#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_shared_vpc_service_project#delete ComputeSharedVpcServiceProject#delete}
  */
  readonly delete?: string;
}

export function computeSharedVpcServiceProjectTimeoutsToTerraform(struct?: ComputeSharedVpcServiceProjectTimeoutsOutputReference | ComputeSharedVpcServiceProjectTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class ComputeSharedVpcServiceProjectTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ComputeSharedVpcServiceProjectTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeSharedVpcServiceProjectTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
      this._delete = value.delete;
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

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_shared_vpc_service_project google_compute_shared_vpc_service_project}
*/
export class ComputeSharedVpcServiceProject extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_compute_shared_vpc_service_project";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/compute_shared_vpc_service_project google_compute_shared_vpc_service_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeSharedVpcServiceProjectConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeSharedVpcServiceProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_shared_vpc_service_project',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._hostProject = config.hostProject;
    this._serviceProject = config.serviceProject;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // host_project - computed: false, optional: false, required: true
  private _hostProject?: string; 
  public get hostProject() {
    return this.getStringAttribute('host_project');
  }
  public set hostProject(value: string) {
    this._hostProject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostProjectInput() {
    return this._hostProject;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // service_project - computed: false, optional: false, required: true
  private _serviceProject?: string; 
  public get serviceProject() {
    return this.getStringAttribute('service_project');
  }
  public set serviceProject(value: string) {
    this._serviceProject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceProjectInput() {
    return this._serviceProject;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputeSharedVpcServiceProjectTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeSharedVpcServiceProjectTimeouts) {
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
      host_project: cdktf.stringToTerraform(this._hostProject),
      service_project: cdktf.stringToTerraform(this._serviceProject),
      timeouts: computeSharedVpcServiceProjectTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
